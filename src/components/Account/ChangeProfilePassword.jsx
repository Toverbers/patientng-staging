import React, { useState } from 'react'
import { FormInput } from '../FormInput'
import useAuthStore from '@/store/authStore'
import { CustomButton } from '../CustomButton'
import PasswordInputField from '../PasswordInputField'

const ChangeProfilePassword = () => {
    const {changeUserPassword} = useAuthStore()
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: ''
    })

    const handleChangePassword = async () =>{
      await changeUserPassword(formData)
    }



  return (
    <>
     <div>
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PasswordInputField
              label="Old Password"
              id="oldPassword"
              type="password"
              placeholder='Old password'
              value={formData.currentPassword}
              onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
            />
            <PasswordInputField
              label="New Password"
              id="newPassword"
              type="password"
              placeholder="Repeat password"
              value={formData.newPassword}
              onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
            />
          </div> 
          <div className="my-10">
            <CustomButton buttonVariant={"primary"} className="w-full" onClick={handleChangePassword}>
              Change password
            </CustomButton>
          </div>
        </div>
    </>
  )
}

export default ChangeProfilePassword