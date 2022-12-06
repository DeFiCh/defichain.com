---
title: 递飞链程序入门指南
description: 分步指南
---

## 下载程序

到[下载区](/downloads)下载最新版本。

## 最低配置要求

| 要求     | 最低配置要求                            |
| -------- | --------------------------------------- |
| 存储空间 | 4GB                                     |
| 操作系统 | macOS 10.14, Windows 10, Ubuntu LTS 18+ |

## macOS 上安装

### 步骤一：安装

下載後請打開 **DeFi-Wallet-<version>.dmg**。在访达窗口中，將左側的 DeFi Wallet 拉到右側的程序目錄。

![](/img/guides/installing-defi-app/drag-to-install.png)

### 步骤二：打开应用程序时处理 macOS 安全提示

当您第一次打开递飞链程序，窗口会显示安全提示，确认后他会关闭。

![](/img/guides/installing-defi-app/macos-security-prompt.png)

\*_早期版本会显示安全提示。未来版本会加苹果代码签名，就不会有安全提示。_

### 步骤三：允许程序执行

\*_请再次确认您下载的程序是来自[递飞链官网](/)或[GitHub 的递飞链程序](https://github.com/DeFiCh/app/releases)，免遭恶意软件侵害。只有这两个来源才是正版。_

到**系统偏**好设定内选**安全性与隐私**。

![](/img/guides/installing-defi-app/system-preferences.png)

允许并打开**程序**。

![](/img/guides/installing-defi-app/open-anyway-a.png)

请确认**开启**。

![](/img/guides/installing-defi-app/open-anyway-b.png)

递飞链程序安装后会自动打开。

## Windows 上安装

### 步骤一：安装

点开下载文件。

### 步骤二：Windows 安全提示

如果这是您首次安装递飞链程序，安装程序可能会向您显示安全提示，如图所示。点击**更多信息**。

\*_微软 Windows SmartScreen 可能会标记尚未建立足够长的历史记录的新上载的文件。_

![](/img/guides/installing-defi-app/CUmfPMS.png)

### 步骤三: 绕过微软安全提示

点选**进行**。

![](/img/guides/installing-defi-app/S7SFwms.png)

安装完成后，递飞链程序将自动启动。

## 在 Linux 系统上使用 AppImage 安装

请确认下载文件启用了**允许将程序作为程序执行文件**选项。

![](/img/guides/installing-defi-app/TU3ggCU.png)

您现在可运用递飞链程序。

## 在 Linux 系统上使用 Debian 安装

您可以选 GUI 工具或命令行工具来安装递飞链程序。

### 使用软件中心

最简单的方法是在 Ubuntu 中使用软件中心。请进入文件夹中的 **.deb**文件 (通常是在*下载*文件夹)。

### 在命令行使用 dpkg 来安装 .deb 文件

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

![](/img/guides/installing-defi-app/wallets.png)

#### 侧边拦主导览

- **钱包**标签页: 发送和接收资金，和查看交易。
- **流动性池**标签页: 加入或移除和查看您流动资产的年利率。
- **DEX**标签页: 交換 DFI 和 ETH/BTC/USDT 挂钩的代币。
- **代币**标签页: 审查递飞链社区验证的 DST(规格性代币)和创立自己的 DST。
- **递飞链**标签页: 内建迷你区块浏览器来查看递飞链。
- **主节点**标签页。

#### 测拦主导览

- **控制台**
- **救我**: 求救选项。
- **设定**: 切换主网和测试网，语言和其他设置。

### 打开钱包

切换到**钱包**标签页，选您要的钱包(如: DFI)

![](/img/guides/installing-defi-app/wallets-choose.png)

### 发送资金

#### 步骤一

在钱包内点选**发送**。

![](/img/guides/installing-defi-app/wallet-send.png)

#### 步骤二

输入**金额**和**发送地址**。您也可扫一扫地址栏中的扫描选项。输入好之后请按**继续**。

![](/img/guides/installing-defi-app/wallet-send1.png)

#### 步骤三

再次确认**金额**和**收方地址**正确无误。确认**发送按钮**禁用几秒钟，以防止错误发送。

![](/img/guides/installing-defi-app/wallet-send2.png)

点选**确认发送**。

![](/img/guides/installing-defi-app/wallet-send3.png)

#### 步骤四

交易完成后，请按**返回钱包**。

![](/img/guides/installing-defi-app/wallet-send4.png)

您可在钱包内的**交易列表**中看到最新交易。

---

### 接收资金

#### 步骤一

钱包选好后请按**接收**。

![](/img/guides/installing-defi-app/wallet-receive.png)

接着请按**新地址**来创建新的接收地址。

![](/img/guides/installing-defi-app/wallet-receive1.png)

#### 步骤二

填进您的资讯，并给您的新地址贴上个名称。接着请按**创建**。

![](/img/guides/installing-defi-app/wallet-receive2.png)

#### 步骤三

您刚刚创建的新地址将出现在您的接收地址列表中。

![](/img/guides/installing-defi-app/wallet-receive3.png)

按**二维条码**显示地址二维条码。

![](/img/guides/installing-defi-app/wallet-receive4.png)

按**复制地址**将地址复制到系统剪贴版。

![](/img/guides/installing-defi-app/wallet-receive5.png)
