# mkdir -p themes/images
# mkdir -p static/images/thumbs
theme_generator.py themes/images
# cp -n themes/images/* static/images
# mogrify -format webp -resize 250x250^ -path static/images/thumbs/ themes/images/*.jpg
# cat themes/*.css > src/styles/themes.css
