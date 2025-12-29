import { pgTable, integer, text, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const projects = pgTable('projects', {
	id: integer('id').primaryKey().generatedByDefaultAsIdentity(),
	judul: text('judul').notNull(),
	deskripsi: text('deskripsi'),
	link_repo: text('link_repo'),
	tech_stack: text('tech_stack').notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;

export type Projects = typeof projects.$inferSelect;
