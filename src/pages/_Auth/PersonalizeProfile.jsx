/* import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from 'lucide-react'

// Simulated location search API
const searchLocations = async (query) => {
  // In a real application, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 300)); // Simulate API delay
  return [
    { id: 1, name: 'New York, NY, USA' },
    { id: 2, name: 'Los Angeles, CA, USA' },
    { id: 3, name: 'Chicago, IL, USA' },
    { id: 4, name: 'Houston, TX, USA' },
    { id: 5, name: 'Phoenix, AZ, USA' },
  ].filter(location => location.name.toLowerCase().includes(query.toLowerCase()));
};

export default function PersonalizeProfile() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    location: '',
  })
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (name === 'location') {
      handleLocationSearch(value)
    }
  }

  const handleLocationSearch = async (query) => {
    if (query.length > 2) {
      setIsSearching(true)
      const results = await searchLocations(query)
      setSearchResults(results)
      setIsSearching(false)
    } else {
      setSearchResults([])
    }
  }

  const handleLocationSelect = (location) => {
    setFormData(prev => ({
      ...prev,
      location: location.name
    }))
    setSearchResults([])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-[400px]">
        <CardHeader className="space-y-1 text-center">
          <h2 className="text-2xl font-semibold">Personalize Your Experience</h2>
          <p className="text-sm text-gray-600">
            Tell us a bit about yourself to tailor your iPatient experience.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                placeholder="Enter age"
                //value={formData.age}
                //onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                //value={formData.gender}
                //onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div ref={searchRef} className="relative">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    id="location"
                    name="location"
                    placeholder="Search location"
                    //value={formData.location}
                    //onChange={handleInputChange}
                    className="pl-8"
                  />
                </div>
                {isSearching && (
                  <div className="absolute inset-x-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 p-2">
                    Searching...
                  </div>
                )}
                {searchResults.length > 0 && (
                  <ul className="absolute inset-x-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {searchResults.map((result) => (
                      <li
                        key={result.id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleLocationSelect(result)}
                      >
                        {result.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-emerald-500 hover:bg-emerald-600"
            >
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} */