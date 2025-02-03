import { AwardIcon } from "@/icons/AwardIcon"
import { Button } from "../ui/button"

export const AwardCard = ({ name, facility, address }) =>{
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <div className="w-36 h-32 mx-auto mb-4 ">
          <AwardIcon />
        </div>
        <h3 className="text-lg font-semibold mb-2">[{name}]</h3>
        <p className="text-sm text-gray-600 uppercase mb-1">[{facility}]</p>
        <p className="text-sm text-gray-500 mb-4">[{address}]</p>
        <Button variant="link" className="text-emerald-500">
          See Nominees
        </Button>
      </div>
    )
  }