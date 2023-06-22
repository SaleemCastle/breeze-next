import React from 'react'
import { AiFillPrinter } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

interface ICurrentTabDetailActionBoxProps {
    icon: string
    action?: string
    containerStyles?: string
    onClick: () => void
}

const CurrentTabDetailActionBox = ({  icon, action, containerStyles, onClick }: ICurrentTabDetailActionBoxProps) => {
    const displayIcon = (icon: string, className: string) => {
        switch(icon) {
            case 'print': return <AiFillPrinter className={ className }/>
            case 'edit': return <FiEdit className={ className }/> 
        }
    } 
    return (
        <button className={`${containerStyles ? containerStyles : ''} flex flex-row gap-2 items-center rounded-md border justify-center py-3 px-3 bg-white`} onClick={ onClick }>
            <span>{ displayIcon(icon, 'text-gray-400') }</span>
            {
                action
                ?
                <h3 className='text-sm text-gray-400'>{ action }</h3>
                :
                null
            }
        </button>
    )
}

export default CurrentTabDetailActionBox
