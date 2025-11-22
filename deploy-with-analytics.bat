@echo off
echo ========================================
echo Deploy to GitHub Pages with Analytics
echo ========================================
echo.

REM Check if .env file exists
if not exist .env (
    echo Error: .env file not found!
    echo.
    echo Please run setup-analytics.bat first to set up your Google Analytics ID.
    echo.
    pause
    exit /b 1
)

REM Read GA ID from .env
for /f "tokens=2 delims==" %%a in ('findstr "REACT_APP_GA_TRACKING_ID" .env') do set GA_ID=%%a

if "%GA_ID%"=="" (
    echo Error: Google Analytics ID not found in .env file!
    echo.
    echo Please run setup-analytics.bat first.
    echo.
    pause
    exit /b 1
)

echo Google Analytics ID found: %GA_ID%
echo.
echo Building for production...
echo.

REM Set environment variable and build
set REACT_APP_GA_TRACKING_ID=%GA_ID%
set GENERATE_SOURCEMAP=false
set CI=false

call npm run build:github

if errorlevel 1 (
    echo.
    echo Build failed! Please check the errors above.
    pause
    exit /b 1
)

echo.
echo Build successful!
echo.
echo Deploying to GitHub Pages...
echo.

call npm run deploy

if errorlevel 1 (
    echo.
    echo Deployment failed! Please check the errors above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Your website is now live with Google Analytics tracking.
echo.
echo View your site: https://rakeshpalla.github.io/RSPortfolio
echo View analytics: https://analytics.google.com/
echo.
echo Note: Analytics data may take a few minutes to appear in reports.
echo Use Realtime reports to see immediate activity.
echo.

pause

