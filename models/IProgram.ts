import { ILanguagedString } from "./GlobalModels"

export interface IOption {
	answer: ILanguagedString
	answer_short: ILanguagedString
}

export interface IRadio {
	title: ILanguagedString
	title_short: ILanguagedString
	options: IOption[]
}

export interface IProgram {
	_id?: string
	title: ILanguagedString
	price: number
	link: string
	link_small: string
	description: ILanguagedString
	description_short: ILanguagedString
	included: ILanguagedString[]
	radios: IRadio[]
}

export interface IParams {
	title: string 
	answer: string | null
}

export interface IOrderProgramProps {
    name: string
    phone: string
    email: string
	params: IParams[]
}