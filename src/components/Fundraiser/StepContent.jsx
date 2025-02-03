import React from 'react'
import { Card } from "@/components/ui/card"
import FundraiserDetailsForm from './FundRaiserDetailsForm'
import ImageFileUploader from '../ImageFileUploader'
import BeneficiarySelection from './BeneficiarySelector'
import { useFundraiserForm } from '@/lib/Context/FormRaiserContext'
import FundraiserGoalForm from './FundRaiserGoalForm'
import FundraiserReview from './FundRaiserReview'
import { useToast } from '@/hooks/use-toast'


const StepContent = ({ currentStep, onEdit }) => {
  const { formData, updateFormData } = useFundraiserForm()
/*   const [termsAccepted, setTermsAccepted] = useState(false) */
  const { submitForm } = useFundraiserForm()
  const { toast } = useToast()

  const handleImageChange = (file) => {
    updateFormData({ coverImage: file })
  }

  const handleBeneficiaryChange = (value) => {
    updateFormData({ beneficiaryType: value })
  }

  const handleGoalChange = (value) => {
    updateFormData({ goal: value })
  }

  const handleSubmit = async () => {
    if (!termsAccepted) {
      toast({
        title: "Error",
        description: "Please accept the terms and conditions before submitting.",
        variant: "destructive",
      })
      return
    }

    try {
      await submitForm()
      toast({
        title: "Success",
        description: "Your fundraiser has been submitted successfully!",
      })
      // Redirect to a success page or dashboard
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit fundraiser. Please try again.",
        variant: "destructive",
      })
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <FundraiserDetailsForm formData={formData} updateFormData={updateFormData} />
      case 2:
        return (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Add a cover photo or video</h2>
            <ImageFileUploader onImageChange={handleImageChange} />
          </Card>
        )
      case 3:
        return (
          <BeneficiarySelection
            formData={formData} updateFormData={updateFormData}
            value={formData.beneficiaryType}
            onChange={handleBeneficiaryChange}
            onEdit={onEdit}
          />
        )
      case 4:
        return (
          <FundraiserGoalForm
            value={formData.goal}
            onChange={handleGoalChange}
            onEdit={onEdit}
          />
        )
      case 5:
        return <FundraiserReview 
        formData={formData}
        />
      default:
        return <div>Unknown step</div>
    }
  }

  return (
    <div className="space-y-8 py-4 ">
      <div className='text-center md:text-left'>
        <h1 className="text-2xl font-semibold">Create Campaign</h1>
        <p className="text-gray-500">Start your Campaign journey</p>
      </div>
      {renderStepContent()}
    </div>
  )
}

export default StepContent