import { Logo } from '@/icons/Logo'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { SlideDown, SlideUp } from '@/utility/animation'

export const ContactUsSection = () => {
  return (
    <div className='py-12 bg-gray-50 bg=[#F7F7F8]'>
        <div className='px-8'>
            <div className='pt-4 flex flex-col items-center  w-full gap-8'>
                <motion.div 
                variants={SlideDown(0.3)}
                whileInView={"animate"}
                initial="initial" 
                className='flex items-center gap-2 group'>
                    {/* <Logo /> */}
                    <img  src="/logo.png" alt="logo" className='w-6 h-6' />
                    <span className='text-xl font-semibold'>Patient.ng</span>
                </motion.div>
                <motion.div
                variants={SlideDown(0.4)}
                whileInView={"animate"}
                initial="initial" 
                >
                    <h2 className='text-4xl text-center'>launch your campaign today</h2>
                    <p className='text-lg text-center'>
                        We believe in putting patients at the center of their healthcare journey.
                    </p>
                </motion.div>
                <Button className="w-fit bg-emerald-500 hover:bg-emerald-600">
                    Contact Us
                </Button>
                <motion.div
                variants={SlideUp(0.3)}
                whileInView={"animate"}
                initial="initial"  
                className=''>
                    <img src='/Light-mode.png' alt='site image' className='md:max-w-[500px] object-cover'/>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
