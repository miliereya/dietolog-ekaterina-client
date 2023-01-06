import s from './Spinner.module.css'

export const Spinner = () => {
    return (
        <div className={s.section}>
            <div className={s.loader}></div>
        </div>
    )
}