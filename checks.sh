#!/bin/bash
cd ~/Documents/personal_github/krblackwell.github.io

echo PYTHON LINTING

flake8

echo flake8 return code: $?

echo 

echo MARKDOWN LINTING - long line linting does not affect the docusaurus page build

npx markdownlint docs/**/*.{md,mdx} blog/**/*.{md,mdx} --disable MD013

echo markdownlint return code: $?

echo

echo "SPELL CHECK MARKDOWN (.mdx and .md)"

cspell --config cspell.config.json

echo 

echo NOTEBOOK TESTS

pytest --nbval notebooks

echo 

echo UNIT TESTS

pytest

echo BUILD PROJECT

echo 

npm run build
