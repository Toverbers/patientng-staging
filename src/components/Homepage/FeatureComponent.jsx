import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { SlideDown, SlideLeft, SlideRight } from '@/utility/animation';

const FeatureSection = () => {
  const steps = [
    { number: '1', title: 'Informal Complaint' },
    { number: '2', title: 'Formal Complaint' },
    { number: '3', title: 'Include your bio details' },
    { number: '4', title: 'Submit your Complaint' },
    { number: '5', title: 'Request Further Review' }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Image placeholder */}
          <motion.div
          variants={SlideRight(0.3)}
          whileInView={"animate"}
          initial="initial" 
          className="relative h-[600px] overflow-hidden rounded-3xl">
            {/* You can replace this with an actual image */}
            <img src='/hallway.jpg' alt='steps' className='object-cover w-full' />
          </motion.div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium text-emerald-500">
            Patient Complaints
            </span>

            <motion.h2
            variants={SlideLeft(0.3)}
        whileInView={"animate"}
        initial="initial" 
            className="mt-4 text-xl font-bold tracking-tight sm:text-2xl md:text-2xl">
            This is a step-by-step guide to making a complaint about your patient experience
            </motion.h2>

            <div className="mt-8 space-y-4">
              {steps.map((step) => (
                <motion.div
                variants={SlideDown(0.3)}
                whileInView={"animate"}
                initial="initial"
                  key={step.number}
                  className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-sm font-medium text-emerald-600">
                    {step.number}
                  </span>
                  <span className="text-lg font-medium">
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </div>


            <Link to="/advocacy">
            <Button className="mt-8 w-fit bg-emerald-500 hover:bg-emerald-600">
              Submit your Complaint
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;