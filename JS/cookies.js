document.addEventListener('DOMContentLoaded', function() {
  // User accepts cookies: enable Consent Mode to allow cookies
  document.getElementById('accept-cookies').addEventListener('click', function() {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted'
    });
    document.getElementById('consent-banner').style.display = 'none';
    // Save consent status to localStorage to avoid showing banner again
    localStorage.setItem('cookieConsent', 'accepted');
  });

  // User rejects cookies: Consent Mode blocks cookies for ads and analytics
  document.getElementById('reject-cookies').addEventListener('click', function() {
    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied'
    });
    document.getElementById('consent-banner').style.display = 'none';
    localStorage.setItem('cookieConsent', 'rejected');
  });

  // Show banner only if no consent saved yet
  const consent = localStorage.getItem('cookieConsent');
  if(consent === 'accepted') {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted'
    });
    document.getElementById('consent-banner').style.display = 'none';
  } else if(consent === 'rejected') {
    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied'
    });
    document.getElementById('consent-banner').style.display = 'none';
  } else {
    document.getElementById('consent-banner').style.display = 'block';
  }
});
