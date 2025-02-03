import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    const consentCookie = Cookies.get('cookieConsent')
    if (!consentCookie) {
      setShowBanner(true)
    } else {
      setPreferences(JSON.parse(consentCookie))
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
    }
    Cookies.set('cookieConsent', JSON.stringify(allAccepted), { expires: 365 })
    setPreferences(allAccepted)
    setShowBanner(false)
  }

  const handleDecline = () => {
    const minimalConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      advertising: false,
    }
    Cookies.set('cookieConsent', JSON.stringify(minimalConsent), { expires: 365 })
    setPreferences(minimalConsent)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    Cookies.set('cookieConsent', JSON.stringify(preferences), { expires: 365 })
    setShowBanner(false)
    setShowPreferences(false)
  }

  const togglePreference = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg border-t">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            We care about your privacy
          </h2>
          <p className="text-gray-600 mb-6">
            This website uses cookies that are needed for the site to work properly and to get data on how you interact with it, as well as for marketing purposes. By accepting, you agree to the use of cookies for ads and analytics as described in our{' '}
            <Link to="/cookie-policy" className="text-[#41b44d] hover:underline">
              Cookie policy.
            </Link>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="flex-1 border-emerald-300 text-emerald-500 hover:bg-emerald-300/10"
              onClick={handleDecline}
            >
              Decline
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-emerald-300 text-emerald-500 hover:bg-emerald-300/10"
              onClick={() => setShowPreferences(true)}
            >
              Settings
            </Button>
            <Button
              className="flex-1 bg-emerald-500 hover:bg-emerald-500/80 text-white"
              onClick={handleAcceptAll}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-emerald-500">Cookie Settings</DialogTitle>
            <DialogDescription>
              Customize your cookie preferences. Necessary cookies are always enabled.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {Object.entries(preferences).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <Label htmlFor={key} className="capitalize">{key} Cookies</Label>
                <Switch
                  id={key}
                  checked={value}
                  onCheckedChange={() => togglePreference(key)}
                  disabled={key === 'necessary'}
                  className="data-[state=checked]:bg-emerald-400"
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button 
              onClick={handleSavePreferences}
              className="bg-emerald-500 hover:bg-emerald-500/90 text-white"
            >
              Save preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CookieConsent

/* import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    const consentCookie = Cookies.get('cookieConsent')
    if (!consentCookie) {
      setShowBanner(true)
    } else {
      setPreferences(JSON.parse(consentCookie))
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
    }
    Cookies.set('cookieConsent', JSON.stringify(allAccepted), { expires: 365 })
    setPreferences(allAccepted)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    Cookies.set('cookieConsent', JSON.stringify(preferences), { expires: 365 })
    setShowBanner(false)
    setShowPreferences(false)
  }

  const togglePreference = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-700 mb-4 md:mb-0">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setShowPreferences(true)}>
              Manage Preferences
            </Button>
            <Button onClick={handleAcceptAll}>Accept All</Button>
          </div>
        </div>
      </div>

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
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
                  onCheckedChange={() => togglePreference(key)}
                  disabled={key === 'necessary'}
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={handleSavePreferences}>Save preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CookieConsent */