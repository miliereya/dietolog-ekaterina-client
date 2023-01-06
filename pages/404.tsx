import Link from 'next/link'
import { useContext } from 'react'
import { MainContext } from '../context/mainContext'
import s from '../styles/_404.module.css'

const ErrorPage = () => {
    const { language } = useContext(MainContext)

    const { heading, text_top, text_mid, text_bot, back_to_main } = language._404

    return (
        <div className={s.section}>
            <div className="container">
                <img
                    className={s.background}
                    src="/404_background.png"
                    alt="background"
                />
                <div className={s.wrapper}>
                    <div className={s.col_1}>
                        <div className={s.elipse}></div>
                        <p className={s.heading}>{heading}</p>
                        <p className={s.text}>{text_top}<br /><br />{text_mid} <br /><br /> {text_bot} </p>
                        <Link
                            className={s.link}
                            href='/'
                        >
                            {back_to_main}
                        </Link>
                    </div>
                    <div className={s.col_2}>
                        <img
                            className={s.img}
                            src="/404.png"
                            alt="404-error"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage