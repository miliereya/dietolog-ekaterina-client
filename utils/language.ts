import { GlobalContext } from '../context/mainContext'
import { ILanguagedString } from '../models/GlobalModels'

export const currentLanguage = (field: ILanguagedString): string => {
	const mark = GlobalContext().language.mark
	switch (mark) {
		case 'ru':
			return field.ru
		case 'en':
			return field.en
		default:
			return field.ua
	}
}
