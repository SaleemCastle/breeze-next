import React, { useState } from 'react'
import Image from 'next/image'
import { RiMenuFoldFill } from 'react-icons/ri'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsFillCalendar3EventFill, BsPersonFill } from 'react-icons/bs'
import { Tabs, sidebarTabs } from '../Constants'
import { AiOutlineMessage } from 'react-icons/ai'
import { IoSettings } from 'react-icons/io5'
import { MdDashboard, MdPayment } from 'react-icons/md'
import { Transition } from '@headlessui/react'

const getIcons = (tab: Tabs, active: boolean) => {
    switch(tab) {
        case Tabs.Calendar: return <BsFillCalendar3EventFill className={`text-xl ${active ? 'text-white' : 'text-black'} font-medium`}/>
        case Tabs.Messages: return <AiOutlineMessage className={`text-xl ${active ? 'text-white' : 'text-black'} font-medium`}/>
        case Tabs.Overview: return <MdDashboard className={`text-xl ${active ? 'text-white' : 'text-black'} font-medium`}/>
        case Tabs.PatientList: return <BsPersonFill className={`text-xl ${active ? 'text-white' : 'text-black'} font-medium`}/>
        case Tabs.PaymentInformation: return <MdPayment className={`text-xl ${active ? 'text-white' : 'text-black'} font-medium`}/>
        case Tabs.Settings: return <IoSettings className={`text-xl ${active ? 'text-white' : 'text-black'} font-medium`}/>
    }
}

const Sidebar = () => {
    const router = useRouter();
    const [currentTab, setCurrentTab] = useState(sidebarTabs[0])

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
            <div className='mt-4 flex flex-col'>
                {
                    sidebarTabs.map((tab, index) => {
                        const isTwoWordsOrMore = tab.split(' ').length > 1
                        const link = isTwoWordsOrMore ? tab.split(' ').join('_').toLowerCase() : tab.toLowerCase()
                        return (
                        <Transition
                            show={true}
                            enter="transition-opacity duration-75"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Link 
                                onClick={(e) => {
                                    e.preventDefault()

                                    setCurrentTab((link as string).toLowerCase())
                                }}
                                href={`/${ link }`} 
                                key={ index }
                                className={`border-b-[4px]  pl-6 pr-5 pt-4 pb-2 flex flex-row gap-3 ${currentTab === link ? 'bg-blue-600 border-b-blue-800' : 'bg-white border-b-white'}`}
                            >
                                <span>{ getIcons(tab as Tabs, currentTab === link) }</span>
                                <h3 className={`font-medium ${currentTab === link ? 'text-white' : 'text-black'}`}>{ tab }</h3>
                            </Link>
                        </Transition>
                    )})
                }
            </div>
        </div>
    )
}

export default Sidebar
