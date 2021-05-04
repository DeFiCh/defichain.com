---
title: 钱包加密技术
type: article
long_title: 入门控制台钱包加密技术
cta_to: Read
meta:
  description: 入门控制台钱包加密技术
  og:
    title: 钱包加密技术
    description: 入门控制台钱包加密技术
    site_name: DeFiChain
    image: /img/og/ogimage_en.png
    image_type: image/png
    locale: en_US
content:
  sections:
    hero:
      name: hero
      headline: 钱包加密技术
      subhead: 入门控制台钱包加密技术
---

**注意**：从控制台对钱包进行加密技术将导致您的助记词更新，如果您用此入门指南，请不要只依赖助记词作备份，请您启用另一份备份文件加密，再存储备份到一个安全的位置。

在写本文期间，版本v2.1.4，此程序尚未内置可促进钱包加密或锁定的图形UI。这也意味着高风险性的可能，因为所有用您的电脑的人都可透过文件 `wallet.dat` 进入您的钱包。

递飞链的节点是比特币核心的分叉，它继承了轻易的钱包加密进行和管理。

本指南教学该如何使用递飞链程序内提供的控制台进行钱包加密和解密，也称钱包锁定和钱包解锁。

**在此声明**：请在控制台内先确认所有程序命令再输入，尤其是来历不明的资讯命令。入门指南作者对资金损失的可能性不负责。

## 1. 保护你的钱包

1. 请备份在安全的地方备份文件 `wallet.dat`。若有问题出现，这文件对恢复DFI和DST(规格性代币)非常重要。这文件的路径通常位于:
  Linux: `~/.defi/wallets`
  Mac: `~/Library/Application Support/DeFi/wallets`
  Windows: `<root>\Users\<username>\AppData\Roaming\DeFi Blockchain\wallets`
  请记住，这是个 _未加密_ 文件！确保绝对安全！

2. 第一次请用长的随机密码来保护您的钱包。出于参考本指南将使用以下密码短语:
`REPLACE_THIS_WITH_A_LONG_SECURE_PASSPHRASE`
您可以使用任何随机密码生成器，最好是离线密码生成器。安全地写下来。


3. 在控制台上输入以下内容来锁定您的钱包：

    ```
    encryptwallet REPLACE_THIS_WITH_A_LONG_SECURE_PASSPHRASE
    ```

    这步骤只需要花短短几秒，您将看到 `wallet encrypted`。這表示您的錢包( `wallet.dat` 文件案)以加密。

    在这阶段您的程序处在仅查的状态但能正常运作流动性挖矿。如果您试图发送DFI或DST，程序会显示有失误: `Add-on auth TX failed: Can't sign TX`

    这表示您的钱包目前在已加密状态。骇客在此阶段只能观看您的资产结余，但无法支出到其他地方


## 2. 解锁你的钱包

您的钱包现在是在锁定和加密的状态，当您需要进行任何交易都要先解锁您的钱包 (含发送DFI或DST，执行DEX交换，增加流动性挖矿池等)。

请到控制台输入进行解锁：

```
walletpassphrase REPLACE_THIS_WITH_A_LONG_SECURE_PASSPHRASE 60
```

这步骤将使您的钱包解锁60秒。 60秒后恢复到锁定的状态。

解锁后您有60秒可做任何交易步骤。若您已收到这讯息: `Add-on auth TX failed: Can't sign TX`
这表示您的钱包已锁定，请重新输入以上解锁步骤 `walletpassphrase`

## 3. 锁定您的钱包

如果您想在60秒内完成交易并立即恢复锁定状态，请输入。

```
walletlock
```

这将立即锁定您的钱包也阻止后续或进一步交易。

## 4. 查看您的钱包加密状态

为了确保您的钱包确实被锁定和加密，您可以输入：

```
getwalletinfo
```

对于加密的钱包，您应该会看到包含以下内容的程序反映：
`"unlocked_until": 1609145224`
钱包被锁定后，`unlocked_until` 会显示 `0`。
钱包被解锁后会显示一组[UNIX时间戳](https://www.epochconverter.com)。


對於未加密的錢包，`unlocked_until` 和 `0` 都不会显示。

---

## 建议

1. 当您百分百确认您的钱包已被加密，您已经不需要之前未加密的 `wallet.dat` 文件。

2. 若要更改密码，请输入 `walletpassphrasechange "oldpassphrase" "newpassphrase"`。

3. 入门指南里的步骤会依程序版本更新。具有最高安全标准的Ledger硬件钱包已在开发中，请拭目以待。
