import { a_instance } from ".."

export const ReviewService = {
    async getManyNotApplied() {
        try {
            const res = await a_instance.get('/reviews/not-applied')
            return res.data
        } catch (e) {
            alert('Не удалось загрузить отзывы')
        }
    },

    async apply(id: string) {
        try {
            const res = await a_instance.put('/reviews/apply', {
                id
            })
            return res.data
        } catch (e: any) {
            alert('Не удалось загрузить записи')
        }
    },

    async delete(id: string) {
        try {
            const res = await a_instance.post('/reviews/delete', {
                id
            })
            return res.data
        } catch (e: any) {
            alert('Не удалось загрузить записи')
        }
    }
}