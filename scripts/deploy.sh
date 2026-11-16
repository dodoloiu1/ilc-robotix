#!/usr/bin/env bash
#
# Build the static export with the GitHub Pages basePath and publish it to the
# `gh-pages` branch. Used as a fallback when the GitHub Actions workflow cannot
# be pushed (missing `workflow` token scope).
#
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export GITHUB_ACTIONS=true
export GITHUB_REPOSITORY="${GITHUB_REPOSITORY:-dodoloiu1/ilc-robotix}"

REPO="${GITHUB_REPOSITORY##*/}"
OWNER="${GITHUB_REPOSITORY%%/*}"

echo "▶ Building static export (basePath /${REPO})"
npm run build

DEPLOY_DIR="$ROOT/.deploy-tmp"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
cp -r out/. "$DEPLOY_DIR/"

NAME="$(git config user.name || echo dodoloiu1)"
EMAIL="$(git config user.email || echo dodolino1234567890@gmail.com)"

cd "$DEPLOY_DIR"
git init -q -b gh-pages
git add -A
git -c user.name="$NAME" -c user.email="$EMAIL" commit -q \
  -m "deploy: publish static build to GitHub Pages"
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/${GITHUB_REPOSITORY}.git"
git push -f origin gh-pages
cd "$ROOT"
rm -rf "$DEPLOY_DIR"

echo "✔ Deployed to https://${OWNER}.github.io/${REPO}/"
