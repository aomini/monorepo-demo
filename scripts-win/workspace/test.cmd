@ECHO OFF

echo "┏━━━ 🎯 TEST: $(pwd) ━━━━━━━━━━━━━━━━━━━"
yarn lerna run test --stream --concurrency 1