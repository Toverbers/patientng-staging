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
            className='text-base'>Many Nigerians face difficulties funding their medical treatments due to inadequate health insurance coverage and high out-of-pocket costs.</motion.p>
            <motion.p
             variants={SlideLeft(0.2)}
             whileInView={"animate"}
             initial="initial"
            className='text-base'>Our Campaign feature allows individuals to create and promote verified patient campaigns for urgent healthcare financial needs. The platform enables users to share their stories, gather support from their network, and win weekly funding based on the number of Green-heart likes their campaign receives.</motion.p>
           
            <motion.p
             variants={SlideLeft(0.2)}
             whileInView={"animate"}
             initial="initial"
            className='text-base'>We work closely with hospitals, pharmacies, NGO’s and corporate sponsors to deliver sustainable support solutions that improve health outcomes in Nigeria.</motion.p>
            
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