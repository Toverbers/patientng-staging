import React from 'react'
import Header from '../components/header'
import HeroSection from '../components/Homepage/HeroSectionComponent'
import TimelineSection from '@/components/Homepage/TimelineComponent'
import FeatureSection from '@/components/Homepage/FeatureComponent'
import CrowdfundingSection from '@/components/Homepage/CrowdFundingComponent'
import TestimonialSection from '@/components/Homepage/TestimonialComponent'
import BlogSection from '@/components/Homepage/BlogSectionComponent'
import PodcastWebinarsSection from '@/components/Homepage/PodcastComponent'
import { ContactUsSection } from '@/components/Homepage/ContactUsComponent'
import FAQSection from '@/components/Homepage/FAQComponent'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'


const Homepage = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-hidden box-border">
      <SEO
        title="Home | Patient.ng"
        description="Amplifying Patient Voices in Nigeria"
        name="patient.ng"
        type="website"
      />
        <Header />
        <HeroSection />
        <TimelineSection />
        <CrowdfundingSection />
        <FeatureSection />
        
        {/* <TestimonialSection /> */}
        <BlogSection />
        <PodcastWebinarsSection />
        <ContactUsSection />
        <FAQSection />
        <Footer />
    </div>
  )
}

export default Homepage