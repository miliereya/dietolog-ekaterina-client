/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { MainService } from '../../api/default/mainService'
import { GlobalContext } from '../../context/mainContext'
import { IProgram } from '../../models/IProgram'
import { currentLanguage } from '../../utils/language'
import { CustomSlider } from '../UI/CustomSlider'
import { SpannedText } from '../UI/SpannedText'
import s from './PreparedSolutions.module.css'

export const PreparedSolutions = () => {
	const [programs, setPrograms] = useState<IProgram[]>([])
	const [isLoading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)
	const [innerWidth, setInnerWidth] = useState(0)

	useEffect(() => {
		const fetchPrograms = async () => {
			try {
				setLoading(true)
				const res = await MainService.fetchPrograms()
				setPrograms(res)
			} catch (e) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		fetchPrograms()
	}, [])

	useEffect(() => {
		const handleWindowResize = () => {
			setInnerWidth(window.innerWidth)
		}
		setTimeout(() => handleWindowResize(), 10)
		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

	const {
		prepared_solutions,
		col_1_part_1,
		col_1_part_2,
		col_2_part_1,
		col_2_part_2,
		constructor_heading,
		constructor_1,
		constructor_2,
		constructor_3,
		constructor_4,
		constructor_5,
		constructor_col_1_part_1,
		constructor_col_1_part_2,
		constructor_col_1_part_3,
		constructor_col_2_part_1,
		constructor_col_2_part_2,
		constructor_col_2_part_3,
		programs_and_checks,
		help_to_pick,
	} = GlobalContext().language.prepared_solutions

	return (
		<div className={s.section} id='prepared-solutions'>
			<img
				src='/prepared_solutions/background_3.png'
				alt='background'
				className={s.background_3}
			/>
			<div className='container'>
				<p className={s.heading}>{prepared_solutions}</p>
				<div className={s.top_wrapper}>
					<div className={s.prepared_solutions_wrapper_1}>
						<SpannedText
							parentClassName={s.prepared_solutions_text}
							text={col_1_part_1}
						/>
						<br />
						<SpannedText
							parentClassName={s.prepared_solutions_text}
							text={col_1_part_2}
						/>
					</div>
					<div className={s.prepared_solutions_wrapper_2}>
						<SpannedText
							parentClassName={s.prepared_solutions_text}
							text={col_2_part_1}
						/>
						<br />
						<SpannedText
							parentClassName={s.prepared_solutions_text}
							text={col_2_part_2}
						/>
					</div>
				</div>
			</div>
			<div className={s.constructor_section}>
				<img
					src='/prepared_solutions/background_1.png'
					alt='background'
					className={s.background_1}
				/>
				<div className='container'>
					<div className={s._constructor}>
						<p
							className={s.heading}
							style={{
								whiteSpace: 'break-spaces',
							}}
						>
							{constructor_heading}
						</p>
						<div className={s.constructor_wrapper}>
							<SpannedText
								text={constructor_1}
								parentClassName={s.prepared_solutions_text}
							/>
							<SpannedText
								text={constructor_2}
								parentClassName={s.prepared_solutions_text}
							/>
							<SpannedText
								text={constructor_3}
								parentClassName={s.prepared_solutions_text}
							/>
							<SpannedText
								text={constructor_4}
								parentClassName={s.prepared_solutions_text}
							/>
							<SpannedText
								text={constructor_5}
								parentClassName={s.prepared_solutions_text}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={s.bottom_section}>
				<div className='container'>
					<div className={s.bottom_wrapper}>
						<div className={s.col_1}>
							<SpannedText
								text={constructor_col_1_part_1}
								parentClassName={s.constructor_text}
							/>
							<SpannedText
								text={constructor_col_1_part_2}
								parentClassName={s.constructor_text_mid}
							/>
							<SpannedText
								text={constructor_col_1_part_3}
								parentClassName={s.constructor_text}
							/>
						</div>
						<div className={s.col_2}>
							<SpannedText
								text={constructor_col_2_part_1}
								parentClassName={s.constructor_text}
							/>
							<SpannedText
								text={constructor_col_2_part_2}
								parentClassName={s.constructor_text_mid}
							/>
							<SpannedText
								text={constructor_col_2_part_3}
								parentClassName={s.constructor_text}
							/>
						</div>
					</div>

					<p className={s.heading} id='programs'>
						{programs_and_checks}
					</p>
				</div>
				<div
					className={s.slider_wrapper}
					style={{
						overflow: 'hidden',
					}}
				>
					<div className='slider_container'>
						<div className={s.slider}>
							<CustomSlider>
								{programs.map((p) => {
									return (
										<SwiperSlide key={p._id} className={s.slide}>
											<Link href={`program/${p._id}`}>
												<img
													className={s.img}
													src={p.link}
													alt={currentLanguage(p.title)}
												/>
												<div className={s.wrapper_program}>
													<p className={s.price}>{p.price} ₴</p>
													<p className={s.title}>{currentLanguage(p.title)}</p>
													<p className={s.description}>
														{currentLanguage(p.description_short)}
													</p>
													<img
														className={s.arrow_icon}
														src='/icons/secondary_arrow.png'
														alt='arrow'
													/>
												</div>
											</Link>
										</SwiperSlide>
									)
								})}
								{innerWidth <= 878 && (
									<SwiperSlide className={s.slide}></SwiperSlide>
								)}
							</CustomSlider>
						</div>
					</div>
					<div className='container'>
						<button
							onClick={() => alert('Will be added soon')}
							className={s.link}
						>
							{help_to_pick}
						</button>
					</div>
					<div id='contacts'></div>
				</div>
			</div>
		</div>
	)
}
