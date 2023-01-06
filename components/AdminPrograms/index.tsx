import { useState } from 'react'
import { programService } from '../../api/admin/programs'
import { ILanguagedString } from '../../models/GlobalModels'
import { IOption, IProgram, IRadio } from '../../models/IProgram'
import s from './AdminPrograms.module.css'

export const AdminPrograms = () => {
	const [titleRU, setTitleRU] = useState<string>('')
	const [titleUA, setTitleUA] = useState<string>('')
	const [titleEN, setTitleEN] = useState<string>('')
	const [link, setLink] = useState<string>('')
	const [link_small, setLink_small] = useState<string>('')
	const [price, setPrice] = useState<number>()
	const [descriptionRU, setDescriptionRU] = useState<string>('')
	const [descriptionUA, setDescriptionUA] = useState<string>('')
	const [descriptionEN, setDescriptionEN] = useState<string>('')
	const [descriptionRU_short, setDescriptionRU_short] = useState<string>('')
	const [descriptionUA_short, setDescriptionUA_short] = useState<string>('')
	const [descriptionEN_short, setDescriptionEN_short] = useState<string>('')
	const [optionRU, setOptionRU] = useState<string>('')
	const [optionUA, setOptionUA] = useState<string>('')
	const [optionEN, setOptionEN] = useState<string>('')
	const [options, setOptions] = useState<ILanguagedString[]>([])
	const [radioTitleRU, setRadioTitleRU] = useState<string>('')
	const [radioTitleUA, setRadioTitleUA] = useState<string>('')
	const [radioTitleEN, setRadioTitleEN] = useState<string>('')
	const [radioTitleRU_short, setRadioTitleRU_short] = useState<string>('')
	const [radioTitleUA_short, setRadioTitleUA_short] = useState<string>('')
	const [radioTitleEN_short, setRadioTitleEN_short] = useState<string>('')
	const [radioOptionRU, setRadioOptionRU] = useState<string>('')
	const [radioOptionUA, setRadioOptionUA] = useState<string>('')
	const [radioOptionEN, setRadioOptionEN] = useState<string>('')
	const [radioOptionRU_short, setRadioOptionRU_short] = useState<string>('')
	const [radioOptionUA_short, setRadioOptionUA_short] = useState<string>('')
	const [radioOptionEN_short, setRadioOptionEN_short] = useState<string>('')
	const [radioOptions, setRadioOptions] = useState<IOption[]>([])
	const [radios, setRadios] = useState<IRadio[]>([])
	const [isLoading, setLoading] = useState<boolean>(false)

	const addOptionHandler = () => {
		setOptions((prev) => [
			...prev,
			{ ru: optionRU, ua: optionUA, en: optionEN },
		])
		setOptionRU('')
		setOptionUA('')
		setOptionEN('')
	}

	const addRadioHandler = () => {
		setRadios((prev) => [
			...prev,
			{
				title: { ru: radioTitleRU, ua: radioTitleUA, en: radioTitleEN },
				title_short: {
					ru: radioTitleRU_short,
					ua: radioTitleUA_short,
					en: radioTitleEN_short,
				},
				options: radioOptions,
			},
		])
		setRadioTitleRU('')
		setRadioTitleUA('')
		setRadioTitleEN('')
		setRadioTitleRU_short('')
		setRadioTitleUA_short('')
		setRadioTitleEN_short('')
		setRadioOptions([])
	}

	const addRadioOptionHandler = () => {
		setRadioOptions((prev) => [
			...prev,
			{
				answer: { ru: radioOptionRU, ua: radioOptionUA, en: radioOptionEN },
				answer_short: {
					ru: radioOptionRU_short,
					ua: radioOptionUA_short,
					en: radioOptionEN_short,
				},
			},
		])
		setRadioOptionRU('')
		setRadioOptionUA('')
		setRadioOptionEN('')
		setRadioOptionRU_short('')
		setRadioOptionUA_short('')
		setRadioOptionEN_short('')
	}

	const addProgramHandler = async () => {
		try {
			if (!price) throw 'e'
			const props: IProgram = {
				title: {
					ru: titleRU,
					ua: titleUA,
					en: titleEN,
				},
				price: price,
				link: link,
				link_small,
				description: {
					ru: descriptionRU,
					ua: descriptionUA,
					en: descriptionEN,
				},
				description_short: {
					ru: descriptionRU_short,
					ua: descriptionUA_short,
					en: descriptionEN_short,
				},
				radios: radios,
				included: options,
			}
			await programService.create(props)
			setRadioTitleRU('')
			setRadioTitleUA('')
			setRadioTitleEN('')
			setRadioOptions([])
			setRadioOptionRU('')
			setRadioOptionUA('')
			setRadioOptionEN('')
			setOptionRU('')
			setOptionUA('')
			setOptionEN('')
			setOptions([])
			setRadios([])
			setTitleEN('')
			setTitleRU('')
			setTitleUA('')
			setDescriptionEN('')
			setDescriptionRU('')
			setDescriptionUA('')
			setDescriptionEN_short('')
			setDescriptionRU_short('')
			setDescriptionUA_short('')
			setRadioOptionRU_short('')
			setRadioOptionUA_short('')
			setRadioOptionEN_short('')
			setRadioTitleRU_short('')
			setRadioTitleUA_short('')
			setRadioTitleEN_short('')
			setPrice(0)
			setLink('')
		} catch (e) {
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className={s.section}>
			<p className={s.heading}>Программы</p>
			<div className={s.add_wrapper}>
				<p className={s.remark}>
					* Фото программы 1500 x 2250
					<br />* Маленькое фото программы 640 x 160
					<br />* Превью будет доступно ниже после заполнения всех полей
					<br />* Клик на превью покажет раскрытую версию карточки
				</p>
				<input
					type='text'
					placeholder='(RU) Название программы'
					onChange={(e) => setTitleRU(e.target.value)}
					value={titleRU}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(UA) Название программы'
					onChange={(e) => setTitleUA(e.target.value)}
					value={titleUA}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(EN) Название программы'
					onChange={(e) => setTitleEN(e.target.value)}
					value={titleEN}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='Ссылка на фото'
					onChange={(e) => setLink(e.target.value)}
					value={link}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='Ссылка на моб. версию фото'
					onChange={(e) => setLink_small(e.target.value)}
					value={link_small}
					className={s.input}
				/>
				<input
					type='number'
					placeholder='Цена'
					onChange={(e) => setPrice(parseInt(e.target.value))}
					value={price}
					className={s.input}
				/>
				<textarea
					placeholder='(RU) Описание'
					onChange={(e) => setDescriptionRU(e.target.value)}
					value={descriptionRU}
					className={s.input}
				/>
				<textarea
					placeholder='(UA) Описание'
					onChange={(e) => setDescriptionUA(e.target.value)}
					value={descriptionUA}
					className={s.input}
				/>
				<textarea
					placeholder='(EN) Описание'
					onChange={(e) => setDescriptionEN(e.target.value)}
					value={descriptionEN}
					className={s.input}
				/>
				<textarea
					placeholder='(RU) Описание (сокр)'
					onChange={(e) => setDescriptionRU_short(e.target.value)}
					value={descriptionRU}
					className={s.input}
				/>
				<textarea
					placeholder='(UA) Описание (сокр)'
					onChange={(e) => setDescriptionUA_short(e.target.value)}
					value={descriptionUA}
					className={s.input}
				/>
				<textarea
					placeholder='(EN) Описание (сокр)'
					onChange={(e) => setDescriptionEN_short(e.target.value)}
					value={descriptionEN}
					className={s.input}
				/>
				<p className={s.heading_small}>В программу входят</p>
				{options.length !== 0 && (
					<div>
						<p className={s.option_heading}>Список:</p>
						{options.map((o, i) => (
							<div key={o.en}>
								<p>{i + 1}:</p>
								<p className={o.ru}>RU: {o.ru}</p>
								<p className={o.ua}>UA: {o.ua}</p>
								<p className={o.en}>EN: {o.en}</p>
							</div>
						))}
					</div>
				)}
				<input
					type='text'
					placeholder='(RU) Добавить опцию'
					onChange={(e) => setOptionRU(e.target.value)}
					value={optionRU}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(UA) Добавить опцию'
					onChange={(e) => setOptionUA(e.target.value)}
					value={optionUA}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(EN) Добавить опцию'
					onChange={(e) => setOptionEN(e.target.value)}
					value={optionEN}
					className={s.input}
				/>
				<div className={s.btn_wrapper}>
					<button
						onClick={addOptionHandler}
						className={s.btn}
						disabled={!optionRU || !optionUA || !optionEN}
					>
						Добавить опцию
					</button>
					<button
						onClick={() => setOptions([])}
						className={s.btn_delete}
						disabled={options.length === 0}
					>
						Отчистить опции
					</button>
				</div>
				<p className={s.heading_small}>Вопросы к программе</p>
				<input
					type='text'
					placeholder='(RU) Название вопроса'
					onChange={(e) => setRadioTitleRU(e.target.value)}
					value={radioTitleRU}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(UA) Название вопроса'
					onChange={(e) => setRadioTitleUA(e.target.value)}
					value={radioTitleUA}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(EN) Название вопроса'
					onChange={(e) => setRadioTitleEN(e.target.value)}
					value={radioTitleEN}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(RU) Название вопроса (сокр)'
					onChange={(e) => setRadioTitleRU_short(e.target.value)}
					value={radioTitleRU_short}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(UA) Название вопроса (сокр)'
					onChange={(e) => setRadioTitleUA_short(e.target.value)}
					value={radioTitleUA_short}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(EN) Название вопроса (сокр)'
					onChange={(e) => setRadioTitleEN_short(e.target.value)}
					value={radioTitleEN_short}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(RU) Вариант ответа'
					onChange={(e) => setRadioOptionRU(e.target.value)}
					value={radioOptionRU}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(UA) Вариант ответа'
					onChange={(e) => setRadioOptionUA(e.target.value)}
					value={radioOptionUA}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(EN) Вариант ответа'
					onChange={(e) => setRadioOptionEN(e.target.value)}
					value={radioOptionEN}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(RU) Вариант ответа (сокр)'
					onChange={(e) => setRadioOptionRU_short(e.target.value)}
					value={radioOptionRU_short}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(UA) Вариант ответа (сокр)'
					onChange={(e) => setRadioOptionUA_short(e.target.value)}
					value={radioOptionUA_short}
					className={s.input}
				/>
				<input
					type='text'
					placeholder='(EN) Вариант ответа (сокр)'
					onChange={(e) => setRadioOptionEN_short(e.target.value)}
					value={radioOptionEN_short}
					className={s.input}
				/>
				{radioOptions.length !== 0 && (
					<div>
						<p className={s.option_heading}>Варианты ответа:</p>
						{radioOptions.map((o, i) => (
							<div key={o.answer.en}>
								<p>{i + 1}:</p>
								<p>RU: {o.answer.ru}</p>
								<p>UA: {o.answer.ua}</p>
								<p>EN: {o.answer.en}</p>
							</div>
						))}
					</div>
				)}
				<div className={s.btn_wrapper}>
					<button
						onClick={addRadioOptionHandler}
						className={s.btn}
						disabled={!radioOptionRU || !radioOptionUA || !radioOptionEN}
					>
						Добавить вариант
					</button>
					<button
						onClick={() => setRadioOptions([])}
						className={s.btn_delete}
						disabled={radioOptions.length === 0}
					>
						Отчистить варианты
					</button>
				</div>
				<button
					onClick={addRadioHandler}
					className={s.btn_full}
					disabled={
						radioOptions.length < 2 ||
						!radioTitleRU ||
						!radioTitleUA ||
						!radioTitleEN
					}
				>
					Добавить вопрос
				</button>
				<button
					onClick={() => setRadios([])}
					className={s.btn_delete}
					disabled={radios.length === 0}
					style={{ width: '100%' }}
				>
					Отчистить вопросы
				</button>
				{radios.length !== 0 && (
					<div>
						<p className={s.option_heading}>Список вопросов</p>
						{radios.map((r, i) => (
							<div key={r.title.en}>
								<p>{i + 1}: </p>
								<p>RU: {r.title.ru}</p>
								<p>UA: {r.title.ua}</p>
								<p>EN: {r.title.en}</p>
								{r.options.map((o, i) => (
									<div key={o.answer.en} className={s.option_wrapper}>
										<p>{i + 1})</p>
										<p>RU: {o.answer.ru}</p>
										<p>UA: {o.answer.ua}</p>
										<p>EN: {o.answer.en}</p>
									</div>
								))}
							</div>
						))}
					</div>
				)}
				<button
					style={{
						marginTop: '20px',
						padding: '15px',
						fontSize: '22px',
					}}
					onClick={addProgramHandler}
					className={s.btn_full}
					disabled={
						!titleEN ||
						!titleRU ||
						!titleUA ||
						!descriptionEN ||
						!descriptionRU ||
						!descriptionUA ||
						!descriptionEN_short ||
						!descriptionRU_short ||
						!descriptionUA_short ||
						!price ||
						radios.length === 0 ||
						options.length === 0 ||
						!link ||
						isLoading
					}
				>
					Добавить программу
				</button>
			</div>
		</div>
	)
}
