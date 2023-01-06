import { a_instance } from ".."
import { A_Login_Request } from "../../models/AdminReqs"

export const AdminService = {
    async login(props: A_Login_Request) {
        try {
            const res = await a_instance.post<string>('admin/login', {
                ...props
            })
            if (res.data) {
                localStorage.setItem('hash', res.data)
            } else {
                alert('Неверные данные')
            }
        } catch (e) {
            alert('Неверные данные')
        }
    },
    async checkAuth(hash: string) {
        try {
            await a_instance.post<string>('admin/check', {
                hash
            })
            return true
        } catch (e) {
            return false
        }
    }
}