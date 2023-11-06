import { pgTable, boolean, serial, timestamp, varchar, integer } from "drizzle-orm/pg-core";

export const userTable = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	email: varchar('email', { length: 256 }).notNull().unique(),
	passwordHash: varchar('password_hash', { length: 256 }).notNull(),
	sessionToken: varchar('session_token', { length: 256 }).notNull(),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
})

export const taskTable = pgTable('tasks', {
	id: serial('id').primaryKey().notNull(),
	userId: integer('user_id').references(() => userTable.id).notNull(),
	title: varchar('title', { length: 256 }).notNull(),
	completed: boolean('completed').default(false),
	createdAt: timestamp('created_at').defaultNow()
})
