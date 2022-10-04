context("<Footer/> on desktop", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  it("should have Defichain Logo", () => {
    cy.findByTestId("Footer.Logo").should("be.visible");
  });

  it("should Footer Heading", () => {
    cy.findByTestId("Footer.Heading")
      .should("be.visible")
      .should("have.text", "Native Decentralized Finance for Bitcoin.");
  });

  it("should have Footer sitemap links", () => {
    cy.findByTestId("FooterSectionSitemap.DFI")
      .should("be.visible")
      .should("have.attr", "href", "/dfi");
    cy.findByTestId("FooterSectionSitemap.DEX")
      .should("be.visible")
      .should("have.attr", "href", "/dex");
    cy.findByTestId("FooterSectionSitemap.Developers")
      .should("be.visible")
      .should("have.attr", "href", "/developers");
    cy.findByTestId("FooterSectionSitemap.Ecosystem")
      .should("be.visible")
      .should("have.attr", "href", "/ecosystem");
    cy.findByTestId("FooterSectionSitemap.Downloads")
      .should("be.visible")
      .should("have.attr", "href", "/downloads");
    cy.findByTestId("FooterSectionSitemap.Media")
      .should("be.visible")
      .should("have.attr", "href", "/media");
    cy.findByTestId("FooterSectionSitemap.Learn")
      .should("be.visible")
      .should("have.attr", "href", "/learn");
    cy.findByTestId("FooterSectionSitemap.Security")
      .should("be.visible")
      .should("have.attr", "href", "/security");
    cy.findByTestId("FooterSectionSitemap.BugBounty")
      .should("be.visible")
      .should("have.attr", "href", "/bug-bounty");
    cy.findByTestId("FooterSectionSitemap.WhitePaper")
      .should("be.visible")
      .should("have.attr", "href", "/white-paper");
    cy.findByTestId("FooterSectionSitemap.DFCBlog")
      .should("be.visible")
      .should("have.attr", "href", "https://blog.defichain.com/");
    cy.findByTestId("FooterSectionSitemap.Newsletter")
      .should("be.visible")
      .should("have.attr", "href", "https://bit.ly/3yQxtmW");
  });

  it("should have Footer Social links", () => {
    cy.findByTestId("FooterExternalLink.Twitter")
      .should("be.visible")
      .should("have.attr", "href", "https://twitter.com/defichain");
    cy.findByTestId("FooterExternalLink.Youtube")
      .should("be.visible")
      .should("have.attr", "href", "https://www.youtube.com/DeFiChain");
    cy.findByTestId("FooterExternalLink.Reddit")
      .should("be.visible")
      .should("have.attr", "href", "https://www.reddit.com/r/defiblockchain/");
    cy.findByTestId("FooterExternalLink.Linkedin")
      .should("be.visible")
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/company/defichain"
      );
    cy.findByTestId("FooterExternalLink.Discord")
      .should("be.visible")
      .should("have.attr", "href", "https://discord.com/invite/py55egyaGy");
    cy.findByTestId("FooterExternalLink.Github")
      .should("be.visible")
      .should("have.attr", "href", "https://github.com/DeFiCh/ain");
    cy.findByTestId("FooterExternalLink.CoinMarketCap")
      .should("be.visible")
      .should(
        "have.attr",
        "href",
        "https://coinmarketcap.com/community/profile/DeFiChain"
      );
    cy.findByTestId("FooterExternalLink.Facebook")
      .should("be.visible")
      .should(
        "have.attr",
        "href",
        "https://www.facebook.com/defichain.official"
      );
    cy.findByTestId("FooterExternalLink.MerchUS")
      .should("be.visible")
      .should("have.attr", "href", "https://defichain.myspreadshop.com/");
    cy.findByTestId("FooterExternalLink.MerchUK")
      .should("be.visible")
      .should("have.attr", "href", "https://defichain.myspreadshop.co.uk/");
    cy.findByTestId("FooterExternalLink.TelegramEN")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain");
    cy.findByTestId("FooterExternalLink.TelegramES")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/official_defichain_es");
    cy.findByTestId("FooterExternalLink.TelegramDE")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_DE");
    cy.findByTestId("FooterExternalLink.TelegramIT")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_IT");
    cy.findByTestId("FooterExternalLink.TelegramZH")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defichain_ZH");
    cy.findByTestId("FooterExternalLink.TelegramFR")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_FR");
    cy.findByTestId("FooterExternalLink.TelegramTR")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_TR");
    cy.findByTestId("FooterExternalLink.TelegramRU")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defichain_ru");
    cy.findByTestId("FooterExternalLink.TelegramIndonesia")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defichain_indonesia");
    cy.findByTestId("FooterExternalLink.TelegramPT")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_PT");
  });

  it("should tiny footer links", () => {
    cy.findByTestId("Footer.Privacy")
      .should("be.visible")
      .should("have.attr", "href", "/privacy-policy");
  });
});

context("<Footer/> on mobile", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.viewport("iphone-x");
  });

  it("should have Defichain Logo", () => {
    cy.findByTestId("Footer.Logo").should("be.visible");
  });

  it("should Footer Heading", () => {
    cy.findByTestId("Footer.Heading")
      .should("be.visible")
      .should("have.text", "Native Decentralized Finance for Bitcoin.");
  });

  it("should have Footer sitemap links", () => {
    cy.findByTestId("FooterSectionSitemap.DFI")
      .should("be.visible")
      .should("have.attr", "href", "/dfi");
    cy.findByTestId("FooterSectionSitemap.DEX")
      .should("be.visible")
      .should("have.attr", "href", "/dex");
    cy.findByTestId("FooterSectionSitemap.Developers")
      .should("be.visible")
      .should("have.attr", "href", "/developers");
    cy.findByTestId("FooterSectionSitemap.Ecosystem")
      .should("be.visible")
      .should("have.attr", "href", "/ecosystem");
    cy.findByTestId("FooterSectionSitemap.Downloads")
      .should("be.visible")
      .should("have.attr", "href", "/downloads");
    cy.findByTestId("FooterSectionSitemap.Media")
      .should("be.visible")
      .should("have.attr", "href", "/media");
    cy.findByTestId("FooterSectionSitemap.Learn")
      .should("be.visible")
      .should("have.attr", "href", "/learn");
    cy.findByTestId("FooterSectionSitemap.Security")
      .should("be.visible")
      .should("have.attr", "href", "/security");
    cy.findByTestId("FooterSectionSitemap.BugBounty")
      .should("be.visible")
      .should("have.attr", "href", "/bug-bounty");
    cy.findByTestId("FooterSectionSitemap.WhitePaper")
      .should("be.visible")
      .should("have.attr", "href", "/white-paper");
    cy.findByTestId("FooterSectionSitemap.DFCBlog")
      .should("be.visible")
      .should("have.attr", "href", "https://blog.defichain.com/");
    cy.findByTestId("FooterSectionSitemap.Newsletter")
      .should("be.visible")
      .should("have.attr", "href", "https://bit.ly/3yQxtmW");
  });

  it("should have Footer Social links", () => {
    cy.findByTestId("FooterExternalLink.Twitter")
      .should("be.visible")
      .should("have.attr", "href", "https://twitter.com/defichain");
    cy.findByTestId("FooterExternalLink.Youtube")
      .should("be.visible")
      .should("have.attr", "href", "https://www.youtube.com/DeFiChain");
    cy.findByTestId("FooterExternalLink.Reddit")
      .should("be.visible")
      .should("have.attr", "href", "https://www.reddit.com/r/defiblockchain/");
    cy.findByTestId("FooterExternalLink.Linkedin")
      .should("be.visible")
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/company/defichain"
      );
    cy.findByTestId("FooterExternalLink.Discord")
      .should("be.visible")
      .should("have.attr", "href", "https://discord.com/invite/py55egyaGy");
    cy.findByTestId("FooterExternalLink.Github")
      .should("be.visible")
      .should("have.attr", "href", "https://github.com/DeFiCh/ain");
    cy.findByTestId("FooterExternalLink.Facebook")
      .should("be.visible")
      .should(
        "have.attr",
        "href",
        "https://www.facebook.com/defichain.official"
      );
    cy.findByTestId("FooterExternalLink.MerchUS")
      .should("be.visible")
      .should("have.attr", "href", "https://defichain.myspreadshop.com/");
    cy.findByTestId("FooterExternalLink.MerchUK")
      .should("be.visible")
      .should("have.attr", "href", "https://defichain.myspreadshop.co.uk/");
    cy.findByTestId("FooterExternalLink.TelegramEN")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain");
    cy.findByTestId("FooterExternalLink.TelegramES")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/official_defichain_es");
    cy.findByTestId("FooterExternalLink.TelegramDE")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_DE");
    cy.findByTestId("FooterExternalLink.TelegramIT")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_IT");
    cy.findByTestId("FooterExternalLink.TelegramZH")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defichain_ZH");
    cy.findByTestId("FooterExternalLink.TelegramFR")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_FR");
    cy.findByTestId("FooterExternalLink.TelegramTR")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_TR");
    cy.findByTestId("FooterExternalLink.TelegramRU")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defichain_ru");
    cy.findByTestId("FooterExternalLink.TelegramIndonesia")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defichain_indonesia");
    cy.findByTestId("FooterExternalLink.TelegramPT")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain_PT");
  });

  it("should tiny footer links", () => {
    cy.findByTestId("Footer.Privacy")
      .should("be.visible")
      .should("have.attr", "href", "/privacy-policy");
  });
});
