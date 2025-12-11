import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const subscribers = pgTable('Subscriber', {
    id: serial('id').primaryKey(),
    email: text('email').notNull().unique(),
    name: text('name'),
    message: text('message'),
    createdAt: timestamp('createdAt').defaultNow(),
});

export const contacts = pgTable('Contact', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    subject: text('subject'),
    message: text('message').notNull(),
    createdAt: timestamp('createdAt').defaultNow(),
});
