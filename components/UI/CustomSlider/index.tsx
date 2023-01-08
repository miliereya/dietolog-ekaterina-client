/* eslint-disable @next/next/no-img-element */
import {
	FC,
	PropsWithChildren,
	ReactFragment,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType, Navigation } from 'swiper'
import 'swiper/css'
import s from './CustomSlider.module.css'

export const CustomSlider: FC<PropsWithChildren> = ({ children }) => {
	const swiperRef = useRef<SwiperType>()
	const [innerWidth, setInnerWidth] = useState(
		0
	)

	useEffect(() => {
		const handleWindowResize = () => {
			setInnerWidth(window.innerWidth)
		}
		handleWindowResize()
		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])
	
	return (
		<>
			<Swiper
				modules={[Navigation]}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper
				}}
				slidesPerView={3}
				speed={250}
				direction='horizontal'
				
			>
				{children}
			</Swiper>
			<div className={s.btn_wrapper}>
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className={s.btn_prev}
				>
					<img
						className={s.arrow_icon}
						alt='arrow'
						src='/icons/slider_arrow.png'
					/>
				</button>
				<button
					onClick={() => swiperRef.current?.slideNext()}
					className={s.btn_next}
				>
					<img
						className={s.arrow_icon}
						alt='arrow'
						src='/icons/slider_arrow.png'
					/>
				</button>
			</div>
		</>
	)
}
