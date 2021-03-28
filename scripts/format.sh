#!/usr/bin/env bash
echo "┏━━━ 📦 Formatting ━━━━━━━━━━━━━━━━━━━"
npx prettier --config .prettierrc --write "src/**/*.{js,jsx}"