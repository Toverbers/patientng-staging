
import { CustomButton } from "../CustomButton";
import { CustomSelect } from "../CustomSelect";
import { FormInput } from "../FormInput";

import { Label } from "../ui/label";
import ChangeProfilePassword from "./ChangeProfilePassword";


export function AccountInformationFormTab({ formData, handleInputChange, handleSubmit }) {

   /* const handleUpdateProfile = async () => {

   } */
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="First Name"
              id="firstName"
              placeholder="Abayomi"
              value={formData?.firstName}
              onChange={handleInputChange}
              //onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            <FormInput
              label="Last Name"
              id="lastName"
              placeholder="Olowu"
              value={formData?.lastName}
              onChange={handleInputChange}
            />
            <FormInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="abayomi@patient.ng"
              value={formData?.email}
              onChange={handleInputChange}
            />
            <FormInput
              label="Phone Number"
              id="phoneNumber"
              placeholder="0810 044 1503"
              value={formData?.phone}
              onChange={handleInputChange}
            />
            <FormInput
              label="Age"
              id="age"
              placeholder="12 years old"
              value={formData?.age}
              onChange={handleInputChange}
            />
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <CustomSelect
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
              ]}
              placeholder="Male"
              value={formData?.gender}
              onChange={(value) => handleInputChange({ target: { id: 'gender', value } })}
            />
            </div>
            {/* <TextField
              className={'col-span-2'}
              label="Street Address"
              id="streetAddress"
              placeholder="234 ABC Street"
              value={formData?.address}
              onChange={handleInputChange}
            /> */}
             <FormInput
              inputClassName={'col-span-2'}
              label="Street Address"
              id="streetAddress"
              placeholder="234 ABC Street"
              value={formData?.address}
              onChange={handleInputChange}
            /> 
            <div className="space-y-2">
              <Label htmlFor="State">State</Label>
              <CustomSelect
                options={[
                  { value: 'lagos', label: 'Lagos' },
                  { value: 'abuja', label: 'Abuja' },
                ]}
                placeholder="Select State"
              value={formData?.lga}
              onChange={(value) => handleInputChange({ target: { id: 'lga', value } })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lga">LGA</Label>
              <CustomSelect
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
              ]}
              placeholder="Select Lga"
              value={formData?.lga}
              onChange={(value) => handleInputChange({ target: { id: 'lga', value } })}
            />
            </div>

            
            
          </div>

          <div className="my-10">
          <CustomButton buttonVariant={"primary"} type="submit" className="w-full" onClick={handleSubmit}>
          Apply Changes
        </CustomButton>
          </div>
        </div>
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Old Password"
              id="oldPassword"
              type="password"
              placeholder='Old password'
              value={formData.oldPassword}
              onChange={handleInputChange}
            />
            <FormInput
              label="New Password"
              id="newPassword"
              type="password"
              placeholder="Repeat password"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
          </div> 
          <div className="my-10">
            <CustomButton buttonVariant={"primary"} className="w-full">
              Change password
            </CustomButton>
          </div>
        </div> */}
        <ChangeProfilePassword />
       
      </div>
    )
  }