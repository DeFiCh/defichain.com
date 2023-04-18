context("<Footer/> on desktop", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.interceptGeckoApi();
  });

  it("should have Defichain Logo", () => {
    cy.findByTestId("Footer.Web.Logo").should("be.visible");
  });

  it("should have Footer sitemap links", () => {
    cy.findByTestId("FooterColumn.DFI")
      .should("be.visible")
      .should("have.attr", "href", "/dfi");
    cy.findByTestId("FooterColumn.investTradeNEarn")
      .should("be.visible")
      .should("have.attr", "href", "/investtradeearn");
    cy.findByTestId("FooterColumn.decentralizedExchange")
      .should("be.visible")
      .should("have.attr", "href", "/decentralizedExchange");
    cy.findByTestId("FooterColumn.wallets")
      .should("be.visible")
      .should("have.attr", "href", "/wallets");
    cy.findByTestId("FooterColumn.masternodes")
      .should("be.visible")
      .should("have.attr", "href", "/masternodes");
    cy.findByTestId("FooterColumn.defichainapps")
      .should("be.visible")
      .should("have.attr", "href", "/defichainapps");
    cy.findByTestId("FooterColumn.defimetachain")
      .should("be.visible")
      .should("have.attr", "href", "/defimetachain");
    cy.findByTestId("FooterColumn.defiscan")
      .should("be.visible")
      .should("have.attr", "href", "/defiscan");
    cy.findByTestId("FooterColumn.governance")
      .should("be.visible")
      .should("have.attr", "href", "/governance");
    cy.findByTestId("FooterColumn.bugbounty")
      .should("be.visible")
      .should("have.attr", "href", "/bugbounty");
    cy.findByTestId("FooterColumn.100macceleratorprogram")
      .should("be.visible")
      .should("have.attr", "href", "/100macceleratorprogram");
    cy.findByTestId("FooterColumn.jellyfishsdk")
      .should("be.visible")
      .should("have.attr", "href", "/jellyfishsdk");
    cy.findByTestId("FooterColumn.defichainwhitepaper")
      .should("be.visible")
      .should("have.attr", "href", "/defichainwhitepaper");
    cy.findByTestId("FooterColumn.github")
      .should("be.visible")
      .should("have.attr", "href", "https://github.com/DeFiCh/ain");
    cy.findByTestId("FooterColumn.developerResource")
      .should("be.visible")
      .should("have.attr", "href", "/developerResource");
    cy.findByTestId("FooterColumn.mediaAssets")
      .should("be.visible")
      .should("have.attr", "href", "/mediaAssets");
    cy.findByTestId("FooterColumn.security")
      .should("be.visible")
      .should("have.attr", "href", "/security");
    cy.findByTestId("FooterColumn.blog")
      .should("be.visible")
      .should("have.attr", "href", "/blog");
    cy.findByTestId("FooterColumn.newsletter")
      .should("be.visible")
      .should("have.attr", "href", "/newsletter");
  });

  it("should have Footer Social links", () => {
    cy.findByTestId("SocialsRow.GitHub")
      .should("be.visible")
      .should("have.attr", "href", "https://github.com/DeFiCh/ain");
    cy.findByTestId("SocialsRow.Reddit")
      .should("be.visible")
      .should("have.attr", "href", "https://www.reddit.com/r/defiblockchain/");
    cy.findByTestId("SocialsRow.YouTube")
      .should("be.visible")
      .should("have.attr", "href", "https://www.youtube.com/DeFiChain");
    cy.findByTestId("SocialsRow.Telegram")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain");
    cy.findByTestId("SocialsRow.Twitter")
      .should("be.visible")
      .should("have.attr", "href", "https://twitter.com/defichain");
  });

  it("should tiny footer links", () => {
    cy.findByTestId("Footer.Web.Privacy")
      .should("be.visible")
      .should("have.attr", "href", "/privacy-policy");
    cy.findByTestId("Footer.Web.Terms")
      .should("be.visible")
      .should("have.attr", "href", "/terms-of-use");
  });
});
context("<Footer/> on mobile", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.interceptGeckoApi();
  });

  it("should have Defichain Logo", () => {
    cy.findByTestId("Footer.Mobile.Logo").should("be.visible");
  });

  it("should have Footer sitemap links", () => {
    cy.findByTestId("FooterColumn.DFI")
      .should("be.visible")
      .should("have.attr", "href", "/dfi");
    cy.findByTestId("FooterColumn.investTradeNEarn")
      .should("be.visible")
      .should("have.attr", "href", "/investtradeearn");
    cy.findByTestId("FooterColumn.decentralizedExchange")
      .should("be.visible")
      .should("have.attr", "href", "/decentralizedExchange");
    cy.findByTestId("FooterColumn.wallets")
      .should("be.visible")
      .should("have.attr", "href", "/wallets");
    cy.findByTestId("FooterColumn.masternodes")
      .should("be.visible")
      .should("have.attr", "href", "/masternodes");
    cy.findByTestId("FooterColumn.defichainapps")
      .should("be.visible")
      .should("have.attr", "href", "/defichainapps");
    cy.findByTestId("FooterColumn.defimetachain")
      .should("be.visible")
      .should("have.attr", "href", "/defimetachain");
    cy.findByTestId("FooterColumn.defiscan")
      .should("be.visible")
      .should("have.attr", "href", "/defiscan");
    cy.findByTestId("FooterColumn.governance")
      .should("be.visible")
      .should("have.attr", "href", "/governance");
    cy.findByTestId("FooterColumn.bugbounty")
      .should("be.visible")
      .should("have.attr", "href", "/bugbounty");
    cy.findByTestId("FooterColumn.100macceleratorprogram")
      .should("be.visible")
      .should("have.attr", "href", "/100macceleratorprogram");
    cy.findByTestId("FooterColumn.jellyfishsdk")
      .should("be.visible")
      .should("have.attr", "href", "/jellyfishsdk");
    cy.findByTestId("FooterColumn.defichainwhitepaper")
      .should("be.visible")
      .should("have.attr", "href", "/defichainwhitepaper");
    cy.findByTestId("FooterColumn.github")
      .should("be.visible")
      .should("have.attr", "href", "https://github.com/DeFiCh/ain");
    cy.findByTestId("FooterColumn.developerResource")
      .should("be.visible")
      .should("have.attr", "href", "/developerResource");
    cy.findByTestId("FooterColumn.mediaAssets")
      .should("be.visible")
      .should("have.attr", "href", "/mediaAssets");
    cy.findByTestId("FooterColumn.security")
      .should("be.visible")
      .should("have.attr", "href", "/security");
    cy.findByTestId("FooterColumn.blog")
      .should("be.visible")
      .should("have.attr", "href", "/blog");
    cy.findByTestId("FooterColumn.newsletter")
      .should("be.visible")
      .should("have.attr", "href", "/newsletter");
  });

  it("should have Footer Social links", () => {
    cy.findByTestId("SocialsRow.GitHub")
      .should("be.visible")
      .should("have.attr", "href", "https://github.com/DeFiCh/ain");
    cy.findByTestId("SocialsRow.Reddit")
      .should("be.visible")
      .should("have.attr", "href", "https://www.reddit.com/r/defiblockchain/");
    cy.findByTestId("SocialsRow.YouTube")
      .should("be.visible")
      .should("have.attr", "href", "https://www.youtube.com/DeFiChain");
    cy.findByTestId("SocialsRow.Telegram")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain");
    cy.findByTestId("SocialsRow.Twitter")
      .should("be.visible")
      .should("have.attr", "href", "https://twitter.com/defichain");
  });

  it("should tiny footer links", () => {
    cy.findByTestId("Footer.Mobile.Privacy")
      .should("be.visible")
      .should("have.attr", "href", "/privacy-policy");
    cy.findByTestId("Footer.Mobile.Terms")
      .should("be.visible")
      .should("have.attr", "href", "/terms-of-use");
  });
});
