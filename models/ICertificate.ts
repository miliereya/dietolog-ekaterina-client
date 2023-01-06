import { ILanguagedString } from "./GlobalModels"

export interface ICertificate {
	_id: string
	title: ILanguagedString
	link: string
	prev_link: string
}

export interface ICreateCertificate {
	title: ILanguagedString
	link: string
	prev_link: string
}