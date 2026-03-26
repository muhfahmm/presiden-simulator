@echo off
start cmd /k "cd app\backend && go run cmd\main.go"
start cmd /k "cd app\frontend && npm run dev"
