@echo off
setlocal enabledelayedexpansion

REM Production Deployment Script for Windows
REM Supports multiple hosting platforms

echo 🚀 Starting deployment process...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

echo [SUCCESS] Node.js version: 
node --version

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    npm install
)

REM Function to build for specific platform
if "%1"=="github" goto deploy_github
if "%1"=="netlify" goto deploy_netlify
if "%1"=="vercel" goto deploy_vercel
if "%1"=="firebase" goto deploy_firebase
if "%1"=="preview" goto preview_local
if "%1"=="analyze" goto analyze_bundle
if "%1"=="build" goto build_only
goto show_help

:deploy_github
echo [INFO] Deploying to GitHub Pages...
call npm run build:github
call npm run deploy
echo [SUCCESS] Deployed to GitHub Pages!
echo [INFO] URL: https://rakeshpalla364-byte.github.io/CAREER_PORTFOLIO
goto end

:deploy_netlify
echo [INFO] Deploying to Netlify...
call npm run build:netlify
netlify deploy --prod --dir=build
echo [SUCCESS] Deployed to Netlify!
goto end

:deploy_vercel
echo [INFO] Deploying to Vercel...
call npm run build:vercel
vercel --prod
echo [SUCCESS] Deployed to Vercel!
goto end

:deploy_firebase
echo [INFO] Deploying to Firebase...
call npm run build:prod
firebase deploy
echo [SUCCESS] Deployed to Firebase!
goto end

:preview_local
echo [INFO] Building and previewing locally...
call npm run build:prod
call npm run preview
echo [SUCCESS] Local preview started on http://localhost:3000
goto end

:analyze_bundle
echo [INFO] Analyzing bundle...
call npm run build:prod
call npm run analyze
echo [SUCCESS] Bundle analysis completed!
goto end

:build_only
echo [INFO] Building for production...
call npm run build:prod
echo [SUCCESS] Build completed!
goto end

:show_help
echo 🚀 Production Deployment Script
echo.
echo Usage: deploy.bat [platform]
echo.
echo Platforms:
echo   github    - Deploy to GitHub Pages
echo   netlify   - Deploy to Netlify
echo   vercel    - Deploy to Vercel
echo   firebase  - Deploy to Firebase
echo   preview   - Build and preview locally
echo   analyze   - Build and analyze bundle
echo   build     - Build for production only
echo   help      - Show this help message
echo.
echo Examples:
echo   deploy.bat github
echo   deploy.bat netlify
echo   deploy.bat vercel
echo   deploy.bat preview
goto end

:end
echo [SUCCESS] Deployment script completed!
pause