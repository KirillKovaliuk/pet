#!/bin/bash

# Github actions and pages not working in current repo.
# This script builds and pushes storybook to another repo 
# and deploys to github pages.

# variables
SOURCE_REPO="git@github.com:KirillKovaliuk/storybook.git"
TEMP_DIR="tmp"
FILES_TO_PUSH="../dist/storybook/ui/."

yarn storybook:build

# create temp folder
mkdir "$TEMP_DIR"
cd "$TEMP_DIR"

# clone repo
git clone "$SOURCE_REPO" .

# move assets to temp folder
cp -fr "$FILES_TO_PUSH" .

# add assets to index and push
git add .
git commit -m "feat: update sb"
git push -u origin main

# exit from temp folder
cd -

# remove temp folder
rm -rf "$TEMP_DIR"