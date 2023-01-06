import { useEffect, useState } from 'react'
import { AdminService } from '../../api/admin/login'
import { AdminCertificates } from '../../components/AdminCertificates'
import { AdminForm } from '../../components/AdminForm'
import { AdminPrograms } from '../../components/AdminPrograms'
import { AdminRecords } from '../../components/AdminRecords'
import { AdminReviews } from '../../components/AdminReviews'


const AdminPanel = () => {
	const [isLogged, setIsLogged] = useState(false)

	useEffect(() => {
		const hash = localStorage.getItem('hash')
		if (hash) {
			const checkAuth = async () => {
				const login = await AdminService.checkAuth(hash)
				setIsLogged(login)
			}
			checkAuth()
		} else {
			setIsLogged(false)
		}
	}, [])

	return (
		<div>
			{!isLogged ? (
				<AdminForm />
			) : (
				<div
					style={{
						width: '920px',
						margin: '30px auto',
					}}
				>
					<AdminRecords />
					<AdminReviews />
					<AdminCertificates />
					<AdminPrograms />
				</div>
			)}
		</div>
	)
}

export default AdminPanel
