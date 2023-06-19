import React from 'react'
import InfoSection from './InfoSection'
import CurrentTabDetail from './CurrentTabDetail'
import { Tabs } from '../Constants'
import { formatTabs } from '../utils'
import PatientList from './PatientList'

const MainArea = ({ currentTab }: { currentTab: string }) => {
    const renderTabDetailSection = (tab: string) => {
        console.log(tab)
        switch(tab) {
            case Tabs.PatientList.toLowerCase() : return <PatientList />
        }
    }
    return (
        <div className='flex-grow-[4] h-screen bg-gray-100'>
            <InfoSection title={'Saleem Castle'}/>
            <CurrentTabDetail currentTab={ currentTab } />
            { renderTabDetailSection(formatTabs(currentTab).substring(1)) }
        </div>
    )
}

export default MainArea
