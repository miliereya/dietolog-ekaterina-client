import { instance } from ".."
import { IOrderProgramProps } from "../../models/IProgram"
import { IRecordCreate } from "../../models/IRecords"
import { IReview, IReviewCreate } from "../../models/IReviews"

export const MainService = {
	async createRecord(props: IRecordCreate) {
		try {
			await instance.post<string>('records/create', {
				...props,
			})
		} catch (e) {
			throw e
		}
	},

	async fetchReviews() {
		try {
			const res = await instance.get<IReview[]>('reviews')
			return res.data
		} catch (e) {
			throw e
		}
	},

	async createReview(props: IReviewCreate) {
		try {
			await instance.post('reviews/create', {
				...props,
			})
		} catch (e) {
			throw e
		}
	},

	async orderProgram(props: IOrderProgramProps) {
		try {
			await instance.post('programs/order', {
				...props,
			})
		} catch (e) {
			throw e
		}
	},

	async getOneProgram(_id: string) {
		try {
			const res = await instance.get(`/programs/one?_id=${_id}`)
			if (!res.data) throw ''
			return res.data
		} catch (e: any) {
			throw e
		}
	},
	async fetchPrograms() {
		try {
			const res = await instance.get(`/programs`)
			return res.data
		} catch (e: any) {
			throw e
		}
	},
	async fetchCertificates() {
		try {
			const res = await instance.get(`/certificates`)
			return res.data
		} catch (e: any) {
			throw e
		}
	},
}