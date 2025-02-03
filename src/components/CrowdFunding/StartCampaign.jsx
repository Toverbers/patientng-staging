import  { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router'
import useAuthStore from '@/store/authStore'

const StartCampaign = () => {
  const {getme, myData} = useAuthStore()

  useEffect(()=> {
    getme()
  },[])

  return (
    <section className="py-12 px-4 text-white">
      <div className=" bg-[#003A39] mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center p-8 rounded-xl">
        <div>
          <h2 className="text-2xl font-bold mb-2">Start a campaign today</h2>
          <p>Need help with hospital bills, emergency surgery costs or life-saving medications? Sign up to get started!</p>
        </div>
        {myData? 
        <Link to='/crowdfunding/create'>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
          Get Started
        </Button>
        </Link> 
        :
        <Link to="/login">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white ">
          Login to start Campaign
          </Button>
          </Link>
            }
        
      </div>
    </section>
  )
}

export default StartCampaign