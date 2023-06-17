import React from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { BiBell } from 'react-icons/bi'
import ActionButton from './ActionButton'
import Searchbar from './Searchbar'

const InfoSection = ({ title }: IInfoSectionProps) => {
    const handleClick = () => {}
    return (
        <div className='flex flex-row px-8 max-h-16 py-4 border-b justify-between'>
            <div className='flex flex-row gap-4'>
                <span>
                    <BsPersonFill className='text-blue-700 text-2xl'/>
                </span>
                <h3 className='font-bold text-xl'>{ title }</h3>
            </div>

            <div className='flex flex-row gap-5'>
                <Searchbar />
                <ActionButton action='add' onClick={ handleClick }/>
                <div className='flex h-8 w-8 bg-white items-center justify-center relative rounded-full'>
                    <BiBell className='text-gray-300'/> 
                    <div className='absolute h-2 w-2 rounded-full bg-red-600 top-0 right-0'/>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
