/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { MainService } from '../../api/default/mainService'
import { GlobalContext } from '../../context/mainContext'
import { ICertificate } from '../../models/ICertificate'
import { currentLanguage } from '../../utils/language'
import { CertificatePopup } from '../CertificatePopup'
import { ClosePopupButton } from '../UI/ClosePopupButton'
import { CustomSlider } from '../UI/CustomSlider'
import { FullSizePopup } from '../UI/FullSizePopup'
import { SpannedText } from '../UI/SpannedText'
import s from './Certificates.module.css'

const Certificates = () => {
	const [isLoading, setLoading] = useState<boolean>(false)
	const [certificates, setCertificates] = useState<ICertificate[]>([])
	const [error, setError] = useState<boolean>(false)
	const [innerWidth, setInnerWidth] = useState(0)
    const [certificateLink, setCertificateLink] = useState<string>('')

	useEffect(() => {
		const fetchPrograms = async () => {
			try {
				setLoading(true)
				const res = await MainService.fetchCertificates()
				setCertificates(res)
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

	const language = GlobalContext().language

	const {
		diplomas_heading,
		skills_heading,
		skill_1,
		skill_2,
		skill_3,
		skill_4,
		skill_5,
		skill_6,
	} = language.certificates

	return (
		<div className={s.section}>
			{certificateLink && (
				<FullSizePopup setPopupToggle={() => setCertificateLink('')}>
					<ClosePopupButton closeHandler={() => setCertificateLink('')} />
					<CertificatePopup link={certificateLink} />
				</FullSizePopup>
			)}
			<div className='container'>
				<p className={s.heading}>{diplomas_heading}</p>
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
							{certificates.map((c) => {
								return (
									<SwiperSlide key={c._id} className={s.slide}>
										<button
											className={s.certificate_wrapper}
											onClick={() => setCertificateLink(c.link)}
										>
											<p className={s.title}>{currentLanguage(c.title)}</p>
											<img
												className={s.img}
												src={c.prev_link}
												alt={currentLanguage(c.title)}
											/>
											<div className={s.icon_arrow_wrapper}>
												<img
													className={s.icon_arrow}
													src='/icons/secondary_arrow_spanned.png'
													alt='arrow'
												/>
											</div>
										</button>
									</SwiperSlide>
								)
							})}
							{innerWidth <= 878 && (
								<SwiperSlide className={s.slide}></SwiperSlide>
							)}
							{innerWidth <= 510 && (
								<SwiperSlide className={s.slide}></SwiperSlide>
							)}
						</CustomSlider>
					</div>
				</div>
			</div>
			<div className={s.skill_section}>
				<div className={s.collage_wrapper}>
					<div className={s.collage}>
						<div className={s.collage_col}>
							<img
								className={s.collage_img_1}
								src='/certificates/collage_1.png'
								alt='me'
							/>
							<img
								className={s.collage_img_2}
								src='/certificates/collage_2.png'
								alt='me'
							/>
						</div>
						<img
							className={s.collage_img_3}
							src='/certificates/collage_3.png'
							alt='me too'
						/>
					</div>
				</div>
				<div className='container'>
					<div className={s.skill_col}>
						<p className={s.heading}>{skills_heading}</p>
						<div className={s.skill_container}>
							<div className={s.skill_wrapper}>
								<SpannedText text={skill_1} parentClassName={s.skill_text} />
							</div>
							<div className={s.skill_wrapper}>
								<SpannedText text={skill_2} parentClassName={s.skill_text} />
								<p className={s.skill_num_1}>1</p>
							</div>
							<div className={s.skill_wrapper}>
								<SpannedText text={skill_3} parentClassName={s.skill_text} />
								<p className={s.skill_num_2}>2</p>
							</div>
							<div className={s.skill_wrapper}>
								<SpannedText text={skill_4} parentClassName={s.skill_text} />
								<p className={s.skill_num_3}>3</p>
							</div>
							<div className={s.skill_wrapper}>
								<SpannedText text={skill_5} parentClassName={s.skill_text} />
								<p className={s.skill_num_4}>4</p>
							</div>
							<div className={s.skill_wrapper}>
								<SpannedText text={skill_6} parentClassName={s.skill_text} />
								<p className={s.skill_num_5}>5</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<Link href='/'>
					<p className={s.link}>{language.global._return}</p>
				</Link>
			</div>
		</div>
	)
}

export default Certificates
