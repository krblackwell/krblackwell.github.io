#!/bin/bash
cd ~/Documents/personal_github/krblackwell.github.io

echo CONVERT NOTEBOOKS TO MARKDOWN

find ./notebooks -type d -name ".ipynb_checkpoints" -prune -o -type f -name "*.ipynb" -print | while read notebook; do
    python3 ./utils/ipynb_to_markdown_template.py "$notebook"
done

echo CHECK FRONT MATTER

grep -r 'MISSING' docs/*

echo PYTHON LINTING

flake8

echo flake8 return code: $?

echo 

echo NOTEBOOK LINTING

nbqa flake8 ./notebooks

echo nbqa return code: $?

echo

echo MARKDOWN LINTING - see config
echo MD013 long line linting does not affect the docusaurus page build, the other two disabled rules are because of the way nbconvert converts the documents

npx markdownlint-cli2 "docs/**/*.{md,mdx}" "blog/**/*.{md,mdx}"

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
