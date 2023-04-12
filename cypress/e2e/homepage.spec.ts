import { ecosystemLinks, resourcesLinks } from "../fixture/homepage.config";

context("/ on macbook-16", () => {
  before(() => {
    // TODO: add mobile
    cy.viewport("macbook-16");
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("should have Explore section dropdown elements", () => {
    cy.findByTestId("header-dropDownItem-explore").trigger("mouseover");
  });

  // QA-813 - TC2 - Step 2 & 3
  it("should have Coming soon on Ecosystem and Build sections", () => {
    cy.findByTestId("header-coming-soon-tag-Ecosystem").should(
      "contain",
      "COMING SOON"
    );
    cy.findByTestId("header-coming-soon-tag-Build").should(
      "contain",
      "COMING SOON"
    );
    cy.findByTestId("header-coming-soon-tag-Explore").should(
      "not.contain",
      "COMING SOON"
    );
    cy.findByTestId("header-coming-soon-tag-Community").should(
      "not.contain",
      "COMING SOON"
    );
  });

  // No TC
  it("should have Get DFI button", () => {
    cy.findByTestId("header-getDfi-button").click();
    cy.url().should("include", "/explore/dfi#get-dfi");
  });

  // No TC
  it("should have expected Header title and description", () => {
    cy.findByTestId("header-title").should(
      "have.text",
      "Connecting old and new worlds"
    );

    // No TC
    cy.findByTestId("header-desc").should(
      "have.text",
      "A blockchain dedicated to fast, intelligent and transparent decentralized financial services, accessible by everyone."
    );
  });

  // No TC
  it("should have Start exploring section clickable", () => {
    cy.findByTestId("startExploring-button").click({ force: true }); // covered by another element
    cy.url().should("include", "/#statistics_display");
    // investigate ci failure;
    // cy.findByTestId("statistic-title-TOTAL DFI MINTED").should("be.visible");
    // cy.findByTestId("statistic-title-TOTAL VALUE LOCKED IN USD").should(
    //   "be.visible"
    // );
    // cy.findByTestId("statistic-title-MASTERNODES").should("be.visible");
  });

  // No TC
  it("should have clickable Explore DeFi Meta Chain button", () => {
    cy.findByTestId("explore-dmc-button-Explore DeFi Meta Chain")
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "https://meta.defichain.com");
  });

  // No TC
  it("should have clickable View all articles button", () => {
    cy.findByTestId("explore-dmc-button-View all articles")
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "https://blog.defichain.com");
  });

  // No TC
  it("should have Ecosystem links displayed", () => {
    ecosystemLinks.forEach((ecosystemItem) => {
      cy.findByTestId(
        `ecosystem-link-${ecosystemItem.testid}`
      ).scrollIntoView();
      cy.findByTestId(`ecosystem-link-${ecosystemItem.testid}`)
        .should("contain", ecosystemItem.title)
        .and("be.visible")
        .and("have.attr", "href")
        .and("include", ecosystemItem.link);
    });
  });

  // No TC
  it("should have expected Blockchain feature section title and description", () => {
    cy.findByTestId("section-title-NON-TURING-COMPLETE BLOCKCHAIN").should(
      "be.visible"
    );
    cy.findByTestId("section-header-Designed,for,Decentralized,Finance").should(
      "be.visible"
    );
    cy.findByTestId("section-desc-Designed,for,Decentralized,Finance")
      .should("be.visible")
      .and(
        "have.text",
        "DeFiChain offers comprehensive functionality tailored to the Distributed Ledger Technology (DLT) " +
          "community, with an emphasis on simplicity, speed, and security."
      );
  });

  // No TC
  it("should have Blockchain features section displayed", () => {
    const textAreas = ["title", "desc"];
    const features = [
      "THROUGHPUT",
      "SECURITY",
      "IMMUTABILITY",
      "DEVELOPMENT",
      "VARIETY",
    ];
    textAreas.forEach((area) => {
      features.forEach((feature) => {
        cy.findAllByTestId(`highlights-${feature}-${area}`).should(
          "be.visible"
        );
      });
    });
  });

  // No TC
  it("should have Blog posts with links displayed", () => {
    cy.findAllByTestId("blog-post-container-link")
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "https://blog.defichain.com/");
  });

  // No TC
  it("should have Footer Explore links displayed", () => {
    ecosystemLinks.forEach((ecosystemItem) => {
      cy.findByTestId(`footer-${ecosystemItem.footerTestid}`)
        .should("be.visible")
        .should("have.attr", "href", ecosystemItem.link);
    });
  });

  // No TC
  it("should have Footer Resources links displayed", () => {
    resourcesLinks.forEach((resourcesItem) => {
      cy.findByTestId(`footer-${resourcesItem.footerTestid}`)
        .should("be.visible")
        .should("have.attr", "href", resourcesItem.link);
    });
  });

  it("should have Footer Social links", () => {
    cy.findAllByTestId("socialsRow-GitHub")
      .should("be.visible")
      .should("have.attr", "href", "https://github.com/DeFiCh/ain");
    cy.findAllByTestId("socialsRow-Reddit")
      .should("be.visible")
      .should("have.attr", "href", "https://www.reddit.com/r/defiblockchain/");
    cy.findAllByTestId("socialsRow-YouTube")
      .should("be.visible")
      .should("have.attr", "href", "https://www.youtube.com/DeFiChain");
    cy.findAllByTestId("socialsRow-Telegram")
      .should("be.visible")
      .should("have.attr", "href", "https://t.me/defiblockchain");
    cy.findAllByTestId("socialsRow-Twitter")
      .should("be.visible")
      .should("have.attr", "href", "https://twitter.com/defichain");
  });
});
