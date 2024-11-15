import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Service from '../components/Service/Service'
import TravelSection from '../components/TravelSection/TravelSection'
import TravelPlace from '../components/TravelPlace/TravelPlace'
import HowToList from '../components/HowToList/HowToList'
import Features from '../components/Features/Features'

const Layout = () => {
    return (
        <>
            <Navbar />
            {/* <Service /> */}
            <TravelSection />
            <TravelPlace />
            <HowToList />
            <Features />
            <Outlet />
        </>
    )
}

export default Layout