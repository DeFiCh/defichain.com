context("/downloads page on desktop", () => {
  before(() => {
    cy.visit("/downloads");
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should(
      "have.text",
      "Your key to the DeFiChain ecosystem"
    );
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Gain access to the DeFi landscape through non-custodial wallets designed for a multitude of requirements."
    );
  });

  it("should have Light Wallets", () => {
    cy.findByTestId("LightWalletSection.Title")
      .should("be.visible")
      .should("have.text", "Daily access to DeFiChain");
    cy.findByTestId("LightWalletSection.Subtitle")
      .should("be.visible")
      .should(
        "have.text",
        "These wallets provide lightweight, easy access to DeFiChain’s suite of features. Best suited for users who interact with DeFiChain on a near-daily basis, while not compromising on speed and security of funds."
      );

    cy.findByTestId("LightWallets.Dfc").should("be.visible");
    cy.findByTestId("LightWallets.Dfx").should("be.visible");
  });

  it("should have Fullnode wallets", () => {
    cy.findByTestId("FullNodeSection.Title")
      .should("be.visible")
      .should("have.text", "Advanced usage of DeFiChain");
    cy.findByTestId("FullNodeSection.Subtitle")
      .should("be.visible")
      .should(
        "have.text",
        "Advanced wallets that are suited for complex usage of DeFiChain, such as masternode management, multi-signature management, and more."
      );

    cy.findByTestId("FullNodeWallets.Dfc").should("be.visible");
    cy.findByTestId("FullNodeWallets.Rpi").should("be.visible");
    cy.findByTestId("FullNodeWallets.Cli").should("be.visible");
    cy.findByTestId("FullNodeWallets.DFIElectrum").should("be.visible");
  });
});

context("/downloads page on mobile", () => {
  before(() => {
    cy.visit("/downloads");
  });

  beforeEach(() => {
    cy.viewport("iphone-x");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should(
      "have.text",
      "Your key to the DeFiChain ecosystem"
    );
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Gain access to the DeFi landscape through non-custodial wallets designed for a multitude of requirements."
    );
  });

  it("should have Light Wallets", () => {
    cy.findByTestId("LightWalletSection.Title")
      .should("be.visible")
      .should("have.text", "Daily access to DeFiChain");
    cy.findByTestId("LightWalletSection.Subtitle")
      .should("be.visible")
      .should(
        "have.text",
        "These wallets provide lightweight, easy access to DeFiChain’s suite of features. Best suited for users who interact with DeFiChain on a near-daily basis, while not compromising on speed and security of funds."
      );

    cy.findByTestId("LightWallets.Dfc").should("be.visible");
    cy.findByTestId("LightWallets.Dfx").should("be.visible");
  });

  it("should have Fullnode wallets", () => {
    cy.findByTestId("FullNodeSection.Title")
      .should("be.visible")
      .should("have.text", "Advanced usage of DeFiChain");
    cy.findByTestId("FullNodeSection.Subtitle")
      .should("be.visible")
      .should(
        "have.text",
        "Advanced wallets that are suited for complex usage of DeFiChain, such as masternode management, multi-signature management, and more."
      );

    cy.findByTestId("FullNodeWallets.Dfc").should("be.visible");
    cy.findByTestId("FullNodeWallets.Rpi").should("be.visible");
    cy.findByTestId("FullNodeWallets.Cli").should("be.visible");
    cy.findByTestId("FullNodeWallets.DFIElectrum").should("be.visible");
  });

  it("should have DownloadSection", () => {
    cy.findByTestId("DownloadSection").within(() => {
      cy.findByTestId("Section.Title").should("have.text", "Downloads");
      cy.findAllByTestId("DownloadSection.Card").should("have.length", 5);
    });
  });
});
