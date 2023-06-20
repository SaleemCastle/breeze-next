import React, { useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../hooks/auth'
import Sidebar from '../components/Sidebar'
import MainArea from '../components/MainArea'


export default function Home() {
    // const { user } = useAuth({ middleware: 'guest' })
    const [currentTab, setCurrentTab] = useState('#overview')
    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className='relative w-full flex flex-row'>
                <Sidebar activeTab={ currentTab } setActiveTab={ setCurrentTab }/>
                <MainArea currentTab={ currentTab }/>
            </div>
        </>
    )
}
