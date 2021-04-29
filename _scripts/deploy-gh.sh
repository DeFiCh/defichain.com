#!/bin/sh

DIR=$(dirname "$0")

cd $DIR/..

if [[ $(git symbolic-ref --short HEAD) != "master" ]]
then
    echo "Not on master branch!"
    exit 1;
fi

# if [[ $(git status -s) ]]
# then
#     echo "The working directory is dirty. Please commit any pending changes."
#     exit 1;
# fi

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public/en/ origin/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Generating site (minified)"
hugo --minify

echo "Updating gh-pages branch"
cd public/en
echo defichain.com >> CNAME
git add --all
git commit -m "Publishing to gh-pages (deploy.sh)"

git push origin gh-pages
cd ..
cd ..