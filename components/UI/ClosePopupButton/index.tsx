/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import s from './ClosePopupButton.module.css'

interface ClosePopupButtonProps {
    closeHandler: any
    fill?: string
}

export const ClosePopupButton: FC<ClosePopupButtonProps> = ({ closeHandler, fill='var(--color-primary)' }) => {
    return (
        <button
            className={s.btn}
            style={{backgroundColor: fill}}
            onClick={closeHandler}
        >
            <img
                className={s.img}
                src="/icons/x.png"
                alt="x"
            />
        </button>
    )
}