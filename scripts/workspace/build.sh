#!/usr/bin/env bash
echo "┏━━━ 📦 Building Workspace ━━━━━━━━━━━━━━━━━━━"
# Uses references
# yarn tsc -b packages
yarn lerna run build --stream --concurrency 1