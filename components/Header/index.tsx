import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { MainContext } from '../../context/mainContext'
import { en } from '../../languages/en'
import { ru } from '../../languages/ru'
import { LanguageTemplate } from '../../languages/template'
import { ua } from '../../languages/ua'
import s from './Header.module.css'

export const Header = () => {
    const [isBurgerActive, setBurgerActive] = useState<boolean>(false)
    const [isBurgerDisabled, setBurgerDisabled] = useState<boolean>(false)
    const { language, setLanguage } = useContext(MainContext)

    const path = useRouter().pathname

    const changeLanguageHandler = (lang: LanguageTemplate) => {
        setLanguage(lang)
        if (typeof window !== 'undefined') {
            localStorage.setItem('lang', lang.mark)
        }
    }

    const {
        main,
        about,
        consults_and_rates,
        turnkey_solutions,
        contacts
    } = language.header

    interface navLinkInterface {
        title: string
        link: string
    }

    const navLinks: navLinkInterface[] = [{ title: main, link: '' }, { title: about, link: '#about' }, { title: consults_and_rates, link: 'consults' }, { title: turnkey_solutions, link: '#prepared-solutions' }, { title: contacts, link: '#contacts' },]

    const burgerHandler = () => {
        if (isBurgerActive) {
            hideBurgerLinks()
            setBurgerDisabled(true)
            setTimeout(() => {
                setBurgerActive(false)
                setBurgerDisabled(false)
            }, 1000)
        } else {
            setBurgerActive(true)
        }
    }

    const hideBurgerLinks = () => {
        for (let i = 0; i < navLinks.length; i++) {
            setTimeout(() => {
                const id = document.getElementById(navLinks[i].title)
                if (id) {
                    id.className = s.burger_link_closed
                }
            }, i * 50)
        }
    }

    return (
        <div className={s.section}>
            <div className={s.burger_nav}>
                {isBurgerActive && navLinks.map((l, index) => {
                    const { title, link } = l
                    setTimeout(() => {
                        const id = document.getElementById(title)
                        if (id) {
                            id.style.display = 'block'
                        }
                    }, index * 50)

                    return (
                        <Link
                            id={title}
                            key={link}
                            className={s.burger_link}
                            href={path === `/${link}` ? {} : `/${link}`}
                            style={{ color: path === `/${link}` ? 'var(--color-secondary)' : 'var(--color-dark)' }}
                            onClick={() => [hideBurgerLinks(), burgerHandler()]}
                        >
                            {title}
                        </Link>
                    )
                })}
            </div>
            <div className='container'>
                <div className={s.wrapper}>
                    <h2 className={s.heading}>
                        <img
                            className={s.logo}
                            src='/icons/logo.png'
                            alt="logo"
                        />
                        nutritionist
                    </h2>
                    <nav className={s.nav}>
                        {navLinks.map(l => {
                            const { title, link } = l
                            return (
                                <Link
                                    key={link}
                                    className={s.link}
                                    href={path === `/${link}` ? {} : `/${link}`}
                                    style={path === `/${link}` ? { color: 'var(--color-secondary)' } : {}}
                                >
                                    {title}
                                </Link>
                            )
                        })}
                        <div className={s.burger_lang_wrapper}>
                            <button
                                className={s.burger}
                                onClick={burgerHandler}
                                disabled={isBurgerDisabled}
                            >
                                <div className={s.burger_strip}></div>
                                <div className={s.burger_strip}></div>
                                <div className={s.burger_strip}></div>
                            </button>
                            <div className={s.lang_wrapper}>
                                <button
                                    className={s.lang_btn}
                                    onClick={() => changeLanguageHandler(ua)}
                                    disabled={language.mark === ua.mark}
                                >
                                    {ua.mark}
                                </button>
                                <button
                                    className={s.lang_btn}
                                    onClick={() => changeLanguageHandler(ru)}
                                    disabled={language.mark === ru.mark}
                                >
                                    {ru.mark}
                                </button>
                                <button
                                    className={s.lang_btn}
                                    onClick={() => changeLanguageHandler(en)}
                                    disabled={language.mark === en.mark}
                                >
                                    {en.mark}
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}