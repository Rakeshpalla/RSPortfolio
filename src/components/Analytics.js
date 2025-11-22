import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 with Enhanced Tracking
    const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
    
    // Enhanced visitor tracking function
    const trackVisitor = () => {
      const visitorData = {
        timestamp: new Date().toISOString(),
        page: window.location.pathname + window.location.search,
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookieEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        platform: navigator.platform,
        // Device detection
        deviceType: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        browser: getBrowserName(),
        os: getOSName(),
      };

      // Store in localStorage for session tracking
      const sessionId = getOrCreateSessionId();
      visitorData.sessionId = sessionId;
      
      // Track with Google Analytics if available
      if (GA_TRACKING_ID && process.env.NODE_ENV === 'production' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: visitorData.page,
          custom_map: {
            dimension1: 'device_type',
            dimension2: 'browser',
            dimension3: 'os',
            dimension4: 'timezone'
          }
        });

        // Track custom event with visitor data
        window.gtag('event', 'page_view', {
          device_type: visitorData.deviceType,
          browser: visitorData.browser,
          os: visitorData.os,
          timezone: visitorData.timezone,
          screen_resolution: visitorData.screenResolution,
          session_id: sessionId
        });
      }

      // Log visitor data (you can send this to your own analytics endpoint)
      if (process.env.NODE_ENV === 'development') {
        console.log('Visitor Data:', visitorData);
      }
      
      // Optional: Send to custom analytics endpoint
      // sendToCustomAnalytics(visitorData);
      
      return visitorData;
    };

    // Helper functions
    function getOrCreateSessionId() {
      let sessionId = sessionStorage.getItem('analytics_session_id');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('analytics_session_id', sessionId);
      }
      return sessionId;
    }

    function getBrowserName() {
      const userAgent = navigator.userAgent;
      if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
      if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
      if (userAgent.indexOf('Safari') > -1) return 'Safari';
      if (userAgent.indexOf('Edge') > -1) return 'Edge';
      if (userAgent.indexOf('Opera') > -1) return 'Opera';
      return 'Unknown';
    }

    function getOSName() {
      const userAgent = navigator.userAgent;
      if (userAgent.indexOf('Windows') > -1) return 'Windows';
      if (userAgent.indexOf('Mac') > -1) return 'macOS';
      if (userAgent.indexOf('Linux') > -1) return 'Linux';
      if (userAgent.indexOf('Android') > -1) return 'Android';
      if (userAgent.indexOf('iOS') > -1 || userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) return 'iOS';
      return 'Unknown';
    }

    // Track user interactions
    const trackInteraction = (eventName, element) => {
      if (GA_TRACKING_ID && process.env.NODE_ENV === 'production' && window.gtag) {
        window.gtag('event', eventName, {
          event_category: 'engagement',
          event_label: element || 'unknown',
          value: 1
        });
      }
    };

    // Track button clicks
    const trackButtonClicks = () => {
      document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
          const buttonText = e.target.textContent || e.target.getAttribute('aria-label') || 'Unknown';
          trackInteraction('button_click', buttonText);
        }
      });
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const scrollThresholds = [25, 50, 75, 100];
      const trackedThresholds = new Set();

      window.addEventListener('scroll', () => {
        const scrollPercent = Math.round(
          ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
        );
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          scrollThresholds.forEach(threshold => {
            if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
              trackedThresholds.add(threshold);
              if (GA_TRACKING_ID && process.env.NODE_ENV === 'production' && window.gtag) {
                window.gtag('event', 'scroll', {
                  event_category: 'engagement',
                  event_label: `${threshold}%`,
                  value: threshold
                });
              }
            }
          });
        }
      });
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      window.addEventListener('beforeunload', () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (GA_TRACKING_ID && process.env.NODE_ENV === 'production' && window.gtag) {
          window.gtag('event', 'time_on_page', {
            event_category: 'engagement',
            event_label: 'seconds',
            value: timeOnPage
          });
        }
      });
    };

    // Initialize Google Analytics 4
    if (GA_TRACKING_ID && process.env.NODE_ENV === 'production') {
      // Load Google Analytics script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true,
          anonymize_ip: true,
          allow_google_signals: true,
          allow_ad_personalization_signals: false
        });
      `;
      document.head.appendChild(script2);
    }

    // Track initial visitor data
    trackVisitor();

    // Set up interaction tracking
    trackButtonClicks();
    trackScrollDepth();
    trackTimeOnPage();

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (GA_TRACKING_ID && process.env.NODE_ENV === 'production' && window.gtag) {
          window.gtag('event', 'page_hidden', {
            event_category: 'engagement'
          });
        }
      } else {
        if (GA_TRACKING_ID && process.env.NODE_ENV === 'production' && window.gtag) {
          window.gtag('event', 'page_visible', {
            event_category: 'engagement'
          });
        }
      }
    });

    // Track route changes (for SPA)
    const handleRouteChange = () => {
      trackVisitor();
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
};

export default Analytics;
