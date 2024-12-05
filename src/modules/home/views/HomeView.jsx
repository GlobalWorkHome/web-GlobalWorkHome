import React from 'react'
import Navbar from '../components/navbar/page'
import Hero from '../components/hero/Hero'
import OurJobs from '../components/our-jobs/OurJobs'
import OurCategories from '../components/our-categories/OurCategories'


const HomeView = () => {
  return (

    <div>
        
        <Navbar />
        <Hero />
        <OurJobs/>
        <OurCategories/>

    </div>
  )
}

export default HomeView