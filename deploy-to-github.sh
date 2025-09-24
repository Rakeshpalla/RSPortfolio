#!/bin/bash

# Build the project
echo "Building portfolio..."
npm run build:prod

# Create a temporary branch for deployment
echo "Creating deployment branch..."
git checkout -b gh-pages-temp

# Remove all files except build folder
echo "Cleaning up..."
git rm -rf .
git clean -fd

# Copy build files to root
echo "Copying build files..."
cp -r build/* .

# Add all files
echo "Adding files to git..."
git add .

# Commit
echo "Committing changes..."
git commit -m "Deploy portfolio to GitHub Pages"

# Push to gh-pages branch
echo "Pushing to GitHub Pages..."
git push origin gh-pages-temp:gh-pages --force

# Switch back to main branch
echo "Switching back to main branch..."
git checkout main

# Delete temporary branch
echo "Cleaning up temporary branch..."
git branch -D gh-pages-temp

echo "✅ Deployment complete! Your portfolio should be live at:"
echo "https://rakeshpalla364-byte.github.io/CAREER_PORTFOLIO/"




