@echo off
start cmd /k "cd admin\backend && go run cmd\main.go"
start cmd /k "cd admin\frontend && npm run dev"
