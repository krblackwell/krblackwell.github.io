rm -rf static/lite lite build
rm ./.jupyterlite.doit.db
mkdir -p lite/lab
rsync -hav static/img/favicon.ico lite/lab
jupyter lite build
#jupyter lite serve
# comment that this step happens because jupyter lite serve fails if the folder lives there
mv lite static

bash checks.sh
