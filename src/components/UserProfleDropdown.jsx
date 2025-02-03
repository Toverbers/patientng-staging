import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserProfileDropdown = ({ user, handleLogout }) => {
  return (
    <>
     <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 outline-none"> 
      
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border">
            {/* <AvatarImage src={user?.image} alt={user.name} /> */}
            <img crossOrigin='anonymous'  src={ `${import.meta.env.VITE_MAIN_URL}/${user?.image}`} className="rounded-full" />
            <AvatarFallback>{user?.firstName?.slice(0,1)}</AvatarFallback>
          </Avatar>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium">{user?.firstName} {user?.lastName}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
        
        
      </DropdownMenuTrigger>
       <DropdownMenuContent align="end" className="w-38">
        <DropdownMenuItem asChild>
          <Link to="/account">Profile</Link>
        </DropdownMenuItem>
       {/*  <DropdownMenuItem asChild>
          <Link to="#">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/campaigns">My Campaigns</Link>
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        
        <DropdownMenuItem  className="text-red-600" onClick={handleLogout}>
          Logout
        </DropdownMenuItem>
        
      </DropdownMenuContent> 
    </DropdownMenu>
    </>
  )
}

export default UserProfileDropdown