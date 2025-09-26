#!/bin/bash

# Production Deployment Script
# Supports multiple hosting platforms

set -e

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version: $(node -v)"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Function to build for specific platform
build_for_platform() {
    local platform=$1
    print_status "Building for $platform..."
    
    case $platform in
        "github")
            npm run build:github
            ;;
        "netlify")
            npm run build:netlify
            ;;
        "vercel")
            npm run build:vercel
            ;;
        "firebase")
            npm run build:prod
            ;;
        *)
            npm run build:prod
            ;;
    esac
    
    print_success "Build completed for $platform"
}

# Function to deploy to GitHub Pages
deploy_github() {
    print_status "Deploying to GitHub Pages..."
    
    if ! command -v gh-pages &> /dev/null; then
        print_status "Installing gh-pages..."
        npm install -g gh-pages
    fi
    
    build_for_platform "github"
    npm run deploy
    
    print_success "Deployed to GitHub Pages!"
    print_status "URL: https://rakeshpalla364-byte.github.io/CAREER_PORTFOLIO"
}

# Function to deploy to Netlify
deploy_netlify() {
    print_status "Deploying to Netlify..."
    
    if ! command -v netlify &> /dev/null; then
        print_status "Installing Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    build_for_platform "netlify"
    
    # Check if user is logged in
    if ! netlify status &> /dev/null; then
        print_warning "Please login to Netlify first:"
        netlify login
    fi
    
    netlify deploy --prod --dir=build
    
    print_success "Deployed to Netlify!"
}

# Function to deploy to Vercel
deploy_vercel() {
    print_status "Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        print_status "Installing Vercel CLI..."
        npm install -g vercel
    fi
    
    build_for_platform "vercel"
    
    # Check if user is logged in
    if ! vercel whoami &> /dev/null; then
        print_warning "Please login to Vercel first:"
        vercel login
    fi
    
    vercel --prod
    
    print_success "Deployed to Vercel!"
}

# Function to deploy to Firebase
deploy_firebase() {
    print_status "Deploying to Firebase..."
    
    if ! command -v firebase &> /dev/null; then
        print_status "Installing Firebase CLI..."
        npm install -g firebase-tools
    fi
    
    build_for_platform "firebase"
    
    # Check if user is logged in
    if ! firebase projects:list &> /dev/null; then
        print_warning "Please login to Firebase first:"
        firebase login
    fi
    
    firebase deploy
    
    print_success "Deployed to Firebase!"
}

# Function to preview locally
preview_local() {
    print_status "Building and previewing locally..."
    
    build_for_platform "prod"
    npm run preview
    
    print_success "Local preview started on http://localhost:3000"
}

# Function to analyze bundle
analyze_bundle() {
    print_status "Analyzing bundle..."
    
    build_for_platform "prod"
    npm run analyze
    
    print_success "Bundle analysis completed!"
}

# Main script logic
case "${1:-help}" in
    "github")
        deploy_github
        ;;
    "netlify")
        deploy_netlify
        ;;
    "vercel")
        deploy_vercel
        ;;
    "firebase")
        deploy_firebase
        ;;
    "preview")
        preview_local
        ;;
    "analyze")
        analyze_bundle
        ;;
    "build")
        build_for_platform "prod"
        ;;
    "help"|*)
        echo "🚀 Production Deployment Script"
        echo ""
        echo "Usage: ./deploy.sh [platform]"
        echo ""
        echo "Platforms:"
        echo "  github    - Deploy to GitHub Pages"
        echo "  netlify   - Deploy to Netlify"
        echo "  vercel    - Deploy to Vercel"
        echo "  firebase  - Deploy to Firebase"
        echo "  preview   - Build and preview locally"
        echo "  analyze   - Build and analyze bundle"
        echo "  build     - Build for production only"
        echo "  help      - Show this help message"
        echo ""
        echo "Examples:"
        echo "  ./deploy.sh github"
        echo "  ./deploy.sh netlify"
        echo "  ./deploy.sh vercel"
        echo "  ./deploy.sh preview"
        ;;
esac

print_success "Deployment script completed!"

