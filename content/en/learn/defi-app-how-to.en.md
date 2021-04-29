---
title: DeFiChain app how-to
type: article
long_title: A step-by-step guide to using and installing the DeFiChain app.
cta_to: Read
meta:
  description: A step-by-step guide to using and installing the DeFiChain app.
  og:
    title: DeFiChain app how-to
    description: A step-by-step guide to using and installing the DeFiChain app.
    site_name: DeFiChain
    image: /img/og/ogimage_en.png
    image_type: image/png
    locale: en_US
content:
  sections:
    hero:
      name: hero
      headline: DeFiChain app how-to.
      subhead: A step-by-step guide.
---

## Download the app

Download the latest app from the [downloads](/downloads) page.

## Minimum requirements

| Requirement | Minimum Required |
|-|-|
| Memory | 4GB |
| OS | macOS 10.14, Windows 10, Ubuntu LTS 18 and above |

## Installing on macOS

### Step 1: Installation

Open the downloaded image **DeFi-Wallet-<version>.dmg**. In the Finder window that pops up, drag the DeFi Wallet on the left, on to the Applications directory shortcut on the right.

<p><img src="/img/guides/installing-defi-app/drag-to-install.png" srcset="/img/guides/installing-defi-app/drag-to-install.png 1x, /img/guides/installing-defi-app/drag-to-install@2x.png 2x"></p>

### Step 2: Dealing with macOS security prompt when opening the app

Open the app. The first time you open the DeFi app, you will be presented with a security prompt. Press OK to dismiss it.

<p><img src="/img/guides/installing-defi-app/macos-security-prompt.png" srcset="/img/guides/installing-defi-app/macos-security-prompt.png 1x, /img/guides/installing-defi-app/macos-security-prompt@2x.png 2x"></p>

\**You will see this security prompt with early unsigned releases of the app. In future releases signed with Apple, you will not see security prompts. For now, please follow step 3 for a workaround.*

### Step 3: Bypass security prompt

\**Only open the app this way if you are sure you have downloaded DeFi app from an official source. DeFi app is currently only available on the [official website](https://defichain.com/) and [DeFiChain’s GitHub](https://github.com/DeFiCh/app/releases).*

Go to **System Preferences** and click on **Security & Privacy**.

<p><img src="/img/guides/installing-defi-app/system-preferences.png" srcset="/img/guides/installing-defi-app/system-preferences.png 1x, /img/guides/installing-defi-app/system-preferences@2x.png 2x"></p>

Then click on the **Open Anyway**.

<p><img src="/img/guides/installing-defi-app/open-anyway-a.png" srcset="/img/guides/installing-defi-app/open-anyway-a.png 1x, /img/guides/installing-defi-app/open-anyway-a@2x.png 2x"></p>

Click **Open** on the confirmation popup.

<p><img src="/img/guides/installing-defi-app/open-anyway-b.png" srcset="/img/guides/installing-defi-app/open-anyway-b.png 1x, /img/guides/installing-defi-app/open-anyway-b@2x.png 2x"></p>

DeFi app will launch automatically when the installation is complete.

## Installing on Windows

### Step 1: Installation

Double click on the downloaded file.

### Step 2: Windows security prompt

If this is the first time you are installing the DeFi app, the installer may present you with a security prompt as shown. Click **More info**.

\**Microsoft Windows SmartScreen may flag newly uploaded files that have not built up a long enough history.*

![Image](https://i.imgur.com/CUmfPMS.png)

### Step 3: Bypass Windows security prompt

Click **Run anyway** to begin installation.

![Image](https://i.imgur.com/S7SFwms.png)

DeFi app will launch automatically when the installation is complete.

## Installing on Linux using AppImage

Please ensure you have enabled the **Allow executing file as program** option for the download file.

![Image](https://i.imgur.com/TU3ggCU.png)

You can now open DeFi app.

## Installing on Linux using Debian

You can choose to either install DeFi app as a GUI tool or command line tool.

### Using Software Center

The simplest method is to use Software Center in Ubuntu. Simply navigate to the folder (usually *Downloads* folder)  containing the downloaded **.deb** file and open it.

### Install .deb files in command line using dpkg

If you want to install **deb** packages using the command line, you can use either the `apt` command or the `dpkg` command.

```
sudo apt install PATH_TO_DEB_FILE
```

or

```
sudo dpkg -i PATH_TO_DEB_FILE
```


You can now open DeFi app.

---

## Using the wallet

### The wallet interface

<p><img src="/img/guides/installing-defi-app/wallets.png" srcset="/img/guides/installing-defi-app/wallets.png 1x, /img/guides/installing-defi-app/wallets@2x.png 2x"></p>

#### Sidebar main navigation

- **Wallets** tab: Send and receive funds, and view transactions
- **Liquidity** tab: Add and remove liquidity, and viewing APR of your liquidity
- **DEX** tab: Swap between wrapped BTC/ETH/USDT and DFI
- **Tokens** tab: View community-verified DST (DeFi Standard tokens) and create your own
- **Blockchain** tab: A built-in mini block explorer to examine the blockchain
- **Masternodes** tab: View a list of masternodes and create your own

#### Sidebar sub navigation

- **Console**: Run DeFiChain CLI commands
- **Help**: Help options
- **Settings**: Switch between Main and Test net, language and other settings

### Opening a wallet

Switch to the **Wallets** tab, choose a wallet e.g. DFI.

<p><img src="/img/guides/installing-defi-app/wallets-choose.png" srcset="/img/guides/installing-defi-app/wallets-choose.png 1x, /img/guides/installing-defi-app/wallets-choose@2x.png 2x"></p>

### Sending funds

#### Step 1

Within a wallet, click on **Send**.

<p><img src="/img/guides/installing-defi-app/wallet-send.png" srcset="/img/guides/installing-defi-app/wallet-send.png 1x, /img/guides/installing-defi-app/wallet-send@2x.png 2x"></p>

#### Step 2

Enter the **Amount** and, the **To address** to send to. Yu can also enter an address using QR code scanner feature next to the address field. Press **CONTINUE** when you are ready.

<p><img src="/img/guides/installing-defi-app/wallet-send1.png" srcset="/img/guides/installing-defi-app/wallet-send1.png 1x, /img/guides/installing-defi-app/wallet-send1@2x.png 2x"></p>

#### Step 3

Review the **Amount** and **To address** and verify they are correct. The **COMPLETE SEND** button is disabled for a few seconds to protect you from accidental sending.

<p><img src="/img/guides/installing-defi-app/wallet-send2.png" srcset="/img/guides/installing-defi-app/wallet-send2.png 1x, /img/guides/installing-defi-app/wallet-send2@2x.png 2x"></p>

Click **COMPLETE SEND** to confirm sending.

<p><img src="/img/guides/installing-defi-app/wallet-send3.png" srcset="/img/guides/installing-defi-app/wallet-send3.png 1x, /img/guides/installing-defi-app/wallet-send3@2x.png 2x"></p>

#### Step 4

After the transaction is complete, press **BACK TO WALLET** to return to the wallet.

<p><img src="/img/guides/installing-defi-app/wallet-send4.png" srcset="/img/guides/installing-defi-app/wallet-send4.png 1x, /img/guides/installing-defi-app/wallet-send4@2x.png 2x"></p>

You should see your latest transaction in the list of **Transactions** in your wallet.

---

### Receiving funds

#### Step 1

Within a selected wallet, click **RECEIVE**.

<img src="/img/guides/installing-defi-app/wallet-receive.png" srcset="/img/guides/installing-defi-app/wallet-receive.png 1x, /img/guides/installing-defi-app/wallet-receive@2x.png 2x">

Then click **NEW ADDRESS** to create a new receiving address.

<img src="/img/guides/installing-defi-app/wallet-receive1.png" srcset="/img/guides/installing-defi-app/wallet-receive1.png 1x, /img/guides/installing-defi-app/wallet-receive1@2x.png 2x">

#### Step 2

Fill out the information and give your address a meaningful label. Then click **CREATE**.

<img src="/img/guides/installing-defi-app/wallet-receive2.png" srcset="/img/guides/installing-defi-app/wallet-receive2.png 1x, /img/guides/installing-defi-app/wallet-receive2@2x.png 2x">

#### Step 3

The new receive address you have just created will appear in your list of recive addresses.

<img src="/img/guides/installing-defi-app/wallet-receive3.png" srcset="/img/guides/installing-defi-app/wallet-receive3.png 1x, /img/guides/installing-defi-app/wallet-receive3@2x.png 2x">

Click the **QR code** button to bring up a QR code of the address.

<img src="/img/guides/installing-defi-app/wallet-receive4.png" srcset="/img/guides/installing-defi-app/wallet-receive4.png 1x, /img/guides/installing-defi-app/wallet-receive4@2x.png 2x">

Click the **copy address** button to copy the address to your system clipboard.

<img src="/img/guides/installing-defi-app/wallet-receive5.png" srcset="/img/guides/installing-defi-app/wallet-receive5.png 1x, /img/guides/installing-defi-app/wallet-receive5@2x.png 2x">
