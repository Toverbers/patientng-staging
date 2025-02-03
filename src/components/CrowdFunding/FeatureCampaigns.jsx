/* import React from 'react'
import { Button } from "@/components/ui/button"

const CampaignCard = ({ image, location, title, raised, goal, lastDonation }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <p className="text-sm text-gray-500 mb-2">{location}</p>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="mb-2">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-emerald-500 rounded-full" 
            style={{width: `${(raised / goal) * 100}%`}}
          ></div>
        </div>
      </div>
      <div className="flex justify-between text-sm mb-4">
        <span>₦{raised.toLocaleString()} raised</span>
        <span>of ₦{goal.toLocaleString()}</span>
      </div>
      <p className="text-sm text-gray-500 mb-4">Last donation {lastDonation}</p>
      <Button variant="outline" className="w-full text-emerald-500 border-emerald-500 hover:bg-emerald-50">
        See More Information
      </Button>
    </div>
  </div>
)

const FeaturedCampaigns = () => {
    const campaigns = [
        {
          image: "/victoria.png",
          location: "Ikeja, Lagos",
          title: "Save Osaze Odemwingie",
          raised: 100000,
          goal: 500000,
          lastDonation: "15m ago"
        },
        {
          image: "/victoria.png",
          location: "Victoria Island, Lagos",
          title: "Help Build a School for Underprivileged Children",
          raised: 250000,
          goal: 1000000,
          lastDonation: "1h ago"
        },
        {
          image: "/victoria.png",
          location: "Abuja, Nigeria",
          title: "Support Local Farmers in Crisis",
          raised: 75000,
          goal: 300000,
          lastDonation: "2h ago"
        }
      ];

    return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Campaigns</h2>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            See all Campaigns
          </Button>
        </div>
        <p className="text-gray-600 mb-8">
          Discover impactful health causes and contribute to campaigns making a difference.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCampaigns */

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import CampaignCard from './CampaignCard'
import { Link } from 'react-router-dom'
import { UseCampaignStore } from '@/store/campaignStore'
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight } from '@/utility/animation'

const FeaturedCampaigns = () => {
  const {getAllCampaigns, campaignData} = UseCampaignStore()

  useEffect(()=> {
    getAllCampaigns()
  },[])

  console.log("ALL CAMPAINGS", campaignData)

    const [campaigns, setCampaigns] = useState([
      {
        id: 1,
        title: "Save Osaze Odemwinge",
        location: "Ikeja, Lagos",
        description: "In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task.",
        image: "/donate image.png",
        raised: "100,000",
        goal: "500,000",
        lastDonation: "15m ago",
        progress: 20,
        likes: 50,
        isLiked: false
      },
      {
        id: 2,
        title: "Save Osaze Odemwinge",
        location: "Ikeja, Lagos",
        description: "In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task.",
        image: "/donate image.png",
        raised: "50,000",
        goal: "500,000",
        lastDonation: "15m ago",
        progress: 20,
        likes: 50,
        isLiked: false
      },
      {
        id: 3,
        title: "Save Osaze Odemwinge",
        location: "Ikeja, Lagos",
        description: "In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task.",
        image: "/donate image.png",
        raised: "100,00",
        goal: "500,000",
        lastDonation: "15m ago",
        progress: 20,
        likes: 50,
        isLiked: false
      }
    ]);

    const handleLike = (id) => {
      setCampaigns(prevCampaigns =>
        prevCampaigns.map(campaign =>
          campaign.id === id
            ? { 
                ...campaign, 
                likes: campaign.isLiked ? campaign.likes - 1 : campaign.likes + 1,
                isLiked: !campaign.isLiked
              }
            : campaign
        )
      )
    }

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h2
          variants={SlideLeft(0.3)}
          whileInView={"animate"}
          initial="initial" 
          className="text-2xl font-bold">Featured Campaigns</motion.h2>
          <Link to={'/campaigns'}>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              See all Campaigns
            </Button>
          </Link>     
        </div>
        <motion.p
        variants={SlideRight(0.3)}
        whileInView={"animate"}
        initial="initial" 
        className="text-gray-600 mb-8">
          Discover compelling cases and donate Green-Heart likes to promote campaigns that resonate with you.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaignData?.slice(0, 3).map((campaign, index) => (
            <CampaignCard key={index} campaign={campaign} onLike={() => handleLike(campaign?._id)} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCampaigns