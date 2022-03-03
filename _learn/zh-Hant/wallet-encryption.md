---
title: 錢包加密技術
description: 入門控制台錢包加密技術
---

**注意**：從控制台對錢包進行加密技術將導致您的助記詞更新，如果您用此入門指南，請不要只依賴助記詞作備份，請您啓用另一份備份文件加密，再存儲備份到一個安全的位置。

在寫本文期間，版本v2.1.4，此程序尚未內置可促進錢包加密或鎖定的圖形UI。這也意味著高風險性的可能，因為所有用您的電腦的人都可透過文件 `wallet.dat` 進入您的錢包。

遞飛鏈的節點是比特幣核心的分叉，它繼承了輕易的錢包加密進行和管理。

本指南教學該如何使用遞飛鏈程序內提供的控制台進行錢包加密和解密，也稱錢包鎖定和錢包解鎖。

**在此聲明**：請在控制台內先確認所有程序命令再輸入，尤其是來曆不明的資訊命令。入門指南作者對資金損失的可能性不負責。

## 1. 保護你的錢包

1. 請備份在安全的地方備份文件 `wallet.dat`。若有問題出現，這文件對恢複DFI和DST(規格性代幣)非常重要。這文件的路徑通常位于:
  Linux: `~/.defi/wallets`
  Mac: `~/Library/Application Support/DeFi/wallets`
  Windows: `<root>\Users\<username>\AppData\Roaming\DeFi Blockchain\wallets`
  請記住，這是個 _未加密_ 文件！確保絕對安全！

2. 第一次請用長的隨機密碼來保護您的錢包。出于參考本指南將使用以下密碼短語:
`REPLACE_THIS_WITH_A_LONG_SECURE_PASSPHRASE`
您可以使用任何隨機密碼生成器，最好是離線密碼生成器。安全地寫下來。


3. 在控制台上輸入以下內容來鎖定您的錢包：

    ```
    encryptwallet REPLACE_THIS_WITH_A_LONG_SECURE_PASSPHRASE
    ```

    這步驟只需要花短短幾秒，您將看到 `wallet encrypted`。這表示您的錢包( `wallet.dat` 文件案)以加密。

    在這階段您的程序處在僅查的狀態但能正常運作流動性挖礦。如果您試圖發送DFI或DST，程序會顯示有失誤: `Add-on auth TX failed: Can't sign TX`

    這表示您的錢包目前在已加密狀態。駭客在此階段只能觀看您的資産結余，但無法支出到其他地方


## 2. 解鎖你的錢包

您的錢包現在是在鎖定和加密的狀態，當您需要進行任何交易都要先解鎖您的錢包 (含發送DFI或DST，執行DEX交換，增加流動性挖礦池等)。

請到控制台輸入進行解鎖：

```
walletpassphrase REPLACE_THIS_WITH_A_LONG_SECURE_PASSPHRASE 60
```

這步驟將使您的錢包解鎖60秒。 60秒後恢複到鎖定的狀態。

解鎖後您有60秒可做任何交易步驟。若您已收到這訊息: `Add-on auth TX failed: Can't sign TX`
這表示您的錢包已鎖定，請重新輸入以上解鎖步驟 `walletpassphrase`

## 3. 鎖定您的錢包

如果您想在60秒內完成交易並立即恢複鎖定狀態，請輸入。

```
walletlock
```

這將立即鎖定您的錢包也阻止後續或進一步交易。

## 4. 查看您的錢包加密狀態

為了確保您的錢包確實被鎖定和加密，您可以輸入：

```
getwalletinfo
```

對于加密的錢包，您應該會看到包含以下內容的程序反映：
`"unlocked_until": 1609145224`
錢包被鎖定後，`unlocked_until` 會顯示 `0`。
錢包被解鎖後會顯示一組[UNIX時間戳](https://www.epochconverter.com)。


對於未加密的錢包，`unlocked_until` 和 `0` 都不會顯示。

---

## 建議

1. 當您百分百確認您的錢包已被加密，您已經不需要之前未加密的 `wallet.dat` 文件。

2. 若要更改密碼，請輸入 `walletpassphrasechange "oldpassphrase" "newpassphrase"`。

3. 入門指南裏的步驟會依程序版本更新。具有最高安全標准的Ledger硬件錢包已在開發中，請拭目以待。
