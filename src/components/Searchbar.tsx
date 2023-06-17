import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Searchbar = () => {
    return (
        <div className='flex flex-row rounded-full border w-48 h-8 overflow-hidden pl-2 items-center gap-1'>
            <BiSearch className='text-gray-400'/>
            <input type='text' className='w-full flex-9 outline-none border-none bg-transparent focus:ring-0 text-gray-400 placeholder-gray-400' placeholder='Search'/>
        </div>
    )
}

export default Searchbar
