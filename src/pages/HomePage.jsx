import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListing'
import AllJobBtn from '../components/AllJobBtn'


const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <JobListing/>
        <AllJobBtn/>
    </>
  )
}

export default HomePage