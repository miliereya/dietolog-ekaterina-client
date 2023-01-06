/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { GlobalContext } from '../../context/mainContext'
import s from './About.module.css'

interface IWorth {
    num: string
    text: string
}

export const About = () => {
    const {
        my_approach,
        col_1_text_1,
        col_1_text_2,
        worth_1,
        worth_2,
        worth_3,
        for_who,
        for_who_text_1,
        for_who_text_2,
        for_who_text_3,
        for_who_text_4,
        for_who_text_5,
        for_who_text_6,
        not_suitable,
        not_suitable_text_1,
        not_suitable_text_2,
        my_education,
        reviews
    } = GlobalContext().language.about

    const worthies: IWorth[] = [{ num: '10+', text: worth_1 }, { num: '500+', text: worth_2 }, { num: '10+', text: worth_3 }]

    return (
        <div className={s.section}>
            <img
                src="/about/background_2.png"
                alt="background"
                className={s.background_2}
            />
            <img
                src="/about/background_3.png"
                alt="background"
                className={s.background_3}
            />
            <div className="container">
                <div className={s.top_wrapper}>
                    <div className={s.col_1}>
                        <p className={s.heading}>{my_approach}</p>
                        <p className={s.col_1_description}>
                            {col_1_text_1}
                            <br /><br />
                            {col_1_text_2}  
                        </p>
                    </div>
                    <div className={s.col_2}>
                        <div className={s.worth_background}></div>
                        {worthies.map(w => {
                            return <div
                                key={w.text}
                                className={s.worth}
                            >
                                <p className={s.worth_num}>{w.num}</p>
                                <p className={s.worth_text}>{w.text}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className={s.for_who_section}>
                <img src="/about/background_1.png" alt="background" className={s.background_1} />
                <div className="container">
                    <div className={s.for_who_col}>
                        <p className={s.heading}>{for_who}</p>
                        <div className={s.for_who_enum}>
                            <div className={s.for_who_wrapper}>
                                <p className={s.for_who_text}>{for_who_text_1}</p>
                                <p className={s.for_who_num_1}>1</p>
                            </div>
                            <div className={s.for_who_wrapper}>
                                <p className={s.for_who_text}>{for_who_text_2}</p>
                                <p className={s.for_who_num_2}>2</p>
                            </div>
                            <div className={s.for_who_wrapper}>
                                <p className={s.for_who_text}>{for_who_text_3}</p>
                                <p className={s.for_who_num_3}>3</p>
                            </div>
                            <div className={s.for_who_wrapper}>
                                <p className={s.for_who_text}>{for_who_text_4}</p>
                                <p className={s.for_who_num_4}>4</p>
                            </div>
                            <div className={s.for_who_wrapper}>
                                <p className={s.for_who_text}>{for_who_text_5}</p>
                                <p className={s.for_who_num_5}>5</p>
                            </div>
                            <div className={s.for_who_wrapper}>
                                <p className={s.for_who_text}>{for_who_text_6}</p>
                                <p className={s.for_who_num_6}>6</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={s.not_suitable_background}></div>
                <p className={s.heading}>{not_suitable}</p>
                <div className={s.not_suitable_wrapper}>
                    <div className={s.not_suitable_item_1}>
                        <p className={s.not_suitable_num_1}>1</p>
                        <p className={s.not_suitable_text}>{not_suitable_text_1}</p>
                    </div>
                    <div className={s.not_suitable_item_2}>
                        <p className={s.not_suitable_num_2}>2</p>
                        <p className={s.not_suitable_text}>{not_suitable_text_2}</p>
                    </div>
                </div>
                <div className={s.btn_wrapper}>
                    <Link
                        href='/education'
                        className={s.link}
                    >
                        {my_education}
                    </Link>
                    <Link
                        href='/reviews'
                        className={s.link}
                    >
                        {reviews}
                    </Link>
                </div>
            </div>
        </div>
    )
}