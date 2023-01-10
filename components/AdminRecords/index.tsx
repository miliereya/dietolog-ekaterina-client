import { useEffect, useState } from 'react'
import { RecordsService } from '../../api/admin/records'
import { IRecord } from '../../models/IRecords'
import { formatDate } from '../../utils/date'
import { calculatePagginationArray, filterRecordsByApplied } from '../../utils/paggination'
import s from './AdminRecords.module.css'

export const AdminRecords = () => {
    const [records, setRecords] = useState<IRecord[]>([])
    const [chosenPage, setChosenPage] = useState<number>(1)

    const step = 6

    const fetchRecords = async () => {
        const res = await RecordsService.getMany()
        if (res.length !== 0) {
            setRecords(res)
        }
    }

    useEffect(() => {
        fetchRecords()
    }, [])

    const paggArr = calculatePagginationArray(step, records.length)

    return (
        <div className={s.section}>
            <p className={s.heading}>Записи</p>
            
            <div className={s.record_wrapper}>
                {records.map((r, index) => {
                    if (index < chosenPage * step - step || index > chosenPage * step - 1) return
                    const { _id, name, phone, email, isApplyed, createdAt } = r
                    return (
                        <div className={s.record} key={_id}>
                            <p className={s.text}><span>Имя:</span> {name}</p>
                            <p className={s.text}><span>Номер:</span> {phone}</p>
                            <p className={s.text}><span>Email:</span> {email}</p>
                            <p className={s.text}><span>Дата:</span> {formatDate(createdAt)}</p>
                        </div>
                    )
                })}
            </div>
            <div className={s.paggination_wrapper}>
                {paggArr.map(num => {
                    return (
                        <button
                            key={num}
                            className={s.paggination_button}
                            style={num === chosenPage ? {
                                backgroundColor: 'white',
                                color: 'rgb(117, 29, 217)',
                                border: '2px solid rgb(117, 29, 217)'
                            } : {}}
                            onClick={() => (setChosenPage(num), window.scrollTo(0, 0))}
                        >
                            {num}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}