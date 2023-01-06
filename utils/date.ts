import dayjs from 'dayjs'

export const formatDate = (date: Date, type: 's' | 'l' = 'l') => {
    if (type === 's') {
        return dayjs(date).format('D.M.YYYY')
    }
    return dayjs(date).format('D/M/YYYY - h:mm A')
}