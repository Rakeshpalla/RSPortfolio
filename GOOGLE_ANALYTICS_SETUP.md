# Google Analytics 4 Setup Guide - Step by Step

Follow these steps to set up Google Analytics 4 for your portfolio website.

## Step 1: Create Google Analytics Account

1. **Go to Google Analytics**
   - Visit: https://analytics.google.com/
   - Sign in with your Google account (use the same account you want to manage analytics with)

2. **Start Measuring**
   - Click the "Start measuring" button
   - If you already have a Google Analytics account, click "Admin" (gear icon) → "Create Account"

## Step 2: Create an Account

1. **Account Setup**
   - **Account name**: Enter "Rakesh Portfolio" or "My Portfolio"
   - **Account Data Sharing Settings**: 
     - ✅ Check "Google products & services"
     - ✅ Check "Benchmarking"
     - ✅ Check "Technical support"
     - ✅ Check "Account specialists"
   - Click "Next"

## Step 3: Create a Property

1. **Property Setup**
   - **Property name**: Enter "Portfolio Website" or "RSPortfolio"
   - **Reporting time zone**: Select your timezone (e.g., "Asia/Kolkata" for India)
   - **Currency**: Select your currency (e.g., "Indian Rupee (INR)")
   - Click "Next"

2. **Business Information**
   - **Industry category**: Select "Technology" or "Other"
   - **Business size**: Select appropriate size
   - **How you intend to use Google Analytics**: 
     - ✅ Check "Measure customer engagement with my product or service"
     - ✅ Check "Understand how customers find my business"
   - Click "Create"

3. **Accept Terms**
   - Read and accept the Google Analytics Terms of Service
   - Accept the Data Processing Terms
   - Click "I Accept"

## Step 4: Set Up Data Stream

1. **Choose Platform**
   - Select "Web" (since this is a website)

2. **Configure Web Stream**
   - **Website URL**: Enter `https://rakeshpalla.github.io`
   - **Stream name**: Enter "RSPortfolio Website" or keep default
   - **Enhanced measurement**: Keep it ON (tracks scrolls, outbound clicks, site search, video engagement, file downloads)
   - Click "Create stream"

## Step 5: Get Your Measurement ID

1. **Copy Measurement ID**
   - After creating the stream, you'll see a page with your **Measurement ID**
   - It looks like: `G-XXXXXXXXXX` (starts with G- followed by alphanumeric characters)
   - **Copy this ID** - you'll need it in the next step

2. **Note the Measurement ID**
   - Example: `G-ABC123XYZ`
   - Keep this safe - you'll add it to your website

## Step 6: Configure Your Website

### Option A: Local Development Setup

1. **Create .env file**
   - In your project root folder, create a file named `.env`
   - Add this line (replace with your actual Measurement ID):
   ```
   REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

2. **Verify .env is in .gitignore**
   - The `.env` file should already be in `.gitignore` to keep it private
   - Check that `.env` is listed in `.gitignore`

3. **Restart Development Server**
   - Stop your current server (Ctrl+C)
   - Run `npm start` again
   - The analytics will now work in development mode

### Option B: Production Deployment (GitHub Pages)

Since GitHub Pages doesn't support environment variables directly, you have two options:

**Option 1: Build Script with Environment Variable**
1. Set the environment variable before building:
   ```bash
   set REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
   npm run build:github
   npm run deploy
   ```

**Option 2: Use GitHub Secrets (Recommended for CI/CD)**
1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add a new secret:
   - Name: `REACT_APP_GA_TRACKING_ID`
   - Value: Your Measurement ID (G-XXXXXXXXXX)
4. Create a GitHub Actions workflow to build and deploy

## Step 7: Verify Analytics is Working

1. **Check Real-Time Reports**
   - Go to Google Analytics dashboard
   - Click "Reports" → "Realtime"
   - Visit your website: https://rakeshpalla.github.io/RSPortfolio
   - You should see yourself appear in the Realtime report within seconds

2. **Test Events**
   - Click buttons on your website
   - Scroll through pages
   - Check Realtime → Events to see if events are being tracked

3. **Use DebugView (Advanced)**
   - Install Google Analytics Debugger Chrome extension
   - Enable it and visit your site
   - Go to Admin → DebugView in Google Analytics
   - See events in real-time with detailed information

## Step 8: Configure Important Settings

### Enable Enhanced Measurement
1. Go to Admin → Data Streams
2. Click on your web stream
3. Under "Enhanced measurement", ensure all are enabled:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Video engagement
   - ✅ File downloads

### Set Up Goals/Conversions (Optional)
1. Go to Admin → Events
2. Mark important events as conversions:
   - Resume downloads
   - LinkedIn clicks
   - Email clicks
   - Time on page > 2 minutes

### Configure Data Retention
1. Go to Admin → Data Settings → Data Retention
2. Set retention to 14 months (or as needed)
3. Enable "Reset on new activity"

## Step 9: View Your Analytics Data

### Key Reports to Check Daily/Weekly:

1. **Realtime Overview**
   - See who's on your site right now
   - Location, pages viewed, traffic sources

2. **Audience → Overview**
   - Total users, new users, sessions
   - Average session duration
   - Bounce rate

3. **Audience → Geo → Location**
   - See visitor countries and cities
   - Top locations where visitors are accessing from

4. **Audience → Technology → Browser & OS**
   - Device breakdown (Mobile vs Desktop)
   - Browser types
   - Operating systems

5. **Acquisition → Overview**
   - How visitors find your site
   - Direct, search, social, referral traffic

6. **Behavior → Site Content**
   - Most viewed pages
   - Page views, unique page views
   - Average time on page

## Step 10: Privacy & Compliance

### Add Cookie Consent (Recommended)
Consider adding a cookie consent banner for GDPR compliance:
- Google Tag Manager can help with this
- Or use a simple cookie consent library

### Data Privacy Settings
1. Go to Admin → Data Settings → Data Collection
2. Review and configure:
   - Google Signals (for demographics)
   - Advertising features
   - User data collection acknowledgment

## Troubleshooting

### Analytics Not Working?

1. **Check Measurement ID**
   - Verify it starts with `G-`
   - Ensure no extra spaces in `.env` file
   - Format: `REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX`

2. **Check Environment Variable**
   - In browser console, check if `process.env.REACT_APP_GA_TRACKING_ID` is set
   - Only works in production build or if explicitly set

3. **Check Browser Console**
   - Open DevTools (F12)
   - Look for errors related to Google Analytics
   - Check Network tab for requests to `googletagmanager.com`

4. **Verify Build**
   - Make sure you're running production build
   - Development mode may not load analytics (by design)
   - Test with: `npm run build` then `npm run preview`

5. **Ad Blockers**
   - Some ad blockers prevent Google Analytics
   - Test in incognito mode or disable ad blockers

### Not Seeing Data?

- **Wait 24-48 hours**: Standard reports have a delay
- **Use Realtime**: Shows data immediately
- **Check Filters**: Make sure no filters are excluding your data
- **Verify Tracking Code**: Use Google Tag Assistant Chrome extension

## Quick Reference

- **Google Analytics Dashboard**: https://analytics.google.com/
- **Measurement ID Format**: `G-XXXXXXXXXX`
- **Environment Variable**: `REACT_APP_GA_TRACKING_ID`
- **Your Website**: https://rakeshpalla.github.io/RSPortfolio

## Next Steps After Setup

1. ✅ Set up Google Analytics account
2. ✅ Get Measurement ID
3. ✅ Add to `.env` file
4. ✅ Deploy to production
5. ✅ Verify in Realtime reports
6. ✅ Set up custom goals/conversions
7. ✅ Review weekly analytics reports
8. ✅ Optimize based on visitor data

## Support Resources

- **Google Analytics Help**: https://support.google.com/analytics
- **GA4 Documentation**: https://developers.google.com/analytics/devguides/collection/ga4
- **Community Forum**: https://support.google.com/analytics/community

---

**Need Help?** If you encounter any issues, check the troubleshooting section or refer to Google Analytics Help Center.

