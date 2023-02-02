context("/dex on macbook-16", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/dex");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should(
      "have.text",
      "Decentralized Exchange"
    );
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Liquidity mining for up to 100% returns, decentralized swapping, arbitrage and more, with the DeFi Wallet."
    );
    cy.findByTestId("Header.desc.secondary").should(
      "have.text",
      "Available for Windows, macOS and Linux"
    );
  });

  it("should have LiquidityPoolsSection", () => {
    cy.findByTestId("LiquidityPoolsSection").within(() => {
      cy.findByTestId("Section.Title").should("have.text", "Liquidity Pools");
      cy.findByTestId("LiquidityPools.showAllBtn").should(
        "have.text",
        "Show All"
      );
      cy.findByTestId("LiquidityPools.showAllBtn")
        .click()
        .should("have.text", "Hide");
    });
  });

  it("should have LiquidityMiningSection", () => {
    cy.findByTestId("LiquidityMiningSection.image").should("be.visible");
    cy.findByTestId("LiquidityMiningSection.title").should(
      "have.text",
      "Earn More With Liquidity Mining!"
    );
    cy.findByTestId("LiquidityMiningSection.desc")
      .click()
      .should(
        "have.text",
        "Liquidity mine for incredibly high yields within the app! Supply liquidity to BTC, ETH, USDT and many other pool pairs to power the Decentralized Exchange, and earn fees and high block rewards in return. You can withdraw your liquidity at any time."
      );
  });

  it("should have WalletFeaturesSection", () => {
    cy.findByTestId("WalletFeaturesSection").within(() => {
      cy.findByTestId("Section.Title")
        .should("be.visible")
        .should("have.text", "Other wallet features");
      cy.findByTestId("WalletFeaturesSection.HDWallet").within(() => {
        cy.findByTestId("title").should("have.text", "HD wallet");
        cy.findByTestId("desc").should(
          "have.text",
          "A Hierarchical Deterministic (HD) wallet based on the leading BIP39 standard"
        );
      });
      cy.findByTestId("WalletFeaturesSection.BackupAndRestore").within(() => {
        cy.findByTestId("title").should("have.text", "Backup and restore");
        cy.findByTestId("desc").should(
          "have.text",
          "Backup and restore your wallet and funds any time with your 24-word seed phrase"
        );
      });
      cy.findByTestId("WalletFeaturesSection.DecentralizedExchange").within(
        () => {
          cy.findByTestId("title").should(
            "have.text",
            "Decentralized Exchange"
          );
          cy.findByTestId("desc").should(
            "have.text",
            "Swap between DFI and wrapped tokens in a completely decentralized, exchange"
          );
        }
      );
      cy.findByTestId("WalletFeaturesSection.LiquidityMining").within(() => {
        cy.findByTestId("title").should("have.text", "Liquidity mining");
        cy.findByTestId("desc").should(
          "have.text",
          "Supply and mine liquidity in popular pool pairs for potentially high yields"
        );
      });
      cy.findByTestId("WalletFeaturesSection.TokensSupport").within(() => {
        cy.findByTestId("title").should("have.text", "Tokens Support");
        cy.findByTestId("desc").should(
          "have.text",
          "Store and transact in DFI, as well as all tokens in the DeFiChain ecosystem"
        );
      });
      cy.findByTestId("WalletFeaturesSection.MiniExplorer").within(() => {
        cy.findByTestId("title").should("have.text", "Mini explorer");
        cy.findByTestId("desc").should(
          "have.text",
          "Explore the blockchain and examine transactions"
        );
      });
      cy.findByTestId("WalletFeaturesSection.Masternodes").within(() => {
        cy.findByTestId("title").should("have.text", "Masternodes");
        cy.findByTestId("desc").should(
          "have.text",
          "View the full list of masternodes, and create your own masternodes"
        );
      });
      cy.findByTestId("WalletFeaturesSection.Console").within(() => {
        cy.findByTestId("title").should("have.text", "Console");
        cy.findByTestId("desc").should(
          "have.text",
          "Run account, blockchain, masternode, mining, network, wallet commands, and more"
        );
      });
      cy.findByTestId("WalletFeaturesSection.NetworkSelection").within(() => {
        cy.findByTestId("title").should("have.text", "Network selection");
        cy.findByTestId("desc").should(
          "have.text",
          "The app supports easy connecting and switching between Mainnet and Testnet"
        );
      });
    });
  });
});

context("/dex on iphone-x", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/dex");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should(
      "have.text",
      "Decentralized Exchange"
    );
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Liquidity mining for up to 100% returns, decentralized swapping, arbitrage and more, with the DeFi Wallet."
    );
    cy.findByTestId("Header.desc.secondary").should(
      "have.text",
      "Available for Windows, macOS and Linux"
    );
  });

  it("should have LiquidityPoolsSection", () => {
    cy.findByTestId("LiquidityPoolsSection").within(() => {
      cy.findByTestId("Section.Title").should("have.text", "Liquidity Pools");
      cy.findByTestId("LiquidityPools.showAllBtn").should(
        "have.text",
        "Show All"
      );
      cy.findByTestId("LiquidityPools.showAllBtn")
        .click()
        .should("have.text", "Hide");
    });
  });

  it("should have LiquidityMiningSection", () => {
    cy.findByTestId("LiquidityMiningSection.image").should("be.visible");
    cy.findByTestId("LiquidityMiningSection.title").should(
      "have.text",
      "Earn More With Liquidity Mining!"
    );
    cy.findByTestId("LiquidityMiningSection.desc")
      .click()
      .should(
        "have.text",
        "Liquidity mine for incredibly high yields within the app! Supply liquidity to BTC, ETH, USDT and many other pool pairs to power the Decentralized Exchange, and earn fees and high block rewards in return. You can withdraw your liquidity at any time."
      );
  });

  it("should have WalletFeaturesSection", () => {
    cy.findByTestId("WalletFeaturesSection").within(() => {
      cy.findByTestId("Section.Title")
        .should("be.visible")
        .should("have.text", "Other wallet features");
      cy.findByTestId("WalletFeaturesSection.HDWallet").within(() => {
        cy.findByTestId("title").should("have.text", "HD wallet");
        cy.findByTestId("desc").should(
          "have.text",
          "A Hierarchical Deterministic (HD) wallet based on the leading BIP39 standard"
        );
      });
      cy.findByTestId("WalletFeaturesSection.BackupAndRestore").within(() => {
        cy.findByTestId("title").should("have.text", "Backup and restore");
        cy.findByTestId("desc").should(
          "have.text",
          "Backup and restore your wallet and funds any time with your 24-word seed phrase"
        );
      });
      cy.findByTestId("WalletFeaturesSection.DecentralizedExchange").within(
        () => {
          cy.findByTestId("title").should(
            "have.text",
            "Decentralized Exchange"
          );
          cy.findByTestId("desc").should(
            "have.text",
            "Swap between DFI and wrapped tokens in a completely decentralized, exchange"
          );
        }
      );
      cy.findByTestId("WalletFeaturesSection.LiquidityMining").within(() => {
        cy.findByTestId("title").should("have.text", "Liquidity mining");
        cy.findByTestId("desc").should(
          "have.text",
          "Supply and mine liquidity in popular pool pairs for potentially high yields"
        );
      });
      cy.findByTestId("WalletFeaturesSection.TokensSupport").within(() => {
        cy.findByTestId("title").should("have.text", "Tokens Support");
        cy.findByTestId("desc").should(
          "have.text",
          "Store and transact in DFI, as well as all tokens in the DeFiChain ecosystem"
        );
      });
      cy.findByTestId("WalletFeaturesSection.MiniExplorer").within(() => {
        cy.findByTestId("title").should("have.text", "Mini explorer");
        cy.findByTestId("desc").should(
          "have.text",
          "Explore the blockchain and examine transactions"
        );
      });
      cy.findByTestId("WalletFeaturesSection.Masternodes").within(() => {
        cy.findByTestId("title").should("have.text", "Masternodes");
        cy.findByTestId("desc").should(
          "have.text",
          "View the full list of masternodes, and create your own masternodes"
        );
      });
      cy.findByTestId("WalletFeaturesSection.Console").within(() => {
        cy.findByTestId("title").should("have.text", "Console");
        cy.findByTestId("desc").should(
          "have.text",
          "Run account, blockchain, masternode, mining, network, wallet commands, and more"
        );
      });
      cy.findByTestId("WalletFeaturesSection.NetworkSelection").within(() => {
        cy.findByTestId("title").should("have.text", "Network selection");
        cy.findByTestId("desc").should(
          "have.text",
          "The app supports easy connecting and switching between Mainnet and Testnet"
        );
      });
    });
  });
});
