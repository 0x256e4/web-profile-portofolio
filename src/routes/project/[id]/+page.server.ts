import type { PageServerLoad } from './$types';
import { getAllProjects } from '$lib/server/routes/projects';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const projects = await getAllProjects();
	const project = projects.find((project) => project?.id.toString() === params.id);

	if (project) {
		return { project };
	}

	throw error(404, {
		message: 'Project tidak ditemukan! ^^'
	});
};
