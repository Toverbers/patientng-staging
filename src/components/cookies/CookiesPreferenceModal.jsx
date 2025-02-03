import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import useCookies from 'react-cookie-consent'

const CookiePreferencesModal = ({ isOpen, onClose }) => {
  const [cookies, setCookie] = useCookies(['cookiePreferences'])
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and disabled
    performance: cookies.cookiePreferences?.performance ?? false,
    functional: cookies.cookiePreferences?.functional ?? false,
    targeting: cookies.cookiePreferences?.targeting ?? false,
  })

  const handleToggle = (type) => {
    setPreferences(prev => ({ ...prev, [type]: !prev[type] }))
  }

  const handleSave = () => {
    setCookie('cookiePreferences', preferences, { path: '/', maxAge: 31536000 }) // 1 year
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
          <DialogDescription>
            Manage your cookie preferences. Necessary cookies are always enabled.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {Object.entries(preferences).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <Label htmlFor={key} className="capitalize">{key} Cookies</Label>
              <Switch
                id={key}
                checked={value}
                onCheckedChange={() => handleToggle(key)}
                disabled={key === 'necessary'}
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save preferences</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CookiePreferencesModal