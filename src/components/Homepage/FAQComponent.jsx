import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion';
import { SlideDown, SlideLeft } from '@/utility/animation';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Patient Campaigns?",
      answer: "Patient Campaigns is a feature on Patient.ng that allows individuals to create and promote campaigns for urgent healthcare financial needs. The platform enables users to share their stories, gather support from their network, and compete to win weekly funding based on the number of Green-heart Likes their campaign receives."
    },
    {
      question: "How does Patient Campaigns work?",
      answer: "You register on the platform and create a campaign by sharing details of your healthcare need. Your campaign link can be shared across social media and with friends and family to collect Green-heart Likes. Each week, the campaign with the highest number of Green-heart Likes wins full/partial funding support for their medical expenses."
    },
    {
      question: "Who is eligible to create a campaign?",
      answer: "Anyone in Nigeria who has a verified healthcare need and meets the platform’s guidelines can create a campaign. This includes individuals, caregivers, or families raising funds for medical emergencies, medications, treatments, or surgeries."
    },
    {
      question: "How do I create a campaign?",
      answer: "Visit the Patient.ng website and click on the “Create Campaign” button, Fill in the registration form with your details. Upload your story, photos, and any supporting medical documents, Submit your campaign for review. Once approved, it will go live."
    },
    {
      question: "What information is required for my campaign?",
      answer: "You will need to provide: A detailed description of your healthcare need, The amount of money required for treatment, Medical documents to verify your claim, A photo or video to personalize your campaign."
    },
    {
      question: "How long does it take for my campaign to be approved?",
      answer: "Campaigns are typically reviewed within 24-48 hours. You will be notified via email once your campaign is live."
    },
    {
      question: "How can I promote my campaign?",
      answer: "Share your campaign link on WhatsApp, Facebook, Instagram, and other social platforms. Ask friends and family to like and share your campaign, Tag influencers or community groups that might help spread the word."
    }
  ];

  return (
    <section className="py-24">
      <div className="px-8">
        <div className="mx-auto">
          <motion.h2
          variants={SlideLeft(0.2)}
          whileInView={"animate"}
          initial="initial"  
          className="text-3xl font-bold sm:text-4xl">
            FAQ's
          </motion.h2>
          <motion.p
          variants={SlideLeft(0.3)}
          whileInView={"animate"}
          initial="initial" 
          className="mt-4 text-lg text-gray-600">
            Find answers to the most commonly asked questions about our products and services.
          </motion.p>

          <Accordion 
            type="single" 
            collapsible 
            className="mt-12"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-t py-2"
              >
                <motion.div
                variants={SlideDown(0.1)}
                whileInView={"animate"}
                initial="initial"
                >

                
                <AccordionTrigger className="flex gap-6 text-left text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
                </motion.div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;