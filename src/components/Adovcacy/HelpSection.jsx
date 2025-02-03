import { useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FormInput } from '../FormInput'
import { UseAdvocacyStore } from '@/store/advocacyStore'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { Label } from '../ui/label'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import useAuthStore from '@/store/authStore'
import { SlideLeft } from '@/utility/animation'

export function HelpSection() {
  const {createAdvocacy} = UseAdvocacyStore()
  const {getme, myData} = useAuthStore()

  
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalAddress: '',
    complaints: '',
    //category: ''
  })

  const [category, setCategory] = useState('')

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  useEffect(()=> {
    getme()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    /* console.log('Form submitted with data:', formData)
    console.log('category data:', category) */
    // Here you would typically send the data to your backend
    await createAdvocacy({
      hospitalName: formData?.hospitalName, 
      hospitalAddress: formData?.hospitalAddress, 
      complaints: formData?.complaints, 
      category: category
    })

    setFormData({
      hospitalName: '',
      hospitalAddress: '',
      complaints: ''
    })
    setCategory('')
  }

  return (
    <section className="w-full px-8 min-h-[600px]">
    <div className='relative'>
      <img
        src="/medical-checkup.jpg"
        alt="Woman working at computer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div
      variants={SlideLeft(0.3)}
      whileInView={"animate"}
      initial="initial" 
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="max-w-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">We are happy to help</h2>
            <p className="text-gray-600 mb-6">
            Reach out here if you need assistance to lodge a complaint about your experience in a Nigerian hospital or clinic
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label="Name of hospital"
                id="hospitalName"
                value={formData.hospitalName}
                //onChange={handleInputChange}
                onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                required
              />
              <FormInput
                label="Address of hospital"
                id="hospitalAddress"
                value={formData.hospitalAddress}
                onChange={(e) => setFormData({ ...formData, hospitalAddress: e.target.value })}
                required
              />

            <div className='space-y-1 '>
            <Label>Select Category</Label>
            <Select
             value={category}
             //onValueChange={(e) => setFormData({ ...formData, category: e.target.value })}
             //onValueChange={handleInputChange}
             onValueChange={(value) => {setCategory(value)}}
             
            >
                  <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="health insurance">Health insurance</SelectItem>
                      <SelectItem value="medical billing">Medical billing</SelectItem>
                      <SelectItem value="medical errors/Negligence">Medical errors/Negligence</SelectItem>
                      <SelectItem value="patient Rights">Patient Rights</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
            </div>
              <div className="space-y-2">
                <label htmlFor="complaints" className="block text-sm font-medium text-gray-700">
                  Your complaints
                </label>
                <Textarea
                  id="complaints"
                  value={formData.complaints}
                  onChange={(e) => setFormData({ ...formData, complaints: e.target.value })}
                  rows={4}
                  required
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-emerald-500"
                />
              </div>

              {myData?  
              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Send your complaint</Button> :
              <Link to="/login">
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white ">
              Login to submit
              </Button>
              </Link>
              }
              {/* <Button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Send your complaint
              </Button> */}
            </form>
          </CardContent>
        </Card>
      </motion.div>
      </div>
    </section>
  )
}