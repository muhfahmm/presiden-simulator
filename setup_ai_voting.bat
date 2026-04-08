@echo off
echo ========================================
echo   AI Voting System Setup
echo ========================================
echo.

REM Check Python
echo [1/5] Checking Python installation...
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python tidak ditemukan!
    echo Silakan install Python 3.11+ dari https://www.python.org/downloads/
    pause
    exit /b 1
)
echo Python found!

REM Check Node.js
echo.
echo [2/5] Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js tidak ditemukan!
    echo Silakan install Node.js 18+ dari https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js found!

REM Install Python dependencies
echo.
echo [3/5] Installing Python dependencies...
cd app\ai_voting_service
pip install -r requirements.txt
if errorlevel 1 (
    echo ERROR: Failed to install Python dependencies
    pause
    exit /b 1
)
cd ..\..

REM Setup frontend environment
echo.
echo [4/5] Setting up frontend environment...
if not exist app\frontend\.env.local (
    echo NEXT_PUBLIC_AI_SERVICE_URL=http://localhost:8000 > app\frontend\.env.local
    echo Created .env.local file
) else (
    echo .env.local already exists
)

REM Run tests
echo.
echo [5/5] Running tests...
cd app\ai_voting_service
python test_service.py
cd ..\..

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Start AI service: cd app\ai_voting_service ^&^& start.bat
echo 2. Start frontend: cd app\frontend ^&^& npm run dev
echo 3. Open http://localhost:8000/docs for API documentation
echo.
echo For more information, see:
echo - QUICK_START_AI_VOTING.md
echo - AI_VOTING_SYSTEM_README.md
echo.
pause
