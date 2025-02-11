import React, { useEffect, useState } from 'react'
import { Play, Volume2, Rss } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import NewsletterSection from './NewsletterSection'
import { FaApple, FaPodcast, FaRss, FaSpotify, FaYoutube } from 'react-icons/fa'
//import { SiGooglepodcasts } from "react-icons/si";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom'
import { UsePodcastStore } from '@/store/podcastStore'
import moment from 'moment'
import { SlideLeft } from '@/utility/animation'
import {motion} from 'framer-motion'

const categories = [
  { name: 'All', active: true },
  { name: 'Web Design', active: false },
  { name: 'Development', active: false },
  { name: 'Marketing', active: false },
  { name: 'Education', active: false },
  { name: 'Technology', active: false },
]

const episodes = [
  {
    id: 1,
    number: 25,
    title: 'Method: Practicing Playful Creation',
    thumbnail: '/laptop.png',
    date: 'October 27 2023',
    description: 'Good news, Sleep Wizard! On November 5th, Jessica will launch a brand new podcast called Sleep Magic! In order to be prepared for her debut brand new episode.'
  },
  {
    id: 2,
    number: 24,
    title: 'Method: Practicing Playful Creation',
    thumbnail: '/oops.png',
    date: 'October 27 2023',
    description: 'Good news, Sleep Wizard! On November 5th, Jessica will launch a brand new podcast called Sleep Magic! In order to be prepared for her debut brand new episode.'
  },
  {
    id: 3,
    number: 23,
    title: 'Method: Practicing Playful Creation',
    thumbnail: '/spiral.png',
    date: 'October 27 2023',
    description: 'Good news, Sleep Wizard! On November 5th, Jessica will launch a brand new podcast called Sleep Magic! In order to be prepared for her debut brand new episode.'
  },
  {
    id: 4,
    number: 22,
    title: 'Method: Practicing Playful Creation',
    thumbnail: '/coffee.png',
    date: 'October 27 2023',
    description: 'Good news, Sleep Wizard! On November 5th, Jessica will launch a brand new podcast called Sleep Magic! In order to be prepared for her debut brand new episode.'
  },
]

function EpisodeCard({ episode }) {
  const navigate = useNavigate()

  const handlePlayClick = () => {
    navigate(`/podcast/${episode._id}`)
  }
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-lg hover:bg-gray-50 border ">
      <img
        crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${episode?.image}`}
        alt={`Episode ${episode.number} thumbnail`}
        className="rounded-lg object-cover h-32 w-32 md:h-44 md:w-44"
      />
      <div className="flex-1 flex flex-col gap-2 p-2 justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
          <span>{moment(episode?.releaseDate).format('DD MMMM YYYY')}</span>
          <span>•</span>
          <span>{episode?.duration}</span>
        </div>
        <h3 className="font-semibold mb-1">
           {episode?.title}
        </h3>
        {/* <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {episode?.summary?.slice(0,100)}
        </p> */}
        <div 
            dangerouslySetInnerHTML={{ __html: episode?.summary?.slice(0,100) }}
            className="text-sm text-gray-600 mb-3 line-clamp-2"
          />
        <div className="flex items-center justify-between">
          <Button 
            size="sm" 
            className="bg-emerald-500 hover:bg-emerald-600"
            onClick={handlePlayClick}
            >
            <Play className="w-4 h-4 mr-2" />
            Play Episode
          </Button>
          <div className="flex items-center gap-4">
               
            <span className="">
              {episode?.channels[0]?.source === 'youtube' ? <FaYoutube size={28} className="text-emerald-500" /> : episode?.channels[0]?.source === 'spotify' ? <FaSpotify className="text-emerald-500" size={28} /> : <FaApple className="text-emerald-500" size={28} />}
          </span>
           {/*  <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaPodcast/>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaRss />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PodcastEpisodes() {
 const {getAllPodcast, podcastData,  getPodcastCategory, podcastCategory} = UsePodcastStore()
 const [categories, setCategories] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState('All')

 useEffect(()=>{
  getAllPodcast()
  getPodcastCategory()
 },[])

 useEffect(() => {
  if(podcastCategory){
    const allCategories = [{ id: 0, name: 'All' }, ...podcastCategory];
    setCategories(allCategories);
  }
}, [podcastCategory]);

const filteredData = selectedCategory === 'All' ? podcastData :  podcastData?.filter((item) => item?.category === selectedCategory);

 console.log("PODCAST DATAS", podcastData)

    const firstHalfEpisodes = episodes.slice(0, episodes.length / 2)
    const secondHalfEpisodes = episodes.slice(episodes.length / 2)
  return (
    <div className="py-12 mt-0 md:mt-[100px] max-w-[800px] mx-auto">
      <div className="mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 md:mt-10 md:text-4xl">Listen Watch and Share</h2>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
           

{categories?.map((category, index) => (
            <motion.button
            variants={SlideLeft(0.2)}
            whileInView={"animate"}
            initial="initial"
              key={category?._id}
              onClick={() => setSelectedCategory(category?.name)}
              //onChange={() => handleCategoryChange(category?.name)}
              className={`text-sm px-3 py-1 rounded-full capitalize ${
                selectedCategory === category?.name
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category?.name}
            </motion.button>
          ))}
          </div>

          {/* Episodes List */}
          {/* <div className="space-y-6 my-4">
          {filteredData?.slice(0,2).map((episode) => (
            <EpisodeCard key={episode._id} episode={episode} />
          ))}
          </div>
          
            <NewsletterSection /> */}

        
        {/* Second half of episodes */}
        <div className="space-y-6 mt-4">
          {filteredData?.map((episode) => (
            <EpisodeCard key={episode._id} episode={episode} />
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}