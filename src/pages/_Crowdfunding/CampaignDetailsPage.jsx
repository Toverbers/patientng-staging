import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, HeartIcon, Share, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AllDonationsModal } from '@/components/CrowdFunding/AllDonationsModal'
import { DonationModal } from '@/components/CrowdFunding/DonationModal'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import { UseCampaignStore } from '@/store/campaignStore'
import useAuthStore from '@/store/authStore'
import { PiHeart, PiHeartFill } from 'react-icons/pi'

// Mock data - replace with API call later
const campaignData = {
  id: '1',
  title: 'Save Osaze Odemwingie',
  image: '/victoria.png',
  createdAt: '2 days ago',
  category: 'Medical',
  raised: 100000,
  goal: 500000,
  donations: 200,
  likes: 657,
  organizer: {
    name: 'Abayomi Olowu',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  beneficiary: 'Osaze Odemwingie',
  content: `The rise of remote work has been nothing short of transformative, with technology advancements and changing workplace dynamics enabling individuals to work from anywhere in the world. While remote work offers enticing benefits such as flexibility, increased autonomy, and a better work-life balance, it's essential to consider if going remote is the right choice for you. In this article, we'll explore the advantages and challenges of remote work to help you make an informed decision.

  Remote work provides the freedom to set your own schedule, choose your work environment, and eliminate long commutes. This flexibility allows for a better work-life integration, giving you more control over your time and potentially reducing stress.

  Remote work often grants more independence, empowering individuals to manage their tasks and projects with minimal supervision. It can foster a sense of ownership and self-motivation, leading to increased productivity and personal growth.

  Remote work provides the freedom to set your own schedule, choose your work environment, and eliminate long commutes. This flexibility allows for a better work-life integration, giving you more control over your time and potentially reducing stress.

  Remote work often grants more independence, empowering individuals to manage their tasks and projects with minimal supervision. It can foster a sense of ownership and self-motivation, leading to increased productivity and personal growth.

  Remote work relies heavily on digital communication tools, which may not fully replicate the benefits of in-person interactions. Building rapport, brainstorming, and resolving conflicts may require extra effort to ensure effective communication and teamwork.`,
  allDonations: [
    { name: 'Jermaine Kling', amount: 2000, time: '2 days' },
    { name: 'Carmen Kub', amount: 2000, time: '2 days' },
    { name: 'Karl Hyatt', amount: 2000, time: '2 days' },
    { name: 'Eudora Abernathy', amount: 2000, time: '2 days' },
    { name: 'Gladyce Spencer', amount: 2000, time: '2 days' },
  ],
  recentDonations: [
    { name: 'Abayomi Olowu', amount: 2000, time: '1 day' },
    { name: 'Anonymous', amount: 100000, time: '2 days' },
    { name: 'Kenneth Allen', amount: 5000, time: '2 days' },
  ]
}

export default function CampaignDetails() {
  const {getCampaign, singleCampaign, likeCampaign} = UseCampaignStore()
  const {getme, myData} = useAuthStore()
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
  const [isAllDonationModalOpen, setIsAllDonationModalOpen] = useState(false)

  const { id } = useParams()

  useEffect(()=> {
    getCampaign({id: id})
    getme()
  },[])

  const allowedId = myData?._id; // ID to check
  const [isAvailable, setIsAvailable] = useState(false); // Initial state

  useEffect(() => {
    // Check if allowedId exists in the data array
    const idExists = singleCampaign?.likes?.some(item => item?.user?._id === allowedId);

    // If the ID exists, set state to false
    if (idExists) {
      setIsAvailable(true);
    }
  }, [singleCampaign?.likes, allowedId]); // Run effect when data or allowedId changes

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Please Register & Like to Support my Campaign',
          //text: 'This is a great resource for React developers.',
          text: singleCampaign?.title,
          url: window.location.href, // Current page URL
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API not supported in this browser.');
    }
  };

  const handleLike = () => {
    likeCampaign({id:singleCampaign?._id})
    getCampaign({id: id})
}

  console.log("campaign id", id)
  console.log("CAMPAING DETAILS", singleCampaign)
  const progress = (campaignData.raised / campaignData.goal) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="mx-auto max-w-6xl mt-12 py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Save {singleCampaign?.fundraisingFor}</h1>
            <div className="rounded-lg h-[400px] relative md:mb-8">
              <img crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${singleCampaign?.image}`} alt='checkup' className='object-cover absolute w-full h-full'/>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              {/* <Avatar>
                <AvatarImage src={campaignData.organizer.avatar} />
                <AvatarFallback>AO</AvatarFallback>
              </Avatar> */}
              <div>
                <span className="text-gray-600 text-base">{singleCampaign?.user?.firstName} {singleCampaign?.user?.lastName}</span>
                <span className="text-gray-500 text-base"> is organising a fundraiser for {singleCampaign?.title} </span>
                {/* <span className="text-gray-600">{campaignData.beneficiary}</span> */}
              </div>
            </div>
            <div className="prose max-w-none">
              {/* {campaignData.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
              ))} */}
              <p className="text-gray-600 mb-4">{singleCampaign?.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              {/* <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Created {campaignData.createdAt}</span>
                <span>• {campaignData.category}</span>
              </div> */}

              {/* <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-2xl font-bold">₦{campaignData.raised.toLocaleString()}</span>
                  <span className="text-gray-500 ml-2">raised of ₦{campaignData.goal.toLocaleString()} goal</span>
                </div>
                <Progress value={progress} className="h-2 mb-2 bg-gray-100 [&>div]:bg-emerald-500" />
                <p className="text-gray-500 text-sm">{campaignData.donations} donations</p>
              </div> */}

              {/* <Button
              onClick={() => setIsDonateModalOpen(true)} 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white mb-6"
              >
                Donate now
              </Button> */}

              <div className="flex items-center justify-between space-x-2 ">
                <Button variant="outline" className="flex-1 flex items-center" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button disabled={isAvailable} variant="outline" onClick={handleLike} className="flex-1 flex items-center border-[#10b981] text-[#10b981]">
                  {isAvailable ? <><PiHeartFill className="h-4 w-4 mr-2 text-[#10b981]" /></> : <><PiHeart className="h-4 w-4 mr-2 text-[#10b981]" color='' /></>}
                  
                  {singleCampaign?.likes?.length} Likes
                </Button>
              </div>

              {/* <div>
                <h3 className="font-semibold mb-4">DONATIONS</h3>
                <div className="space-y-4">
                  {campaignData.recentDonations.map((donation, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{donation.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{donation.name}</p>
                        <p className="text-sm text-gray-500">NGN {donation.amount.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                variant="link" 
                className="text-emerald-500 hover:text-emerald-600 mt-4 p-0"
                onClick={() => setIsAllDonationModalOpen(true)}
                >
                  See all donations
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Add the DonationsModal */}
      <AllDonationsModal
        isOpen={isAllDonationModalOpen}
        onClose={() => setIsAllDonationModalOpen(false)}
        donations={campaignData.allDonations}
      />
      <DonationModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />
    </div>
  )
}