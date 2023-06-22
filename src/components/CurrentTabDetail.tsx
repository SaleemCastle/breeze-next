import React, { Fragment, useCallback, useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import CurrentTabDetailActionBox from './CurrentTabDetailActionBox'
import { useSelector } from 'react-redux'

import { Tabs, patientDataHeadings } from '../Constants'
import { AppState } from '../store/store'
import { Listbox, Transition } from '@headlessui/react'
import { BsCheck, BsChevronCompactDown } from 'react-icons/bs'

const CurrentTabDropdownFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState(patientDataHeadings[0])
    return (
        <div>
            <Listbox value={ selectedFilter } onChange={ setSelectedFilter }>
                <div className='relative mt-1 min-w-[200px]'>
                    <Listbox.Button className='text-gray-500 relative w-full cursor-default rounded bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                        <span className='block truncate'>{ selectedFilter }</span>
                        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                            <BsChevronCompactDown className='h-5 w-5 text-gray-500 ' aria-hidden='true'/>
                        </span>
                    </Listbox.Button>
                    <Transition
                    as={ Fragment }
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    >
                        <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                            {patientDataHeadings.map((heading, index) => (
                            <Listbox.Option
                                key={ index }
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                                    }`
                                }
                                value={ heading }
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                        className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                        }`}
                                        >
                                        { heading }
                                        </span>
                                        {selected ? (
                                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600'>
                                            <BsCheck className='h-5 w-5' aria-hidden='true' />
                                        </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
      )
}

const CurrentTabDetail = ({ currentTab }: { currentTab: string }) => {
    const handlePrint = () => {}
    const handleEdit = () => {}
    const patientListCount = useSelector((state: AppState) => state.patients.patients.patients.length )

    const renderContent = useCallback((tab: string) => {
        switch(tab) {
            case Tabs.PatientList.toLowerCase(): return (
                <div className='flex flex-row px-8 max-h-16 py-4 border-b justify-between'> 
                    <div className='flex flex-row gap-6 items-center'>
                        <div className='flex flex-row gap-3 items-baseline'>
                            <h3 className='text-2xl text-blue-600 font-extrabold'>{ patientListCount }</h3>
                            <h3 className='font-semibold text-gray-500'>{ `patient${patientListCount > 1 ? 's' : ''}` }</h3>
                        </div>
                        <span className='text-gray-400 text-2xl'>|</span>
                        <h3 className='text-gray-400 text-sm'>Sort by:</h3>
                        <CurrentTabDropdownFilter />
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <CurrentTabDetailActionBox icon='print' onClick={ handlePrint }/>
                        <CurrentTabDetailActionBox icon='filter' action='Filter' onClick={ handleEdit } containerStyles='max-h-[42px] px-5'/>
                        <CurrentTabDetailActionBox icon='column' action='Edit Column' onClick={ handleEdit } containerStyles='max-h-[42px] px-5'/>
                    </div>
                </div>
            )
            default: return (
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
    }, [currentTab])
    console.log(currentTab.substring(1).toLowerCase())
    return (
        <>
            { renderContent(currentTab.substring(1).split('_').join(' ').toLowerCase()) }
        </>
    )
}

export default CurrentTabDetail
