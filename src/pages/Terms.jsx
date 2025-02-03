import Footer from '@/components/Footer'
import Header from '@/components/header'
import { useWebsiteStore } from '@/store/websiteStore'

import React, { useEffect } from 'react'

const Terms = () => {
    const {getAllDOcs, websiteData} = useWebsiteStore()

    useEffect(() =>{
        getAllDOcs()
    },[])

    console.log("TERMS AND CONDITION", websiteData)
  return (
    <>
     <Header />
     <div className='my-10 bg-white max-w-[90%] mx-auto py-50 px-10 pt-[100px]'>
      <h2 className='text-3xl font-medium'>Terms and Condition</h2>
      <p className='text-base'><span className='font-medium'>Updated: </span>{websiteData?.termsAndCondition?.dateUpdated}</p>

      <div 
        dangerouslySetInnerHTML={{ __html: websiteData?.termsAndCondition?.content }}
        className="text-sm text-gray-600 mb-3 line-clamp-2"
        />

     </div>
     <Footer />
    </>
  )
}

export default Terms