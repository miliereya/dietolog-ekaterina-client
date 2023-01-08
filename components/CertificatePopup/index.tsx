/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import s from './CertificatePopup.module.css'

interface CertificatePopup {
    link: string
}

export const CertificatePopup: FC<CertificatePopup> = ({link}) => {
	return <img src={link} alt="" className={s.img}/>
}
