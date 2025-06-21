#!/bin/bash

errors_to_file() {
    local rc=$1
    local label=$2
    if (( ${rc} != 0 )); then
        echo ${label}
    fi
}

cd ~/Documents/personal_github/krblackwell.github.io
log_file="./checks_error_summary.log"

echo "ERROR SUMMARY FOR CHECKS" > ${log_file}

echo CONVERT NOTEBOOKS TO MARKDOWN

find ./notebooks -type d -name ".ipynb_checkpoints" -prune -o -type f -name "*.ipynb" -print | while read notebook; do
    python3 ./utils/ipynb_to_markdown_template.py "$notebook"
    rc=$?
    errors_to_file ${rc} "notebook conversion to MD error: ${notebook}" >> ${log_file}
    echo $notebook: notebook to markdown return code: $rc
done

echo 

echo CHECK FRONT MATTER

grep -r 'MISSING' docs/*
rc=$?
echo grep front matter return code: $rc
if (( ${rc} == 1 )); then
    rc=0
fi
errors_to_file ${rc} "MD front matter check" >> ${log_file}

echo 

echo CHECK CODE IN ANY MARKDOWN

python3 ./utils/markdown_code_check.py "./src/pages/glossary.md"
rc=$?
echo run code in markdowns return code: $rc
errors_to_file ${rc} "code check in markdown - glossary" >> ${log_file}

echo 

echo PYTHON LINTING

flake8
rc=$?
echo flake8 return code: $rc
errors_to_file ${rc} "python linting error" >> ${log_file}

echo 

echo NOTEBOOK LINTING

nbqa flake8 ./notebooks
rc=$?
echo nbqa return code: $rc
errors_to_file ${rc} "notebook linting error" >> ${log_file}
echo

echo MARKDOWN LINTING - see config
echo MD013 long line linting does not affect the docusaurus page build, the other two disabled rules are because of the way nbconvert converts the documents

npx markdownlint-cli2 "docs/**/*.{md,mdx}" "blog/**/*.{md,mdx}"
rc=$?
echo markdownlint return code: $rc
errors_to_file ${rc} "MD linting error" >> ${log_file}

echo

echo "SPELL CHECK MARKDOWN (.mdx and .md)"

cspell --config cspell.config.json
rc=$?
errors_to_file ${rc} "spell check error" >> ${log_file}
echo 

echo NOTEBOOK TESTS

pytest --nbval notebooks
errors_to_file ${rc} "notebook test error" >> ${log_file}
echo 

echo UNIT TESTS

pytest
rc=$?
echo pytest return code: ${rc}
errors_to_file ${rc} "python unit test error" >> ${log_file}

echo 

echo

# ERROR SUMMARY
cat ${log_file}
