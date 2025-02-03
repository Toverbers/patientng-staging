import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Link } from 'react-router'
import AuthFooter from './AuthFooter'

const AuthLayout = ({
    title,
    subtitle,
    content,
    layoutStyle
}) => {
  return (
    <div className='w-full flex min-h-[100vh] flex-col justify-center items-center py-[50px] px-[20px] '>
     <div className={`w-full min-h-[200px] p-6 md:border md:border-gray-300 rounded-xl ${layoutStyle}`}>
     <div className="space-y-3 text-center">
        <Link to="/">
        
          <div className="flex justify-center">
            <img src="/logo.png" alt="logo" className='w-[60px] h-[60px]' />
          </div>
      
        </Link>
        <h2 className="text-2xl font-semibold">{title}</h2>
         <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <div className="space-y-4">
       {content}
      </div>
      
     </div>
     <AuthFooter />
    </div>
  )
}

export default AuthLayout