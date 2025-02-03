import { UseCampaignStore } from '@/store/campaignStore'
import React, { createContext, useContext, useState } from 'react'

const FundraiserFormContext = createContext()

export const useFundraiserForm = () => useContext(FundraiserFormContext)

export const FundraiserFormProvider = ({ children }) => {
  const {createCampaign} = UseCampaignStore()
  const [formData, setFormData] = useState({
    coverImage: null,
    title: '',
    state: '',
    lga: '',
    description: '',
    beneficiaryType: '',
    goal: '',
    duration: '',
    category: '',
    firstName: '',
    lastName: '',
    address: '',
    accountNumber: '',
    bankName: '',
    accountName: '',
    bankCode: '',
  })

  const updateFormData = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }))
  }

  const submitForm = async () => {
   /*  try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/submit-fundraiser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit fundraiser')
      }

      return await response.json()
    } catch (error) {
      console.error('Error submitting fundraiser:', error)
      throw error
    } */
     await createCampaign({
      title: formData.title, 
      description: formData.description, 
      fundraisingFor: `${formData.firstName} ${formData.lastName}`, 
      accountNumber: formData.accountNumber, 
      accountName: formData.accountName, 
      bankCode: formData.bankCode, 
      bank: formData.bankName, 
      state: formData.state, 
      lga: formData.lga, 
      amountNeeded: formData.goal, 
      image: formData.coverImage, 
      address: formData.address,
      duration: formData.duration,
      category: formData.category

     })
  
    }

  return (
    <FundraiserFormContext.Provider value={{ formData, updateFormData, submitForm }}>
      {children}
    </FundraiserFormContext.Provider>
  )
}