import { a_instance } from ".."

export const RecordsService = {
    async apply(id: string) {
        try {
            const res = await a_instance.put('/records/apply',
                {
                    id
                })
            return res.data
        } catch (e: any) {
            alert('Ошибка')
        }
    },

    async getMany() {
        try {
            const res = await a_instance.get('/records')
            return res.data
        } catch (e: any) {
            alert('Не удалось загрузить записи')
        }
    }
}