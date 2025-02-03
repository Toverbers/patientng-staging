import { useEffect, useState } from 'react';
import { Country, State, City } from 'country-state-city';
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Link, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { CustomButton } from '@/components/CustomButton';
import { FormInput } from '@/components/FormInput';
import AuthLayout from '@/components/Auth/AuthLayout';
import useAuthStore from '@/store/authStore';
import { nigeriaStates } from '@/lib/states';

export default function PersonalizeProfile() {
  const {userOnboarding, onboardSuccess} = useAuthStore()
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    state: '',
    lga: '',
    address: '',
  });
  const navigate = useNavigate()

  const nigerian = nigeriaStates

  const handleStateChange = (value) => {
    setFormData({ 
      ...formData,
      state: value,
      lga: '' // Reset LGA when state changes
    })
  }

  const handleLGAChange = (value) => {
    setFormData({...formData, lga: value })
  }

  const lgas = formData?.state && nigerian?.find((s) => s.state === formData?.state)?.lgas || [];

   const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
      /* ...(name === 'country' ? { state: '', city: '' } : {}),
      ...(name === 'state' ? { city: '' } : {}) */
    }));
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
   // await userOnboarding(formData)
    
  };

  useEffect(() => {
   if(onboardSuccess){
    navigate('/')
   }
  },[onboardSuccess])

  console.log("FORM DATA", formData)

  return (
    
    <>

    <AuthLayout
      title="Personalize your experience"
      subtitle="Tell us a bit about yourself to tailor your iPatient experience."
      layoutStyle="max-w-[450px]"
      content={
        <>
        

        <div className="space-y-4 mt-4">
          <FormInput
            id="age"
            label="Age"
            type="number"
            placeholder="Enter age"
            name="age"
            value={formData.age}
            //onChange={handleInputChange}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <FormInput
            id="streetAddress"
            label="Street Address"
            type="text"
            placeholder="Enter your street address here"
            name="age"
            value={formData?.address}
            //onChange={handleInputChange}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />

         <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
            defaultValue='male'
              value={formData.gender}
              onValueChange={(value) => handleSelectChange('gender', value)}
              //onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>
         <div className="space-y-2">
            <Label htmlFor="gender">State</Label>
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
          </div>

         <div className="space-y-2">
            <Label htmlFor="gender">LGA</Label>
            <Select 
              value={formData?.lga} 
              onValueChange={handleLGAChange}
              //onValueChange={(v) => setFormData({ ...formData, lga: v })}
              disabled={!formData?.state}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select LGA" />
              </SelectTrigger>
              <SelectContent>
                {lgas?.map((lga, index) => (
                  <SelectItem key={index} value={lga}>
                    {lga}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleSelectChange('country', value)}
            >
              <SelectTrigger id="country">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
 */}

          <CustomButton onClick={handleSubmit} className='w-full h-[40px] bg-emerald-500 hover:bg-emerald-800'>
           Continue
          </CustomButton>


          <p className="text-sm text-gray-600 text-center">
             Don't have an account?
            <Link to="/signup" className="text-emerald-500 hover:text-emerald-600">
             Signup
            </Link>
          </p>
          
          
        </div>
        </>
      }
     />
     
    </>
  );
}