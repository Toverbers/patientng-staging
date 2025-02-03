import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { nigeriaStates } from '@/lib/states'

// Mock data - replace with actual data from your API
/* const states = [
  "Lagos",
  "Abuja",
  "Rivers",
  // Add more states
]

const lgas = {
  Lagos: ["Ikeja", "Lekki", "Surulere"],
  Abuja: ["Abaji", "Bwari", "Gwagwalada"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme"],
  // Add more LGAs
} */

  

const duration = [
  "1 month",
  "2 months",
  "3 months",
  "6 months",
  "9 months",
  "1 year",  
]

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
]

const FundraiserDetailsForm = ({ formData, updateFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const nigerian = nigeriaStates

  const handleStateChange = (value) => {
    updateFormData({ 
      state: value,
      lga: '' // Reset LGA when state changes
    })
  }

  const handleLGAChange = (value) => {
    updateFormData({ lga: value })
  }

  const handleDurationChange = (value) => {
    updateFormData({ duration: value })
  }

  const lgas = formData?.state && nigerian?.find((s) => s.state === formData?.state)?.lgas || [];

  const handleCategoryChange = (value) => {
    updateFormData({ category: value })
  }

  console.log("state and lga", formData?.state, "|", formData?.lga)

  return (
    <Card className="p-6 ">
      <h2 className="text-xl font-medium mb-6">Share the details of your campaign with donors</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Campaign title
          </label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Input fundraiser title"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Where are you located?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={formData.state} onValueChange={handleStateChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {nigerian?.map((state) => (
                  <SelectItem key={state?.alias} value={state?.state}>
                    {state?.state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={formData.lga} 
              onValueChange={handleLGAChange}
              disabled={!formData.state}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select LGA" />
              </SelectTrigger>
              <SelectContent>
                {lgas?.map((lga) => (
                  <SelectItem key={lga} value={lga}>
                    {lga}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              How long is the Campaign for?
            </label>
            <Select value={formData.duration} onValueChange={handleDurationChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Campaign Duration" />
              </SelectTrigger>
              <SelectContent>
                {duration.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Please select campaign category
            </label>
            <Select value={formData.categories} onValueChange={handleCategoryChange}>
              <SelectTrigger>
                <SelectValue placeholder="Category 1" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* <RadioGroup
              value={formData.category}
              onValueChange={handleCategoryChange}
              className="space-y-1 gap-6 md:flex justify-stretch p-2 bg-gray-100/50 "
            >
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <RadioGroupItem value={category} id={category} />
                  <label className="text-sm" htmlFor={category}>{category}</label>
                </div>
              ))}
            </RadioGroup> */}
          </div>
        </div>
        

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Campaign description
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Hello, my name is XYZ and i am fundraising for"
            rows={8}
            className="resize-none"
          />
        </div>
      </div>
    </Card>
  )
}

export default FundraiserDetailsForm