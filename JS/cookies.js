document.getElementById('accept-cookies').addEventListener('click', function() {
  // Usuario acepta cookies: activamos Consent Mode para permitir cookies
  gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted'
  });
  document.getElementById('consent-banner').style.display = 'none';
  // Guardar en localStorage para no mostrar el banner otra vez
  localStorage.setItem('cookieConsent', 'accepted');
});

document.getElementById('reject-cookies').addEventListener('click', function() {
  // Usuario rechaza cookies: Consent Mode bloquea cookies para anuncios y analytics
  gtag('consent', 'update', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied'
  });
  document.getElementById('consent-banner').style.display = 'none';
  localStorage.setItem('cookieConsent', 'rejected');
});

// Mostrar banner solo si no hay consentimiento guardado
window.onload = function() {
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
};
