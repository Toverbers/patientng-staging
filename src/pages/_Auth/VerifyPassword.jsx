'use client'

import AuthFooter from "@/components/Auth/AuthFooter"
import AuthForm from "@/components/Auth/AuthForm"
import AuthLayout from "@/components/Auth/AuthLayout"
import { CustomButton } from "@/components/CustomButton"
import { FormInput } from "@/components/FormInput"
import OtpInput from "@/components/OTPInput"
import PasswordInputField from "@/components/PasswordInputField"
import useAuthStore from "@/store/authStore"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"

export default function CheckInbox() {
  const {ResetPass, newPassword}= useAuthStore()
  const navigate = useNavigate();
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
    
    setOtp(otp)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested');
    await newPassword({resetCode: otp, password: password, confirmPassword: confirmPassword})
  };

  useEffect(()=>{
    if(ResetPass){
      navigate('/login')
    }
  })


  return (
    <>

    <AuthLayout
      title="Hello!"
      subtitle="Please enter the otp sent to your emal and fill in your new details."
      layoutStyle="max-w-[450px]"
      content={
        <>
        

        <form className="space-y-4 mt-4">

           <OtpInput length={4} 
              onOtpSubmit={onOtpSubmit} 
              />
          <PasswordInputField
            label="Password"
            id="newPassword"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInputField
            label="Confirm Password"
            id="newPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />


          {/* <p className='my-3'>
          <Link to="/reset-password" className="text-emerald-500 hover:text-emerald-600 ">
             Forgot your password?
            </Link>
          </p> */}

          <CustomButton className='w-full h-[40px] bg-emerald-500 hover:bg-emerald-800' onClick={handleSubmit}>
           Reset Password
          </CustomButton>

          {/* <p className="text-sm text-gray-600 text-center">
             Already a member?
            <Link to="/signup" className="text-emerald-500 hover:text-emerald-600">
             Signin
            </Link>
          </p> */}
          
          
        </form>
        </>
      }
     />

    </>
  )
}