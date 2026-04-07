@echo off
echo ============================================
echo Free AI Agents Comparison - Deployment Script
echo ============================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit"
)

echo.
echo Please create a new repository on GitHub:
echo 1. Go to https://github.com/new
echo 2. Repository name: free-ai-agents-comparison
echo 3. Set to Public
echo 4. Do NOT initialize with README, .gitignore, or license
echo 5. Click "Create repository"
echo.
set /p REPO_URL="Enter your repository URL (e.g., https://github.com/username/free-ai-agents-comparison.git): "

echo.
echo Adding remote and pushing...
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo ERROR: Push failed. Make sure:
    echo 1. Repository exists on GitHub
    echo 2. You have permission to push
    echo 3. Repository URL is correct
    pause
    exit /b 1
)

echo.
echo ============================================
echo SUCCESS! Code pushed to GitHub.
echo ============================================
echo.
echo Next steps:
echo 1. Go to your repository on GitHub
echo 2. Click Settings -> Pages
echo 3. Under "Build and deployment":
echo    - Select "Deploy from a branch"
echo    - Branch: main, folder: / (root)
echo    - Click Save
echo 4. Your site will be live at:
echo    https://yourusername.github.io/free-ai-agents-comparison/
echo.
pause
