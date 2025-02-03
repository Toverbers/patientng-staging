import React from 'react'
import { Check } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const FundraiserGoalForm = ({ value, onChange, onEdit }) => {
  return (
    <Card className="p-6">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-4 w-4" />
            </div>
            <h3 className="text-base font-medium">Add a cover photo or video</h3>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(1)}>
            Edit
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-4 w-4" />
            </div>
            <h3 className="text-base font-medium">Share the details of your Campaign</h3>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(2)}>
            Edit
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-4 w-4" />
            </div>
            <h3 className="text-base font-medium">Who are you campaigning for?</h3>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(3)}>
            Edit
          </Button>
        </div>
      </div>

      <h2 className="text-xl font-medium mb-6">How much will you like to raise?</h2>
      
      <div className="space-y-2">
        <Label htmlFor="goal">Label</Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500">₦</span>
          </div>
          <Input
            type="number"
            id="goal"
            name="goal"
            className="pl-7"
            placeholder="Your starting goal"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </Card>
  )
}

export default FundraiserGoalForm