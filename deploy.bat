@echo off
echo 🚀 Deploying Rakesh Sharma Palla Portfolio to GitHub Pages
echo.

echo 📦 Building production version...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Please check for errors.
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.

echo 📁 Production files ready in 'build' folder
echo 🌐 Your website will be available at: https://rakeshpalla364-byte.github.io/CAREER_PORTFOLIO
echo.

echo 📋 Next Steps:
echo 1. Go to GitHub.com and create a repository named 'CAREER_PORTFOLIO'
echo 2. Upload all files from this project folder
echo 3. Enable GitHub Pages in repository settings
echo 4. Your website will be live in minutes!
echo.

echo 📖 For detailed instructions, see DEPLOYMENT_GUIDE.md
echo.

pause
