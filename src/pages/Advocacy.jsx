import { ComplaintGuideSection } from '@/components/Adovcacy/ComplaintGuideSection'
import { HelpSection } from '@/components/Adovcacy/HelpSection'
import { HeroSection } from '@/components/Adovcacy/HeroSection'
import { SignUpSection } from '@/components/Adovcacy/SignUp'
import { AppLayout } from '@/components/AppLayout'
import Footer from '@/components/Footer'
import React from 'react'

const Advocacy = () => {
  return (
    <AppLayout showHeader={true} loggedIn={true}>
        <HeroSection />
        <ComplaintGuideSection />
        <HelpSection />
        <SignUpSection />
        <Footer />
    </AppLayout>
  )
}

export default Advocacy