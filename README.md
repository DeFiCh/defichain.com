# DeFiChain Website
Source for defichain.io

## You need

- [Hugo](https://gohugo.io/) `brew install hugo`

## Running

1. Install packages with `npm i`
2. Start Hugo with `hugo server`
3. Navigate to [localhost:1313](localhost:1313)

No need for Gulp. Hugo has asset pipeline built-in.

## Deploying

Run the included script `./_scripts/deploy-gh.sh` to build the site and push to `gh-pages` (GitHub pages) branch.

See `_scripts/deploy-gh.sh` for details.

## Hosting

Make sure custom domain is configured to `defichain.io`. `./_scripts/deploy-gh.sh` does it automatically. You can also comment it away and configure it within the repository settings.