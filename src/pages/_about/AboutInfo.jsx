import { CustomButton } from '@/components/CustomButton'
import { ArrowDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import {motion} from 'framer-motion'
import { SlideLeft, SlideRight } from '@/utility/animation'

const AboutInfo = () => {
  return (
    <section className='py-[30px] md:py-[80px] px-8' id="info">
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1 flex flex-col justify-center gap-3'>
            <motion.h2
            variants={SlideLeft(0.1)}
            whileInView={"animate"}
            initial="initial"  
            className='text-3xl md:text-6xl font-bold'>What we do</motion.h2>
            <motion.p
             variants={SlideLeft(0.2)}
             whileInView={"animate"}
             initial="initial"
            className='text-base'>We understand patient realities in our country and share their stories through our campaigns to help them find the support they need. We facilitate a community where patients feel heard, supported, and empowered to take charge of their own healthcare experience.</motion.p>
            <motion.p
             variants={SlideLeft(0.2)}
             whileInView={"animate"}
             initial="initial"
            className='text-base'>We collaborate with healthcare professionals, organizations and communities to drive sustainable solutions that enhance patient experiences in Nigeria.</motion.p>
           
            <motion.p
             variants={SlideLeft(0.2)}
             whileInView={"animate"}
             initial="initial"
            className='text-base'>We help members find data-driven insights based on their experiences. Giving us feedback can help others make informed decisions about their healthcare provider.</motion.p>
            
            <div className='my-5'>
            <CustomButton className=" bg-emerald-500 hover:bg-emerald-600 hover:text-white border-none ">
               <Link to="/contact" className='text-white'>Contact us now</Link>
            </CustomButton>
            </div>
          </div>

          <div className='flex-1'>
            <motion.img
            variants={SlideRight(0.1)}
            whileInView={"animate"}
            initial="initial" 
            src="/about2.png" alt="aboutImage" className='w-full md:max-w-[500px] rounded-lg mt-5 md:mt-0'/>
          </div>
        </div>
    </section>
  )
}

export default AboutInfo