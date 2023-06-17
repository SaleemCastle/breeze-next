import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const ActionButton = ({ action, onClick, containerStyles }: { action: 'add' | 'like', onClick: () => void, containerStyles?: string }) => {
    return (
        <button className={`outline-0 bg-blue-600 flex rounded-full h-8 w-8 items-center justify-center ${containerStyles ? containerStyles : ''}`} onClick={ onClick }>
            {
                action === 'add' ? <AiOutlinePlus className='text-white font-bold'/> : null
            }
        </button>
    )
}

export default ActionButton
