//import React from 'react'
import LeaderboardCard from '../CrowdFunding/LeaderboardCard'
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { UseCampaignStore } from '@/store/campaignStore';
import { SlideDown, SlideUp } from '@/utility/animation';

const LeaderboardComponent = () => {

    const trendingCampaigns = [
      {
        id: "1",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "2",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "3",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      /* {
      {
        id: "4",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "5",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
        id: "6",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "7",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      },
      {
        id: "8",
        image: "/victoria.png",
        title: `Trending: Save Osaze Odemwingie `,
        description: "This is a trending campaign with high engagement.",
        raised: 200000,
        goal: 500000,
        likes: 100,
        isLiked: false
      }, */
      
]
const {getAllCampaigns, campaignData} = UseCampaignStore()
   useEffect(()=> {
    getAllCampaigns()
  },[])

  const filteredCampaign = campaignData?.filter(campaign => campaign?.status === 'active');

  /* const getTop5Users = (userList) => {
    // Sort users by likes in descending order
    const sortedUsers = [...userList].sort((a, b) => b.likes?.length - a.likes?.length);
  
    // Get the top 5 users
    return sortedUsers?.slice(0, 5);
  };*/

  const getTop5Users = (userList = []) => {
    if (!Array.isArray(userList)) {
      console.error('Invalid input: userList is not an array');
      return [];
    }
  
    // Sort users by likes in descending order
    const sortedUsers = [...userList].sort((a, b) => b.likes.length - a.likes.length);
  
    // Get the top 5 users
    return sortedUsers?.slice(0, 5);
  };
  
  // Example usage
  const topCampaings = getTop5Users(filteredCampaign); 
  //console.log("TOP 5 CAMPAIGNS",topCampaings);

  return (
    <>
    {/* <div className='mb-20 px-6 border-b-1 border-b-[#7c7c7c]'>
        <h2 className='text-3xl font-bold my-3'>Top Campaign Leaderboard</h2>
        <Swiper
            slidesPerView={4}
            breakpoints={{
                0: {
                    slidesPerView: 1.4,
                },
                400:{
                    slidesPerView:1.4,
                },
                639: {
                    slidesPerView: 2.4,
                },
                865:{
                    slidesPerView:2.5
                },
                
                1080:{
                    slidesPerView:4
                },
                1700:{
                    slidesPerView:4
                }
                }}
            spaceBetween={30}
            
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            
            className="mySwiper"
        >

        {trendingCampaigns?.map((campaign, index) => (
                <SwiperSlide key={index}><LeaderboardCard
                key={index}
                {...campaign}
                //onLike={() => handleLike(campaign.id, true)}
                />
                </SwiperSlide> 
            ))}
        </Swiper>
        </div> */}

        <div className='w-full md:w-auto md:border-l md:border-l-[#f8f8f8] p-[20px] flex flex-col space-y-3'>
        <motion.h2 
        variants={SlideDown(0.1)}
        whileInView={"animate"}
        initial="initial"
        className='text-2xl md:text-3xl font-bold my-3 '>Top Campaign Leaderboard</motion.h2>
        {topCampaings?.map((campaign, index) => (
                <motion.div
                variants={SlideUp(0.3)}
                whileInView={"animate"}
                initial="initial"
                className=''
                key={index}>
                  <LeaderboardCard
                key={index}
                index={index}
                campaign={campaign}
                //onLike={() => handleLike(campaign.id, true)}
                />
                </motion.div> 
            ))}
        </div>
     
    </>
  )
}

export default LeaderboardComponent