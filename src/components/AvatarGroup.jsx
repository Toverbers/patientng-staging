import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const AvatarGroup = ({ avatars, max = 6 }) => {
  const visibleAvatars = avatars.slice(0, max)
  const remainingCount = avatars.length - max

  return (
    <div className="flex flex-col items-start">
      {/* <p className="text-sm text-gray-500 mb-2">Trusted by {avatars.length}+ patients</p> */}
      <div className="flex -space-x-3">
        {visibleAvatars.map((avatar, index) => (
          <Avatar key={index} className="border-2 border-white w-10 h-10">
            <AvatarImage src={avatar.src} alt={avatar.alt} />
            <AvatarFallback>{avatar.alt.charAt(0)}</AvatarFallback>
          </Avatar>
        ))}
        {remainingCount > 0 && (
          <Avatar className="border-2 border-white w-10 h-10 bg-gray-200 text-gray-600">
            <AvatarFallback>+{remainingCount}</AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  )
}

AvatarGroup.propTypes = {
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  max: PropTypes.number,
}

export default AvatarGroup