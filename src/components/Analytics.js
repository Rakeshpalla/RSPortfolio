import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4
    const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
    
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
          page_location: window.location.href
        });
      `;
      document.head.appendChild(script2);
    }

    // Track page views
    const trackPageView = () => {
      if (GA_TRACKING_ID && process.env.NODE_ENV === 'production') {
        window.gtag && window.gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href
        });
      }
    };

    // Track initial page view
    trackPageView();

    // Track route changes
    const handleRouteChange = () => {
      trackPageView();
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
};

export default Analytics;
