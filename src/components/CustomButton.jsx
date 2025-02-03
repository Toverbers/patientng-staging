import React from 'react'
import { Button } from "@/components/ui/button"

export function CustomButton({ 
  children,  
  icon: Icon,
  buttonVariant,
  className = '',
  ...props 
}) {
  return (
    <Button 
      variant={buttonVariant}
      className={`flex items-center justify-center px-4 py-2 rounded-md text-white transition-colors ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </Button>
  )
}