import { FC } from 'react'
import { ClosePopupButton } from '../ClosePopupButton'
import { FullSizePopup } from '../FullSizePopup'
import s from './Alert.module.css'

interface AlertProps {
	closePopupHandler: any
	text: string
}

export const Alert: FC<AlertProps> = ({ closePopupHandler, text }) => {
	return (
		<FullSizePopup setPopupToggle={closePopupHandler}>
			<div className={s.popup}>
				<ClosePopupButton closeHandler={closePopupHandler} />
				<p className={s.response}>{text}</p>
			</div>
		</FullSizePopup>
	)
}
