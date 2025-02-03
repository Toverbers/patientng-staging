import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import AvatarGroup from '@/components/AvatarGroup'
import Footer from '@/components/Footer'

// Placeholder data - this would be replaced by API call in the future
const stories = [
  {
    id: '1',
    image: "/beach photo.png",
    title: "A fighter, a survivor, and an inspiration to us all",
    author: "Parolodo James",
    excerpt: "Read about my journey of overcoming challenges and inspiring others."
  },
  {
    id: '2',
    image: "/yoga.png",
    title: "How I did XYZ with ABC in 1 Sec",
    author: "Parolodo James",
    excerpt: "Learn about my innovative approach to solving a common health problem."
  },
  {
    id: '3',
    image: "/young man.png",
    title: "My unexpected path to recovery",
    author: "Jane Doe",
    excerpt: "Discover how an unconventional treatment changed my life."
  },
  {
    id: '4',
    image: "/reading book.png",
    title: "Finding strength in community",
    author: "John Smith",
    excerpt: "How connecting with others helped me through my toughest times."
  }
]

const avatars = [
    { src: "/Avatar/avatar 1.png", alt: "Patient 1" },
    { src: "/Avatar/avatar 2.png", alt: "Patient 2" },
    { src: "/Avatar/avatar 3.png", alt: "Patient 3" },
    { src: "/Avatar/avatar 4.png", alt: "Patient 4" },
    { src: "/Avatar/avatar 5.png", alt: "Patient 5" },
    { src: "/Avatar/avatar 6.png", alt: "Patient 6" },
    { src: "/Avatar/avatar 7.png", alt: "Patient 7" },
    { src: "/Avatar/avatar 8.png", alt: "Patient 8" },
  ]

export default function CustomerStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
    <Header />
      <main className="container mx-auto mt-10 px-12 py-12">
        <div className="grid md:grid-cols-2 gap-8 px-6 items-center mb-16">
          <div className="relative">
            <img src="/smiling woman.png" alt="Inspiring patient" className="rounded-lg shadow-lg object-contain" />
            <div className="absolute bottom-4 -left-6  bg-white max-w-[18rem] p-3 rounded-lg shadow-lg">
              <p className="flex items-start  text-sm">
                <MessageSquare className="h-4 w-4 mr-2 text-emerald-500" />
                A fighter, a survivor, and an inspiration to us all.
              </p>
              <p className="text-xs text-gray-500 mt-2 ml-5">Sarah Thompson</p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">Explore inspiring patient stories from our community.</h1>
            <p className="text-xl text-gray-600 mb-6">Read inspiring stories from fellow patients or share your own to inspire others</p>
            <div className="flex space-x-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Share your story</Button>
              <Button variant="outline" className="text-emerald-500 border-emerald-500 hover:bg-emerald-50">
                Read stories
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-2">Trusted by 1M+ patients</p>
              {/* <div className="flex -space-x-2">
                {[...Array(6)].map((_, i) => (
                  <img key={i} src={`/placeholder.svg?height=40&width=40&text=${i+1}`} alt={`Patient ${i+1}`} className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div> */}
              <AvatarGroup avatars={avatars}/>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories?.map((story) => (
            <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={story.image} alt={story.title} className="w-full h-80 object-none" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{story.title}</h3>
                <p className="text-sm text-gray-500 mb-4">by {story.author}</p>
                <p className="text-sm text-gray-600 mb-4">{story.excerpt}</p>
                <Link to={`/stories/${story.id}`} className="text-emerald-500 hover:text-emerald-600 text-sm font-medium">
                  Read story →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}