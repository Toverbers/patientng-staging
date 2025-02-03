import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { CustomButton } from "../CustomButton";


export function ProfileSummary() {
    return (
      <div className="flex flex-col items-center mb-6 p-4 bg-white rounded-lg shadow-md">
        <Avatar className="h-20 w-20 mb-2">
          <AvatarImage src="/placeholder.svg?height=80&width=80" />
          <AvatarFallback>OA</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-semibold">Olowu Abayomi</h2>
        <p className="text-sm text-gray-500">abayomi@patient.ng</p>
        <Button variant="ghost" className="w-full justify-center mt-4 text-red-500">
          Log Out
        </Button>
      </div>
    )
  }