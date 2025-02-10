import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mic, Monitor, Play, Clock, Calendar } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight } from '@/utility/animation';
import { UsePodcastStore } from '@/store/podcastStore';
import moment from 'moment';
import { FaApple, FaSpotify, FaYoutube } from 'react-icons/fa';

const PodcastWebinarsSection = () => {
  const {getAllPodcast, podcastData} = UsePodcastStore()
  const episodes = [
    {
      id: 1,
      title: "Ep 25: Method: Practicing Playful Creation",
      date: "October 27, 2022",
      duration: "1hr",
      image: "/Computer.png"
    },
    {
      id: 2,
      title: "Ep 25: Method: Practicing Playful Creation",
      date: "October 27, 2022",
      duration: "1hr",
      image: "/Computer.png"
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Healthy Eating Habits for Busy Lifestyles.",
      subtitle: "Building a Balanced Diet",
      categories: ["CATEGORY1", "CATEGORY2"],
      variant: "teal"
    },
    {
      id: 2,
      title: "Healthy Eating Habits for Busy Lifestyles.",
      subtitle: "Building a Balanced Diet",
      categories: ["CATEGORY1", "CATEGORY2"],
      variant: "yellow"
    }
  ];

  useEffect(()=>{
    getAllPodcast()
   },[])


  return (
    <section className="relative px-8">
      {/* Background Image */}
      <img
        src="/Overlay.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Content with background color overlay */}
      <div className="relative  py-24">
        <div className="">
          {/* Header */}
          <div className="mb-16 flex flex-col md:flex-row gap-4 items-start justify-between">
            <div className="text-white">
              <span className="text-sm font-medium text-emerald-500">
                Podcast & webinars
              </span>
              <motion.h2
              variants={SlideLeft(0.3)}
              whileInView={"animate"}
              initial="initial"  
              className="mt-4 text-3xl font-bold sm:text-4xl">
                Stay Informed, Stay Healthy
              </motion.h2>
              <motion.p
              variants={SlideLeft(0.3)}
              whileInView={"animate"}
              initial="initial"  
              className="mt-4 text-lg text-gray-300">
                Tune in to expert-led podcasts and webinars on patient stories and health topics that matter most to you.
              </motion.p>
            </div>
            <Link to={'/podcast'}>
            <Button 
              variant="outline" 
              className="group border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
            >
              See Podcasts & Webinars
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </div>

          {/* Latest Episodes */}
          <div className="mb-8">
            <div className="mb-8 flex items-center gap-2 text-white">
              <Mic className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Latest Episodes</h3>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {podcastData?.slice(0,2).map((episode) => (
                <motion.Card
                variants={SlideLeft(0.3)}
                whileInView={"animate"}
                initial="initial"  
                key={episode._id} className="bg-white">
                  <CardContent className="flex gap-4 p-4">
                    <img
                      crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${episode?.image}`}
                      alt=""
                      className=" h-40 w-40 rounded-lg object-cover"
                    />
                    <div className="flex flex-col justify-between w-full">
                      <div>
                        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-5 md:items-center text-sm text-gray-600">
                          <div className="flex items-center space-x-3">
                            <Calendar className='h-4 w-4' />
                            <p>{moment(episode?.releaseDate).format('DD MMMM YYYY')}</p>
                            </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <p>{episode?.duration}</p>
                          </div>
                          {/* {episode?.channels[0]?.source === 'youtube' ? <FaYoutube size={28} className="text-emerald-500" /> : episode?.channels[0]?.source === 'spotify' ? <FaSpotify className="text-emerald-500" size={28} /> : <FaApple className="text-emerald-500" size={28} />} */}
                        </div>
                        <h4 className="mt-2 font-bold">{episode.title}</h4>
                        <div 
                          dangerouslySetInnerHTML={{ __html: episode?.summary?.slice(0,40) }}
                          className=" text-gray-600 text-sm"
                        />
                      </div>
                      <div className='flex justify-between items-center'>
                      <Link to={`/podcast/${episode._id}`}>
                      <Button className="w-fit bg-emerald-500 hover:bg-emerald-600">
                        <Play className="mr-2 h-4 w-4" />
                        Play Episode
                      </Button>
                      </Link>

                      {episode?.channels[0]?.source === 'youtube' ? <FaYoutube size={28} className="text-emerald-500" /> : episode?.channels[0]?.source === 'spotify' ? <FaSpotify className="text-emerald-500" size={28} /> : <FaApple className="text-emerald-500" size={28} />}
                      
                      </div>
                      
                    </div>
                  </CardContent>
                </motion.Card>
              ))}
            </div>
          </div>

          {/* Upcoming Webinars */}
          {/* <div>
            <div className="mb-8 flex items-center gap-2 text-white">
              <Monitor className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Upcoming webinars</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {webinars.map((webinar) => (
                <Card 
                  key={webinar.id} 
                  className={`border-0 ${
                    webinar.variant === 'yellow' 
                      ? 'bg-yellow-400' 
                      : 'bg-teal-900'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="mb-8">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={webinar.variant === 'yellow' ? 'text-black' : 'text-white'}
                      >
                        <path
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h4 className={`mt-4 text-xl font-bold ${
                        webinar.variant === 'yellow' ? 'text-black' : 'text-white'
                      }`}>
                        {webinar.title}
                      </h4>
                      <p className={`mt-2 ${
                        webinar.variant === 'yellow' ? 'text-black/80' : 'text-white/80'
                      }`}>
                        {webinar.subtitle}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        {webinar.categories.map((category, index) => (
                          <Badge 
                            key={index}
                            variant="outline" 
                            className={`rounded-full border ${
                              webinar.variant === 'yellow' 
                                ? 'border-black/20 text-black' 
                                : 'border-white/20 text-white'
                            }`}
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <Link to={`/webinars/${webinar.id}/#webinar`}>
                      <Button
                        variant="link"
                        className={`group p-0 ${
                          webinar.variant === 'yellow' 
                            ? 'text-emerald-700' 
                            : 'text-emerald-500'
                        }`}
                        
                      >
                        Sign up
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PodcastWebinarsSection;