---
title: 运作递飞链主节点
description: 入门Linux/Mac OS运作递飞链主节点。
---

## 简介

在递飞链上设置主节点可让您参与共识协议并运作权益质押获得奖励。要注意的事，您必须至少拥有20,000个DFI来设置一个主节点。

_注意：此入门操作需要对Linux系统有一些基本的了解_

## 主节点角色
有两个不同的角色: 「主节点的主人」和「主节点操作者」。主节点的主人持有所有抵押的DFI和主要活动，操作者可操作主要运作（含铸造新硬币，投票给锚定）。一般状况中，节点可同时进行做这两个角色。

## 如果主人想操作自己的主节点
同时运作两者角色时，操作者的地址也是主人的地址（抵押DFI)

### 步骤一：下载并解压缩节点软件

第一步是下载二进制文件。以下连结可下载Windows, Linux和macOSX的二进制文件 (请记得下载最新版本):

[下载二进制文件](/downloads/)

接着进行tar文件压缩和以下tar行 (更换 1.x.x 至您下载的最新版本):
```
tar -xvzf defichain-1.x.x-x86_64-pc-linux-gnu.tar.gz
```

### 步骤二: 将二进制文件复制到用户目录

若想方便又一致性可进入节点软件存储的地方，创建一个主文件夹就行了。可以通过以下命令来完成：

```
mkdir ~/.defi
```

现在，通过以下命令复制二进制文件：
```
cp ./defichain-1.x.x/bin/* ~/.defi
```

### 步骤三: 设置crontab(任务时间表)可让您的节点在背景运作

您也可以通过 `〜/.defi/defid` 直接运行例程，但这并不方便，因为必须持续运作终端，并在每次重新启动计算机或SSH会话控制时要重新运行命令。

相对的，您可以使用crontab维持运行。請運行 `crontab -e`，接著選擇一個編輯器（建議使用Nano），然後貼上：
```
* * * * * pidof defid || ~/.defi/defid
```

至文件后请按 `Ctrl-X` 在按回车键储存。

### 步骤四: 建立主人的地址 (需足够的资金)

您必须至少拥有20,000个DFI来设置一个主节点。请先建设足够资金的地址来运作所主人的角色。主节点目前只支持以设立地址，按照以下的命令行前往建设地址:

```
~/.defi/defi-cli getnewaddress "<label>" legacy
```

您可在「标签」栏让地址有个标签

接着请用以下命令行进行资金转移到刚创建的地址

```
~/.defi/defi-cli sendtoaddress address
```

命令行中的 `address` 代表了刚创建的新地址

### 步骤五: 在网络上注册为主节点

如果您想运作权益质押，您必须向整个网路发广播，可使用以下DFI CLI命令行:

```
~/.defi/defi-cli createmasternode address
```

命令行中的 `address` 该是刚创建的地址。请注意:您必须付出10 DFI来进行此命令

### 步骤六: 配置主节点并重新启动

我们快到主节点建设指南尾端了，但先必须做一些配置更改才能确认运作。配置文件在 `~/.defi/defi.conf`
请先确认这文件是否存在，运作命令行touch `~/.defi/defi.conf`

接着请在编辑器增加以下命令行:


```
gen=1
spv=1
masternode_operator=OPERATOR_ADDRESS
```

当您想在同个地址上扮演主人和操作者时，可直在 `OPERATOR_ADDRESS` 接输入同个地址。这个情况下就不必区分主节点角色。

最后一步是重新启动主节点。您已经在运行crontab，现在终止进程crontab，一分钟後将重启。
请使用终止进程命令行 `killall defi-init` 一分钟后，您的主节点应该是在正常运作状态。

您可以输入以下命令行确认主节点正常运作:

```
~/.defi/defi-cli listmasternodes
```

请在主节点列单中找出您的主节点来确认您是否成功设置主节点。

您可以运行命令行 `getmasternodeblocks OPERATOR_ADDRESS` 观察您的主节点以铸造的区块。

## 如果主人想将主节点操作派给另一个节点
在这种情况下，操作者的地址和主人的地址会不同。

### 步骤一到四: 如同以上

请按照以上步骤一到四
来设置主节点。如果您也想自行操作者节点，请在另一个电脑重复步骤一到四。


### 步骤五: 在递飞链网络上注册为主节点

如果您想运作权益质押，您必须向整个网路发广播，可使用以下DFI CLI命令行:

```
~/.defi/defi-cli createmasternode OWNER_ADDRESS OPERATOR_ADDRESS
``` 

命令行 `OWNER_ADDRESS` 中的 address 该是刚创建的地址 `OPERATOR_ADDRESS`。请注意:您必须付出10 DFI来进行此命令。

接着不需要执行任何操作，您可以发送操作者地址到操作者节点来确认正常运作。

您可运行以下命令行来确认:

```
~/.defi/defi-cli listmasternodes
```

请在主节点列单中找出您的主节点来确认您是否成功设置主节点。

您可以运行命令行 `getmasternodeblocks OPERATOR_ADDRESS` 观察您的主节点以挖的区块。

## 在递飞链桌面版钱包直接创建主节点

在程序钱包内可以直接设置主节点。请先点选主节点侧栏，接着按右上角的「创建＋」。这过程是自动化和无缝接轨的。

![Masternode1](https://user-images.githubusercontent.com/3271586/112108417-2472a280-8beb-11eb-91f1-896904d46a85.png)

## 同时在同个电脑上运作多个主节点

如果您要在同一台电脑上运行多个主节点，您需在 `defi.conf` 中指定所有 `masternode_operator`:

```
gen=1
spv=1
masternode_operator=OPERATOR_ADDRESS_1
masternode_operator=OPERATOR_ADDRESS_2
masternode_operator=OPERATOR_ADDRESS_3
```

下次运行时，该节点将为所有指定的主节点铸造。同个电脑确实可运作多数个主节点，也没有硬性限制。

## 退出主节点

如果您想退出主节点，请使用以下命令行。

```
~/.defi/defi-cli resignmasternode
```
## 主节点状态
发送 `createmasternode` 或 `resignmasternode` 命令行并不表示命令会直接入区块链。是会有些延迟的。

主节点会在这三种状态中:
```
        PRE_ENABLED,
        ENABLED,
        PRE_RESIGNED,
        RESIGNED,
        PRE_BANNED,
        BANNED
```
- `PRE_ENABLED` - 主节点以创建，正在等足够的区块链来激活。
- `ENABLED` - 主节点处于完全可操作状态，可以铸造块并标记锚点。
- `PRE_RESIGNED` - 主节点可操作的状态，但收到「退出」交易并等待延迟过后才能正式退出。
- `RESIGNED` - 主节点已退出，抵押品解锁可收回的状态。
- `PRE_BANNED` - 主节点被列为「犯罪行为」（在高度接近的平行叉上签了两个区块，此行为可用tx作为证据），但仍可操作（如PRE_RESIGNED那样等待）
- `BANNED` - 主节点以封杀，抵押品已解锁，可以收回（如同RESIGNED行, 但是强迫性失活退出。
