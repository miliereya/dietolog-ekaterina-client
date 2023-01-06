import { a_instance } from '..'
import { IProgram } from '../../models/IProgram'

export const programService = {
	async create(props: IProgram) {
		try {
			await a_instance.post('/programs/create', {
				...props,
			})
		} catch (e: any) {
			alert('Не удалось создать программу')
		}
	},
	async delete(_id: string) {
		try {
			await a_instance.post('/programs/delete', {
				_id
			})
		} catch (e: any) {
			alert('Не удалось удалить программу')
		}
	},
}
