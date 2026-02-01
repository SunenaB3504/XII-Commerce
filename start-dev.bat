@echo off
REM XII-Commerce App Launcher
REM This script starts the development server

echo.
echo ╔════════════════════════════════════════════╗
echo ║   Neil's Commerce Prep - Dev Server        ║
echo ╚════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

REM Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies...
    call npm install
    echo.
)

REM Check if running on Windows
if defined PROCESSOR_ARCHITECTURE (
    echo Starting development server...
    echo Server will be available at: http://127.0.0.1:5173
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    call npm run dev
) else (
    echo This script is for Windows only.
    exit /b 1
)
