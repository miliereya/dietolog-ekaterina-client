import { useState } from 'react'
import { AdminService } from '../../api/admin/login'
import { A_Login_Request } from '../../models/AdminReqs'
import s from './AdminForm.module.css'

export const AdminForm = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const loginHandler = () => {
        const props: A_Login_Request = {
            login,
            password
        }
        AdminService.login(props)
    }

    return (
        <div className={s.form}>
            <input
                className={s.input}
                type="text"
                placeholder='Логин'
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            />
            <input
                className={s.input}
                type="text"
                placeholder='Пароль'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className={s.button}
                onClick={loginHandler}
            >
                Войти
            </button>
        </div>
    )
}