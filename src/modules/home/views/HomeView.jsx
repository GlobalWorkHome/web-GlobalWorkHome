import React from 'react'
import Navbar from '../components/navbar/page'
import Hero from '../components/hero/Hero'
import OurJobs from '../components/our-jobs/OurJobs'
import OurCategories from '../components/our-categories/OurCategories'
import { WhyChooseUs } from '../components/why-choose-us/WhyChooseUs'
import { HowItWorks } from '../components/how-it-works/HowItWorks'
import Statistics from '../components/statistics/Statistics'
import Testimonials from '../components/testimonials/Testimonials'
import FeaturedCompanies from '../components/featured-companies/FeaturedCompanies'
import Cta from '../components/cta/Cta'
import Footer from '../components/footer/Footer'


const HomeView = () => {
  return (

    <div>
        
        <Navbar />
        <Hero />
        <OurJobs/>
        <OurCategories/>
        <WhyChooseUs/>
        <Statistics/>
        <HowItWorks/>
        <Testimonials/>
        <FeaturedCompanies/>
        <Cta/>
        <Footer/>

    </div>
  )
}

export default HomeView