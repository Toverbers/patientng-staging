import Footer from '@/components/Footer'
import Header from '@/components/header'
import TimelineSection from '@/components/Homepage/TimelineComponent'
import React from 'react'
import { AboutHero } from './AboutHero'
import AboutInfo from './AboutInfo'
import SEO from '@/components/SEO'

const About = () => {
  return (
    <>
    <SEO
        title="About | Patient.ng"
        description="Amplifying Patient Voices in Nigeria"
        name="patient.ng/about"
        type="website"
      />
     <Header />
     <div className='box-border overflow-hidden'>
     <AboutHero />

     <AboutInfo />
     <TimelineSection />
    </div>
     <Footer />
     
    </>
  )
}

export default About