import { FC } from 'react'
import s from './Button.module.css'

interface ButtonProps {
    text: string
    onClick: any
    disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ text, onClick, disabled = false, }) => {
    return (
        <button
            className={s.btn}
            onClick={onClick}
            disabled={disabled}
        >
            <p className={s.text}>{text}</p>
            <img
                className={s.arrow}
                src="/icons/dark_arrow.png"
                alt="arrow"
            />
        </button>
    )
}