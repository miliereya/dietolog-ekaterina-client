/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from 'react'
import { MainService } from '../../api/default/mainService'
import { MainContext } from '../../context/mainContext'
import { IRecordCreate } from '../../models/IRecords'
import { addScroll, removeScroll } from '../../utils/scroll'
import { Alert } from '../UI/Alert'
import { Button } from '../UI/Button'
import { ClosePopupButton } from '../UI/ClosePopupButton'
import { FullSizePopup } from '../UI/FullSizePopup'
import s from './SignForConsult.module.css'

export const SignForConsult = () => {
    const [nameVal, setName] = useState<string>('')
    const [phoneVal, setPhone] = useState<string>('')
    const [emailVal, setEmail] = useState<string>('')

    const [nameError, setNameError] = useState<string>('')
    const [phoneError, setPhoneError] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')

    const [popupToogle, setPopupToogle] = useState<boolean>(false)
    const [responseError, setResponseError] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)

    const enrollHandler = async () => {
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
            }
            else if (!phoneVal.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)) {
                setPhoneError(invalid_phone)
                err = true
            }
            if (!emailVal) {
                setEmailError(field_is_required)
                err = true
            }
            else if (!emailVal.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                setEmailError(invalid_email)
                err = true
            }

            if (err) {
                return
            }

            const props: IRecordCreate = {
                name: nameVal,
                phone: phoneVal,
                email: emailVal
            }

            await MainService.createRecord(props)
            openPopupHandler()
        } catch (e) {
            setResponseError(true)
            openPopupHandler()
        } finally {
            setLoading(false)
        }
    }

    const openPopupHandler = () => {
        removeScroll()
        setPopupToogle(true)
    }

    const closePopupHandler = () => {
        addScroll()
        setPopupToogle(false)
    }
    const language = useContext(MainContext).language
    const {
        sign_for_consult,
        your_name,
        phone,
        email,
        enroll,
        response,
        invalid_email,
        invalid_phone,
        field_is_required
    } = language.sign_for_consult

    const { error } = language.global

    return (
        <div
            id='sign-for-consult'
            className={s.section}
        >
            {popupToogle && <Alert
                text={responseError ? error : response}
                closePopupHandler={closePopupHandler}
            />}
            <img
                className={s.background_1}
                src="/sign_consult/background_1.png"
                alt="food-background"
            />
            <img
                className={s.background_3}
                src="/sign_consult/background_3.png"
                alt="food-background"
            />
            <img
                className={s.background_2}
                src="/sign_consult/background_2.png"
                alt="background"
            />
            <img
                className={s.background_4}
                src="/sign_consult/background_4.png"
                alt="food-background"
            />
            <div className="container">
                <div className={s.wrapper}>
                    <p className={s.heading}>{sign_for_consult}</p>
                    <div className={s.input_wrapper}>
                        <input
                            className={s.input}
                            value={nameVal}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder={your_name}
                        />
                        {nameError && <p className={s.error}>{nameError}</p>}
                    </div>
                    <div className={s.input_wrapper}>
                        <input
                            className={s.input}
                            value={phoneVal}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            placeholder={phone}
                        />
                        {phoneError && <p className={s.error}>{phoneError}</p>}
                    </div>
                    <div className={s.input_wrapper_last}>
                        <input
                            className={s.input}
                            value={emailVal}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder={email}
                        />
                        {emailError && <p className={s.error}>{emailError}</p>}
                    </div>
                    <Button
                        text={enroll}
                        onClick={enrollHandler}
                        disabled={isLoading}
                    />
                </div>
            </div>
        </div>
    )
}