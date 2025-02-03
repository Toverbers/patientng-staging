import React from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  showCloseButton = true,
  className = '' 
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div 
        className={`bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-hidden ${className}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          {showCloseButton && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          )}
        </div>
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  )
}