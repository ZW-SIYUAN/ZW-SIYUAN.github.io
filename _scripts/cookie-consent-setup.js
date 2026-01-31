---
permalink: /assets/js/cookie-consent-setup.js
---
/**
 * Cookie Consent Configuration
 * Documentation: https://cookieconsent.orestbida.com/
 */

// Initialize CookieConsent
window.CookieConsent = window.initCookieConsent();

window.CookieConsent.run({
  // Auto-clear cookies when user rejects a category
  autoclear_cookies: true,

  // Cookie name
  cookie_name: 'cc_cookie',

  // Cookie expiration (182 days)
  cookie_expiration: 182,

  // Page scripts mode (browser, storage)
  page_scripts: true,

  // GUI options
  gui_options: {
    consent_modal: {
      layout: 'cloud',               // box/cloud/bar
      position: 'bottom center',      // bottom/middle/top + left/right/center
      transition: 'slide',            // zoom/slide
      swap_buttons: false             // enable to invert buttons
    },
    settings_modal: {
      layout: 'box',                  // box/bar
      transition: 'slide'             // zoom/slide
    }
  },

  // Callbacks
  onFirstConsent: function(){
    console.log('Cookie Consent: First consent');
  },

  onConsent: function(){
    console.log('Cookie Consent: Consent given');
  },

  onChange: function(){
    console.log('Cookie Consent: Preferences changed');
  },

  // Languages
  languages: {
    'en': {
      consent_modal: {
        title: 'We use cookies',
        description: 'This website uses cookies to improve your experience and analyze site traffic. By clicking "Accept all", you consent to our use of cookies. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
        primary_btn: {
          text: 'Accept all',
          role: 'accept_all'              // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Reject all',
          role: 'accept_necessary'        // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: 'Cookie preferences',
        save_settings_btn: 'Save settings',
        accept_all_btn: 'Accept all',
        reject_all_btn: 'Reject all',
        close_btn_label: 'Close',
        cookie_table_headers: [
          {col1: 'Name'},
          {col2: 'Domain'},
          {col3: 'Expiration'},
          {col4: 'Description'}
        ],
        blocks: [
          {
            title: 'Cookie usage',
            description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
          },
          {
            title: 'Strictly necessary cookies',
            description: 'These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly.',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          },
          {
            title: 'Analytics cookies',
            description: 'These cookies allow us to measure traffic and analyze your behavior to improve our service.',
            toggle: {
              value: 'analytics',     // your cookie category
              enabled: false,
              readonly: false
            },
            cookie_table: [
              {
                col1: '_ga',
                col2: 'google.com',
                col3: '2 years',
                col4: 'Google Analytics - used to distinguish users',
                is_regex: true
              },
              {
                col1: '_gid',
                col2: 'google.com',
                col3: '1 day',
                col4: 'Google Analytics - used to distinguish users',
              },
              {
                col1: '_gat',
                col2: 'google.com',
                col3: '1 minute',
                col4: 'Google Analytics - used to throttle request rate',
              }
            ]
          },
          {
            title: 'More information',
            description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="{{ site.url }}{{ site.baseurl }}/#contact">contact us</a>.',
          }
        ]
      }
    }
  }
});
