import { db } from '$lib/server/db/index';
import * as schema from '$lib/server/db/schema';
import { asc, eq } from 'drizzle-orm';

export type Project = typeof schema.projects.$inferSelect;

export const getAllProjects = async (): Promise<Project[]> => {
	return await db.query.projects.findMany({
		orderBy: (projects) => [asc(projects.id)]
	});
};

export const getProjectsById = async (id: number): Promise<Project | undefined> => {
	return db.query.projects.findFirst({
		where: (projects) => eq(projects.id, id)
	});
};
