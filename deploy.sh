#!/bin/bash

# Ensure we are on the main branch
git checkout main

# Run the build script
node build.js

# Navigate into the public directory
cd public

# Initialize a new git repository in public if it doesn't exist
if [ ! -d ".git" ]; then
  git init
fi

# Add the remote origin if it doesn't exist
if [ "$(git remote | grep origin)" != "origin" ]; then
  git remote add origin https://github.com/carrowmw/cv.git
fi

# Add and commit all the files
git add .
git commit -m "Deploy to gh-pages"

# Force push to the gh-pages branch
git push --force origin main:gh-pages

# Navigate back to the root directory
cd ..

echo "Deployment to gh-pages branch complete."