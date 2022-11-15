@ECHO OFF
echo "┏━━━ 📦 Building Workspace ━━━━━━━━━━━━━━━━━━━"
rem Uses references
rem yarn tsc -b packages
yarn lerna run build --stream --concurrency 1