import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import AuthFooter from '@/components/Auth/AuthFooter'
import { Link, useNavigate } from 'react-router'
import OtpInput from '@/components/OTPInput'
import axiosInstance from '@/utils/axiosInstance'
import useAuthStore from '@/store/authStore'

export default function VerifyAccount() {
  const [otp, setOtp] = useState('')
  const {register, regSuccess} =useAuthStore()
  //const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])
  const [isResending, setIsResending] = useState(false)
  const [timer, setTimer] = useState(0)
  const navigate = useNavigate()
  const [email, setEmail] = useState('tobibakare2024@gmail.com')

  

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])


  const handleResendCode = async () => {
    setIsResending(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsResending(false)
    setTimer(30) // Start 30 second countdown
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const regData = JSON.parse(localStorage.getItem('registration'))
   try {
    const res = await axiosInstance.post("/validate-signup-otp", { email: regData?.email, emailOtp: otp  });
    if(res.data.code === 200){
      //const regData = JSON.parse(localStorage.getItem('registration'))
     await register(regData)
    }
   } catch (error) {
    console.log(error)
   }
    
    //navigate('/personalize')
  }


 /*  const regData = JSON.parse(localStorage.getItem('registration'))
  console.log('REG DATA', regData) */

  useEffect(() => {
   if(regSuccess){
    navigate('/personalize')
   }
  },[regSuccess])

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
    
    setOtp(otp)
  };
  console.log("OTP", otp);

  return (
    <>
     <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[400px] md:border md:border-gray-300 rounded-xl p-[20px]">
        <div className="space-y-1 text-center">
        <Link to="/">
        
        <div className="flex justify-center">
          <img src="/logo.png" alt="logo" className='w-[60px] h-[60px]' />
        </div>
    
      </Link>
          <h2 className="text-2xl font-semibold">Verify Your Account</h2>
          <p className="text-sm text-gray-600">
            A verification code has been sent to your email. Please
            enter the code below to verify your account.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 my-4">
            
            
            <OtpInput length={6} 
              onOtpSubmit={onOtpSubmit} 
              />

            <div className="text-center">
              {timer > 0 ? (
                <p className="text-sm text-gray-600">
                  Resend code in {timer}s
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={isResending}
                  className="text-sm text-emerald-500 hover:text-emerald-600 disabled:opacity-50"
                >
                  {isResending ? 'Sending...' : 'Resend code'}
                </button>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-emerald-500 hover:bg-emerald-600"
              //disabled={otp?.some(digit => digit === '')}
            >
              Verify my account
            </Button>
          </form>
        </div>
      </div>
      <AuthFooter />
    </div>
    </>
  )
}