import { MoreVertical, Share2, Star, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";


export function ReviewCard({ review }) {
    return (
      <div className="py-6 border-b">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>{review.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{review.author}</span>
                {review.verified && (
                  <Badge variant="outline" className="text-emerald-500 border-emerald-500">
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </div>
          <span className="text-sm text-gray-500">{review.timeAgo}</span>
        </div>
  
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
  
        <h3 className="font-medium mb-2">{review.title}</h3>
        <p className="text-gray-600 mb-4">{review.content}</p>
  
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-500">
            <ThumbsUp className="w-4 h-4 mr-2" />
            Useful {review.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="ghost" size="sm" className="ml-auto">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
    )
  }