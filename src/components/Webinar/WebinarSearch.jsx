import React from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function WebinarSearch({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchTerm = e.target.search.value
    onSearch(searchTerm)
  }

  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-8">Find our on-demand webinar</h1>
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">SEARCH WEBINAR</h2>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              name="search"
              placeholder="Search"
              className="pl-10"
            />
          </div>
          <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Search
          </Button>
        </form>
      </div>
    </div>
  )
}