# DATABASE SPECIFICATION & SECURITY (DBSpec.md)

Dokumen ini berisi skema database PostgreSQL lengkap siap dieksekusi di Supabase SQL Editor.

## 1. EKSTENSI & FUNGSI DASAR
```sql
create extension if not exists "uuid-ossp";
```

## 2. TABEL PROFILES (Profil Pengguna - Extends auth.users)
```sql
create table public.profiles (
    id uuid references auth.users on delete cascade primary key,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    full_name text,
    email text,
    subscription_type text default 'free'::text check (subscription_type in ('free', 'pro', 'pro_plus')),
    language text default 'id'::text check (language in ('id', 'en')),
    voice_language text default 'app'::text check (voice_language in ('app', 'id', 'en')),
    currency text default 'IDR'::text,
    theme text default 'cream'::text check (theme in ('cream', 'dark', 'light')),
    hide_nominal_by_default boolean default false,
    use_haptic_feedback boolean default true,
    use_sound_effects boolean default true,
    daily_chat_quota_limit integer default 10,
    daily_chat_quota_used integer default 0,
    daily_file_quota_limit integer default 5,
    daily_file_quota_used integer default 0
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile" on public.profiles
    for select using (auth.uid() = id);

create policy "Users can update their own profile" on public.profiles
    for update using (auth.uid() = id);

-- Trigger Auto-create Profile
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## 3. TABEL ACCOUNTS (Dompet / Rekening / Investasi / Rencana)
```sql
create table public.accounts (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    name text not null,
    account_type text not null check (account_type in ('cash', 'bank', 'wallet', 'investment', 'savings_goal', 'physical_asset')),
    initial_balance numeric(15, 2) default 0.00 not null,
    current_balance numeric(15, 2) default 0.00 not null,
    is_default boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.accounts enable row level security;

create policy "Users can manage their own accounts" on public.accounts
    for all using (auth.uid() = user_id);
```

## 4. TABEL CATEGORIES (Kategori Utama Income/Expense)
```sql
create table public.categories (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade, -- NULL = Kategori Sistem/Bawaan
    name text not null,
    type text not null check (type in ('income', 'expense')),
    icon text,
    color text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.categories enable row level security;

create policy "Users can view system and their own categories" on public.categories
    for select using (user_id is null or auth.uid() = user_id);

create policy "Users can manage their own custom categories" on public.categories
    for all using (auth.uid() = user_id);
```

## 5. TABEL SUBCATEGORIES
```sql
create table public.subcategories (
    id uuid default uuid_generate_v4() primary key,
    category_id uuid references public.categories(id) on delete cascade not null,
    name text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.subcategories enable row level security;

create policy "Users can view subcategories" on public.subcategories
    for select using (
        exists (
            select 1 from public.categories c 
            where c.id = category_id and (c.user_id is null or c.user_id = auth.uid())
        )
    );

create policy "Users can manage their subcategories" on public.subcategories
    for all using (
        exists (
            select 1 from public.categories c 
            where c.id = category_id and c.user_id = auth.uid()
        )
    );
```

## 6. TABEL TRANSACTIONS (Jurnal Inti)
```sql
create table public.transactions (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    account_id uuid references public.accounts(id) on delete restrict not null,
    category_id uuid references public.categories(id) on delete restrict not null,
    subcategory_id uuid references public.subcategories(id) on delete set null,
    name text not null,
    amount numeric(15, 2) not null, -- Positif untuk Income, Negatif untuk Expense
    transaction_type text not null check (transaction_type in ('income', 'expense', 'transfer')),
    transaction_date timestamp with time zone default timezone('utc'::text, now()) not null,
    note text,
    media_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.transactions enable row level security;

create policy "Users can manage their own transactions" on public.transactions
    for all using (auth.uid() = user_id);
```

## 7. TABEL RECURRING_TRANSACTIONS (Transaksi Rutin)
```sql
create table public.recurring_transactions (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    account_id uuid references public.accounts(id) on delete restrict not null,
    category_id uuid references public.categories(id) on delete restrict not null,
    subcategory_id uuid references public.subcategories(id) on delete set null,
    name text not null,
    amount numeric(15, 2) not null,
    transaction_type text not null check (transaction_type in ('income', 'expense')),
    frequency text not null check (frequency in ('daily', 'weekly', 'monthly', 'yearly')),
    execution_day integer not null, -- Hari eksekusi (1-31 untuk bulanan, 1-7 untuk mingguan)
    is_paused boolean default false not null,
    last_posted_at timestamp with time zone,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.recurring_transactions enable row level security;

create policy "Users can manage their own recurring transactions" on public.recurring_transactions
    for all using (auth.uid() = user_id);
```

## 8. TABEL SAVINGS_GOALS (Target Tabungan)
```sql
create table public.savings_goals (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    account_id uuid references public.accounts(id) on delete restrict not null,
    name text not null,
    target_amount numeric(15, 2) not null,
    current_amount numeric(15, 2) default 0.00 not null,
    target_date date,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.savings_goals enable row level security;

create policy "Users can manage their own savings goals" on public.savings_goals
    for all using (auth.uid() = user_id);
```

## 9. TABEL MONTHLY_BUDGETS (Anggaran Bulanan)
```sql
create table public.monthly_budgets (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    category_id uuid references public.categories(id) on delete cascade not null,
    limit_amount numeric(15, 2) not null,
    month date not null, -- Disimpan sebagai tanggal hari pertama bulan (contoh: '2026-09-01')
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique (user_id, category_id, month)
);

alter table public.monthly_budgets enable row level security;

create policy "Users can manage their own budgets" on public.monthly_budgets
    for all using (auth.uid() = user_id);
```

## 10. INDEXING UNTUK PERFORMA OPTIMAL
```sql
create index idx_transactions_user_date on public.transactions(user_id, transaction_date desc);
create index idx_transactions_account on public.transactions(account_id);
create index idx_categories_user on public.categories(user_id);
create index idx_budgets_user_month on public.monthly_budgets(user_id, month);
create index idx_goals_user on public.savings_goals(user_id);
create index idx_recurring_user on public.recurring_transactions(user_id);
```

## 11. TRIGGER OTOMATISASI SALDO (KRITIS)
```sql
create or replace function public.update_account_balance()
returns trigger as $$
begin
    if (tg_op = 'INSERT') then
        update public.accounts
        set current_balance = current_balance + new.amount,
            updated_at = timezone('utc'::text, now())
        where id = new.account_id;
    elsif (tg_op = 'DELETE') then
        update public.accounts
        set current_balance = current_balance - old.amount,
            updated_at = timezone('utc'::text, now())
        where id = old.account_id;
    elsif (tg_op = 'UPDATE') then
        update public.accounts
        set current_balance = current_balance - old.amount + new.amount,
            updated_at = timezone('utc'::text, now())
        where id = new.account_id;
    end if;
    return null;
end;
$$ language plpgsql security definer;

create trigger on_transaction_changed
  after insert or update or delete on public.transactions
  for each row execute procedure public.update_account_balance();
```
