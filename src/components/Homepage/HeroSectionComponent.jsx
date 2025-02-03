import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { SlideDown, SlideLeft, SlideUp } from '@/utility/animation';

const HeroSection = () => {
  return (
    <section className="relative bg-green-200 flex items-center overflow-hidden bg-gradient-to-br mt-20 from-emerald-50/50 via-white to-emerald-50/50">
      <div className='absolute inset-0 h-full w-full object-cover '>
        <img src='/Grid layers.png' alt='grid layers' className='w-full h-full' />
      </div>
      {/* Hero Content */}
      <div className="w-full px-4 pb-24 pt-10 md:pt-12 z-10">
        {/* Text Content */}
        <div className="mx-auto max-w-[800px] text-center">
          <motion.h1
          variants={SlideDown(0.1)}
          whileInView={"animate"}
          initial="initial" 
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering <span className="text-emerald-500">Patients,</span>
            <br />
            Transforming <span className="text-emerald-500">Healthcare.</span>
          </motion.h1>
          <motion.p
           variants={SlideLeft(0.1)}
           whileInView={"animate"}
           initial="initial" 
          className="mx-auto mt-6 max-w-[600px] text-gray-600 md:text-lg">
          Discover our advocacy-driven platform, where members can launch patient campaigns that transform passive community engagement into active patient support.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className='cursor-pointer'>
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Contact Us
              </Button>
            </Link>

            <Link to='/'>
            <Button variant="outline">
              About Us
            </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
        variants={SlideUp(0.2)}
        whileInView={"animate"}
        initial="initial" 
        className="relative mx-auto mt-16 max-w-[600px]">
          <img
            src="/Hero background.png"
            alt="Healthcare Professional with Service Icons"
            className="w-full h-auto bg-blend-"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;