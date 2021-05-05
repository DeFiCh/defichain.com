# DeFiChain Website
Source for defichain.com

## You need

[Hugo](https://gohugo.io/) `brew install hugo`

[Not on macOS?](https://gohugo.io/getting-started/installing). Note that you'll the "extended" version.

## Running

1. Install packages with `npm i`
2. Start Hugo with `hugo server`
3. Navigate to [localhost:1313](localhost:1313)

No need for Gulp. Hugo has asset pipeline built-in.

## Deploying

Create a new release on Github and bump the version.

[Create Release Guide](https://docs.github.com/en/github/administering-a-repository/managing-releases-in-a-repository)

After that, check on the `Action` tab for the CI information and details.

<!--- Run the included script `./_scripts/deploy-gh.sh` to build the site and push to `gh-pages` (GitHub pages) branch. --->

<!--- See `_scripts/deploy-gh.sh` for details. --->

## Hosting

<!--- # Make sure custom domain is configured to `defichain.com`. `./_scripts/deploy-gh.sh` does it automatically. You can also comment it away and configure it within the repository settings. --->

Make the `baseUrl` in `config.toml` is correct.
