import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import MainArea from '../components/MainArea'
import { NextPage } from 'next'
import axios from '../lib/axios'
import { useDispatch } from 'react-redux'
import { setPatients } from '../store/reducers/patients/patientSlice'


const Home: NextPage = () => {
    const [currentTab, setCurrentTab] = useState('#overview')
    const dispatch = useDispatch()

    useEffect(() => {
        axios
            .get('/api/patients')
            .then(res => dispatch(setPatients(res.data)))
            .catch(error => {
                console.log(error)
            })
    
      return () => {
        // second
      }
    }, [])
    
    return (
        <>
            <Head>
                <title>Dental Booking</title>
            </Head>

            <div className='relative w-full flex flex-row'>
                <Sidebar activeTab={ currentTab } setActiveTab={ setCurrentTab }/>
                <MainArea currentTab={ currentTab }/>
            </div>
        </>
    )
}

export default Home
