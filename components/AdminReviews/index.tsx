import { useEffect, useState } from 'react'
import { ReviewService } from '../../api/admin/review'
import { IReview } from '../../models/IReviews'
import { formatDate } from '../../utils/date'
import s from './AdminReviews.module.css'

export const AdminReviews = () => {
    const [reviews, setReviews] = useState<IReview[]>([])

    useEffect(() => {
        const fetchReviews = async () => {
            const res = await ReviewService.getManyNotApplied()
            setReviews(res)
        }
        fetchReviews()
    }, [])

    const applyReviewHandler = async (id: string) => {
        const res = await ReviewService.apply(id)
        setReviews(res)
    }

    const deleteReviewHandler = async (id: string) => {
        const res = await ReviewService.delete(id)
        setReviews(res)
    }

    return (
        <div className={s.section}>
            <p className={s.heading}>Отзывы</p>
            {reviews.map((r) => {
                const { _id, name, text, createdAt } = r

                return (
                    <div key={_id} className={s.review}>
                        <p className={s.date}>{formatDate(createdAt)}</p>
                        <p className={s.text}>Имя: {name}</p>
                        <p className={s.text}>{text}</p>
                        <div className={s.btn_wrapper}>
                            <button
                                className={s.btn_apply}
                                onClick={() => applyReviewHandler(_id)}
                            >
                                Принять
                            </button>
                            <button
                                className={s.btn_delete}
                                onClick={() => deleteReviewHandler(_id)}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}