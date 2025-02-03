import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '@/components/Auth/AuthForm';
import AuthFooter from '@/components/Auth/AuthFooter';
import { CustomButton } from '@/components/CustomButton';
import AuthLayout from '@/components/Auth/AuthLayout';
import { FormInput } from '@/components/FormInput';
import useAuthStore from '@/store/authStore';

const ResetPassword = () => {
  const {emailSuccess, resetUserPassword}= useAuthStore()
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested');
    await resetUserPassword({email:email})
  };

  useEffect(()=>{
    if(emailSuccess){
      navigate('/verify-password')
    }
  })

  return (
    <>

    <AuthLayout
      title="Hello!"
      subtitle="Please enter your email to reset your password."
      layoutStyle="max-w-[450px]"
      content={
        <>
        

        <form className="space-y-4">
          <FormInput
            label="Email Address"
            id="email"
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value )}
            
          />

          {/* <p className='my-3'>
          <Link to="/reset-password" className="text-emerald-500 hover:text-emerald-600 ">
             Forgot your password?
            </Link>
          </p> */}

          <CustomButton className='w-full h-[40px] bg-emerald-500 hover:bg-emerald-800' onClick={handleSubmit}>
           Verify Email
          </CustomButton>

          <p className="text-sm text-gray-600 text-center">
             Already a member?
            <Link to="/signup" className="text-emerald-500 hover:text-emerald-600">
             Signin
            </Link>
          </p>
          
          
        </form>
        </>
      }
     />

    </>
  );
};

export default ResetPassword;