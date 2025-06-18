rm -rf static/lite lite build
rm ./.jupyterlite.doit.db
jupyter lite build
#jupyter lite serve
# comment that this step happens because jupyter lite serve fails if the folder lives there
mv lite static
rsync -hav /static/img/favicon.ico /static/lite/lab
bash checks.sh
