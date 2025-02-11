import { Play, Rewind, Volume2, Maximize2, Rss, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AppLayout } from '@/components/AppLayout'
//import { SiGooglepodcasts } from 'react-icons/si'

import { FaPodcast, FaRss, FaSpotify } from 'react-icons/fa'
import Footer from '@/components/Footer'
import { PiGooglePodcastsLogoBold } from 'react-icons/pi'
import { UsePodcastStore } from '@/store/podcastStore'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import moment from 'moment'

// Mock data (replace with API data later)
const episode = {
  id: 25,
  title: "Method: Practicing Playful Creation",
  date: "October 27,2022",
  duration: "1hr",
  chapters: "12",
  thumbnail: "/laptop.png",
  description: "Good news, Sleep Wavers! On November 5th, Jessica will launch a brand-new podcast called Sleep Magic! In order to be prepared for her debut brand-new episode.",
  longDescription: `It all began when rock musician David Byrne swapped bodies with a Barbie doll in a Freaky Friday-style transformation. That's what prompted him and his partner Mala Gaonkar to turn a 15,000 square foot warehouse in Denver, Colorado into the Theater of the Mind, a cerebral amusement park.

  In this episode, Byrne and neuroscientist Thalia Wheatley have a live discussion at the Denver Center for the Performing Arts, which is moderated by co-host Latif Nasser. The three discuss how we don't see or hear or know what we believe we do, but also how all of that... can actually be a wonderful thing.

  We would especially want to thank Charlie Miller and the Denver Center for the Performing Arts team, Emily Simoness and the Arbutus Foundation team, Boen Wang, and Heather Radke.`,
  producer: "Suzie Lechtenberg"
}

export default function SingleEpisode() {
  const {getPodcast, singlePodcast, loading} = UsePodcastStore()
  const {id} = useParams()



  useEffect(() =>{
    getPodcast({id:id})
  },[])

  console.log("SINGLE PODCAST", singlePodcast)

  return (
    <AppLayout showHeader={true}>
    <div className="min-h-screen bg-white">
      <div className='w-full hidden md:block h-72 bg-emerald-500 relative'></div>
      <div className="absolute top-0 z-10 max-w-4xl  md:left-[50%] md:-translate-x-[50%] bg-white rounded-t-3xl mt-20 p-8 shadow-lg">
        <div className="">
          {/* Episode Header */}
          <div className="flex gap-6 mb-4">
            <img
              crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${singlePodcast?.image}`}
              alt={singlePodcast?.title}
              className="w-20 h-20 md:w-35 md:h-35 rounded-lg object-cover"
            />
            <div className="flex-1">
              
              <h1 className="text-xl md:text-2xl font-bold mb-2">{singlePodcast?.title}</h1>
               <div className="flex flex-col md:flex-row md:items-center md:space-x-2 text-gray-500 mb-2">
                <span className="flex items-center gap-2">
                  <Calendar className='w-4 h-4 text-gray-500' />
                  {moment(singlePodcast?.releaseDate).format('DD MMMM YYYY')}
                </span>
                <span className='hidden md:flex'>•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path d="M13 7h-2v6h6v-2h-4z"/>
                  </svg>
                  {singlePodcast?.duration}
                </span>
              </div> 
              {/* <p className="text-gray-600">{singlePodcast?.summary}</p> 
               <div 
                dangerouslySetInnerHTML={{ __html: singlePodcast?.summary?.slice(0,100) }}
                className=" text-gray-600"
              /> */}
            </div>
          </div>
          {/* <div className="flex flex-row items-center  text-gray-500 my-2">
                <span className="flex items-center gap-2">
                  <Calendar className='w-4 h-4 text-gray-500' />
                  {moment(singlePodcast?.releaseDate).format('DD MMMM YYYY')}
                </span>
                <span className='hidden md:flex'>•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path d="M13 7h-2v6h6v-2h-4z"/>
                  </svg>
                  {singlePodcast?.duration}
                </span>
              </div> */}

          {/* Audio Player */}
          <div className="">
            <div><iframe src={singlePodcast?.channels[0].link} width="100%" height={singlePodcast?.channels[0].source === 'spotify'? "170" : singlePodcast?.channels[0].source === 'apple' ? '170' : '350'  }  title="Dynamic Iframe"></iframe></div>
            {/* <div className="bg-gray-100 h-1 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-1/3"></div>
            </div> */}
            
            {/* <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                <Button size="icon" variant="ghost">
                  <Rewind className="w-4 h-4" />
                </Button>
                <Button size="icon" className="bg-emerald-500 hover:bg-emerald-600">
                  <Play className="w-4 h-4" />

                </Button>
                
                <span className="text-sm text-gray-500">2:30/10:00</span>
              </div> 
               <div className="flex items-center gap-4">
                 <Button size="icon" variant="ghost">
                  <Volume2 className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Maximize2 className="w-4 h-4" />
                </Button> 
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  
                  <PiGooglePodcastsLogoBold />
              </Button>     
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <FaSpotify />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <FaPodcast/>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <FaRss />
                </Button>
              </div> 
            </div> */}
          </div>

          {/* Episode Description */}
          <div>
            <h2 className="text-xl font-bold mb-4">Episode Description</h2>
            <div className="prose max-w-none">
            <div 
                dangerouslySetInnerHTML={{ __html: singlePodcast?.summary }}
                className=" text-gray-600"
              />
            </div>
          </div>

          {/* Episode Credits */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Episode Credits:</h3>
            <p className="text-gray-600">
              Produced by <span className="text-emerald-500">{singlePodcast?.producedBy}</span>
            </p>
          </div>

          {/* Newsletter and Social Links */}
          <div className="text-gray-600 mt-16 p-5 border border-emerald-200 rounded-lg">
            <p className="mb-2"> Welcome to iPatient Diaries, powered by {' '}<a href="https/patient.ng/signup" className="text-emerald-500 hover:underline">patient.ng</a>.</p>
            <p>Each week, we narrate untold stories of patient experiences and the realities of healthcare professionals standing strongly by their side.</p>
            <p>From trials to triumphs, we amplify authentic voices that drive real empathy and advocacy for meaningful change.</p>
            <p>Register at{' '}<a href="https/patient.ng/signup" className="text-emerald-500 hover:underline">patient.ng</a> to join our grassroots advocacy movement for a compassionate, supportive and equitable healthcare system in Nigeria.</p>
            <p>
            Follow us on <a href="https://www.instagram.com/patientdotng?igsh=eGgxbWN4Z3ZhaHZn&utm_source=qr" target="_blank" className="text-emerald-500 hover:underline">Instagram</a>{' '}, <a href="https://www.facebook.com/profile.php?id=61563453420792&mibextid=LQQJ4d&_rdc=2&_rdr" target="_blank" className="text-emerald-500 hover:underline">Facebook</a>, and <a href="https://x.com/patientdotng?s=11&t=WDXKro3kSag6ImoNjJ85tw" target="_blank" className="text-emerald-500 hover:underline">Twitter</a>{' '} to connect with us or send your feedback.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
    </AppLayout>
  )
}