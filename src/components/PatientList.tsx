import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import axios from '../lib/axios'
import { patientDataHeadings } from '../Constants'
import PatientRowDetails from './PatientRowDetails'

const PatientList = () => {
    const [patients, setPatients] = useState()
    useEffect(() => {
        axios
            .get('/api/patients')
            .then(res => console.log(res.data))
            .catch(error => {
            console.log(error)
            })
    }, [])
    return (
        <div className='px-8 py-4'>
            <div className='flex flex-row w-full items-center pl-3 gap-2 pb-3'>
                <div className='h-3 w-3 border rounded-sm bg-white mr-3' />
                {
                    patientDataHeadings.map((heading, index) => (
                        <h3 className={`flex-[1.5] ${index === 0 ? 'flex-grow-[2]' : ''} text-sm text-gray-400`} key={ index }>{ heading }</h3>
                    ))
                }
            </div>

            <PatientRowDetails />
        </div>
    )
}

export default PatientList
