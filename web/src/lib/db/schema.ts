import { RxJsonSchema } from 'rxdb';

export const transactionSchemaLiteral = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string', maxLength: 100 },
    user_id: { type: 'string' },
    account_id: { type: 'string' },
    category_id: { type: 'string' },
    subcategory_id: { type: 'string' },
    name: { type: 'string' },
    amount: { type: 'number' },
    transaction_type: { type: 'string' }, // 'income' | 'expense' | 'transfer'
    transaction_date: { type: 'string', format: 'date-time' },
    note: { type: 'string' },
    media_url: { type: 'string' },
    created_at: { type: 'string', format: 'date-time' },
    updated_at: { type: 'string', format: 'date-time' },
    // for offline sync tracking
    _deleted: { type: 'boolean' }
  },
  required: ['id', 'user_id', 'account_id', 'category_id', 'name', 'amount', 'transaction_type', 'transaction_date'],
} as const;
const schemaTyped = transactionSchemaLiteral;
export type transactionDocType = typeof schemaTyped.properties;

export const accountSchemaLiteral = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string', maxLength: 100 },
    user_id: { type: 'string' },
    name: { type: 'string' },
    type: { type: 'string' }, // 'cash' | 'bank' | 'emoney'
    balance: { type: 'number' },
    created_at: { type: 'string', format: 'date-time' },
    updated_at: { type: 'string', format: 'date-time' },
    _deleted: { type: 'boolean' }
  },
  required: ['id', 'user_id', 'name', 'type', 'balance']
} as const;

export const categorySchemaLiteral = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string', maxLength: 100 },
    user_id: { type: 'string' },
    name: { type: 'string' },
    type: { type: 'string' }, // 'income' | 'expense'
    icon: { type: 'string' },
    color: { type: 'string' },
    created_at: { type: 'string', format: 'date-time' },
    updated_at: { type: 'string', format: 'date-time' },
    _deleted: { type: 'boolean' }
  },
  required: ['id', 'user_id', 'name', 'type']
} as const;
