---
permalink: /assets/js/cookie-consent-setup.js
---
/**
 * Cookie Consent Configuration
 * Documentation: https://cookieconsent.orestbida.com/
 */

// Wait for the library to be available
function initializeCookieConsent() {
  // Check if CookieConsent is available
  if (!window.CookieConsent) {
    // Library not yet loaded, try again after a short delay
    setTimeout(initializeCookieConsent, 100);
    return;
  }

  window.CookieConsent.run({
    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      analytics: {}
    },

    language: {
      default: 'en',
      translations: {
        en: {
          consentModal: {
            title: 'We use cookies',
            description: 'This website uses cookies to improve your experience and analyze site traffic. By clicking "Accept all", you consent to our use of cookies.',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            showPreferencesBtn: 'Manage Individual preferences'
          },
          preferencesModal: {
            title: 'Manage cookie preferences',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            savePreferencesBtn: 'Accept current selection',
            closeIconLabel: 'Close modal',
            sections: [
              {
                title: 'Cookie usage',
                description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
              },
              {
                title: 'Strictly Necessary cookies',
                description: 'These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly.',
                linkedCategory: 'necessary'
              },
              {
                title: 'Analytics cookies',
                description: 'These cookies allow us to measure traffic and analyze your behavior to improve our service.',
                linkedCategory: 'analytics'
              },
              {
                title: 'More information',
                description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="{{ site.url }}{{ site.baseurl }}/#contact">contact us</a>.'
              }
            ]
          }
        }
      }
    },

    // Callback when user accepts/rejects consent
    onFirstConsent: function(consentData) {
      handleConsentChange(consentData);
    },

    // Callback when user changes preferences
    onChange: function(consentData) {
      handleConsentChange(consentData);
    }
  });

  /**
   * Handle consent changes
   * Load or unload analytics scripts based on user consent
   */
  function handleConsentChange(consentData) {
    var categories = consentData.categories;

    // Check if analytics is accepted
    if (categories.analytics) {
      console.log('Analytics cookies accepted');
      // Analytics scripts will auto-run if they have type="text/plain" data-category="analytics"
      // The library handles this automatically
    } else {
      console.log('Analytics cookies rejected');
      // Clear analytics cookies if needed
      clearAnalyticsCookies();
    }
  }

  /**
   * Clear analytics cookies when user rejects analytics
   */
  function clearAnalyticsCookies() {
    // Clear Google Analytics cookies
    var gaCookies = ['_ga', '_ga_', '_gat', '_gid'];
    gaCookies.forEach(function(cookieName) {
      // Clear main domain cookie
      document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      // Clear with trailing dot for domain scope
      document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname + ';';
    });

    console.log('Analytics cookies cleared');
  }
}

// Initialize when the library is available
initializeCookieConsent();

