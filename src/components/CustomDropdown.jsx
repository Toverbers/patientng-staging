import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"
import { Link } from "react-router"

export function CustomDropdown({ buttonText, menuItems }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="none" className="border-0 ring-offset-0 focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 flex pl-1 text-base font-normal">
          {buttonText} <ChevronDown className="ml-0 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {menuItems?.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && item.separator && <DropdownMenuSeparator />}
            <DropdownMenuItem asChild>
              <Link to={item.href} className={`flex items-center cursor-pointer ${item.className || ""}`}>
                {item.icon && <item.icon className="mr-0 h-4 w-4 text-emerald-400" />}
                <div className="">
                    <span className="font-semibold">{item.label}</span>
                    <p>{item.description}</p>
                </div>   
              </Link>

            </DropdownMenuItem>
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}