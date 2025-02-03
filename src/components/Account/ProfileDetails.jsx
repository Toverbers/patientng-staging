import { CameraIcon, Flag, Heart, Hospital, LogOut, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { CustomButton } from "../CustomButton";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";
import { useEffect } from "react";

export function ProfileDetails({ activeTab, setActiveTab, userData, handleImageChange, image, setImage, imageUrl }) {
  const {logout, isLogout, isAuthenticated} = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    // Implement sign out logic here
    await logout()
    console.log('User signed out')
  }

  /* useEffect(()=> {
   if(isAuthenticated === false){
    navigate('/login')
   }
  },[isAuthenticated]) */


    return (
      <div className="md:w-64 w-full p-4 flex flex-col justify-between bg-white rounded-lg shadow-md h-auto">
        <div>
        <div className="flex flex-col items-center mb-6">
        
          <div className="h-20 w-20 mb-2 relative">
          </div>
          
          <Avatar className="h-20 w-20 mb-2 border-2 relative overflow-visible">
          <input
            type="file"
            accept="image/*"
            //value={image}
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
          />
      <label
        htmlFor="image-upload"
        className=" absolute -right-1 top-4 w-[22px] h-[22px] z-999 cursor-pointer bg-green-500 text-white flex items-center justify-center rounded-full hover:bg-green-600"
      >
        <CameraIcon className='size-sm' size="14" color="#fff" />
      </label>
            <img crossOrigin='anonymous'  src={imageUrl? imageUrl : `${import.meta.env.VITE_MAIN_URL}/${userData?.image}`} alt="profile" className="rounded-full " />
            {/* <AvatarFallback className="w-full" >{userData?.firstName?.slice(0,1)}</AvatarFallback> */} 
          </Avatar>
          
          <h2 className="text-lg font-semibold">{userData?.firstName} {userData?.lastName}</h2>
          <p className="text-sm text-gray-500">{userData?.email}</p>
        </div>
        <div className="space-y-2">
          {/* {['Account Information', 'Crowdfunding', 'Hospital Reviews', 'Advocacy'].map((tab) => ( */}
          {['Account Information', 'Crowdfunding',].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'outline' : 'ghost'}
              className={`w-full justify-start ${activeTab === tab ? 'text-emerald-500 bg-white border-emerald-500' : 'text-gray-700'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Account Information" ? <User2 /> 
              : tab === "Crowdfunding" ? <Heart /> 
              : tab === "Advocacy" ? <Flag />
              : <Hospital />
            }
              {tab}
            </Button>
          ))}
        </div>
        </div>
        <Link to={"/login"}>
        <CustomButton  buttonVariant="outline" className="w-full justify-start mt-6 text-red-500" onClick={handleLogout}>
          <LogOut />
          Log Out
        </CustomButton>
        </Link>
      </div>
    )
  }