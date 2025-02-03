import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import useAuthStore from '@/store/authStore'
import { motion } from 'framer-motion'
import { SlideDown, SlideUp } from '@/utility/animation'

export const HeroSection = () => {
  const {getme, myData} = useAuthStore()

  useEffect(()=> {
    getme()
  },[])
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster='/hallway.jpg'
      >
        <source src="/placeholder-video.mp4" type="video/mp4"  />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
        variants={SlideUp(0.2)}
        whileInView={"animate"}
        initial="initial" 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Uniting Hearts, Saving Lives!
        </motion.h1>
        <motion.p
        variants={SlideDown(0.3)}
        whileInView={"animate"}
        initial="initial" 
        className="text-xl mb-8 max-w-2xl">
        You can start a campaign and receive Green-heart likes to climb the leaderboard and get help when you need it. Our platform is simple and free!
        </motion.p>
        <motion.div
        variants={SlideDown(0.3)}
        whileInView={"animate"}
        initial="initial" 
        className="flex space-x-4">
          <Link to={'/crowdfunding/create'}>
          {myData? <Button className="bg-emerald-500 hover:bg-emerald-600 text-white ">
              Start a Campaign
            </Button> :
            <Link to="/login">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white ">
            Login to start Campaign
            </Button>
            </Link>
             }
                   
          </Link>
          <Link to={'/campaigns'}>
            <Button variant="outline" className="bg-white text-black hover:bg-gray/100 hover:text-emerald-500">
              See Campaigns
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection