/* eslint-disable @next/next/no-img-element */
import { GlobalContext } from '../../context/mainContext'
import s from './Reviews.module.css'
import React, { useEffect, useState } from 'react'
import { CustomSlider } from '../UI/CustomSlider'
import { IReview } from '../../models/IReviews'
import { MainService } from '../../api/default/mainService'
import { Spinner } from '../UI/Spinner'
import { ReviewItem } from '../ReviewItem'
import { FullSizePopup } from '../UI/FullSizePopup'
import { ClosePopupButton } from '../UI/ClosePopupButton'
import { CreateReviewForm } from '../CreateReviewForm'
import Link from 'next/link'
import { Alert } from '../UI/Alert'

export const Reviews = () => {
	const [reviews, setReviews] = useState<IReview[]>([])
	const [fetchError, setFetchError] = useState<boolean>(false)
	const [isLoading, setLoading] = useState<boolean>(true)
	const [popupToogle, setPopupToogle] = useState<boolean>(false)
	const [alertToogle, setAlertToogle] = useState<boolean>(false)
	const [alertText, setAlertText] = useState('')

	const language = GlobalContext().language

	const { error, _return } = language.global
	const { add_review, heading, response } = language.reviews

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				setLoading(true)
				setFetchError(false)
				const reviewsData = await MainService.fetchReviews()
				if (reviewsData) {
					setReviews(reviewsData)
				}
			} catch (e) {
				setFetchError(true)
			} finally {
				setLoading(false)
			}
		}
		fetchReviews()
	}, [])

	const alertHandler = (text: string) => {
		setAlertToogle(true)
		setAlertText(text)
	}

	return (
		<div className={s.section}>
			{alertToogle && (
				<Alert
					text={alertText}
					closePopupHandler={() => setAlertToogle(false)}
				/>
			)}
			{popupToogle && (
				<FullSizePopup setPopupToggle={() => setPopupToogle(false)}>
					<div>
						<ClosePopupButton closeHandler={() => setPopupToogle(false)} />
						<CreateReviewForm
							alertHandler={alertHandler}
							closeHandler={() => setPopupToogle(false)}
						/>
					</div>
				</FullSizePopup>
			)}
			<div className='container'>
				<h4 className={s.heading}>{heading}</h4>
			</div>
			<div className={s.slider_section}>
				<img
					className={s.background_1}
					src='/reviews/background_1.png'
					alt='background'
				/>
				<div className={s.slider_wrapper}>
					{isLoading && <Spinner />}
					{/* {!fetchError && !isLoading && (
						// <CustomSlider>
						// 	{reviews.map((r, index) => (
						// 		<ReviewItem key={r._id} review={r} index={index} />
						// 	))}
						// </CustomSlider>
					)} */}
					{fetchError && !isLoading && <p className={s.error}>{error}</p>}
				</div>
			</div>
			<div className='container'>
				<div className={s.btns_wrapper}>
					<button className={s.btn} onClick={() => setPopupToogle(true)}>
						{add_review}
					</button>
					<Link href='/' className={s.btn}>
						{_return}
					</Link>
				</div>
			</div>
		</div>
	)
}
