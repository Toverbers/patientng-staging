import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function WebinarCard({ id, color = 'emerald', image, title, subtitle, categories, isLoggedIn }) {
  const bgColors = {
    emerald: 'bg-emerald-500',
    teal: 'bg-teal-800',
    yellow: 'bg-yellow-400'
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`${bgColors[color]} p-6 h-32 relative`}>
        <img src={image} alt="Patient.ng" className="h-8 w-8 object-cover" />
        <p className="text-white mt-4">{subtitle}</p>
      </div>
      <div className="p-4">
        <div className="flex gap-2 mb-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs ${
                index % 2 === 0 
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="font-semibold mb-6">{title}</h3>
        <Link
          to={`/webinars/${id}`}
          className="inline-flex items-center text-emerald-500 hover:text-emerald-600 text-sm font-medium"
        >
          {isLoggedIn ? 'Watch Now' : 'Sign up'}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}