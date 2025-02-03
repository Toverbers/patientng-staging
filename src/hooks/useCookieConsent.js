import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const useCookieConsent = () => {
  const [consent, setConsent] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent')
    if (cookieConsent) {
      setConsent(JSON.parse(cookieConsent))
    }
  }, [])

  return consent
}

export default useCookieConsent