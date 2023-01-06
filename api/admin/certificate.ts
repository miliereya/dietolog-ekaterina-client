import { a_instance } from '..'
import { ICreateCertificate } from '../../models/ICertificate'

export const CertificateService = {
	async create(props: ICreateCertificate) {
		try {
			await a_instance.post('/certificates/create', {
				...props,
			})
		} catch (e: any) {
			alert('Ошибка')
		}
	},
}
