@echo off
echo ========================================
echo   UN Voting AI Service
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python tidak ditemukan!
    echo Silakan install Python 3.11+ terlebih dahulu.
    pause
    exit /b 1
)

echo [1/3] Checking dependencies...
pip show fastapi >nul 2>&1
if errorlevel 1 (
    echo Installing dependencies...
    pip install -r requirements.txt
) else (
    echo Dependencies already installed.
)

echo.
echo [2/3] Starting AI Voting Service...
echo Service will run on http://localhost:8000
echo API Documentation: http://localhost:8000/docs
echo.
echo Press Ctrl+C to stop the service
echo.

REM Start the service
python main.py

pause
