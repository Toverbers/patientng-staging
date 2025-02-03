import React, { useState } from 'react'

export function ToggleButton({ onColor = 'bg-emerald-500', offColor = 'bg-gray-300', onToggle }) {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
    if (onToggle) {
      onToggle(!isOn)
    }
  }

  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none ${isOn ? onColor : offColor}`}
    >
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isOn ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  )
}