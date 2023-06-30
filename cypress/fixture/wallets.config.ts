/* eslint-disable import/prefer-default-export */
export const webWallets = [
  {
    testId: "brave-link-jly",
    url: "https://chrome.google.com/webstore/detail/jellywallet/eegcfalgkkhehkhbjbggbhhlcnckadih",
  },
  {
    testId: "firefox-link-jly",
    url: "https://addons.mozilla.org/en-US/firefox/addon/jellywallet/",
  },
  {
    testId: "chrome-link-jly",
    url: "https://chrome.google.com/webstore/detail/jellywallet/eegcfalgkkhehkhbjbggbhhlcnckadih",
  },
];

export const mobileWalletsUrls = [
  {
    wallet: "dfxWallet",
    testId: "google-play-link-dfx",
    url: "https://play.google.com/store/apps/details?id=com.defichain.app.dfx",
  },
  {
    wallet: "dfxWallet",
    testId: "appstore-link-dfx",
    url: "https://apps.apple.com/app/id1582633093",
  },
  {
    wallet: "lightWallet",
    testId: "google-play-link-dfc",
    url: "https://play.google.com/store/apps/details?id=com.defichain.app",
  },
  {
    wallet: "lightWallet",
    testId: "appstore-link-dfc",
    url: "https://apps.apple.com/us/app/defichain-wallet/id1572472820",
  },
];

export function desktopWalletsUrls(
  ainVersion: string,
  defichainAppVersion: string
) {
  return [
    {
      testId: "github-link-advance-use-section-dfc-win",
      url: `https://github.com/BirthdayResearch/defichain-app/releases/download/v${defichainAppVersion}/DeFi-Wallet-Setup-${defichainAppVersion}.exe`,
    },
    {
      testId: "github-link-advance-use-section-dfc-mac",
      url: `https://github.com/BirthdayResearch/defichain-app/releases/download/v${defichainAppVersion}/DeFi-Wallet-${defichainAppVersion}.dmg`,
    },
    {
      testId: "github-link-advance-use-section-dfc-linux",
      url: `https://github.com/BirthdayResearch/defichain-app/releases/download/v${defichainAppVersion}/DeFi-Wallet-${defichainAppVersion}.AppImage`,
    },
    {
      testId: "github-link-rasp-pi",
      url: "https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi",
    },
    {
      testId: "github-link-advance-use-section-cli-mac",
      url: `https://github.com/DeFiCh/ain/releases/download/v${ainVersion}/defichain-${ainVersion}-x86_64-apple-darwin18.tar.gz`,
    },
    {
      testId: "github-link-advance-use-section-cli-win",
      url: `https://github.com/DeFiCh/ain/releases/download/v${ainVersion}/defichain-${ainVersion}-x86_64-w64-mingw32.zip`,
    },
    {
      testId: "github-link-advance-use-section-cli-linux",
      url: `https://github.com/DeFiCh/ain/releases/download/v${ainVersion}/defichain-${ainVersion}-x86_64-pc-linux-gnu.tar.gz`,
    },
    {
      testId: "github-link-advance-use-section-electrum",
      url: "https://github.com/BirthdayResearch/defichain-electrum/releases/latest",
    },
  ];
}
