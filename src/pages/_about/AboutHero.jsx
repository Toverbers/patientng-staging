import { Button } from "@/components/ui/button"
import { ArrowDown, MessageSquare } from 'lucide-react'
//import { CustomButton } from "../CustomButton"
import { Link } from "react-router"
import { motion } from "framer-motion"
import { SlideDown, SlideLeft, SlideRight } from "@/utility/animation"
import { CustomButton } from "@/components/CustomButton"

export function AboutHero() {
  return (
    <div className="relative md:min-h-[85vh] flex items-center py-[40px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about.jpg"
          alt="Hero background"
          className="w-full h-full object-cover brightness-[0.75]"
        />
      </div>

      {/* Content */}
      <div className="container z-10 mx-auto px-4 py-12 text-white">
        <div className="flex flex-col md:flex-row gap-8 justify-between px-4">
        <div className="max-w-2xl space-y-4 mx-auto flex flex-col items-center">
          <motion.h1
          variants={SlideLeft(0.2)}
          whileInView={"animate"}
          initial="initial" 
          className="text-3xl md:text-7xl font-bold leading-tight">
            Our Story
          </motion.h1>
          <motion.p 
          variants={SlideLeft(0.3)}
          whileInView={"animate"}
          initial="initial"
          className="text-lg text-gray-200 text-center ">
          We are dedicated team of advocates facilitate a patient community where members feel supported, heard and empowered to make informed decisions that improve their healthcare outcomes.
          </motion.p>

          <motion.div
          variants={SlideDown(0.1)}
          whileInView={"animate"}
          initial="initial" 
          className="flex flex-wrap gap-4 justify-center">
            <a href="#info">
            <CustomButton buttonVariant={'primary'} className="bg-emerald-500 border-none">
              <ArrowDown className="mr-2 h-4 w-4" />
             Learn More
            </CustomButton>
            </a>
            {/* <CustomButton variant="outline" className="text-emerald-500">
              <a href="#sign as advocate">Sign up as an advocate</a>
            </CustomButton> */}
          </motion.div>
        </div>

       
      </div>
      </div>
    </div>
  )
}