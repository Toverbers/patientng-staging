import { CustomButton } from '@/components/CustomButton'
import Footer from '@/components/Footer'
import { FormInput } from '@/components/FormInput'
import Header from '@/components/header'
import FAQSection from '@/components/Homepage/FAQComponent'
import TextField from '@/components/TextField'
import { UseContactStore } from '@/store/contactStore'
import { Mail, Phone } from 'lucide-react'
import { useState } from 'react'


const Contact = () => {
    const {createContact} = UseContactStore()
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        message: '',
        phone: ''
   })


    const handleSubmit = async () => {
        await createContact(formData)
        setFormData({
            email: '',
            firstName: '',
            lastName: '',
            message: '',
            phone: ''
        })
    }
  return (
    <>
    <Header />
     <section className='py-[40px]'>
     <div className="w-full px-4 pb-5 pt-10 md:pt-12">
        {/* Text Content */}
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-4xl  font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Contact <span className="text-emerald-500">Us</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-gray-600 md:text-lg">
          We love to hear from you
          </p>
          <div className="mt-8 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center justify-center">
            <div className='flex md:flex items-center space-x-2 cursor-pointer border border-emerald-500 rounded-sm p-2 w-[80%] md:w-[250px]'>
              <div>
              <Phone size={38} className='text-emerald-500' />
              </div>

              <div className='text-left text-sm'>
                <p className='font-bold'>Phone</p>
                <p>Give us a call on</p>
                <p>07080603000</p>
              </div>
              
            </div>
            <div className='flex md:flex items-center space-x-2 cursor-pointer border border-emerald-500 rounded-sm p-2 w-[80%] md:w-[250px]'>
              <div>
              <Mail size={38} className='text-emerald-500' />
              </div>

              <div className='text-left text-sm'>
                <p className='font-bold'>Email</p>
                <p>Get in touch by emailing</p>
                <p>info@patient.ng</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {/* <div className="relative mx-auto mt-16 max-w-[600px]">
          <img
            src="/Hero background.png"
            alt="Healthcare Professional with Service Icons"
            className="w-full h-auto bg-blend-"
          />
        </div> */}

        <div className="mx-auto max-w-[800px] mt-10 border border-[#f1f1f1] p-5 rounded-lg flex-col space-y-2">
        <h1 className="text-2xl text-center  font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl mb-5">
          Send us a <span className="text-emerald-500">Message</span>
          </h1>

         <div className='flex flex-col md:flex-row md:items-center md:space-x-2'>
          <FormInput label="First Name" inputClassName="w-full" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}/>
          <FormInput label="Last Name" inputClassName="w-full" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
         </div>
         <div className='flex flex-col md:flex-row items-center md:space-x-2'>
          <FormInput type='email' label="Email" inputClassName="w-full" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <FormInput type='number' label="Phone Number" inputClassName="w-full" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
         </div>
         <div className='flex items-center'>
          <TextField title="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
         </div>

         <div className='flex justify-center'>
         <CustomButton className='bg-emerald-500 text-white w-full' onClick={handleSubmit} >Submit</CustomButton>
         </div>
        </div>
      </div>
      <div className="mx-auto max-w-[800px]">
        <FAQSection />
      </div>
        
     </section>
     <Footer />
    </>
  )
}

export default Contact