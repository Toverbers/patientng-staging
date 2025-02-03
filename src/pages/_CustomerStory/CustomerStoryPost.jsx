import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Link } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Header from '@/components/header'
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitch, FaTwitter } from 'react-icons/fa'

// This is a placeholder for the API data structure
const storyData = {
  id: 1,
  title: "A fighter, a survivor, and an inspiration to us all",
  image: "/beach photo.png",
  content: `
    My name is Slau, and I've faced more challenges in my health journey than I ever thought possible. Diagnosed with a rare autoimmune disease at the age of 25, I was suddenly thrust into a world of uncertainty and fear. But amidst the pain and confusion, I found something unexpected: strength.

    For years, I battled flare-ups, hospitalizations, and setbacks that tested my resolve. Each day felt like a marathon, with no finish line in sight. But through it all, I refused to let my illness define me. With the unwavering support of my family, friends, and medical team, I learned to embrace every hurdle as an opportunity for growth.

    Today, as I look back on my journey, I'm filled with gratitude for the lessons it has taught me. I've discovered an inner resilience I never knew I had and forged connections with fellow warriors who understand the fight firsthand. And while my journey is far from over, I face the future with courage and determination, knowing that I am stronger than the challenges that come my way.

    To anyone navigating their own health struggles, I offer this message: You are not alone. Your story is a beacon of hope, a testament to the power of resilience in the face of adversity. Together, we can overcome anything life throws our way.
  `,
  author: "Slau Thompson"
}

export default function CustomerStoryPost() {
  const { id } = useParams()
  // In a real application, you would fetch the story data based on the id
  // For now, we'll use the placeholder data

  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    const currentUrl = window.location.href
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 mt-10 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img src={storyData.image} alt={storyData.title} className="w-full h-[600px] rounded-lg object-contain" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">{storyData.title}</h1>
              <div className="space-y-4">
                {storyData.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-[#68727D]">{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col items-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-400">
                    <FaGoogle className="h-5 w-5" />
                    <span className="sr-only">Share on Google</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-500">
                    <FaFacebook className="h-5 w-5" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-blue-400 hover:text-blue-300">
                    <FaTwitter className="h-5 w-5" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-blue-700 hover:text-blue-600">
                    <FaLinkedin className="h-5 w-5" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-blue-700 hover:text-blue-600">
                    <FaTwitch className="h-5 w-5" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
                <p className="text-gray-400 mb-4">OR</p>
                <Button 
                  variant="" 
                  className="text-white border-white hover:bg-white hover:text-black"
                  onClick={handleShare}
                >
                  <Link className="h-4 w-4 mr-2" />
                  {copied ? 'Copied!' : 'Share'}
                </Button>
              </div>
          </div>
        </div>
      </main>
    </div>
  )
}