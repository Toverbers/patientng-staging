import { CustomButton } from "../CustomButton"
import { Button } from "../ui/button"

export const FilterSection = ({ 
    selectedYear, 
    setSelectedYear, 
    selectedCategory, 
    setSelectedCategory 
    }) => 
    {
    const years = ['2021', '2022', '2023', '2024']
    const categories = ['All Category', 'Category 1', 'Category 2']
  
    return (
      <div className="sticky top-4 space-y-8 bg-white p-6 rounded-lg shadow-sm">
        <div>
          <h3 className="text-sm font-semibold mb-4">YEAR</h3>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                className={selectedYear === year ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">CATEGORIES</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <CustomButton
                key={category}
                variant="ghost"
                className={`w-full justify-start ${
                  selectedCategory === category ? "text-emerald-500" : "text-gray-600"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CustomButton>
            ))}
          </div>
        </div>
      </div>
    )
  }