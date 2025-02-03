import { Globe, Mail, Phone, Star } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

function FacilityCard({ facility }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm">
      <img
        src={facility.image}
        alt={facility.name}
        className="w-full sm:w-24 h-48 sm:h-24 rounded-lg object-cover"
      />
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h3 className="font-semibold">{facility.name}</h3>
          {facility.isTopRated && (
            <Badge variant="outline" className="text-emerald-500 border-emerald-500 self-start sm:self-auto mt-2 sm:mt-0">
              Top rated
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(facility.rating)
                    ? 'fill-current text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600">{facility.rating}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{facility.reviews} Reviews</span>
          
        </div>
        <p className="text-gray-500 mb-2">{facility.location}</p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
            {facility.services.map((service) => (
              <span key={service} className="text-sm text-gray-500">
                {service}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Globe className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Phone className="w-4 h-4" />
            </Button>
            <Link to={`/review/${facility.id}`}>
              <Button variant="link" className="text-emerald-500 p-0">
                See reviews
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacilityCard