import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react'
import { ReviewCard } from './ReviewCard'
import { Pagination } from './CrowdfundingPagination'


export default function HospitalReviewsTab({reviews}) {

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <Pagination 
        currentPage={1} 
        totalPages={8} 
        onPageChange={(page) => console.log('Page changed to:', page)} 
      />
    </div>
  )
}