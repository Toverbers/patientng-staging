import { Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { ToggleButton } from "../ToggleButton"
import { CustomSelect } from "../CustomSelect"

function FilterSidebar({ className }) {

  const stateOptions = [
    { value: 'lagos', label: 'Lagos' },
    { value: 'abuja', label: 'Abuja' },
    { value: 'kano', label: 'Kano' },
    { value: 'rivers', label: 'Rivers' },
  ]

    return (
      <div className={`space-y-8 ${className} p-2 shadow-md rounded-lg bg-gray-50 w-auto`}>
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase text-gray-500">Rating</h3>
          <div className="md:flex gap-1 items-center">
            {['All', '1.0+', '2.0+', '3.0+', '4.5+'].map((rating) => (
              <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="rating" className="form-radio text-emerald-500" />
                <span className="flex items-center">
                  {rating !== 'Any' && <Star className="w-4 h-4 fill-current text-yellow-400" />}
                  <span>{rating}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
  
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase text-gray-500">Location</h3>
          <CustomSelect 
          options={stateOptions} 
          placeholder="Select state"
          onChange={(value) => console.log('Selected state:', value)}
          />
        </div>
  
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase text-gray-500">Company Status</h3>
          <label className="flex items-center space-x-2 cursor-pointer">
            <ToggleButton onToggle={(state) => console.log('Toggle is now', state ? 'On' : 'Off')} />
            <span className="flex items-center space-x-2">
              <span>verified</span>
            </span>
          </label>
        </div>
      </div>
    )
  }

export default FilterSidebar