import React, { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UseBankStore } from '@/store/bankStore'

const BeneficiaryOption = ({ value, title, description, color }) => (
  <div className="flex items-center space-x-2">
    <RadioGroupItem value={value} id={value} className="sr-only peer" />
    <Label
      htmlFor={value}
      className={`flex flex-1 items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer transition-colors
        peer-data-[state=checked]:border-${color}-500 peer-data-[state=checked]:bg-${color}-50
        [&:has([data-state=checked])]:border-${color}-500 [&:has([data-state=checked])]:bg-${color}-50`}
    >
      <RadioGroupItem value={value} id={value} className={`border-${color}-500 text-${color}-500`} />
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>
    </Label>
  </div>
)

const BeneficiarySelection = ({ value, onChange, onEdit, formData, updateFormData }) => {
  /* const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    accountNumber: '',
    bankName: '',
    accountName: '',
  }) */

  /* const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    })) 
    //updateFormData({ name: value })
  } */

  const {getAllBanks, bankData, verifyBank, accountName} = UseBankStore()

  useEffect(() =>{
    getAllBanks()
  },[])

  console.log('bank Data', bankData)

  const [selectedOption, setSelectedOption] = useState({
    id: "",
    name: "",
    value: "",
  });

  const handleSelectChange = (event) => {
     const selectedIndex = event.target.selectedIndex;
    const selectedOptionElement = event.target.options[selectedIndex]; 
    /* const selectElement = event.target; // The <select> element
    const selectedIndex = selectElement.selectedIndex; // The index of the selected option
    const selectedOptionElement = selectElement.options[selectedIndex];
 */
    setSelectedOption({
      id: selectedOptionElement.id,
      name: selectedOptionElement.getAttribute("name"),
      value: selectedOptionElement.value,
    });

    //updateFormData({ bankName: selectedOption?.name, bankCode: selectedOption?.value })
    updateFormData({ bankName: selectedOptionElement.getAttribute("name"), bankCode: selectedOptionElement.value })
  };

  useEffect(() =>{
   if(formData?.bankCode && formData?.bankName){
    verifyBank({accountNumber: formData.accountNumber, bankCode: formData?.bankCode})
   }
  },[formData?.bankCode, formData?.bankName])
  
  console.log('ACCOUNT NAME', accountName)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }
  const handleAccountNameChange = (e) => {
    //const { name, value } = e.target
    updateFormData({accountName: accountName})
  }

  useEffect(() => {
  if(accountName){
    updateFormData({accountName: accountName})
  }
  },[accountName])

  const handleBankChange = (value) => {
    /* setFormData(prevData => ({
      ...prevData,
      bankName: value
    })) */
    updateFormData({ bankName: value })
  }

  console.log(" GET BANK CODE", formData?.bankName)
  //console.log(" GET BANK CODE", selectedOption?.name, "||", selectedOption?.value )
  console.log(" GET BANK CODE FORMDATA", formData?.bankName, "||", formData?.bankCode )

  return (
    <Card className="p-6">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium break-words inline-block w-full max-w-[16rem] sm:max-w-none py-1">
              Share the details of your Campaign
            </h3> 
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-2 w-2" />
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(2)}>
            Edit
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium">Add a cover photo or video</h3>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-2 w-2" />
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(1)}>
            Edit
          </Button>
        </div>
      </div>

      <h2 className="text-xl font-medium mb-6">Who are you Campaigning for?</h2>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="space-y-4"
      >
        <BeneficiaryOption
          value="yourself"
          title="Yourself"
          description="Funds are delivered to your bank account for your own use"
          color={'emerald'}
        />
        <BeneficiaryOption
          value="someone"
          title="Someone else"
          description="Funds will be delivered to a beneficiary account"
          color={'emerald'}
        />
        <BeneficiaryOption
          value="charity"
          title="Charity"
          description="Funds will be delivered to your chosen nonprofit for you"
          color={'emerald'}
        />
      </RadioGroup>

      {value && (
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-medium">Beneficiary Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter address"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                placeholder="Enter account number"
              />
            </div>
            
            <div className="w-full">
            <Label >Bank Name</Label>
          <select
            //id={id}
            className=" border  text-gray-900 text-sm rounded-lg focus:ring-[#27B973] focus:border-[#27B973] block w-full p-2.5 sm:text-sm mb-5 h-10"
            onChange={handleSelectChange}
            
          >
            <option>Select your bank</option>
            {bankData?.map((option) => (
              <option
                key={option.id}
                id={option.id}
                name={option.name}
                value={option.code}
              >
                {option.name}
              </option>
            ))}
          </select>
            </div>
            
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="bankName">Bank Name</Label>
            <Select onChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a bank" />
              </SelectTrigger>
              <SelectContent>
                {bankData?.map((bank) => (
                  <SelectItem key={bank?.id} id={bank?.id} value={bank?.code} name={bank?.name}>{bank?.name}</SelectItem> 
                  ))}
              </SelectContent>
            </Select>

          </div> */}
          <div className="space-y-2">
              <Label htmlFor="accountName">Account Name</Label>
              <Input
                id="accountName"
                name="accountName"
                //value={formData.accountName}
                //value={accountName}
                value={formData.accountName}
                //onChange={handleAccountNameChange}
                disabled
                placeholder="Enter account name"
              />
            </div>
          
              </div>
            )}
    </Card>
  )
}

export default BeneficiarySelection