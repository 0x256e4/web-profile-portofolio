import type { PageServerLoad } from './$types';
import { getAllProjects } from '$lib/server/routes/projects';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const projects = await getAllProjects();

	if (projects) {
		return { projects };
	}

	throw error(405, {
		message: 'Data project gk bisa diambil hiks ^^'
	});
};
