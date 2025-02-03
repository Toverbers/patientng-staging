import React from 'react'
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

const FundraiserReview = ({ formData }) => {
  const { coverImage, title, state, lga, description, beneficiaryType, goal } = formData

  const progress = (0 / goal) * 100
  
  // Mock user data - replace with actual user data from your auth context
  const organizer = {
    name: "Abayomi Olowu",
    avatar: "/placeholder.svg?height=40&width=40"
  }

  const beneficiary = "Osaze Odemwinge"
  const location = `${lga}, ${state}`
  const goalAmount = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(goal || 0)

  return (
    <Card className="p-6">
      <h2 className="text-xl font-medium mb-6">Review and Submit</h2>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{title || 'Save Osaze Odemwinge'}</h1>
        
        {/* Cover Image */}
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
          {coverImage ? (
            <img
              src={URL.createObjectURL(coverImage)}
              alt="Fundraiser cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
        </div>

        {/* Organizer Info */}
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <Avatar>
            <AvatarImage src={organizer.avatar} alt={organizer.name} />
            <AvatarFallback>{organizer.name[0]}</AvatarFallback>
          </Avatar>
          <p>NAME OF FUND {formData?.firstName}</p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">{organizer.name}</span>
            {' '}is organising a{' '}
            <span className="text-gray-900">fundraiser on behalf of{' '}</span>
            <span className="font-medium text-gray-900">{beneficiary}</span>
          </p>
        </div>

        {/* Location */}
        {location && location !== ',' && (
          <div className="text-sm text-gray-600">
            {location}
          </div>
        )}

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">₦0</span>
            <span className="text-gray-600">raised</span>
            <span className="text-gray-600 text-sm ml-1">
              of {goalAmount} goal
            </span>
          </div>
          <Progress value={progress} className="h-1.5 w-96 mb-2 bg-gray-100 [&>div]:bg-emerald-500" />
        </div>

        {/* Description */}
        {description && (
          <div className="prose max-w-none">
            <p>{description}</p>
          </div>
        )}
      </div>
    </Card>
  )
}

export default FundraiserReview