export function RatingBar({ rating, percentage }) {
    return (
      <div className="flex items-center gap-2">
        <span className="w-12 text-sm text-gray-600">{rating} star</span>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500" 
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="w-12 text-sm text-gray-600">{percentage}%</span>
      </div>
    )
  }