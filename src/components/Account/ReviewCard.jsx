import { BiCalendar } from "react-icons/bi"
import { Badge } from "../ui/badge"
import { StarRating } from "./StarRating"
import { CustomButton } from "../CustomButton"

export function ReviewCard({ hospitalName, content, date, rating, status, showModify = false }) {
    const statusStyles = {
      approved: { color: 'text-emerald-600', bg: 'bg-emerald-50', dot: 'bg-emerald-400' },
      pending: { color: 'text-yellow-600', bg: 'bg-yellow-50', dot: 'bg-yellow-400' },
      rejected: { color: 'text-red-600', bg: 'bg-red-50', dot: 'bg-red-400' }
    }
  
    const statusConfig = {
      approved: { text: 'Approved', style: statusStyles.approved },
      pending: { text: 'Pending approval', style: statusStyles.pending },
      rejected: { text: 'Rejected', style: statusStyles.rejected }
    }
  
    const currentStatus = statusConfig[status]
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900">[{hospitalName}]</h3>
          <Badge 
            variant="secondary" 
            className={`${currentStatus.style.bg} ${currentStatus.style.color} border-none flex gap-1.5 items-center`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${currentStatus.style.dot}`} />
            {currentStatus.text}
          </Badge>
        </div>
        
        <p className="text-gray-600 mb-4">{content}</p>
        
        <div className="flex flex-col items-start gap-2 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <BiCalendar className="h-4 w-4" />
              {date}
            </div>
            <StarRating rating={rating} />
          </div>
          {showModify && (
            <CustomButton buttonVariant={"outline"} className="text-black" size="sm">
              Modify
            </CustomButton>
          )}
        </div>
      </div>
    )
  }