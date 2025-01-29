import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
});

export const buttonCounter = sqliteTable('button_counter', {
  id: integer('id').primaryKey(),
  count: integer('count').notNull().default(0),
  lastUpdated: text('last_updated').default('CURRENT_TIMESTAMP'),
});

export const chats = sqliteTable('chats', {
  id: text('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  title: text('title').notNull().default('New Chat'),
  messages: text('messages').notNull(), // JSON string of messages
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').default('CURRENT_TIMESTAMP'),
});
