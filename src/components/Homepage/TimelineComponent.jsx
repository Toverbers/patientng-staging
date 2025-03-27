import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SlideDown, SlideLeft } from '@/utility/animation';

const TimelineSection = () => {
  const timelineData = [
    {
      year: '2023',
      achievements: [
        'Grew advocacy network to 24 clinics.',
        '⁠Reached 183 patients nationally',
        '⁠Partnered with 3 local patient organisations ',
        '⁠Resolved 7 patient complaints through mediation ',
        '⁠Launched prescription discounts programs'
      ]
    },
    {
      year: '2024',
      achievements: [
        'Launched the patient.ng web platform',
        'Grew online community to 540 members',
        'Expanded rewards, loyalty and discounts programs',
        '⁠Advocated in 34 patient rights cases',
        'Rolled out the iPatient podcast'
      ]
    },
    {
      year: '2025',
      achievements: [
        'Releasing the iPatient app on web, iOS and Android',
        'Patient Advocacy Masterclass and Training',
        'Launching the Green-Heart Campaign web feature',
        'Expand Patient Advocacy Network nationally',
        'Grow our online patient community to 2000 members'
      ]
    }
  ];

  return (
    <section className="bg-[#004146] px-8 py-24">
      <div className="container mx-auto">
        <span className="text-emerald-500">About Us</span>
        
        <motion.h2
        variants={SlideLeft(0.2)}
        whileInView={"animate"}
        initial="initial"  
        className="mt-4 text-3xl font-bold text-white md:text-5xl md:max-w-6xl">
        Patient.ng is an online community, amplifying patient voices in Nigeria.
        </motion.h2>
        
        <motion.p
        variants={SlideLeft(0.3)}
        whileInView={"animate"}
        initial="initial"  
        className="mt-6 max-w-6xl text-lg text-gray-300">
        By facilitating a community where patients feel heard, we empower members to share their stories, launch campaigns, find support and take charge of their own healthcare experience.
        Whether you need assistance, want to volunteer, or wish to donate, there is a place for you in our community.
        </motion.p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timelineData.map((item, index) => (
            <motion.Card
            variants={SlideDown(0.3)}
            whileInView={"animate"}
            initial="initial"
            key={index} className="border-0 bg-teal-900/50 text-white">
              <CardContent className="p-6">
                <h3 className="mb-6 text-4xl font-bold text-emerald-500">
                  {item.year}
                </h3>
                <ul className="space-y-4">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="mr-2 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </motion.Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;