---
title: DeFiChain app how-to
type: white-paper
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
| Memory | 2GB |
| OS | macOS 10.14, Windows 10, Ubuntu LTS 18 and above |

## Installing on macOS

### Step 1: Installation

Open the downloaded image `defi-app-<version>.dmg`, then drag `defi-app` into the Applications directory.

### Step 2: macOS security prompt

Open the app.

If this is the first time you are opening the DeFi app, macOS will present you with a security warning shown below. Press OK to dismiss it.

\**You are seeing this security prompt because this is an unsigned pre-release version of the app. Future releases will be signed, which will supress the warning. For now, please follow step 3 for a workaround.*

![Image](https://i.imgur.com/5t5nZy0.png)

### Step 3: Bypass security prompt

\**Only follow the next steps if you are sure you've downloaded DeFi app from a legitimate source.*

Go to **System Preferences ▸ Security & Privacy**. Click on the **Open Anyway** button as shown.

![Image](https://i.imgur.com/gD5aZzU.png)

A popup will appear. Click on the **Open** button.

![Image](https://i.imgur.com/nXXuEhV.png)

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

### Install .deb files in command line using `dpkg`

If you want to install `deb` packages using the command line, you can use either the `apt` command or the `dpkg` command.

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

![Image](https://i.imgur.com/esKfcAx.png)

**Available Balance**: It shows the available balance in your wallet.
**Pending Balance**: Unconfirmed transactions on the blockchain. 
**Pending Requests**: List of receive requests. [Pending Requests]
**Transactions**: List of previous Defi Transactions.
**Send**: Send funds to an address.
**Receive**: Create a request for receiving funds. 
**Network**: Information about the network, whether you are using Mainnet, Testnet or Regttest

### Sending funds

#### Step 1

While in the **Wallet** tab, press the **SEND** button.

![Image](https://i.imgur.com/55boez6.png)

#### Step 2

Enter the **Amount** to send and the **To address** to send to, then press **CONTINUE**.

![Image](https://i.imgur.com/3gu264s.png)

\**You can use your webcam to scan a QR code, for the **To address**.*

![Image](https://i.imgur.com/DDMTlxD.png)

#### Step 3

Review the **Amount** and **To address** and verify they are correct, then press **COMPLETE SEND**.

![Image](https://i.imgur.com/tyCgjJR.png)

#### Step 4

After the transaction is complete, press `BACK TO WALLET` to return to the wallet.

![Image](https://i.imgur.com/01mTGBu.png)

#### Step 5

You should see your latest transaction in the list of **Transactions** in the **Wallet**, as well as any other transactions.

![Image](https://i.imgur.com/Uu1Daom.png)

---

### Receiving funds

#### Step 1
In order to receive coins, choose the `Wallet` tab and then the `RECEIVE` option.

![Image](https://i.imgur.com/GC8CHeE.png)

#### Step 2:
Then fill out the information according to the desired payment request.

![Image](https://i.imgur.com/ZnlTYoe.png)

#### Step 3:

Click `CONTINUE` to create a payment request as follow and select the `Wallet` option to go back to the wallet.

![Image](https://i.imgur.com/iHxo1D2.png)

#### Step 4:

After your receive payment request is created successfully. You can see the list of payment requests as below:

![Image](https://i.imgur.com/ogVe0lA.png)