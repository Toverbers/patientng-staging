import React, { useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, MapPin } from 'lucide-react'
import { UseCampaignStore } from '@/store/campaignStore'

const statusColors = {
  awaiting_review: 'bg-yellow-100 text-yellow-800',
  active: 'bg-green-100 text-green-800',
  completed: 'bg-blue-100 text-blue-800'
}

const statusText = {
  awaiting_review: 'Awaiting review',
  active: 'Active',
  completed: 'Completed'
}

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('NGN', 'N')
}

export default function CrowdfundingCardTab({
  status,
  image ,
  organizer,
  beneficiary,
  location,
  amountRaised,
  goal,
  donationsCount,
  onEdit,
  onDelete,
  userId

}) {
  const progressPercentage = (amountRaised / goal) * 100

  const {getUserCampaign, userCampaign} = UseCampaignStore()

  useEffect(()=> {
    getUserCampaign({id: userId})
  },[])

 console.log("user Campaign", userCampaign)
  //console.log("user ID", userId)

  return (
    <>
    {userCampaign ?
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${userCampaign?.image}`}
          alt="Campaign"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge 
            variant="secondary" 
            className={`${statusColors[status]} border-none`}
          >
            Status {userCampaign?.status}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={onDelete}
          >
            Delete campaign
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={organizer.avatar} />
            <AvatarFallback>{userCampaign?.user?.firstName.slice(0,1)}</AvatarFallback>
          </Avatar>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">{userCampaign?.user?.firstName} {userCampaign?.user?.lastName}</span>
            {' is organising a '}
            <span className="text-gray-900">fundraiser on behalf of </span>
            <span className="font-semibold text-gray-900">{userCampaign?.fundraisingFor}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          {userCampaign?.location?.state}, {userCampaign?.location?.lga}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
        <Heart className="h-4 w-4 mr-2" color='#10b981' />
        {userCampaign?.likes?.length} Likes
        </div>

        {/* <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold">
              {formatCurrency(amountRaised)} raised
            </h3>
            <p className="text-sm text-gray-500">
              of {formatCurrency(goal)} goal
            </p>
          </div>
          <Progress value={progressPercentage} className="h-3 mb-2 bg-gray-100 [&>div]:bg-emerald-500" />
          <p className="text-sm text-gray-500">{donationsCount} donations</p>
        </div> */}
      </div>
    </div>
    :
    <>
    <div className='flex justify-center items-center'>
      <p className='text-2xl'>No Campaign Yet</p>
    </div>
    </>
    }
    
    </>
    
  )
}