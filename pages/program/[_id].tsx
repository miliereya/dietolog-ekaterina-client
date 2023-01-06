import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MainService } from '../../api/default/mainService'
import { ProgramItem } from '../../components/ProgramItem'
import { IProgram } from '../../models/IProgram'

const Program = () => {
	const _id = useRouter().query._id
	const [isLoading, setLoading] = useState<boolean>(true)
	const [program, setProgram] = useState<IProgram>()

	useEffect(() => {
		const fetchProgram = async () => {
			try {
                setProgram(undefined)
				if (typeof _id !== 'string') return
				setLoading(true)
				const res = await MainService.getOneProgram(_id)
                setProgram(res)
			} catch (e) {
                Router.push('/')
			} finally {
				setLoading(false)
			}
		}
		fetchProgram()
	}, [_id])
    
    if(isLoading) {
        return <div>Loading</div>
    }

    if(!isLoading && program) {
        return <ProgramItem program={program}/>
    }
    return <div></div>
}

export default Program
