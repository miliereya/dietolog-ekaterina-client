import { Dispatch, FC, SetStateAction, useState } from 'react'
import { MainService } from '../../api/default/mainService'
import { GlobalContext } from '../../context/mainContext'
import { IReviewCreate } from '../../models/IReviews'
import { Button } from '../UI/Button'
import s from './CreateReviewForm.module.css'

interface CreateReviewFormProps {
    alertHandler: (text: string) => void
    closeHandler: any
}

export const CreateReviewForm: FC<CreateReviewFormProps> = ({ closeHandler, alertHandler }) => {
    const [name, setName] = useState<string>('')
    const [text, setText] = useState<string>('')

    const [nameErr, setNameErr] = useState<string>('')
    const [textErr, setTextErr] = useState<string>('')

    const sendReviewHandler = async () => {
        let err = false
        setNameErr('')
        setTextErr('')

        if (!name) {
            setNameErr(filed_is_required)
            err = true
        }

        if (text.length < 50 || text.length > 300) {
            setTextErr(review_min_max_length)
            err = true
        }

        if (err) {
            return
        }
        try {
            const props: IReviewCreate = {
                name,
                text
            }

            await MainService.createReview(props)
            alertHandler(response)
        } catch (e) {
            alertHandler(error)
        } finally {
            closeHandler()
        }
    }

    const language = GlobalContext().language

    const { review, your_name, your_review, send, review_min_max_length } = language.leave_review
    const { filed_is_required, error } = language.global
    const { response } = language.reviews

    return (
        <div className={s.section}>
            <p className={s.heading}>{your_review}</p>
            <div className={s.input_wrapper}>
                <input
                    className={s.input}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={your_name}
                />
                {nameErr && <p className={s.error}>{nameErr}</p>}
            </div>
            <div className={s.input_wrapper}>
                <p className={s.text_length}>{text.length} / 300</p>
                <textarea
                    className={s.textarea}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={6}
                    placeholder={review}
                    maxLength={300}
                />
                {textErr && <p className={s.error}>{textErr}</p>}
            </div>
            <Button
                text={send}
                onClick={sendReviewHandler}
            />
        </div>
    )
}