@echo off
echo Building portfolio...
call npm run build:prod

echo Creating deployment branch...
git checkout -b gh-pages-temp

echo Cleaning up...
git rm -rf .
git clean -fd

echo Copying build files...
xcopy /E /I build .

echo Adding files to git...
git add .

echo Committing changes...
git commit -m "Deploy portfolio to GitHub Pages"

echo Pushing to GitHub Pages...
git push origin gh-pages-temp:gh-pages --force

echo Switching back to main branch...
git checkout main

echo Cleaning up temporary branch...
git branch -D gh-pages-temp

echo ✅ Deployment complete! Your portfolio should be live at:
echo https://rakeshpalla364-byte.github.io/CAREER_PORTFOLIO/
pause





