export interface IService {
	title: string
	col_1_price: string | number
	col_2_price: string | number
}

export interface IPackage {
	title: string
	description: string
	col_1_heading: string
	col_2_heading: string
	col_1_post_heading?: string
	col_2_post_heading?: string
	services: IService[]
}
