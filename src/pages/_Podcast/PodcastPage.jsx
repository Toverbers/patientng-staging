import { AppLayout } from '@/components/AppLayout'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Podcast/HeroSection'
import PodcastEpisodes from '@/components/Podcast/PodcastEpisodes'

export default function PodcastPage() {
  return (
    <AppLayout showHeader={true}>
      <HeroSection />
      <PodcastEpisodes />
      <Footer />
    </AppLayout>
  )
}