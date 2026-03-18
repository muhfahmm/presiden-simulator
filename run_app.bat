@echo off
start cmd /k "cd app\backend && go run cmd\main.go"
start cmd /k "cd app\frontend-desktop && npm run dev"
