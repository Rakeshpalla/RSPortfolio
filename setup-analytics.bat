@echo off
echo ========================================
echo Google Analytics Setup Script
echo ========================================
echo.

REM Check if .env file exists
if exist .env (
    echo .env file already exists.
    echo.
    choice /C YN /M "Do you want to update it with your Google Analytics ID"
    if errorlevel 2 goto :end
    if errorlevel 1 goto :input
) else (
    echo Creating .env file...
    goto :input
)

:input
echo.
echo Please enter your Google Analytics Measurement ID
echo Format: G-XXXXXXXXXX (starts with G-)
echo.
set /p GA_ID="Enter your Measurement ID: "

REM Validate input
if "%GA_ID%"=="" (
    echo Error: Measurement ID cannot be empty!
    pause
    exit /b 1
)

REM Check if it starts with G-
echo %GA_ID% | findstr /R "^G-" >nul
if errorlevel 1 (
    echo Warning: Measurement ID should start with 'G-'
    echo Example: G-ABC123XYZ
    echo.
    choice /C YN /M "Do you want to continue anyway"
    if errorlevel 2 goto :end
)

REM Create or update .env file
(
    echo # Google Analytics 4 Tracking ID
    echo REACT_APP_GA_TRACKING_ID=%GA_ID%
    echo.
    echo # Site Configuration
    echo REACT_APP_SITE_URL=https://rakeshpalla.github.io/RSPortfolio
    echo REACT_APP_LINKEDIN_URL=https://www.linkedin.com/in/rakeshsharma364/
    echo REACT_APP_EMAIL=rakeshpalla364@gmail.com
    echo REACT_APP_PHONE=+91 8985409428
) > .env

echo.
echo ========================================
echo Success! .env file created/updated
echo ========================================
echo.
echo Your Google Analytics ID: %GA_ID%
echo.
echo Next steps:
echo 1. Restart your development server: npm start
echo 2. For production, build with: npm run build:github
echo 3. Deploy with: npm run deploy
echo.
echo To view analytics, visit: https://analytics.google.com/
echo.

:end
pause




