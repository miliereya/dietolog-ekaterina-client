import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { MainService } from '../../api/default/mainService'
import { GlobalContext } from '../../context/mainContext'
import { IOrderProgramProps, IParams, IRadio } from '../../models/IProgram'
import { currentLanguage } from '../../utils/language'
import { Button } from '../UI/Button'
import { ClosePopupButton } from '../UI/ClosePopupButton'
import s from './ProgramPopup.module.css'

interface ProgramPopupProps {
	title: string
	price: number
	radios: IRadio[]
	answers: (string | null)[]
	closeHandler: any
	setResponseError: Dispatch<SetStateAction<boolean>>
	setResPopupToggle: Dispatch<SetStateAction<boolean>>
}

export const ProgramPopup: FC<ProgramPopupProps> = ({
	closeHandler,
	radios,
	answers,
	title,
	price,
	setResponseError,
	setResPopupToggle,
}) => {
	const [nameVal, setName] = useState<string>('')
	const [phoneVal, setPhone] = useState<string>('')
	const [emailVal, setEmail] = useState<string>('')

	const [nameError, setNameError] = useState<string>('')
	const [phoneError, setPhoneError] = useState<string>('')
	const [emailError, setEmailError] = useState<string>('')
	const [currentStep, setCurrentStep] = useState<number>(1)

	const [isLoading, setLoading] = useState<boolean>(false)
	const language = GlobalContext().language

	const { privacy, order, _continue } = language.global
	const { your_order, chosen_params } = language.program_popup
	const {
		phone,
		email,
		your_name,
		field_is_required,
		invalid_email,
		invalid_phone,
	} = language.sign_for_consult

	const router = useRouter()

	const orderHandler = async () => {
		try {
			setResponseError(false)
			setLoading(true)
			setEmailError('')
			setNameError('')
			setPhoneError('')

			let err = false
			if (!nameVal) {
				setNameError(field_is_required)
				err = true
			}
			if (!phoneVal) {
				setPhoneError(field_is_required)
				err = true
			} else if (
				!phoneVal.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
			) {
				setPhoneError(invalid_phone)
				err = true
			}
			if (!emailVal) {
				setEmailError(field_is_required)
				err = true
			} else if (
				!emailVal.match(
					/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
				)
			) {
				setEmailError(invalid_email)
				err = true
			}

			if (err) {
				return
			}

			const params: IParams[] = []
			for (let i = 0; i < answers.length; i++) {
				params.push({
					title: radios[i].title.ru,
					answer: answers[i],
				})
			}

			const props: IOrderProgramProps = {
				name: nameVal,
				phone: phoneVal,
				email: emailVal,
				params,
			}
			await MainService.orderProgram(props)
			closeHandler()
			setResPopupToggle(true)
			router.push('/')
		} catch (e) {
			setResponseError(true)
			setResPopupToggle(true)
			closeHandler()
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className={s.section}>
			<ClosePopupButton
				fill={
					window.innerWidth > 768
						? 'var(--color-white)'
						: 'var(--color-primary)'
				}
				closeHandler={closeHandler}
			/>
			<div className={s.order_wrapper}>
				<p className={s.heading}>{your_order}:</p>
				<p className={s.title}>{title}</p>
				<p className={s.price}>{price} ₴</p>
				<div className={s.input_wrapper}>
					<input
						className={s.input}
						value={nameVal}
						onChange={(e) => setName(e.target.value)}
						type='text'
						placeholder={your_name}
					/>
					{nameError && <p className={s.error}>{nameError}</p>}
				</div>
				<div className={s.input_wrapper}>
					<input
						className={s.input}
						value={phoneVal}
						onChange={(e) => setPhone(e.target.value)}
						type='text'
						placeholder={phone}
					/>
					{phoneError && <p className={s.error}>{phoneError}</p>}
				</div>
				<div className={s.input_wrapper_last}>
					<input
						className={s.input}
						value={emailVal}
						onChange={(e) => setEmail(e.target.value)}
						type='text'
						placeholder={email}
					/>
					{emailError && <p className={s.error}>{emailError}</p>}
				</div>
				<div className={s.mark}>
					<span>*</span>
					{privacy}
				</div>
				<div className={s.left_btn_wrapper}>
					<Button text={order} onClick={orderHandler} disabled={isLoading} />
				</div>
			</div>
			<div className={s.props_wrapper}>
				<p className={s.heading}>{chosen_params}:</p>
				<div className={s.props_mid_wrapper}>
					<div className={s.params}>
						{radios.map((r, i) => {
							return (
								<div className={s.param_item} key={r.title.en}>
									<p className={s.param}>{currentLanguage(r.title_short)}</p>
									<p className={s.answer}>{answers[i]}</p>
								</div>
							)
						})}
					</div>
					<div className={s.right_btn_wrapper}>
						<Button text={order} onClick={orderHandler} disabled={isLoading} />
					</div>
				</div>
			</div>
			{currentStep === 1 && (
				<div className={s.props_wrapper_mobile}>
					<p className={s.heading}>{chosen_params}:</p>
					<div className={s.props_mid_wrapper}>
						<div className={s.params}>
							{radios.map((r, i) => {
								return (
									<div className={s.param_item} key={r.title.en}>
										<p className={s.param}>{currentLanguage(r.title_short)}</p>
										<p className={s.answer}>{answers[i]}</p>
									</div>
								)
							})}
						</div>
						<div className={s.mark}>
							<span>*</span>
							{privacy}
						</div>
						<Button
							text={_continue}
							onClick={() => setCurrentStep(2)}
							disabled={isLoading}
						/>
					</div>
				</div>
			)}
			{currentStep === 2 && (
				<div className={s.order_wrapper_mobile}>
					<p className={s.heading}>{your_order}:</p>
					<p className={s.title}>{title}</p>
					<p className={s.price}>{price} ₴</p>
					<div className={s.input_wrapper}>
						<input
							className={s.input}
							value={nameVal}
							onChange={(e) => setName(e.target.value)}
							type='text'
							placeholder={your_name}
						/>
						{nameError && <p className={s.error}>{nameError}</p>}
					</div>
					<div className={s.input_wrapper}>
						<input
							className={s.input}
							value={phoneVal}
							onChange={(e) => setPhone(e.target.value)}
							type='text'
							placeholder={phone}
						/>
						{phoneError && <p className={s.error}>{phoneError}</p>}
					</div>
					<div className={s.input_wrapper_last}>
						<input
							className={s.input}
							value={emailVal}
							onChange={(e) => setEmail(e.target.value)}
							type='text'
							placeholder={email}
						/>
						{emailError && <p className={s.error}>{emailError}</p>}
					</div>
					<Button text={order} onClick={orderHandler} disabled={isLoading} />
				</div>
			)}
		</div>
	)
}
