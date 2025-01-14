import React from 'react'
import { AiFillPrinter } from 'react-icons/ai'
import { FiColumns, FiEdit } from 'react-icons/fi'
import { RiFilter2Fill } from 'react-icons/ri'

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
            case 'filter': return <RiFilter2Fill className={ className }/>
            case 'column': return <FiColumns className={ className }/>
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
