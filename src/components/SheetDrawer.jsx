import React from 'react'
import { X } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function SheetDrawer({ trigger, title, children, side = 'right' }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent side={side} className="w-[90vw] sm:w-[450px] sm:max-w-full md:hidden">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>{title}</SheetTitle>
          {/* <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetTrigger> */}
        </SheetHeader>
        <div className="mt-6">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  )
}