import { Heart, HeartIcon } from 'lucide-react'
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa'
import { motion } from "framer-motion";

const LeaderboardCard = ({ image, title, raised, goal, description, isLiked, likes, onLike, index, campaign }) => {
  const raisedNum = parseInt(raised, 10)
  const goalNum = parseInt(goal, 10)

  const progress = (raisedNum / goalNum) * 100

  const handleLikeClick = (e) => {
    e.preventDefault() // Prevent the Link from navigating
    e.stopPropagation() // Stop the event from bubbling up
    onLike()
  }
  
  return (
    <Link to={`/campaigns/${campaign?._id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
        <div className="flex">
          <span className='flex-shrink-0 w-[24px] h-[24px] flex justify-center items-center rounded-full bg-green-500 text-white mr-4 mt-1'>{index + 1}</span>
          <div className="flex-shrink-0 mr-4 relative">
            <img crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${campaign?.image}`} alt={title} className="w-14 h-14 object-cover rounded-lg" />
            
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold mb-1">{campaign?.fundraisingFor}</h3>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {campaign?.description?.slice(0,80)}...
            </p>
            <div className="ml-2 flex items-center gap-1 text-xs text-gray-500">
            <FaHeart size='20px' color="#10b981" className='' />
            {/* /. */}
              <span className='font-bold'>{campaign?.likes?.length}</span>
             Green heart likes
             </div>
            {/* <div className="flex items-center justify-between text-sm">
              <span className="text-emerald-600 font-medium">₦{raisedNum.toLocaleString()} raised</span>
              <span className="text-gray-500">of ₦{goalNum.toLocaleString()}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="bg-gray-200 h-2 flex-grow rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="ml-2 text-xs text-gray-500">{likes}Green heart likes</span>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default LeaderboardCard