
import { FC } from 'react'
import { IReview } from '../../models/IReviews'
import { formatDate } from '../../utils/date'
import s from './ReviewItem.module.css'

interface ReviewItemProps {
    review: IReview
    index: number
}

export const ReviewItem: FC<ReviewItemProps> = ({ review, index }) => {
    const { name, createdAt, text } = review
    return (
        <div></div>
    )
    // return (<Slide
    //     index={index}
    //     className={s.slide_wrapper}
    // >
    //     <div className={s.slide}>
    //         <p className={s.name}>{name}</p>
    //         <p className={s.date}>{formatDate(createdAt, 's')}</p>
    //         <p className={s.text}>{text}</p>
    //     </div>
    // </Slide>)

}