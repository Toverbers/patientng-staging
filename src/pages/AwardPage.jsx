import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HeroSection } from '@/components/Award/HeroSection'
import { FilterSection } from '@/components/Award/FilterSection'
import { AwardCard } from '@/components/Award/AwardCard'
import { Pagination } from '@/components/Award/Pagination'
import { AppLayout } from '@/components/AppLayout'


export default function AwardsPage() {
  const [selectedYear, setSelectedYear] = useState('2024')
  const [selectedCategory, setSelectedCategory] = useState('All Category')
  
  // Mock data for awards
  const awards = Array(10).fill(null).map((_, i) => ({
    id: i + 1,
    name: 'Award name',
    facility: 'HELATHCARE FACILITY NAME',
    address: 'Address_goes_in_here'
  }))

  return (
    <AppLayout showHeader={true}>
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <FilterSection
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {awards.map((award) => (
                <AwardCard
                  key={award.id}
                  name={award.name}
                  facility={award.facility}
                  address={award.address}
                />
              ))}
            </div>
            <Pagination currentPage={1} totalPages={8} />
          </div>
        </div>
      </main> 
    </div>
    </AppLayout>
  )
}