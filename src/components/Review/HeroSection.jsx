import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const HeroSection = () => {
  return (
    <div className="relative bg-gray-900  text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/hallway.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto md:ml-28 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compare the best<br />healthcare facilities.
          </h1>
          <p className="text-lg mb-8">
            Find the perfect care by exploring top-rated hospitals and clinics that meet your needs.
          </p>
          <div className="max-w-2xl flex">
            <Input
              type="text"
              placeholder="Search"
              className="rounded-r-none bg-white text-gray-900"
            />
            <Button className="rounded-l-none bg-emerald-500 hover:bg-emerald-600">
              Search
            </Button>
          </div>
        </div>
      </div>
  )
}
