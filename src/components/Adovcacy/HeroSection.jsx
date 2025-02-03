import { Button } from "@/components/ui/button"
import { ArrowDown, MessageSquare } from 'lucide-react'
import { CustomButton } from "../CustomButton"
import { Link } from "react-router"
import { motion } from "framer-motion"
import { SlideDown, SlideLeft, SlideRight } from "@/utility/animation"

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/young-afro-woman.jpg"
          alt="Hero background"
          className="w-full h-full object-cover brightness-[0.85]"
        />
      </div>

      {/* Content */}
      <div className="container z-10 mx-auto px-4 py-12 text-white">
        <div className="flex flex-col md:flex-row gap-8 justify-between px-4">
        <div className="max-w-2xl space-y-6">
          <motion.h1
          variants={SlideLeft(0.2)}
          whileInView={"animate"}
          initial="initial" 
          className="text-5xl font-bold leading-tight">
            Patient Advocacy Service.
          </motion.h1>
          <motion.p 
          variants={SlideLeft(0.3)}
          whileInView={"animate"}
          initial="initial"
          className="text-lg text-gray-200">
          Your trusted partner, advocating for your rights and wellbeing
          </motion.p>

          <motion.div
          variants={SlideDown(0.1)}
          whileInView={"animate"}
          initial="initial" 
          className="flex flex-wrap gap-4">
            <a href="#complaintGuide">
            <CustomButton buttonVariant={'primary'} className="bg-emerald-500 border-none">
              <ArrowDown className="mr-2 h-4 w-4" />
             How to make complaints
            </CustomButton>
            </a>
            <CustomButton variant="outline" className="text-emerald-500">
              <a href="#sign as advocate">Sign up as an advocate</a>
            </CustomButton>
          </motion.div>
        </div>

        {/* Testimonial Card */}
        <motion.div
        variants={SlideLeft(0.3)}
        whileInView={"animate"}
        initial="initial" 
        className="max-w-xs flex-shrink-0 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <div className="flex gap-2">
            <MessageSquare className="h-6 w-6 text-emerald-400" />
            <p className="text-sm">
              "Patient.ng helped me get a second opinion regarding my dad’s cancer treatment plan. We finally feel heard and understood"
            </p>
          </div>
          <p className="text-sm text-right mt-2">- Bukola</p>
        </motion.div>
      </div>
      </div>
    </div>
  )
}