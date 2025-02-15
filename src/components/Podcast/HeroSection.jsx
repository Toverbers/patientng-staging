import { Pause, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import AvatarGroup from '../AvatarGroup'
import { useRef, useState } from 'react'

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  const avatars = [
    { src: "/Avatar/avatar 4.png", alt: "AvatarA" },
    { src: "/Avatar/avatar 5.png", alt: "AvatarB" },
    { src: "/Avatar/avatar 6.png", alt: "AvatarC" },
    { src: "/Avatar/avatar 7.png", alt: "AvatarD" },
    { src: "/Avatar/avatar 8.png", alt: "AvatarE" },
    { src: "/Avatar/avatar 9.png", alt: "AvatarF" },
  ]

  return (
    <div className="relative bg-emerald-950 text-white py-16 md:h-[110vh]">
      <div className="mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header Content */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <h1 className="text-3xl lg:text-6xl font-bold leading-tight max-w-2xl">
            Find and Listen to your{' '}
              <br />
              favorite{' '}
              <span className="inline-block bg-emerald-500 px-2 rounded">
                Podcasts
              </span>
            </h1>

            {/* Testimonial */}
            <div className="lg:max-w-sm">
              <p className="text-lg mb-4">
              Each week, we narrate untold stories of patient experiences and the realities of healthcare professionals standing strongly by their side. From trials to triumphs, we amplify authentic voices that drive real empathy and advocacy for meaningful change.
              </p>
              <div className="flex items-center">
                <AvatarGroup avatars={avatars} />
              </div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster='/podcast placeholder.png'
            >
              <source src="/man podcast.mp4" type="video/mp4"  />
            </video>
            <Button 
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 rounded-full w-20 h-20"
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-10 w-10" />
                ) : 
                (
                  <Play className="h-10 w-10" />
                )}
                <span className="sr-only">{isPlaying ? 'Pause' : 'Play'} featured episode</span>
              {/* <Play className="h-10 w-10" />
              <span className="sr-only">Play featured episode</span> */}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}