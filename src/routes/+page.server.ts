import type { PageServerLoad, Actions } from "./$types";
export const load: PageServerLoad = (event) => {
	if (event.cookies) { }
	return {}
}
export const actions: Actions = {
	createTask: async (event) => {
		const formData = await event.request.formData()
		const data = Object.fromEntries(formData)
		console.log({ data })

	}
}
