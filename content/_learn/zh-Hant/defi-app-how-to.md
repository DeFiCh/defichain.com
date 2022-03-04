---
title: 遞飛鏈程序入門指南
description: A step-by-step guide to using and installing the DeFiChain app.
---

## 下載程序

到[下載區](/downloads)下載最新版本。

## 最低配置要求

| 要求 | 最低配置要求 |
|-|-|
| 存儲空間 | 4GB |
| 操作系統 | macOS 10.14, Windows 10, Ubuntu LTS 18+ |

## macOS上安裝

### 步驟一：安裝

下載後請打開 **DeFi-Wallet-<version>.dmg**。在訪達窗口中，將左側的DeFi Wallet拉到右側的程序目錄。

![](/img/guides/installing-defi-app/drag-to-install.png)

### 步驟二：打開應用程序時處理macOS安全提示

當您第一次打開遞飛鏈程序，窗口會顯示安全提示，確認後他會關閉。

![](/img/guides/installing-defi-app/macos-security-prompt.png)

\**早期版本會顯示安全提示。未來版本會加蘋果代碼簽名，就不會有安全提示。*

### 步驟三：允許程序執行

\**請再次確認您下載的程序是來自[遞飛鏈官網](/)或[GitHub的遞飛鏈程序](https://github.com/DeFiCh/app/releases)，免遭惡意軟件侵害。只有這兩個來源才是正版。*

到**系統偏**好設定內選**安全性與隱私**。

![](/img/guides/installing-defi-app/system-preferences.png)

允許並打開**程序**。

![](/img/guides/installing-defi-app/open-anyway-a.png)

請確認**開啓**。

![](/img/guides/installing-defi-app/open-anyway-b.png)

遞飛鏈程序安裝後會自動打開。

## Windows上安裝

### 步驟一：安裝

點開下載文件。

### 步驟二：Windows安全提示

如果這是您首次安裝遞飛鏈程序，安裝程序可能會向您顯示安全提示，如圖所示。點擊**更多信息**。

\**微軟Windows SmartScreen可能會標記尚未建立足夠長的曆史記錄的新上載的文件。*

![](/img/guides/installing-defi-app/CUmfPMS.png)

### 步驟三: 繞過微軟安全提示

點選**進行**。

![](/img/guides/installing-defi-app/S7SFwms.png)

安裝完成後，遞飛鏈程序將自動啓動。

## 在Linux系統上使用AppImage安裝

請確認下載文件啓用了**允許將程序作為程序執行文件**選項。

![](/img/guides/installing-defi-app/TU3ggCU.png)

您現在可運用遞飛鏈程序。

## 在Linux系統上使用Debian安裝

您可以選GUI工具或命令行工具來安裝遞飛鏈程序。

### 使用軟件中心

最簡單的方法是在Ubuntu中使用軟件中心。請進入文件夾中的 **.deb**文件 (通常是在*下載*文件夾)。

### 在命令行使用dpkg來安裝 .deb文件

如果您想使用命令行進行 **deb** 文件安裝，您可選擇用`apt`命令或`dpkg`命令。

```
sudo apt install PATH_TO_DEB_FILE
```

或

```
sudo dpkg -i PATH_TO_DEB_FILE
```


您現在可開啓遞飛鏈程序。

---

## 使用錢包

### 錢包介面

![](/img/guides/installing-defi-app/wallets.png)

#### 側邊攔主導覽

- **錢包**標簽頁: 發送和接收資金，和查看交易。
- **流動性池**標簽頁: 加入或移除和查看您流動資産的年利率。
- **DEX**標簽頁: 交換DFI和ETH/BTC/USDT挂鈎的代幣。
- **代幣**標簽頁: 審查遞飛鏈社區驗證的DST(規格性代幣)和創立自己的DST。
- **遞飛鏈**標簽頁: 內建迷你區塊浏覽器來查看遞飛鏈。
- **主節點**標簽頁。

#### 測攔主導覽

- **控制台**
- **救我**: 求救選項。
- **設定**: 切換主網和測試網，語言和其他設置。

### 打開錢包

切換到**錢包**標簽頁，選您要的錢包(如: DFI)

![](/img/guides/installing-defi-app/wallets-choose.png)

### 發送資金

#### 步驟一

在錢包內點選**發送**。

![](/img/guides/installing-defi-app/wallet-send.png)

#### 步驟二

輸入**金額**和**發送地址**。您也可掃一掃地址欄中的掃描選項。輸入好之後請按**繼續**。

![](/img/guides/installing-defi-app/wallet-send1.png)

#### 步驟三

再次確認**金額**和**收方地址**正確無誤。確認**發送按鈕**禁用幾秒鍾，以防止錯誤發送。

![](/img/guides/installing-defi-app/wallet-send2.png)

點選**確認發送**。

![](/img/guides/installing-defi-app/wallet-send3.png)

#### 步驟四

交易完成後，請按**返回錢包**。

![](/img/guides/installing-defi-app/wallet-send4.png)

您可在錢包內的**交易列表**中看到最新交易。

---

### 接收資金

#### 步驟一

錢包選好後請按**接收**。

![](/img/guides/installing-defi-app/wallet-receive.png)

接著請按**新地址**來創建新的接收地址。

![](/img/guides/installing-defi-app/wallet-receive1.png)

#### 步驟二

填進您的資訊，並給您的新地址貼上個名稱。接著請按**創建**。

![](/img/guides/installing-defi-app/wallet-receive2.png)

#### 步驟三

您剛剛創建的新地址將出現在您的接收地址列表中。

![](/img/guides/installing-defi-app/wallet-receive3.png)

按**二維條碼**顯示地址二維條碼。

![](/img/guides/installing-defi-app/wallet-receive4.png)

按**複制地址**將地址複制到系統剪貼版。

![](/img/guides/installing-defi-app/wallet-receive5.png)
