import { getProjectsById } from '$lib/server/routes/projects';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const projectId = parseInt(params.id);

	if (isNaN(projectId)) {
		throw error(404, {
			message: `Parameter ${projectId} wajib nomor id (integer)! ^^`
		});
	}

	const project = await getProjectsById(projectId);

	if (project) {
		return { project };
	}

	throw error(404, {
		message: 'Project tidak ditemukan! ^^'
	});
};
