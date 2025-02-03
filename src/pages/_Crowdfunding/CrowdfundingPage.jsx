import React from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/CrowdFunding/HeroSection'
import FeaturedCampaigns from '@/components/CrowdFunding/FeatureCampaigns'
import ImpactStories from '@/components/CrowdFunding/ImpactStories'
import HowItWorks from '@/components/CrowdFunding/HowItWorks'
import StartCampaign from '@/components/CrowdFunding/StartCampaign'
import Footer from '@/components/Footer'

const CrowdfundingPage = () => {
  return (
    <div className='overflow-hidden box-border'>
      <Header isLoggedIn={false} />  
      <HeroSection />
      <FeaturedCampaigns />
      {/* <ImpactStories /> */}
      <HowItWorks />
      <StartCampaign />
      <Footer />
    </div>
  )
}

export default CrowdfundingPage