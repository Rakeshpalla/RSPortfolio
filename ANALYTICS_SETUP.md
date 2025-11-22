# Analytics Setup Guide

This guide will help you set up comprehensive visitor analytics for your portfolio website.

## What Analytics Tracks

Your website now tracks:
- **Visitor Location**: Country, city (via IP geolocation in Google Analytics)
- **Visit Time**: Timestamp, timezone, session duration
- **Device Information**: Device type (Mobile/Desktop), OS, Browser
- **Screen Resolution**: Viewport and screen dimensions
- **User Behavior**: Page views, scroll depth, button clicks, time on page
- **Traffic Sources**: Referrer, direct traffic, search engines
- **Session Information**: Unique session IDs, return visitors

## Setting Up Google Analytics 4

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create an account name (e.g., "Rakesh Portfolio")
5. Set up a property (e.g., "Portfolio Website")
6. Choose "Web" as your platform

### Step 2: Get Your Measurement ID

1. In Google Analytics, go to **Admin** (gear icon)
2. Under **Property**, click **Data Streams**
3. Click on your web stream
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add Measurement ID to Your Website

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add your Google Analytics Measurement ID:

```env
REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
```

3. **Important**: Add `.env` to your `.gitignore` file to keep it private
4. Restart your development server: `npm start`

### Step 4: Deploy with Environment Variable

For GitHub Pages deployment, you'll need to set the environment variable in your build process:

**Option A: Using GitHub Actions (Recommended)**
- Create `.github/workflows/deploy.yml` with your GA_TRACKING_ID as a secret

**Option B: Build locally and deploy**
- Set the environment variable before building
- Run `npm run build:github`
- Run `npm run deploy`

## Viewing Your Analytics Data

### Google Analytics Dashboard

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View reports:
   - **Realtime**: See visitors right now
   - **Audience**: Demographics, location, technology
   - **Acquisition**: Traffic sources
   - **Behavior**: Page views, events
   - **Conversions**: Goals and conversions

### Key Reports to Check

1. **Audience > Overview**: Total visitors, sessions, demographics
2. **Audience > Geo > Location**: Visitor countries and cities
3. **Audience > Technology > Browser & OS**: Device breakdown
4. **Behavior > Site Content**: Most viewed pages
5. **Realtime > Overview**: Live visitor activity

## Privacy Considerations

- **IP Anonymization**: Enabled by default (visitor IPs are anonymized)
- **GDPR Compliance**: Consider adding a cookie consent banner
- **Data Retention**: Google Analytics retains data for 14-26 months (configurable)

## Alternative Analytics Solutions

If you prefer privacy-focused alternatives:

### 1. Plausible Analytics
- Privacy-friendly, no cookies
- Simple dashboard
- Setup: Add script to `public/index.html`

### 2. Umami Analytics
- Self-hosted, open-source
- Privacy-focused
- Requires server setup

### 3. Custom Analytics Backend
- Build your own tracking endpoint
- Full control over data
- Requires backend server

## Custom Event Tracking

The analytics component automatically tracks:
- Page views
- Button clicks
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page
- Page visibility changes

## Troubleshooting

### Analytics Not Working?

1. Check if `REACT_APP_GA_TRACKING_ID` is set correctly
2. Verify you're in production mode (`NODE_ENV=production`)
3. Check browser console for errors
4. Use Google Analytics DebugView to see events in real-time
5. Verify the Measurement ID format is correct (starts with `G-`)

### Not Seeing Data?

- Google Analytics can take 24-48 hours to show data
- Use Realtime reports to verify tracking is working
- Check that ad blockers aren't blocking Google Analytics

## Advanced Configuration

### Custom Dimensions

You can add custom dimensions in Google Analytics to track:
- User type (new vs returning)
- Content category
- Custom user properties

### Goals and Conversions

Set up goals in Google Analytics to track:
- Resume downloads
- LinkedIn clicks
- Email clicks
- Time on site thresholds

## Support

For issues or questions:
- Google Analytics Help: https://support.google.com/analytics
- React Analytics: Check component code in `src/components/Analytics.js`

