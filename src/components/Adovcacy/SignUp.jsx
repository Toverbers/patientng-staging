import { CustomButton } from '../CustomButton'
import { Link } from 'react-router-dom'

export function SignUpSection() {
  
  return (
    <section className="py-16 my-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center bg-emerald-50">
      <h2 className="text-3xl font-bold mb-1">Volunteer as an advocate today</h2>
      <p className="text-gray-600 mb-8">
      You can make a difference. Sign up now
      </p>
      <div className="flex flex-col items-center justify-center md:flex-row gap-1 group">
        {/* <Input id={"sign as advocate"} placeholder="Enter your email" className="flex-grow w-80" /> */}
        <Link to={'/signup'}>
        <CustomButton buttonVariant={"primary"} className="w-80 md:w-80 md:h-12 rounded-md">
          Sign up
        </CustomButton>
        </Link>
      </div>
    </section>
  )
}