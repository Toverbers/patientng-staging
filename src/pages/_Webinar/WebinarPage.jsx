import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import WebinarSearch from '@/components/Webinar/WebinarSearch'
import TopicsFilter from '@/components/Webinar/TopicsFilter'
import WebinarCard from '@/components/Webinar/WebinarCard'
import { AppLayout } from '@/components/AppLayout'


// Mock data - replace with API call later
const webinars = Array(6).fill().map((_, index) => ({
  id: `webinar-${index + 1}`,
  title: "Healthy Eating Habits for Busy Lifestyles.",
  subtitle: "Building a Balanced Diet",
  image:'/young afro woman.jpeg',
  categories: ["Category1", "Category2"]
}))

export default function WebinarPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 8
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This should come from your auth system

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm)
    // Implement search functionality
  }

  const handleFilterChange = (topic, checked) => {
    console.log('Filter changed:', topic, checked)
    // Implement filter functionality
  }

  return (
    <AppLayout>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <WebinarSearch onSearch={handleSearch} />
            <TopicsFilter onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {webinars.map((webinar, index) => (
                <WebinarCard
                  key={webinar.id}
                  {...webinar}
                  color={index % 3 === 0 ? 'teal' : index % 3 === 1 ? 'emerald' : 'yellow'}
                  isLoggedIn={isLoggedIn}
                  image={webinar.image}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Prev
              </Button>
              <span className="text-sm text-gray-600">
                Page {currentPage} to {totalPages}
              </span>
              <Button
                variant="ghost"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AppLayout>
  )
}