import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'transactions',
      columns: [
        { name: 'user_id', type: 'string' },
        { name: 'account_id', type: 'string' },
        { name: 'category_id', type: 'string' },
        { name: 'subcategory_id', type: 'string', isOptional: true },
        { name: 'name', type: 'string' },
        { name: 'amount', type: 'number' },
        { name: 'transaction_type', type: 'string' },
        { name: 'transaction_date', type: 'number' }, // timestamp
        { name: 'note', type: 'string', isOptional: true },
        { name: 'media_url', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    // other tables to follow...
  ]
})
