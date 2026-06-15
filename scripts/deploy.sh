#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Building for GitHub Pages..."
GITHUB_PAGES=true npm run build:pages

echo "→ Publishing to origin/main..."
cd out
rm -rf .git
git init -q
git checkout -b main
git add -A
git commit -q -m "Deploy Hilo landing"
git push -f origin main

echo "✓ Live at https://gasacher.github.io/hilo/"
