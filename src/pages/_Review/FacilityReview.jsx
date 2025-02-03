import React from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ReviewInput } from '@/components/Review/ReviewInput'
import { ExternalLinkComponent } from '@/components/Review/ExternalLink'
import { AppLayout } from '@/components/AppLayout'
import { RatingBar } from '@/components/Review/RatingBar'
import { ReviewCard } from '@/components/Review/ReviewCard'
import { useParams } from 'react-router-dom'

// Mock review data
const reviews = [
  {
    id: 1,
    author: "Abayomi Olowu",
    role: "CEO",
    rating: 5,
    title: "Header goes in hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    content: "My name is Sisu, and I've faced more challenges in my health journey than I ever thought possible. Diagnosed with a rare autoimmune disease at the age of 25, I was suddenly thrust into a world of uncertainty and fear. But amidst the pain and confusion, I found something unexpected: strength.",
    timeAgo: "10 hours ago",
    likes: 1,
    verified: true,
  },
  // Add more reviews as needed
]


export default function ReviewFacility() {
  const { id } = useParams()

  return (
    <AppLayout className='h-full' showHeader={true} >
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Company Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <img
            src="/yoga.png"
            alt="Company logo"
            className="w-20 h-20 rounded-lg"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-semibold">[Healthcare facility name]</h1>
              <Badge variant="outline" className="text-emerald-500 border-emerald-500">
                Verified
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>2,500 Reviews</span>
              <span>•</span>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        {/* <ExternalLinkComponent href="www.ipatient.ng" /> */}
      </div>

      {/* Write Review Input */}
      <div className="flex items-center gap-2 mb-8">
        <ReviewInput userAvatar={'/Avatar/avatar2.png'}/>
      </div>

      {/* Reviews Section */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Reviews <span className="text-yellow-400">★</span> 4.5
          </h2>
          <p className="text-sm text-gray-500 mb-4">Based on 522 Reviews</p>
          
          {/* Rating Distribution */}
          <div className="space-y-2 mb-6">
            <RatingBar rating={5} percentage={96} />
            <RatingBar rating={4} percentage={4} />
            <RatingBar rating={3} percentage={1} />
            <RatingBar rating={2} percentage={1} />
            <RatingBar rating={1} percentage={1} />
          </div>

          {/* Filter and Sort */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" size="sm">
              Filter
            </Button>
            <Select defaultValue="relevant">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevant">Most relevant</SelectItem>
                <SelectItem value="recent">Most recent</SelectItem>
                <SelectItem value="highest">Highest rated</SelectItem>
                <SelectItem value="lowest">Lowest rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-4">
          <Button variant="outline">Prev</Button>
          <span className="text-sm text-gray-500">Page 1 to 1</span>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
    </AppLayout>
  )
}