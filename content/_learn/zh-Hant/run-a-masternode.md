---
title: 運作遞飛鏈主節點
description: 入門Linux/macOS運作遞飛鏈主節點
---

## 簡介

在遞飛鏈上設置主節點可讓您參與共識協議並運作權益質押獲得獎勵。要注意的事，您必須至少擁有20,000個DFI來設置一個主節點。

_注意：此入門操作需要對Linux系統有一些基本的了解_

## 主節點角色
有兩個不同的角色: 「主節點的主人」和「主節點操作者」。主節點的主人持有所有抵押的DFI和主要活動，操作者可操作主要運作（含鑄造新硬幣，投票給錨定）。一般狀況中，節點可同時進行做這兩個角色。

## 如果主人想操作自己的主節點
同時運作兩者角色時，操作者的地址也是主人的地址（抵押DFI)

### 步驟一：下載並解壓縮節點軟件

第一步是下載二進制文件。以下連結可下載Windows, Linux和macOSX的二進制文件 (請記得下載最新版本):

[下載二進制文件](/downloads/)

接著進行tar文件壓縮和以下tar行 (更換 1.x.x 至您下載的最新版本):
```
tar -xvzf defichain-1.x.x-x86_64-pc-linux-gnu.tar.gz
```

### 步驟二: 將二進制文件複制到用戶目錄

若想方便又一致性可進入節點軟件存儲的地方，創建一個主文件夾就行了。可以通過以下命令來完成：

```
mkdir ~/.defi
```

現在，通過以下命令複制二進制文件：
```
cp ./defichain-1.x.x/bin/* ~/.defi
```

### 步驟三: 設置crontab(任務時間表)可讓您的節點在背景運作

您也可以通過 `〜/.defi/defid` 直接運行例程，但這並不方便，因為必須持續運作終端，並在每次重新啓動計算機或SSH會話控制時要重新運行命令。

相對的，您可以使用crontab維持運行。請運行 `crontab -e`，接著選擇一個編輯器（建議使用Nano），然後貼上：
```
* * * * * pidof defid || ~/.defi/defid
```

至文件後請按 `Ctrl-X` 在按回車鍵儲存。

### 步驟四: 建立主人的地址 (需足夠的資金)

您必須至少擁有20,000個DFI來設置一個主節點。請先建設足夠資金的地址來運作所主人的角色。主節點目前只支持以設立地址，按照以下的命令行前往建設地址:

```
~/.defi/defi-cli getnewaddress "<label>" legacy
```

您可在「標簽」欄讓地址有個標簽

接著請用以下命令行進行資金轉移到剛創建的地址

```
~/.defi/defi-cli sendtoaddress address
```

命令行中的 `address` 代表了剛創建的新地址

### 步驟五: 在網絡上注冊為主節點

如果您想運作權益質押，您必須向整個網路發廣播，可使用以下DFI CLI命令行:

```
~/.defi/defi-cli createmasternode address
```

命令行中的 `address` 該是剛創建的地址。請注意:您必須付出10 DFI來進行此命令

### 步驟六: 配置主節點並重新啓動

我們快到主節點建設指南尾端了，但先必須做一些配置更改才能確認運作。配置文件在 `~/.defi/defi.conf`
請先確認這文件是否存在，運作命令行touch `~/.defi/defi.conf`

接著請在編輯器增加以下命令行:


```
gen=1
spv=1
masternode_operator=OPERATOR_ADDRESS
```

當您想在同個地址上扮演主人和操作者時，可直在 `OPERATOR_ADDRESS` 接輸入同個地址。這個情況下就不必區分主節點角色。

最後一步是重新啓動主節點。您已經在運行crontab，現在終止進程crontab，一分鍾後將重啓。
請使用終止進程命令行 `killall defi-init` 一分鍾後，您的主節點應該是在正常運作狀態。

您可以輸入以下命令行確認主節點正常運作:

```
~/.defi/defi-cli listmasternodes
```

請在主節點列單中找出您的主節點來確認您是否成功設置主節點。

您可以運行命令行 `getmasternodeblocks OPERATOR_ADDRESS` 觀察您的主節點以鑄造的區塊。

## 如果主人想將主節點操作派給另一個節點
在這種情況下，操作者的地址和主人的地址會不同。

### 步驟一到四: 如同以上

請按照以上步驟一到四
來設置主節點。如果您也想自行操作者節點，請在另一個電腦重複步驟一到四。


### 步驟五: 在遞飛鏈網絡上注冊為主節點

如果您想運作權益質押，您必須向整個網路發廣播，可使用以下DFI CLI命令行:

```
~/.defi/defi-cli createmasternode OWNER_ADDRESS OPERATOR_ADDRESS
``` 

命令行 `OWNER_ADDRESS` 中的 address 該是剛創建的地址 `OPERATOR_ADDRESS`。請注意:您必須付出10 DFI來進行此命令。

接著不需要執行任何操作，您可以發送操作者地址到操作者節點來確認正常運作。

您可運行以下命令行來確認:

```
~/.defi/defi-cli listmasternodes
```

請在主節點列單中找出您的主節點來確認您是否成功設置主節點。

您可以運行命令行 `getmasternodeblocks OPERATOR_ADDRESS` 觀察您的主節點以挖的區塊。

## 在遞飛鏈桌面版錢包直接創建主節點

在程序錢包內可以直接設置主節點。請先點選主節點側欄，接著按右上角的「創建＋」。這過程是自動化和無縫接軌的。

![Masternode1](/img/guides/run-a-masternode/masternode.png)

## 同時在同個電腦上運作多個主節點

如果您要在同一台電腦上運行多個主節點，您需在 `defi.conf` 中指定所有 `masternode_operator`:

```
gen=1
spv=1
masternode_operator=OPERATOR_ADDRESS_1
masternode_operator=OPERATOR_ADDRESS_2
masternode_operator=OPERATOR_ADDRESS_3
```

下次運行時，該節點將為所有指定的主節點鑄造。同個電腦確實可運作多數個主節點，也沒有硬性限制。

## 退出主節點

如果您想退出主節點，請使用以下命令行。

```
~/.defi/defi-cli resignmasternode
```
## 主節點狀態
發送 `createmasternode` 或 `resignmasternode` 命令行並不表示命令會直接入區塊鏈。是會有些延遲的。

主節點會在這三種狀態中:
```
        PRE_ENABLED,
        ENABLED,
        PRE_RESIGNED,
        RESIGNED,
        PRE_BANNED,
        BANNED
```
- `PRE_ENABLED` - 主節點以創建，正在等足夠的區塊鏈來激活。
- `ENABLED` - 主節點處于完全可操作狀態，可以鑄造塊並標記錨點。
- `PRE_RESIGNED` - 主節點可操作的狀態，但收到「退出」交易並等待延遲過後才能正式退出。
- `RESIGNED` - 主節點已退出，抵押品解鎖可收回的狀態。
- `PRE_BANNED` - 主節點被列為「犯罪行為」（在高度接近的平行叉上簽了兩個區塊，此行為可用tx作為證據），但仍可操作（如PRE_RESIGNED那樣等待）
- `BANNED` - 主節點以封殺，抵押品已解鎖，可以收回（如同RESIGNED行, 但是強迫性失活退出。
