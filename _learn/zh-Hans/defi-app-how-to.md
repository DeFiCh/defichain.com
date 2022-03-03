---
title: 递飞链程序入门指南
description: A step-by-step guide to using and installing the DeFiChain app.
---

## 下载程序

到[下载区](/downloads)下载最新版本。

## 最低配置要求

| 要求 | 最低配置要求 |
|-|-|
| 存储空间 | 4GB |
| 操作系统 | macOS 10.14, Windows 10, Ubuntu LTS 18+ |

## macOS上安装

### 步骤一：安装

下載後請打開 **DeFi-Wallet-<version>.dmg**。在访达窗口中，將左側的DeFi Wallet拉到右側的程序目錄。

<p><img src="/img/guides/installing-defi-app/drag-to-install.png" srcset="/img/guides/installing-defi-app/drag-to-install.png 1x, /img/guides/installing-defi-app/drag-to-install@2x.png 2x"></p>

### 步骤二：打开应用程序时处理macOS安全提示

当您第一次打开递飞链程序，窗口会显示安全提示，确认后他会关闭。

<p><img src="/img/guides/installing-defi-app/macos-security-prompt.png" srcset="/img/guides/installing-defi-app/macos-security-prompt.png 1x, /img/guides/installing-defi-app/macos-security-prompt@2x.png 2x"></p>

\**早期版本会显示安全提示。未来版本会加苹果代码签名，就不会有安全提示。*

### 步骤三：允许程序执行

\**请再次确认您下载的程序是来自[递飞链官网](/)或[GitHub的递飞链程序](https://github.com/DeFiCh/app/releases)，免遭恶意软件侵害。只有这两个来源才是正版。*

到**系统偏**好设定内选**安全性与隐私**。

<p><img src="/img/guides/installing-defi-app/system-preferences.png" srcset="/img/guides/installing-defi-app/system-preferences.png 1x, /img/guides/installing-defi-app/system-preferences@2x.png 2x"></p>

允许并打开**程序**。

<p><img src="/img/guides/installing-defi-app/open-anyway-a.png" srcset="/img/guides/installing-defi-app/open-anyway-a.png 1x, /img/guides/installing-defi-app/open-anyway-a@2x.png 2x"></p>

请确认**开启**。

<p><img src="/img/guides/installing-defi-app/open-anyway-b.png" srcset="/img/guides/installing-defi-app/open-anyway-b.png 1x, /img/guides/installing-defi-app/open-anyway-b@2x.png 2x"></p>

递飞链程序安装后会自动打开。

## Windows上安装

### 步骤一：安装

点开下载文件。

### 步骤二：Windows安全提示

如果这是您首次安装递飞链程序，安装程序可能会向您显示安全提示，如图所示。点击**更多信息**。

\**微软Windows SmartScreen可能会标记尚未建立足够长的历史记录的新上载的文件。*

![Image](https://i.imgur.com/CUmfPMS.png)

### 步骤三: 绕过微软安全提示

点选**进行**。

![Image](https://i.imgur.com/S7SFwms.png)

安装完成后，递飞链程序将自动启动。

## 在Linux系统上使用AppImage安装

请确认下载文件启用了**允许将程序作为程序执行文件**选项。

![Image](https://i.imgur.com/TU3ggCU.png)

您现在可运用递飞链程序。

## 在Linux系统上使用Debian安装

您可以选GUI工具或命令行工具来安装递飞链程序。

### 使用软件中心

最简单的方法是在Ubuntu中使用软件中心。请进入文件夹中的 **.deb**文件 (通常是在*下载*文件夹)。

### 在命令行使用dpkg来安装 .deb文件

如果您想使用命令行进行 **deb** 文件安装，您可选择用`apt`命令或`dpkg`命令。

```
sudo apt install PATH_TO_DEB_FILE
```

或

```
sudo dpkg -i PATH_TO_DEB_FILE
```


您现在可开启递飞链程序。

---

## 使用钱包

### 钱包介面

<p><img src="/img/guides/installing-defi-app/wallets.png" srcset="/img/guides/installing-defi-app/wallets.png 1x, /img/guides/installing-defi-app/wallets@2x.png 2x"></p>

#### 侧边拦主导览

- **钱包**标签页: 发送和接收资金，和查看交易。
- **流动性池**标签页: 加入或移除和查看您流动资产的年利率。
- **DEX**标签页: 交換DFI和ETH/BTC/USDT挂钩的代币。
- **代币**标签页: 审查递飞链社区验证的DST(规格性代币)和创立自己的DST。
- **递飞链**标签页: 内建迷你区块浏览器来查看递飞链。
- **主节点**标签页。

#### 测拦主导览

- **控制台**
- **救我**: 求救选项。
- **设定**: 切换主网和测试网，语言和其他设置。

### 打开钱包

切换到**钱包**标签页，选您要的钱包(如: DFI)

<p><img src="/img/guides/installing-defi-app/wallets-choose.png" srcset="/img/guides/installing-defi-app/wallets-choose.png 1x, /img/guides/installing-defi-app/wallets-choose@2x.png 2x"></p>

### 发送资金

#### 步骤一

在钱包内点选**发送**。

<p><img src="/img/guides/installing-defi-app/wallet-send.png" srcset="/img/guides/installing-defi-app/wallet-send.png 1x, /img/guides/installing-defi-app/wallet-send@2x.png 2x"></p>

#### 步骤二

输入**金额**和**发送地址**。您也可扫一扫地址栏中的扫描选项。输入好之后请按**继续**。

<p><img src="/img/guides/installing-defi-app/wallet-send1.png" srcset="/img/guides/installing-defi-app/wallet-send1.png 1x, /img/guides/installing-defi-app/wallet-send1@2x.png 2x"></p>

#### 步骤三

再次确认**金额**和**收方地址**正确无误。确认**发送按钮**禁用几秒钟，以防止错误发送。

<p><img src="/img/guides/installing-defi-app/wallet-send2.png" srcset="/img/guides/installing-defi-app/wallet-send2.png 1x, /img/guides/installing-defi-app/wallet-send2@2x.png 2x"></p>

点选**确认发送**。

<p><img src="/img/guides/installing-defi-app/wallet-send3.png" srcset="/img/guides/installing-defi-app/wallet-send3.png 1x, /img/guides/installing-defi-app/wallet-send3@2x.png 2x"></p>

#### 步骤四

交易完成后，请按**返回钱包**。

<p><img src="/img/guides/installing-defi-app/wallet-send4.png" srcset="/img/guides/installing-defi-app/wallet-send4.png 1x, /img/guides/installing-defi-app/wallet-send4@2x.png 2x"></p>

您可在钱包内的**交易列表**中看到最新交易。

---

### 接收资金

#### 步骤一

钱包选好后请按**接收**。

<img src="/img/guides/installing-defi-app/wallet-receive.png" srcset="/img/guides/installing-defi-app/wallet-receive.png 1x, /img/guides/installing-defi-app/wallet-receive@2x.png 2x">

接着请按**新地址**来创建新的接收地址。

<img src="/img/guides/installing-defi-app/wallet-receive1.png" srcset="/img/guides/installing-defi-app/wallet-receive1.png 1x, /img/guides/installing-defi-app/wallet-receive1@2x.png 2x">

#### 步骤二

填进您的资讯，并给您的新地址贴上个名称。接着请按**创建**。

<img src="/img/guides/installing-defi-app/wallet-receive2.png" srcset="/img/guides/installing-defi-app/wallet-receive2.png 1x, /img/guides/installing-defi-app/wallet-receive2@2x.png 2x">

#### 步骤三

您刚刚创建的新地址将出现在您的接收地址列表中。

<img src="/img/guides/installing-defi-app/wallet-receive3.png" srcset="/img/guides/installing-defi-app/wallet-receive3.png 1x, /img/guides/installing-defi-app/wallet-receive3@2x.png 2x">

按**二维条码**显示地址二维条码。

<img src="/img/guides/installing-defi-app/wallet-receive4.png" srcset="/img/guides/installing-defi-app/wallet-receive4.png 1x, /img/guides/installing-defi-app/wallet-receive4@2x.png 2x">

按**复制地址**将地址复制到系统剪贴版。

<img src="/img/guides/installing-defi-app/wallet-receive5.png" srcset="/img/guides/installing-defi-app/wallet-receive5.png 1x, /img/guides/installing-defi-app/wallet-receive5@2x.png 2x">
