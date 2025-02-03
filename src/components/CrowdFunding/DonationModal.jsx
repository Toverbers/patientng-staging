import React, { useState } from 'react'
import { Modal } from '../Modal'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const DonationModal = ({ isOpen, onClose }) => {
  const [donationAmount, setDonationAmount] = useState('')
  const quickAmounts = [500, 1000, 5000, 10000, ]

  const handleQuickAmount = (amount) => {
    setDonationAmount(amount.toString())
  }

  const handleDonate = () => {
    console.log('Donating:', donationAmount)
    // Handle donation logic here
  }
  return (
    <Modal
      isOpen={isOpen} 
      onClose={onClose}
      title={`Donate for victim`}
    >
        {/* Donation Form */}
        <div className="p-4 space-y-4">
          <h3 className="font-semibold uppercase">Donate now</h3>
          <Input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Input an amount to donate"
            className="w-full"
          />
          <div className="flex flex-wrap gap-2">
            {quickAmounts.map((amount) => (
              <Button
                key={amount}
                variant="outline"
                onClick={() => handleQuickAmount(amount)}
                className="flex-1"
              >
                N {amount.toLocaleString()}
              </Button>
            ))}
          </div>
          <Button 
            onClick={handleDonate}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Donate
          </Button>
        </div>
    </Modal>
  )
}
