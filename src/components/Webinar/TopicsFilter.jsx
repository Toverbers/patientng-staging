import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

export default function TopicsFilter({ onFilterChange }) {
  const topics = [
    "Nutrition and Diet",
    "Physical Fitness and Exercise",
    "Mental Health and Wellbeing",
    "Chronic Disease Management",
    "Women's Health",
    "Men's Health",
    "Healthy Aging",
    "Preventative Health",
    "Community Health and Wellness"
  ]

  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">TOPICS</h2>
      <div className="space-y-3">
        {topics.map((topic) => (
          <div key={topic} className="flex items-center space-x-2">
            <Checkbox id={topic} onCheckedChange={(checked) => onFilterChange(topic, checked)} />
            <label htmlFor={topic} className="text-sm text-gray-700 cursor-pointer">
              {topic}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}