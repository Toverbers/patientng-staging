import AuthFooter from '@/components/Auth/AuthFooter'
import AuthLayout from '@/components/Auth/AuthLayout'
import { CustomButton } from '@/components/CustomButton'
import { FormInput } from '@/components/FormInput'
import PasswordInputField from '@/components/PasswordInputField'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import useAuthStore from '@/store/authStore'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'

export default function RegisterPage() {
  const { resendOtp, sendOtp} = useAuthStore()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    isAdvocate: false,
    //acceptTerms: false
  })

  
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
    //await register({email: email, firstName: firstName, lastName: lastName, phone: phone, isAdvocate, password})
    localStorage.setItem("registration", JSON.stringify(formData))
    await resendOtp(formData)

  }

  useEffect(() => {
   if(sendOtp){
    navigate('/verify')
   }
  },[sendOtp])

  return (
    <>

    <AuthLayout
      title="Create an Account"
      subtitle="Enter your details to begin"
      layoutStyle="max-w-[600px]"
      content={
        <>

       {/* <div className="flex flex-col md:grid grid-cols-2 gap-4 mt-4">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                    fill="currentColor"
                  />
                </svg>
                Sign in with Apple
              </Button>
          </div> 

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>*/}
        

        <form className="space-y-4">

        <div className="flex items-center space-x-2">
            <Switch id="advocate-mode"  />
            <Label htmlFor="advocate-mode">Volunteer as a Patient Advocate?</Label>
          </div>

          <FormInput
            id="firstName"
            label="First name"
            type="text"
            placeholder="James"
            name="firstName"
            value={formData?.firstName}
            onChange= {handleInputChange}
          />
          <FormInput
            id="lastName"
            label="Last name"
            type="text"
            placeholder="Fortune"
            name="lastName"
            value={formData?.lastName}
            onChange= {handleInputChange}
          />
          
          <FormInput
            id="phone"
            label="Phone Number"
            type="text"
            placeholder="08087654345"
            name="phone"
            value={formData?.phone}
            onChange= {handleInputChange}
          />
          <FormInput
            id="email"
            label="Email Address"
            type="email"
            placeholder="email@domain.com"
            name="email"
            value={formData?.email}
            onChange= {handleInputChange}
          />

          <PasswordInputField
           id="password"
           label="Password"
           placeholder="Password"
           name="password"
           value={formData?.password}
           onChange= {handleInputChange}
           caution={
            <p className='text-xs text-emerald-700 flex items-center -mt-2'>
              <span className='mr-3'><AlertCircle size={16} /></span>
              Password must contain at least one uppercase letter, lowercase, number, and be longer than 6 characters
            </p>
          }
           />

       <div className="flex items-center space-x-2 mt-4 justify-center">
          <input
            type="checkbox"
            id="terms"
            name="acceptTerms"
            //checked={formData?.acceptTerms}
            //onChange={handleInputChange}
            className="rounded border-gray-300 text-emerald-600 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to Patient.ng{" "}
            <Link to="/terms" className="text-emerald-500 hover:text-emerald-600">
              Terms and Conditions
            </Link>
          </label>
        </div>

          <CustomButton onClick={handleSubmit} className='w-full h-[40px] bg-emerald-500 hover:bg-emerald-800'>
           Register
          </CustomButton>

          <p className="text-sm font-medium text-gray-600 text-center">
          Already have an account?
            <Link to="/Login" className="text-emerald-500 ml-2 hover:text-emerald-600">
             Login
            </Link>
          </p>
          
          
        </form>
        </>
      }
     />

    <AuthFooter />
    </>
  )
}