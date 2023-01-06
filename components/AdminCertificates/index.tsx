/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { CertificateService } from '../../api/admin/certificate'
import s from './AdminCertificates.module.css'

export const AdminCertificates = () => {
	const [titleRU, setTitleRU] = useState<string>('')
	const [titleUA, setTitleUA] = useState<string>('')
	const [titleEN, setTitleEN] = useState<string>('')
	const [link, setLink] = useState<string>('')
	const [prevLink, setPrevLink] = useState<string>('')
	const [isLoading, setLoading] = useState<boolean>(false)

	const addCertificateHandler = async () => {
		try {
			setLoading(true)
			await CertificateService.create({
				title: {
					ru: titleRU,
					ua: titleUA,
					en: titleEN,
				},
				link,
				prev_link: prevLink,
			})
		} catch (e) {
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className={s.section}>
			<p className={s.heading}>Сертификаты</p>
			
			<div className={s.add_wrapper}>
				<div className={s.col}>
					<p className={s.add_heading}>Добавить сертификат</p>
					<p className={s.remark}>
						* Фото для превью 330 x 399
						<br />* Фото диплома 950 x 670
						<br />* Превью будет доступно ниже после заполнения всех полей
						<br />* Клик на превью покажет раскрытую версию диплома
					</p>
					<textarea
						className={s.input}
						onChange={(e) => setTitleRU(e.target.value)}
						value={titleRU}
						placeholder='(RU) Описание к диплому'
						rows={3}
					/>
					<textarea
						className={s.input}
						onChange={(e) => setTitleUA(e.target.value)}
						value={titleUA}
						placeholder='(UA) Описание к диплому'
						rows={3}
					/>
					<textarea
						className={s.input}
						onChange={(e) => setTitleEN(e.target.value)}
						value={titleEN}
						placeholder='(EN) Описание к диплому'
						rows={3}
					/>
					<input
						type='text'
						placeholder='Ссылка на фото диплома'
						onChange={(e) => setLink(e.target.value)}
						value={link}
						className={s.input}
					/>
					<input
						type='text'
						placeholder='Ссылка на превью'
						onChange={(e) => setPrevLink(e.target.value)}
						value={prevLink}
						className={s.input}
					/>
					<button
						disabled={
							isLoading ||
							!titleRU ||
							!titleEN ||
							!titleUA ||
							!link ||
							!prevLink
						}
						onClick={addCertificateHandler}
						className={s.add_button}
					>
						Добавить
					</button>
				</div>
				{titleRU && titleEN && titleUA && link && prevLink && (
					<div className={s.prev_section}>
						<div className={s.prev_wrapper}>
							<p className={s.title}>{titleRU}</p>
							<img
								className={s.prev_img}
								src={prevLink}
								alt='Тут должна появиться картинка превью'
							/>
							<div className={s.icon_arrow_wrapper}>
								<img
									className={s.icon_arrow}
									src='/icons/secondary_arrow_spanned.png'
									alt='arrow'
								/>
							</div>
						</div>
						<div className={s.prev_wrapper}>
							<p className={s.title}>{titleUA}</p>
							<img
								className={s.prev_img}
								src={prevLink}
								alt='Тут должна появиться картинка превью'
							/>
							<div className={s.icon_arrow_wrapper}>
								<img
									className={s.icon_arrow}
									src='/icons/secondary_arrow_spanned.png'
									alt='arrow'
								/>
							</div>
						</div>
						<div className={s.prev_wrapper}>
							<p className={s.title}>{titleEN}</p>
							<img
								className={s.prev_img}
								src={prevLink}
								alt='Тут должна появиться картинка превью'
							/>
							<div className={s.icon_arrow_wrapper}>
								<img
									className={s.icon_arrow}
									src='/icons/secondary_arrow_spanned.png'
									alt='arrow'
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
