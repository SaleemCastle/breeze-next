import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patientDataHeadings } from '../Constants'
import PatientRowDetails from './PatientRowDetails'
import { AppState } from '../store/store'

const PatientList = () => {
    const patients = useSelector((state: AppState) => state.patients.patients.patients)
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
            {
                patients.map((patient: Patient) => (
                    <PatientRowDetails key={ patient.id } info={ patient }/>
                ))
            }
        </div>
    )
}

export default PatientList
