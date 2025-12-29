import { db } from '$lib/server/db/index';
import * as schema from '$lib/server/db/schema';

export type Project = typeof schema.projects.$inferSelect;

export const getAllProjects = async (): Promise<Project[]> => {
	return db.query.projects.findMany();
};
