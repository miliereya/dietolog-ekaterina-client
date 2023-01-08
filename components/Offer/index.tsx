import { useEffect, useState } from 'react'
import { GlobalContext } from '../../context/mainContext'
import { Button } from '../UI/Button'
import s from './Offer.module.css'

export const Offer = () => {
	const [isAwaitedForFontLoaded, setAwaitedForFontLoaded] =
		useState<boolean>(false)
	const { name, last_name, post_name, description, sign_for_consult } =
		GlobalContext().language.main

    useEffect(() => {
        setTimeout(() => {
            setAwaitedForFontLoaded(true)
        }, 350)
    }, [])

	return (
		<div className={s.section}>
			<img
				src='/offer/background_1.png'
				alt='food-background'
				className={s.background_1}
			/>
			<div className={s.background_2_border}></div>
			<img
				src='/offer/background_2.png'
				alt='food-background'
				className={s.background_2}
			/>
			<div className='container'>
				<p
					className={s.heading}
					style={{
						opacity: isAwaitedForFontLoaded ? '1' : '0'
					}}
				>
					<span>{name}</span>
					<span className={s.last_name}>{last_name}</span>
				</p>
				<p className={s.post_heading}>{post_name}</p>
				<p className={s.decsription}>{description}</p>
				<Button
					onClick={() =>
						document.getElementById('sign-for-consult')?.scrollIntoView()
					}
					text={sign_for_consult}
				/>
			</div>
		</div>
	)
}
