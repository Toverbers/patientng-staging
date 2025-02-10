import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight, SlideUp } from '@/utility/animation'

const Step = ({ number, title, description }) => (
  <div className="flex items-start mb-8">
    <motion.div
    variants={SlideUp(0.2)}
    whileInView={"animate"}
    initial="initial" 
    className="flex-shrink-0 w-10 h-10 bg-gray-200 text-black rounded-full flex items-center justify-center mr-4">
      {number}
    </motion.div>
    <div>
      <motion.h3
      variants={SlideLeft(0.3)}
      whileInView={"animate"}
      initial="initial" 
      className="text-xl font-semibold mb-2">{title}</motion.h3>
      <motion.p
      variants={SlideLeft(0.3)}
      whileInView={"animate"}
      initial="initial" 
      className="text-base text-gray-600">{description}</motion.p>
    </div>
  </div>
)

const HowItWorks = () => {
  const steps = [
    {
      title: "Start your Campaign",
      description: "Sign up to create an account and fill out the campaign registration form."
    },
    {
      title: "Promote your Campaign",
      description: "Share verified campaign link to boost visibility and gather Green-Heart likes."
    },
    {
      title: "Climb the Leaderboard",
      description: "Campaign with the highest number of Green-Heart likes wins every week."
    },
    {
      title: "Redeem your Prize",
      description: "Winner is directly notified to receive funds or assistance based on campaign details."
    }
  ]

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <motion.h2
        variants={SlideRight(0.3)}
        whileInView={"animate"}
        initial="initial" 
        className="text-2xl font-bold mb-8">Let's see how it works</motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <motion.p
            variants={SlideRight(0.3)}
            whileInView={"animate"}
            initial="initial" 
            className="text-gray-600 mb-8">
              Learn how campaigns helps fund critical health initiatives
            </motion.p>
            {steps.map((step, index) => (
              <Step key={index} number={index + 1} {...step} />
            ))}
            <Link to="/campaigns">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Support a Campaign
            </Button>
            </Link>
          </div>
          <motion.div
          variants={SlideLeft(0.3)}
          whileInView={"animate"}
          initial="initial" 
          className="md:w-1/2">
            <img 
              src="/howitworks.png" 
              alt="How it works illustration" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks