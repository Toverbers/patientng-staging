import React from 'react'
import useCookieConsent from './useCookieConsent'

const AnalyticsComponent = () => {
  const cookieConsent = useCookieConsent()

  if (cookieConsent.analytics) {
    // Initialize analytics
    return <div>Analytics are enabled</div>
  }

  return <div>Analytics are disabled</div>
}

export default AnalyticsComponent