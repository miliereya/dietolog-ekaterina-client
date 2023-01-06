import axios from 'axios'
import { SERVER_API } from '../config'


//Default API
export const instance = axios.create({
    baseURL: SERVER_API
})


//Admin API
let hash
if (typeof window !== 'undefined') {
    hash = localStorage.getItem("hash")
}

export const a_instance = axios.create({
	withCredentials: true,
	baseURL: SERVER_API,
	headers: {
		hash: hash
	},
})
