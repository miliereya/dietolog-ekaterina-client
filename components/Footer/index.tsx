import s from './Footer.module.css'

export const Footer = () => {
    const scrollToTopHandler = () => {
        window.scrollTo(scrollY, 0)
    }

    return (
        <div className={s.section}>
            <div
                className="container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <p className={s.rights}>2022 © All rights reserved</p>
                <div
                    onClick={scrollToTopHandler}
                    className={s.arrow_wrapper}
                >
                    <img
                        src='/icons/white_arrow.png'
                        className={s.arrow_icon}
                        alt='arrow'
                    />
                </div>
            </div>
        </div>
    )
}