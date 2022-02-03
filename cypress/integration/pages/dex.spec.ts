context('/dex on macbook-16', () => {
  before(() => {
    cy.visit('/dex')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', 'Decentralized Exchange')
    cy.findByTestId('Header.desc.main').should('have.text', 'Liquidity mining for up to 100% returns, decentralized swapping, arbitrage and more, with the DeFi Wallet.')
    cy.findByTestId('Header.desc.secondary').should('have.text', 'Available for Windows, macOS and Linux.')
  })

  it('should have LiquidityPoolsSection', () => {
    cy.findByTestId('LiquidityPools.title').should('have.text', 'Liquidity Pools')
    cy.findByTestId('LiquidityPools.showAllBtn').should('have.text', 'Show All')
    cy.findByTestId('LiquidityPools.showAllBtn').click().should('have.text', 'Hide')
  })

  it('should have LiquidityMiningSection', () => {
    cy.findByTestId('LiquidityMiningSection.image').should('be.visible')
    cy.findByTestId('LiquidityMiningSection.title').should('have.text', 'Earn More With Liquidity Mining!')
    cy.findByTestId('LiquidityMiningSection.desc').click().should('have.text', 'Liquidity mine for incredibly high yields within the app! Supply liquidity to BTC, ETH, USDT and many other pool pairs to power the Decentralized Exchange, and earn fees and high block rewards in return. You can withdraw your liquidity at any time.')
  })

  it('should have WalletFeaturesSection', () => {
    cy.findByTestId('WalletFeaturesSection.title').should('have.text', 'Other wallet features')
    cy.findByTestId('WalletFeaturesSection.HDWallet').within(() => {
      cy.findByTestId('title').should('have.text', 'HD wallet')
      cy.findByTestId('desc').should('have.text', 'A Hierarchical Deterministic (HD) wallet based on the leading BIP39 standard.')
    })
    cy.findByTestId('WalletFeaturesSection.BackupAndRestore').within(() => {
      cy.findByTestId('title').should('have.text', 'Backup and restore')
      cy.findByTestId('desc').should('have.text', 'Backup and restore your wallet and funds any time with your 24-word seed phrase.')
    })
    cy.findByTestId('WalletFeaturesSection.DecentralizedExchange').within(() => {
      cy.findByTestId('title').should('have.text', 'Decentralized Exchange')
      cy.findByTestId('desc').should('have.text', 'Swap between DFI and wrapped tokens in a completely decentralized, exchange.')
    })
    cy.findByTestId('WalletFeaturesSection.LiquidityMining').within(() => {
      cy.findByTestId('title').should('have.text', 'Liquidity mining')
      cy.findByTestId('desc').should('have.text', 'Supply and mine liquidity in popular pool pairs for potentially high yields.')
    })
    cy.findByTestId('WalletFeaturesSection.TokensSupport').within(() => {
      cy.findByTestId('title').should('have.text', 'Tokens Support')
      cy.findByTestId('desc').should('have.text', 'Store and transact in DFI, as well as all tokens in the DeFiChain ecosystem.')
    })
    cy.findByTestId('WalletFeaturesSection.MiniExplorer').within(() => {
      cy.findByTestId('title').should('have.text', 'Mini explorer')
      cy.findByTestId('desc').should('have.text', 'Explore the blockchain and examine transactions.')
    })
    cy.findByTestId('WalletFeaturesSection.Masternodes').within(() => {
      cy.findByTestId('title').should('have.text', 'Masternodes')
      cy.findByTestId('desc').should('have.text', 'View the full list of masternodes, and create your own masternodes.')
    })
    cy.findByTestId('WalletFeaturesSection.Console').within(() => {
      cy.findByTestId('title').should('have.text', 'Console')
      cy.findByTestId('desc').should('have.text', 'Run account, blockchain, masternode, mining, network, wallet commands, and more.')
    })
    cy.findByTestId('WalletFeaturesSection.NetworkSelection').within(() => {
      cy.findByTestId('title').should('have.text', 'Network selection')
      cy.findByTestId('desc').should('have.text', 'The app supports easy connecting and switching between Mainnet and Testnet.')
    })
  })
})

context('/dex on macbook-16 - zh-hans', () => {
  before(() => {
    cy.visit('/zh-hans/dex')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', '去中心化交易所')
    cy.findByTestId('Header.desc.main').should('have.text', '直接在递飞链钱包程序上实现高达三位数百分比的流动性挖矿池回报，进行开放式兑换或套利等。')
    cy.findByTestId('Header.desc.secondary').should('have.text', '程序适用于Windows，macOS和Linux。')
  })

  it('should have LiquidityPoolsSection', () => {
    cy.findByTestId('LiquidityPools.title').should('have.text', '流动性池')
    cy.findByTestId('LiquidityPools.showAllBtn').should('have.text', '显示所有')
    cy.findByTestId('LiquidityPools.showAllBtn').click().should('have.text', '隐藏')
  })

  it('should have LiquidityMiningSection', () => {
    cy.findByTestId('LiquidityMiningSection.image').should('be.visible')
    cy.findByTestId('LiquidityMiningSection.title').should('have.text', '进入流动性挖矿池能让您获得更多奖励！')
    cy.findByTestId('LiquidityMiningSection.desc').click().should('have.text', '递飞链的流动性挖矿能直接在程序中操作，并获得可观的收益率！当您为DEX提共BTC，ETH，USDT等地加密资产就能获得兑换费用佣金和高额的区块奖励。您可以随时退出流动性池。')
  })

  it('should have WalletFeaturesSection', () => {
    cy.findByTestId('WalletFeaturesSection.title').should('have.text', '钱包特点')
    cy.findByTestId('WalletFeaturesSection.HDWallet').within(() => {
      cy.findByTestId('title').should('have.text', '分层确定性钱包')
      cy.findByTestId('desc').should('have.text', '使用BIP39标准拓展分层确定性钱包')
    })
    cy.findByTestId('WalletFeaturesSection.BackupAndRestore').within(() => {
      cy.findByTestId('title').should('have.text', '备份还原')
      cy.findByTestId('desc').should('have.text', '使用二十四组助记词随时备份和恢复您的资产钱包')
    })
    cy.findByTestId('WalletFeaturesSection.DecentralizedExchange').within(() => {
      cy.findByTestId('title').should('have.text', '去中心化交易所')
      cy.findByTestId('desc').should('have.text', '在去中心化交易所上随时互换DFI和挂钩的代币')
    })
    cy.findByTestId('WalletFeaturesSection.LiquidityMining').within(() => {
      cy.findByTestId('title').should('have.text', '流动性挖矿')
      cy.findByTestId('desc').should('have.text', '在流动性挖矿池提供非常火的货币并获得高年利率的收获')
    })
    cy.findByTestId('WalletFeaturesSection.TokensSupport').within(() => {
      cy.findByTestId('title').should('have.text', '代幣支持')
      cy.findByTestId('desc').should('have.text', '在DFI和递飞链生态中的代币进行存储和交易')
    })
    cy.findByTestId('WalletFeaturesSection.MiniExplorer').within(() => {
      cy.findByTestId('title').should('have.text', '迷你浏览器')
      cy.findByTestId('desc').should('have.text', '浏览整个区块链和查看交易')
    })
    cy.findByTestId('WalletFeaturesSection.Masternodes').within(() => {
      cy.findByTestId('title').should('have.text', '主节点')
      cy.findByTestId('desc').should('have.text', '创建您的主节点和查看所有主节点')
    })
    cy.findByTestId('WalletFeaturesSection.Console').within(() => {
      cy.findByTestId('title').should('have.text', '控制台')
      cy.findByTestId('desc').should('have.text', '控制台上运用帐号，区块链，主节点，挖矿池，网络，钱包指令等功能')
    })
    cy.findByTestId('WalletFeaturesSection.NetworkSelection').within(() => {
      cy.findByTestId('title').should('have.text', '网络选项')
      cy.findByTestId('desc').should('have.text', '轻易在程序上转换主网和测试网')
    })
  })
})

context('/dex on macbook-16 - zh-hant', () => {
  before(() => {
    cy.visit('/zh-hant/dex')
  })

  beforeEach(() => {
    cy.viewport('macbook-16')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', '去中心化交易所')
    cy.findByTestId('Header.desc.main').should('have.text', '直接在遞飛鏈錢包程序上實現高達三位數百分比的流動性挖礦池回報，進行開放式兌換或套利等。')
    cy.findByTestId('Header.desc.secondary').should('have.text', '程序適用於Windows，macOS和Linux。')
  })

  it('should have LiquidityPoolsSection', () => {
    cy.findByTestId('LiquidityPools.title').should('have.text', '流動性池')
    cy.findByTestId('LiquidityPools.showAllBtn').should('have.text', '顯示所有')
    cy.findByTestId('LiquidityPools.showAllBtn').click().should('have.text', '隱藏')
  })

  it('should have LiquidityMiningSection', () => {
    cy.findByTestId('LiquidityMiningSection.image').should('be.visible')
    cy.findByTestId('LiquidityMiningSection.title').should('have.text', '進入流動性挖礦池能讓您獲得更多獎勵！')
    cy.findByTestId('LiquidityMiningSection.desc').click().should('have.text', '遞飛鏈的流動性挖礦能直接在程序中操作，並獲得可觀的收益率！當您為DEX提共BTC，ETH，USDT等地加密資產就能獲得兌換費用傭金和高額的區塊獎勵。您可以隨時退出流動性池。')
  })

  it('should have WalletFeaturesSection', () => {
    cy.findByTestId('WalletFeaturesSection.title').should('have.text', '錢包特點')
    cy.findByTestId('WalletFeaturesSection.HDWallet').within(() => {
      cy.findByTestId('title').should('have.text', '分層確定性錢包')
      cy.findByTestId('desc').should('have.text', '使用BIP39標准拓展分層確定性錢包')
    })
    cy.findByTestId('WalletFeaturesSection.BackupAndRestore').within(() => {
      cy.findByTestId('title').should('have.text', '備份還原')
      cy.findByTestId('desc').should('have.text', '使用二十四組助記詞隨時備份和恢複您的資産錢包')
    })
    cy.findByTestId('WalletFeaturesSection.DecentralizedExchange').within(() => {
      cy.findByTestId('title').should('have.text', '去中心化交易所')
      cy.findByTestId('desc').should('have.text', '在去中心化交易所上隨時互換DFI和挂鈎的代幣')
    })
    cy.findByTestId('WalletFeaturesSection.LiquidityMining').within(() => {
      cy.findByTestId('title').should('have.text', '流動性挖礦')
      cy.findByTestId('desc').should('have.text', '在流動性挖礦池提供非常火的貨幣並獲得高年利率的收獲')
    })
    cy.findByTestId('WalletFeaturesSection.TokensSupport').within(() => {
      cy.findByTestId('title').should('have.text', '代幣支持')
      cy.findByTestId('desc').should('have.text', '在DFI和遞飛鏈生態中的代幣進行存儲和交易')
    })
    cy.findByTestId('WalletFeaturesSection.MiniExplorer').within(() => {
      cy.findByTestId('title').should('have.text', '迷你浏覽器')
      cy.findByTestId('desc').should('have.text', '浏覽整個區塊鏈和查看交易')
    })
    cy.findByTestId('WalletFeaturesSection.Masternodes').within(() => {
      cy.findByTestId('title').should('have.text', '主節點')
      cy.findByTestId('desc').should('have.text', '創建您的主節點和查看所有主節點')
    })
    cy.findByTestId('WalletFeaturesSection.Console').within(() => {
      cy.findByTestId('title').should('have.text', '控制台')
      cy.findByTestId('desc').should('have.text', '控制台上運用帳號，區塊鏈，主節點，挖礦池，網絡，錢包指令等功能')
    })
    cy.findByTestId('WalletFeaturesSection.NetworkSelection').within(() => {
      cy.findByTestId('title').should('have.text', '網絡選項')
      cy.findByTestId('desc').should('have.text', '輕易在程序上轉換主網和測試網')
    })
  })
})

context('/dex on iphone-x', () => {
  before(() => {
    cy.visit('/dex')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', 'Decentralized Exchange')
    cy.findByTestId('Header.desc.main').should('have.text', 'Liquidity mining for up to 100% returns, decentralized swapping, arbitrage and more, with the DeFi Wallet.')
    cy.findByTestId('Header.desc.secondary').should('have.text', 'Available for Windows, macOS and Linux.')
  })

  it('should have LiquidityPoolsSection', () => {
    cy.findByTestId('LiquidityPools.title').should('have.text', 'Liquidity Pools')
    cy.findByTestId('LiquidityPools.showAllBtn').should('have.text', 'Show All')
    cy.findByTestId('LiquidityPools.showAllBtn').click().should('have.text', 'Hide')
  })

  it('should have LiquidityMiningSection', () => {
    cy.findByTestId('LiquidityMiningSection.image').should('be.visible')
    cy.findByTestId('LiquidityMiningSection.title').should('have.text', 'Earn More With Liquidity Mining!')
    cy.findByTestId('LiquidityMiningSection.desc').click().should('have.text', 'Liquidity mine for incredibly high yields within the app! Supply liquidity to BTC, ETH, USDT and many other pool pairs to power the Decentralized Exchange, and earn fees and high block rewards in return. You can withdraw your liquidity at any time.')
  })

  it('should have WalletFeaturesSection', () => {
    cy.findByTestId('WalletFeaturesSection.title').should('have.text', 'Other wallet features')
    cy.findByTestId('WalletFeaturesSection.HDWallet').within(() => {
      cy.findByTestId('title').should('have.text', 'HD wallet')
      cy.findByTestId('desc').should('have.text', 'A Hierarchical Deterministic (HD) wallet based on the leading BIP39 standard.')
    })
    cy.findByTestId('WalletFeaturesSection.BackupAndRestore').within(() => {
      cy.findByTestId('title').should('have.text', 'Backup and restore')
      cy.findByTestId('desc').should('have.text', 'Backup and restore your wallet and funds any time with your 24-word seed phrase.')
    })
    cy.findByTestId('WalletFeaturesSection.DecentralizedExchange').within(() => {
      cy.findByTestId('title').should('have.text', 'Decentralized Exchange')
      cy.findByTestId('desc').should('have.text', 'Swap between DFI and wrapped tokens in a completely decentralized, exchange.')
    })
    cy.findByTestId('WalletFeaturesSection.LiquidityMining').within(() => {
      cy.findByTestId('title').should('have.text', 'Liquidity mining')
      cy.findByTestId('desc').should('have.text', 'Supply and mine liquidity in popular pool pairs for potentially high yields.')
    })
    cy.findByTestId('WalletFeaturesSection.TokensSupport').within(() => {
      cy.findByTestId('title').should('have.text', 'Tokens Support')
      cy.findByTestId('desc').should('have.text', 'Store and transact in DFI, as well as all tokens in the DeFiChain ecosystem.')
    })
    cy.findByTestId('WalletFeaturesSection.MiniExplorer').within(() => {
      cy.findByTestId('title').should('have.text', 'Mini explorer')
      cy.findByTestId('desc').should('have.text', 'Explore the blockchain and examine transactions.')
    })
    cy.findByTestId('WalletFeaturesSection.Masternodes').within(() => {
      cy.findByTestId('title').should('have.text', 'Masternodes')
      cy.findByTestId('desc').should('have.text', 'View the full list of masternodes, and create your own masternodes.')
    })
    cy.findByTestId('WalletFeaturesSection.Console').within(() => {
      cy.findByTestId('title').should('have.text', 'Console')
      cy.findByTestId('desc').should('have.text', 'Run account, blockchain, masternode, mining, network, wallet commands, and more.')
    })
    cy.findByTestId('WalletFeaturesSection.NetworkSelection').within(() => {
      cy.findByTestId('title').should('have.text', 'Network selection')
      cy.findByTestId('desc').should('have.text', 'The app supports easy connecting and switching between Mainnet and Testnet.')
    })
  })
})

context('/dex on iphone-x - zh-hans', () => {
  before(() => {
    cy.visit('/zh-hans/dex')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', '去中心化交易所')
    cy.findByTestId('Header.desc.main').should('have.text', '直接在递飞链钱包程序上实现高达三位数百分比的流动性挖矿池回报，进行开放式兑换或套利等。')
    cy.findByTestId('Header.desc.secondary').should('have.text', '程序适用于Windows，macOS和Linux。')
  })

  it('should have LiquidityPoolsSection', () => {
    cy.findByTestId('LiquidityPools.title').should('have.text', '流动性池')
    cy.findByTestId('LiquidityPools.showAllBtn').should('have.text', '显示所有')
    cy.findByTestId('LiquidityPools.showAllBtn').click().should('have.text', '隐藏')
  })

  it('should have LiquidityMiningSection', () => {
    cy.findByTestId('LiquidityMiningSection.image').should('be.visible')
    cy.findByTestId('LiquidityMiningSection.title').should('have.text', '进入流动性挖矿池能让您获得更多奖励！')
    cy.findByTestId('LiquidityMiningSection.desc').click().should('have.text', '递飞链的流动性挖矿能直接在程序中操作，并获得可观的收益率！当您为DEX提共BTC，ETH，USDT等地加密资产就能获得兑换费用佣金和高额的区块奖励。您可以随时退出流动性池。')
  })

  it('should have WalletFeaturesSection', () => {
    cy.findByTestId('WalletFeaturesSection.title').should('have.text', '钱包特点')
    cy.findByTestId('WalletFeaturesSection.HDWallet').within(() => {
      cy.findByTestId('title').should('have.text', '分层确定性钱包')
      cy.findByTestId('desc').should('have.text', '使用BIP39标准拓展分层确定性钱包')
    })
    cy.findByTestId('WalletFeaturesSection.BackupAndRestore').within(() => {
      cy.findByTestId('title').should('have.text', '备份还原')
      cy.findByTestId('desc').should('have.text', '使用二十四组助记词随时备份和恢复您的资产钱包')
    })
    cy.findByTestId('WalletFeaturesSection.DecentralizedExchange').within(() => {
      cy.findByTestId('title').should('have.text', '去中心化交易所')
      cy.findByTestId('desc').should('have.text', '在去中心化交易所上随时互换DFI和挂钩的代币')
    })
    cy.findByTestId('WalletFeaturesSection.LiquidityMining').within(() => {
      cy.findByTestId('title').should('have.text', '流动性挖矿')
      cy.findByTestId('desc').should('have.text', '在流动性挖矿池提供非常火的货币并获得高年利率的收获')
    })
    cy.findByTestId('WalletFeaturesSection.TokensSupport').within(() => {
      cy.findByTestId('title').should('have.text', '代幣支持')
      cy.findByTestId('desc').should('have.text', '在DFI和递飞链生态中的代币进行存储和交易')
    })
    cy.findByTestId('WalletFeaturesSection.MiniExplorer').within(() => {
      cy.findByTestId('title').should('have.text', '迷你浏览器')
      cy.findByTestId('desc').should('have.text', '浏览整个区块链和查看交易')
    })
    cy.findByTestId('WalletFeaturesSection.Masternodes').within(() => {
      cy.findByTestId('title').should('have.text', '主节点')
      cy.findByTestId('desc').should('have.text', '创建您的主节点和查看所有主节点')
    })
    cy.findByTestId('WalletFeaturesSection.Console').within(() => {
      cy.findByTestId('title').should('have.text', '控制台')
      cy.findByTestId('desc').should('have.text', '控制台上运用帐号，区块链，主节点，挖矿池，网络，钱包指令等功能')
    })
    cy.findByTestId('WalletFeaturesSection.NetworkSelection').within(() => {
      cy.findByTestId('title').should('have.text', '网络选项')
      cy.findByTestId('desc').should('have.text', '轻易在程序上转换主网和测试网')
    })
  })
})

context('/dex on iphone-x - zh-hant', () => {
  before(() => {
    cy.visit('/zh-hant/dex')
  })

  beforeEach(() => {
    cy.viewport('iphone-x')
  })

  it('should have Header', () => {
    cy.findByTestId('Header.title').should('have.text', '去中心化交易所')
    cy.findByTestId('Header.desc.main').should('have.text', '直接在遞飛鏈錢包程序上實現高達三位數百分比的流動性挖礦池回報，進行開放式兌換或套利等。')
    cy.findByTestId('Header.desc.secondary').should('have.text', '程序適用於Windows，macOS和Linux。')
  })

  it('should have LiquidityPoolsSection', () => {
    cy.findByTestId('LiquidityPools.title').should('have.text', '流動性池')
    cy.findByTestId('LiquidityPools.showAllBtn').should('have.text', '顯示所有')
    cy.findByTestId('LiquidityPools.showAllBtn').click().should('have.text', '隱藏')
  })

  it('should have LiquidityMiningSection', () => {
    cy.findByTestId('LiquidityMiningSection.image').should('be.visible')
    cy.findByTestId('LiquidityMiningSection.title').should('have.text', '進入流動性挖礦池能讓您獲得更多獎勵！')
    cy.findByTestId('LiquidityMiningSection.desc').click().should('have.text', '遞飛鏈的流動性挖礦能直接在程序中操作，並獲得可觀的收益率！當您為DEX提共BTC，ETH，USDT等地加密資產就能獲得兌換費用傭金和高額的區塊獎勵。您可以隨時退出流動性池。')
  })

  it('should have WalletFeaturesSection', () => {
    cy.findByTestId('WalletFeaturesSection.title').should('have.text', '錢包特點')
    cy.findByTestId('WalletFeaturesSection.HDWallet').within(() => {
      cy.findByTestId('title').should('have.text', '分層確定性錢包')
      cy.findByTestId('desc').should('have.text', '使用BIP39標准拓展分層確定性錢包')
    })
    cy.findByTestId('WalletFeaturesSection.BackupAndRestore').within(() => {
      cy.findByTestId('title').should('have.text', '備份還原')
      cy.findByTestId('desc').should('have.text', '使用二十四組助記詞隨時備份和恢複您的資産錢包')
    })
    cy.findByTestId('WalletFeaturesSection.DecentralizedExchange').within(() => {
      cy.findByTestId('title').should('have.text', '去中心化交易所')
      cy.findByTestId('desc').should('have.text', '在去中心化交易所上隨時互換DFI和挂鈎的代幣')
    })
    cy.findByTestId('WalletFeaturesSection.LiquidityMining').within(() => {
      cy.findByTestId('title').should('have.text', '流動性挖礦')
      cy.findByTestId('desc').should('have.text', '在流動性挖礦池提供非常火的貨幣並獲得高年利率的收獲')
    })
    cy.findByTestId('WalletFeaturesSection.TokensSupport').within(() => {
      cy.findByTestId('title').should('have.text', '代幣支持')
      cy.findByTestId('desc').should('have.text', '在DFI和遞飛鏈生態中的代幣進行存儲和交易')
    })
    cy.findByTestId('WalletFeaturesSection.MiniExplorer').within(() => {
      cy.findByTestId('title').should('have.text', '迷你浏覽器')
      cy.findByTestId('desc').should('have.text', '浏覽整個區塊鏈和查看交易')
    })
    cy.findByTestId('WalletFeaturesSection.Masternodes').within(() => {
      cy.findByTestId('title').should('have.text', '主節點')
      cy.findByTestId('desc').should('have.text', '創建您的主節點和查看所有主節點')
    })
    cy.findByTestId('WalletFeaturesSection.Console').within(() => {
      cy.findByTestId('title').should('have.text', '控制台')
      cy.findByTestId('desc').should('have.text', '控制台上運用帳號，區塊鏈，主節點，挖礦池，網絡，錢包指令等功能')
    })
    cy.findByTestId('WalletFeaturesSection.NetworkSelection').within(() => {
      cy.findByTestId('title').should('have.text', '網絡選項')
      cy.findByTestId('desc').should('have.text', '輕易在程序上轉換主網和測試網')
    })
  })
})
