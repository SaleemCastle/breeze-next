import React from 'react'
import Image from 'next/image'
import { RiMenuFoldFill } from 'react-icons/ri'

const Sidebar = () => {
    return (
        <div className='py-4 min-h-screen max-w-[20%] bg-white'>
            <div className='flex flex-row px-3 gap-3 items-center'>
                <Image src='/logo/pure_pearl.svg' alt='logo' width={ 30 } height={ 30 } className='object-contain'/>
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold'>Pure Pearl Dental</h3>
                    <p className='text-xs'>Making smiles brighter each day</p>
                </div>
                <span>
                    <RiMenuFoldFill className='text-gray-500 text-lg'/>
                </span>
            </div>
        </div>
    )
}

export default Sidebar
