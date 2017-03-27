#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
# bundle exec travis-lint
# bundle exec htmlproof ${HTML_FOLDER} --disable-external

# cd ${HTML_FOLDER}

# config
git config --global user.email "ashrafuzzaman.g2@gmail.com"
git config --global user.name "A.K.M. Ashrafuzzaman"

# deploy
git add --all
git commit -m "Deploy to GitHub Pages"
git push --force --quiet origin master:gh-pages