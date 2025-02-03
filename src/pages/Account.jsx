import React, { useEffect, useState } from 'react'
import { ProfileDetails } from '@/components/Account/ProfileDetails'
import { AccountInformationFormTab } from '@/components/Account/AccountInformationFormTab'
import { AppLayout } from '@/components/AppLayout'
import CrowdfundingCardTab from '@/components/Account/CrowdfundingCardTab'
import HospitalReviewsTab from '@/components/Account/HospitalReviewsTab'
import AdvocacyTab from '@/components/Account/AdvocacyTab'
import useAuthStore from '@/store/authStore'


export default function AccountPage() {
  const {getme, myData, updateUserProfile} = useAuthStore()

  useEffect(()=> {
    getme()
  },[])

  console.log("USER INFORMATION", myData)
  const [activeTab, setActiveTab] = useState('Account Information')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
    gender: '',
    address: '',
    state: '',
    lga: '',
  })
  const [image, setImage] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(()=> {
  if(myData){
   setFormData({
    firstName: myData?.firstName,
    lastName: myData?.lastName,
    email: myData?.email,
    phone: myData?.phone,
    age: myData?.age,
    gender: myData?.gender,
    address: myData?.address,
    state: myData?.state,
    lga: myData?.lga,
  })
  }
  },[myData])

  const reviews = [
    {
      hospitalName: "Hospital name",
      content: "To a general advertiser outdoor advertising is worthy of consideration. Outdoor advertising is considered as the oldest form of advertising. Posting bills on wooden boards in the late 19th century led to the birth of the term billboard. Today, outdoor advertising includes",
      date: "26th Oct 2023",
      rating: 5,
      status: "approved",
      showModify: false
    },
    {
      hospitalName: "Hospital name",
      content: "To a general advertiser outdoor advertising is worthy of consideration. Outdoor advertising is considered as the oldest form of advertising. Posting bills on wooden boards in the late 19th century led to the birth of the term billboard. Today, outdoor advertising includes",
      date: "26th Oct 2023",
      rating: 5,
      status: "pending",
      showModify: true
    },
    {
      hospitalName: "Hospital name",
      content: "To a general advertiser outdoor advertising is worthy of consideration. Outdoor advertising is considered as the oldest form of advertising. Posting bills on wooden boards in the late 19th century led to the birth of the term billboard. Today, outdoor advertising includes",
      date: "26th Oct 2023",
      rating: 5,
      status: "rejected",
      showModify: true
    }
  ]

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleImageChange = async (e) => {
    setImage(e.target.files[0]);
    console.log("Image file", image)
    const url = await URL.createObjectURL(e.target.files[0] || image);
    setImageUrl(url)
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData)
    // Here you would typically send the data to your backend
    await updateUserProfile({ 
      id: myData?._id,
      firstName: formData?.firstName, 
      lastName: formData?.lastName, 
      email: formData?.email, 
      phone: formData?.phone, 
      image: image, 
      age: formData?.age, 
      gender: formData?.gender, 
      address: formData?.address, 
      state: formData?.state, 
      lga: formData?.lga
    })
    getme()
  }

  return (
    <AppLayout showHeader={true} loggedIn={true}>
        <div className='mx-auto px-4 py-8 space-y-4'>
            <h2 className='text-3xl font-semibold'>Account</h2>
            {/*Desktop screen*/}
            <div className="flex flex-col sm:flex-row gap-8">
                <ProfileDetails activeTab={activeTab} setActiveTab={setActiveTab} userData={myData} handleImageChange={handleImageChange} image={image} setImage={setImage} imageUrl={imageUrl} />
                <div className="flex-1 bg-white p-8 rounded-lg shadow-sm">
                    {activeTab === 'Account Information' && (
                    <AccountInformationFormTab
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                    />
                    )}
                    {activeTab === 'Crowdfunding' && (
                    <CrowdfundingCardTab
                    userId={myData?._id}
                    status="awaiting_review"
                    image="baby.jpg"
                    organizer={{
                      name: "Abayomi Olowu",
                      avatar: "/placeholder.svg?height=40&width=40",
                      avatarFallback: "AO"
                    }}
                    beneficiary="Osaze Odemwinge"
                    location="Abuja"
                    amountRaised={1000}
                    goal={500000}
                    donationsCount={1}
                    onEdit={() => console.log("Edit clicked")}
                    onDelete={() => console.log("Delete clicked")}
                  />
                    )}
                    {activeTab === 'Hospital Reviews' && (
                    <HospitalReviewsTab reviews={reviews}/>
                    )}
                    {activeTab === 'Advocacy' && (
                    <AdvocacyTab />
                    )}
                    {/* Add other tab content components here */}
                </div>
            </div>
        </div>
    </AppLayout>
  )
}