import { Star } from "lucide-react"
import { useState } from "react"

export function StarRating({ rating, onRatingChange }) {
    const [hoverRating, setHoverRating] = useState(0)
  
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm"
            onClick={() => onRatingChange(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
          >
            <Star
              className={`w-6 h-6 transition-colors ${
                star <= (hoverRating || rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
            <span className="sr-only">{star} stars</span>
          </button>
        ))}
      </div>
    )
  }