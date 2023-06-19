import React from 'react'
import { SlArrowRight } from 'react-icons/sl'
import CurrentTabDetailActionBox from './CurrentTabDetailActionBox'

const CurrentTabDetail = ({ currentTab }: { currentTab: string }) => {
    const handlePrint = () => {}
    const handleEdit = () => {}

    return (
        <div className='flex flex-row px-8 max-h-16 py-4 border-b justify-between'>
            <div className='flex flex-row gap-6 items-center'>
                <h3 className='capitalize text-blue-600 font-extrabold'>{ currentTab.substring(1).split('_').join(' ') }</h3>
                <span><SlArrowRight className='text-gray-400'/></span>
                <h3 className='text-gray-400'>Saleem Castle</h3>
            </div>

            <div className='flex flex-row gap-1 items-center'>
                <CurrentTabDetailActionBox icon='print' onClick={ handlePrint }/>
                <CurrentTabDetailActionBox icon='edit' action='Edit Patient' onClick={ handleEdit } containerStyles='max-h-[42px] px-5'/>
            </div>
        </div>
    )
}

export default CurrentTabDetail
