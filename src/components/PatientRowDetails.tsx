import React from 'react'

const PatientRowDetails = () => {
    return (
        <div className='py-3 w-full bg-white rounded-lg border flex flex-row items-center pl-3 gap-2 mb-3 hover:shadow-md transition-all'>
            <div className='h-3 w-3 border rounded-sm bg-white mr-3' />

            <div className='flex flex-row' style={{ flex: 2 }}>
                <span className='h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center'><h3 className='text-white font-medium'>SC</h3></span>
                <div className='flex flex-col ml-2'>
                    <h3 className='font-semibold'>Saleem Castle</h3>
                    <h3 className='text-xs text-gray-400'>saleemcastle94@gmail.com</h3>
                </div>
            </div>

            <h3 className='flex-[1.5] font-semibold'>
                {'(876)-287-3021'}
            </h3>

            <h3 className='flex-[1.5] font-semibold'>
                {'St. Catherine'}
            </h3>
            <h3 className='flex-[1.5] font-semibold'>
                {'Jan 21, 2023 - 1:30 pm'}
            </h3>
            <h3 className='flex-[1.5] font-semibold'>
                {'Dec 07, 2022'}
            </h3>
            <h3 className='flex-[1.5] font-semibold'>
                {'May 22, 2018'}
            </h3>

        </div>
    )
}

export default PatientRowDetails
    