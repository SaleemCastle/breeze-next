import React from 'react'
import { formatDate } from '../utils'

interface IPatientRowDetails {
    info: Patient
}
const PatientRowDetails = ({ info }: IPatientRowDetails) => {
    const { firstName, lastName, city, streetAddress, appointments, notes, created_at } = info
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`
    return (
        <div className='py-3 w-full bg-white rounded-lg border flex flex-row items-center pl-3 gap-2 mb-3 hover:shadow-md transition-all cursor-pointer'>
            <div className='h-3 w-3 border rounded-sm bg-white mr-3' />

            <div className='flex flex-row' style={{ flex: 2 }}>
                <span className='h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center'>
                    <h3 className='text-white font-medium'>{ initials }</h3>
                </span>
                <div className='flex flex-col ml-2'>
                    <h3 className='font-semibold'>{ `${firstName} ${lastName}` }</h3>
                    <h3 className='text-xs text-gray-400'>saleemcastle94@gmail.com</h3>
                </div>
            </div>

            <h3 className='flex-[1.5] font-semibold text-sm '>
                {'(876)-287-3021'}
            </h3>

            <h3 className='flex-[1.5] font-semibold text-sm'>
                { city }
            </h3>
            <h3 className='flex-[1.5] font-semibold text-sm'>
                {' - '}
            </h3>
            <h3 className='flex-[1.5] font-semibold text-sm'>
                {' - '}
            </h3>
            <h3 className='flex-[1.5] font-semibold text-sm'>
                { formatDate(created_at) }
            </h3>

        </div>
    )
}

export default PatientRowDetails
    