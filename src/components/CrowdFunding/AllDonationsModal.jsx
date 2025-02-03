import React from 'react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Modal } from '../Modal'

export function AllDonationsModal({ isOpen, onClose, donations = [] }) {

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      title={`Donations (${donations.length})`}
    >
      <div className="divide-y">
        {/* Donations List */}
        <div className="px-4 py-2 max-h-[300px] overflow-y-scroll">
          {donations.map((donation, index) => (
            <div key={index} className="flex items-center space-x-3 py-3">
              <Avatar className="h-10 w-10 bg-emerald-500">
                <AvatarFallback className="text-white">
                  {donation.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{donation.name}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>NGN {donation.amount.toLocaleString()}</span>
                  <span className="mx-2">•</span>
                  <span>{donation.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </Modal>
  )
}