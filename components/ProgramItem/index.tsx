/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/mainContext'
import { IProgram } from '../../models/IProgram'
import { currentLanguage } from '../../utils/language'
import { ProgramPopup } from '../ProgramPopup'
import { Alert } from '../UI/Alert'
import { Button } from '../UI/Button'
import { FullSizePopup } from '../UI/FullSizePopup'
import { SpannedText } from '../UI/SpannedText'
import s from './ProgramItem.module.css'

const undefinedChecker = (arr: any[]): boolean => {
	for (let i = 0; i < arr.length; i++) {
		if (!arr[i]) {
			return false
		}
	}
	return true
}

interface ProgramItemProps {
	program: IProgram
}

export const ProgramItem: FC<ProgramItemProps> = ({ program }) => {
	const [isFirstRender, setFirstRender] = useState<boolean>(false)
	const [popupToggle, setPopupToggle] = useState<boolean>(false)
	const [resPopupToggle, setResPopupToggle] = useState<boolean>(false)
	const [isResponseError, setResponseError] = useState<boolean>(false)

	const language = GlobalContext().language
	useEffect(() => {
		if (!isFirstRender) return setFirstRender(true)
		location.reload()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language])
	const { included_to_program, choose_radios, back_to_programs, success_program, _program } =
		language.program

	const { title, description, price, included, link, link_small, radios } =
		program

	const [props, setProps] = useState<(string | null)[]>(radios.map((r) => null))

	const updatePropsHandler = (index: number, value: string) => {
		setProps((prev) => prev.map((p, i) => (i === index ? value : p)))
	}

	const isEveryPropFilled = undefinedChecker(props)

	return (
		<div className={s.section}>
			{resPopupToggle && (
				<Alert
					text={isResponseError ? language.global.error : success_program}
					closePopupHandler={() => setResPopupToggle(false)}
				/>
			)}
			{popupToggle && (
				<FullSizePopup setPopupToggle={() => setPopupToggle(false)} padding='0'>
					<ProgramPopup
						setResPopupToggle={setResPopupToggle}
						setResponseError={setResponseError}
						closeHandler={() => setPopupToggle(false)}
						price={price}
						title={currentLanguage(title)}
						radios={radios}
						answers={props}
					/>
				</FullSizePopup>
			)}
			<img
				src='/program/background_1.png'
				alt='background'
				className={s.background_1}
			/>
			<img className={s.background} src={link} alt={currentLanguage(title)} />
			<img className={s.img} src={link_small} alt={currentLanguage(title)} />
			<div className='container'>
				<div className={s.wrapper}>
					<p className={s.title}>{_program} {currentLanguage(title)}</p>
					<p className={s.price}>{price} ₴</p>
					<div className={s.description}>
						<SpannedText
							text={currentLanguage(description)}
							parentClassName={s.spanned}
						/>
						<br />

						{included_to_program}
						<br />

						<ul className={s.included_list}>
							{included.map((i) => (
								<li key={i.en}>{currentLanguage(i)}</li>
							))}
						</ul>

						<br />
						{choose_radios}
					</div>

					<div className={s.radio_section}>
						{radios.map((r, i) => {
							const { title, options } = r
							return (
								<div key={title.en} className={s.radio_item}>
									<p className={s.radio_title}>{currentLanguage(title)}</p>
									<div className={s.radio_wrapper}>
										{options.map((o) => (
											<div key={o.answer.en} className={s.options_wrapper}>
												<label className={s.radio_label}>
													{currentLanguage(o.answer)}
													<input
														name={title.en + i}
														type='radio'
														className={s.radio_input}
														value={currentLanguage(o.answer)}
														onChange={(e) =>
															updatePropsHandler(i, e.target.value)
														}
													/>
													<span className={s.checkmark}>
														<span></span>
													</span>
												</label>
											</div>
										))}
									</div>
								</div>
							)
						})}
					</div>
					<Button
						text={language.global.apply}
						onClick={() => setPopupToggle(true)}
						disabled={!isEveryPropFilled}
					/>
					<Link href='/'>
						<p className={s.link}>{back_to_programs}</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
