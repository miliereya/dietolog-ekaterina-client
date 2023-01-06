import { FC, ReactNode } from 'react'
import s from './FullSizePopup.module.css'

interface FullSizePopupProps {
    children: ReactNode
    setPopupToggle: any
    padding?: string
}

export const FullSizePopup: FC<FullSizePopupProps> = ({ children, setPopupToggle, padding='50px' }) => {

    return (
        <div className={s.section}>
            <div className={s.wrapper} onClick={setPopupToggle}></div>
            <div className={s.content} style={{
                padding: padding
            }}>
                {children}
            </div>
        </div>
    )
}