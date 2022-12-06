---
title: DeFiChain app how-to
description: A step-by-step guide to using and installing the DeFiChain app
---

## Download the app

Download the latest app from the [downloads](/downloads) page.

## Minimum requirements

| Requirement | Minimum Required                                 |
| ----------- | ------------------------------------------------ |
| Memory      | 4GB                                              |
| OS          | macOS 10.14, Windows 10, Ubuntu LTS 18 and above |

## Installing on macOS

### Step 1: Installation

Open the downloaded image **DeFi-Wallet-<version>.dmg**. In the Finder window that pops up, drag the DeFi Wallet on the left, on to the Applications directory shortcut on the right.

![](/img/guides/installing-defi-app/drag-to-install.png)

### Step 2: Dealing with macOS security prompt when opening the app

Open the app. The first time you open the DeFi app, you will be presented with a security prompt. Press OK to dismiss it.

![](/img/guides/installing-defi-app/macos-security-prompt.png)

\*_You will see this security prompt with early unsigned releases of the app. In future releases signed with Apple, you will not see security prompts. For now, please follow step 3 for a workaround._

### Step 3: Allow app execution

\*_Only open the app this way if you are sure you have downloaded DeFi app from an official source. DeFi app is currently only available on the [official website](/) and [DeFiChain’s GitHub](https://github.com/DeFiCh/app/releases)._

Go to **System Preferences** and click on **Security & Privacy**.

![](/img/guides/installing-defi-app/system-preferences.png)

Then click on the **Open Anyway**.

![](/img/guides/installing-defi-app/open-anyway-a.png)

Click **Open** on the confirmation popup.

![](/img/guides/installing-defi-app/open-anyway-b.png)

DeFi app will launch automatically when the installation is complete.

## Installing on Windows

### Step 1: Installation

Double click on the downloaded file.

### Step 2: Windows security prompt

If this is the first time you are installing the DeFi app, the installer may present you with a security prompt as shown. Click **More info**.

\*_Microsoft Windows SmartScreen may flag newly uploaded files that have not built up a long enough history._

![](/img/guides/installing-defi-app/CUmfPMS.png)

### Step 3: Bypass Windows security prompt

Click **Run anyway** to begin installation.

![](/img/guides/installing-defi-app/S7SFwms.png)

DeFi app will launch automatically when the installation is complete.

## Installing on Linux using AppImage

Please ensure you have enabled the **Allow executing file as program** option for the download file.

![](/img/guides/installing-defi-app/TU3ggCU.png)

You can now open DeFi app.

## Installing on Linux using Debian

You can choose to either install DeFi app as a GUI tool or command line tool.

### Using Software Center

The simplest method is to use Software Center in Ubuntu. Simply navigate to the folder (usually _Downloads_ folder) containing the downloaded **.deb** file and open it.

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

![](/img/guides/installing-defi-app/wallets.png)

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

![](/img/guides/installing-defi-app/wallets-choose.png)

### Sending funds

#### Step 1

Within a wallet, click on **Send**.

![](/img/guides/installing-defi-app/wallet-send.png)

#### Step 2

Enter the **Amount** and, the **To address** to send to. You can also enter an address using QR code scanner feature next to the address field. Press **CONTINUE** when you are ready.

![](/img/guides/installing-defi-app/wallet-send1.png)

#### Step 3

Review the **Amount** and **To address** and verify they are correct. The **COMPLETE SEND** button is disabled for a few seconds to protect you from accidental sending.

![](/img/guides/installing-defi-app/wallet-send2.png)

Click **COMPLETE SEND** to confirm sending.

![](/img/guides/installing-defi-app/wallet-send3.png)

#### Step 4

After the transaction is complete, press **BACK TO WALLET** to return to the wallet.

![](/img/guides/installing-defi-app/wallet-send4.png)

You should see your latest transaction in the list of **Transactions** in your wallet.

---

### Receiving funds

#### Step 1

Within a selected wallet, click **RECEIVE**.

![](/img/guides/installing-defi-app/wallet-receive.png)

Then click **NEW ADDRESS** to create a new receiving address.

![](/img/guides/installing-defi-app/wallet-receive1.png)

#### Step 2

Fill out the information and give your address a meaningful label. Then click **CREATE**.

![](/img/guides/installing-defi-app/wallet-receive2.png)

#### Step 3

The new receive address you have just created will appear in your list of receive addresses.

![](/img/guides/installing-defi-app/wallet-receive3.png)

Click the **QR code** button to bring up a QR code of the address.

![](/img/guides/installing-defi-app/wallet-receive4.png)

Click the **copy address** button to copy the address to your system clipboard.

![](/img/guides/installing-defi-app/wallet-receive5.png)
