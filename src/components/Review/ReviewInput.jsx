import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarRating } from '../StarRating'
import { CustomButton } from '../CustomButton'

export function ReviewInput({ userAvatar }) {
  const [isFocused, setIsFocused] = useState(false)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className={`
          border rounded-lg transition-colors
          ${isFocused ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-gray-200'}
        `}>
          <div className="flex items-center px-3 py-2">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={userAvatar} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <input
              type="text"
              placeholder="Write a review"
              className="flex-1 border-0 bg-transparent focus:outline-none focus:ring-0 text-sm"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                // Only unfocus if there's no content and no rating
                if (!review && !rating) {
                  setIsFocused(false)
                }
              }}
            />
          </div>
          {/* Rating section appears when input is focused or has content */}
          {(isFocused && rating > 0 && review) && (
            <div className="border-t space-y-2 px-3 py-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Rate this facility</span>
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>
              <CustomButton buttonVariant={'primary'}>
                Submit
              </CustomButton>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}