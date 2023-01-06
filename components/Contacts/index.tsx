import { useContext } from 'react'
import { MainContext } from '../../context/mainContext'
import s from './Contacts.module.css'

export const Contacts = () => {
    const {
        my_contacts,
        addres_first_pt,
        addres_second_pt,
        name,
        speech
    } = useContext(MainContext).language.contacts

    return (
        <div className={s.section}>
            <img
                className={s.background_1}
                src="/contacts/background_1.png"
                alt="background"
            />
            <img
                className={s.background_2}
                src="/contacts/background_2.png"
                alt="background"
            />
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.col_1}>
                        <div className={s.elipse}></div>
                        <p className={s.heading}>{my_contacts}</p>
                        <p className={s.phone}>+380 (68) 776 79 01</p>
                        <p className={s.phone}>+380 (95) 786 58 94</p>
                        <p className={s.email}>dietolog.kirichenko@gmail.com</p>
                        <p className={s.addres}>{addres_first_pt}<br />{addres_second_pt}</p>
                        <div className={s.icons_wrapper}>
                            <div className={s.icon_box_inst}>
                                <img
                                    src="/icons/instagram.png"
                                    alt="instagram"
                                    className={s.icon}
                                />
                            </div>
                            <div className={s.icon_box}>
                                <img
                                    src="/icons/viber.png"
                                    alt="viber"
                                    className={s.icon}
                                />
                            </div>
                            <div className={s.icon_box}>
                                <img
                                    src="/icons/telegram.png"
                                    alt="telegram"
                                    className={s.icon}
                                />
                            </div>
                            <div className={s.icon_box}>
                                <img
                                    src="/icons/facebook.png"
                                    alt="facebook"
                                    className={s.icon}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={s.col_2}>
                        <div className={s.elipse_2}></div>
                        <div className={s.speech_wrapper}>
                            <img
                                src="/photos/contacts_photo.png"
                                alt={name}
                                className={s.img}
                            />
                            <div className={s.speech_text_wrapper}>
                                <h4 className={s.name}>{name}</h4>
                                <p className={s.speech}>{speech}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}