import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AppLayout } from '@/components/AppLayout'

// Mock data to be replace with API call later
const webinarData = {
  tag: "WEBINAR",
  title: "I was suddenly thrust into a world of uncertainty and fear. But amidst the pain.",
  content: `My name is Slau, and I've faced more challenges in my health journey than I ever thought possible. Diagnosed with a rare autoimmune disease at the age of 25, I was suddenly thrust into a world of uncertainty and fear. But amidst the pain and confusion, I found something unexpected: strength.

  For years, I battled flare-ups, hospitalizations, and setbacks that tested my resolve. Each day felt like a marathon, with no finish line in sight. But through it all, I refused to let my illness define me. With the unwavering support of my family, friends, and medical team, I learned to embrace every hurdle as an opportunity for growth.`,
  speakers: [
    {
      name: "Abayomi Olowu",
      role: "CEO",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Adekunle Taiwp",
      role: "UX Designer @ Microsoft",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ],
  promotionalText: "patient.ng is the only XXXXXXXxxxxxxxxxxxxxxxxxx s the only XXXXXXXxxxxxxxxxxxxxxxxxx the only XXX"
}

export default function WebinarDetailsPage() {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <AppLayout>
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-sm rounded-md mb-6">
              {webinarData.tag}
            </span>
            
            <h1 className="text-4xl font-bold mb-8">
              {webinarData.title}
            </h1>

            <div className="prose max-w-none mb-12">
              {webinarData.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-gray-50 p-8 max-w-md rounded-lg mb-8">
              <h2 className="font-semibold mb-6">Featured speakers</h2>
              <div className="space-y-4">
                {webinarData.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={speaker.avatar} alt={speaker.name} />
                      <AvatarFallback>{speaker.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{speaker.name}</p>
                      <p className="text-sm text-gray-500">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <p className="text-gray-600 mb-4">{webinarData.promotionalText}</p>
              <Button variant="outline" className="text-emerald-500 border-emerald-500">
                Signup for free
              </Button>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-1">
            <div  id='#webinar' className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-center mb-6">Watch On-Demand</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">
                      First name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="James"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">
                      Last name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Brown"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="james@patient.ng"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm text-gray-600 mb-1">
                    Phone number
                  </label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="0810 000 0000"
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AppLayout>
  )
}