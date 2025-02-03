import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { CustomButton } from '../CustomButton'
import { motion } from 'framer-motion'
import { SlideDown, SlideLeft, SlideRight, SlideUp } from '@/utility/animation'

/* const steps = [
  {
    number: 1,
    title: 'Informal Complaint (Stage 1)',
    content: 'If you are unhappy with the response you receive after raising the issue, you can make a written complaint. You can do this by filling out the online complaints form on the website here.'
  },
  {
    number: 2,
    title: 'Formal Complaint (Stage 2)',
    content: 'If your informal complaint does not resolve the issue, you can proceed with a formal complaint. This involves a more detailed investigation of your concerns.'
  },
  {
    number: 3,
    title: 'What to Include in your Complaint',
    content: 'Be sure to include all relevant details about your experience, including dates, times, locations, and names of staff members involved. The more specific information you provide, the better we can address your concerns.'
  },
  {
    number: 4,
    title: 'Submit your complaint online',
    content: 'Use our secure online form to submit your complaint. You will receive a confirmation email with a reference number for tracking your complaint.'
  },
  {
    number: 5,
    title: 'Request the HSE to review the compl...',
    content: 'If you are not satisfied with the response to your complaint, you can request the HSE to review your case. This is an independent review process.'
  }
] */

  const steps = [
  {
    number: 1,
    title: 'Informal Complaint',
    content: 'If you are dissatisfied with your patient experience, you can raise an issue by making a verbal complaint to any medical/admin staff you find in the hospital.\n\n This issue might be resolved internally without needing to make a formal, written complaint to us.'
  },
  {
    number: 2,
    title: 'Formal Complaint',
    content: 'If you are still unhappy with the response you received after a verbal complaint, you may use the form below submit a formal complaint for free. \n\nYou will receive a complaint acknowledgement from us within 5 working days and an official response within 20 working days of complaint acknowledgement.'
  },
  {
    number: 3,
    title: 'Details to include',
    content: 'Please provide an accurate description of the incident including date/time, where it happened and who was involved. \n\nPlease endeavour to include what you have done till date to resolve the situation and your expected/preferred resolution outcome. You may also attach any relevant documentation to support your complaint and expressly grant us permission to access your personal information on your behalf.'
  },
  {
    number: 4,
    title: 'Submit your complaint',
    content: 'You may now proceed to submit your complaint online through the web form or via email complaints@patient.ng'
  },
  {
    number: 5,
    title: 'Request Further Review',
    content: 'If you are still unsatisfied with the response you received from the hospital through our service, you may consider requesting a further review by our professional patient advocates.'
  }
]

export function ComplaintGuideSection() {
  const [selectedStep, setSelectedStep] = useState(1)

  return (
    <section id='complaintGuide' className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
      variants={SlideUp(0.2)}
      whileInView={"animate"}
      initial="initial" 
      className="text-3xl font-bold mb-4">Guide to Making a Complaint</motion.h2>
      <motion.p
      variants={SlideLeft(0.3)}
        whileInView={"animate"}
        initial="initial" 
      className="text-gray-600 mb-8">
        This guide details the steps to our Patient complaints process
      </motion.p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {steps.map((step) => (
            <button
              key={step.number}
              onClick={() => setSelectedStep(step.number)}
              className="w-full text-left flex items-center space-x-4 p-2 rounded-lg transition-colors hover:bg-emerald-50"
            >
              <motion.div
              variants={SlideDown(0.1)}
              whileInView={"animate"}
              initial="initial"
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white
                  ${selectedStep === step.number ? 'bg-emerald-700' : 'bg-emerald-500'}`}
              >
                {step.number}
              </motion.div>
              <motion.span
              variants={SlideDown(0.1)}
              whileInView={"animate"}
              initial="initial" 
              className={`text-lg ${selectedStep === step.number ? 'font-semibold' : ''}`}>
                {step.title}
              </motion.span>
            </button>
          ))}
        </div>
        <motion.div
        variants={SlideRight(0.1)}
        whileInView={"animate"}
        initial="initial" 
        className="bg-emerald-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            {steps.find(step => step.number === selectedStep)?.title}
          </h3>
          <p className="text-gray-600">
            {steps.find(step => step.number === selectedStep)?.content.split('\n').map((line, i) => (
                       <React.Fragment key={i}>{line}<br/></React.Fragment>
                   ))}
          </p>
        </motion.div>
      </div>
    </section>
  )
}