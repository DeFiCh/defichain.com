import { ecosystemLinks, resourcesLinks } from "../../fixture/homepage.config";

context("/ on macbook-16", () => {
  before(() => {
    cy.viewport("macbook-16");
  });

  beforeEach(() => {
    cy.visit("/");
  });

  // TODO: fix hover elements issues
  it.skip("should have Explore section dropdown elements", () => {
    cy.findByTestId("header-dropDownItem-explore").trigger("mouseover");
    cy.findByTestId("explore-dropDownItems-$DFI").should("be.visible");
  });

  // QA-813 - TC2 - Step 2 & 3
  it("should have Coming soon on Ecosystem and Build sections", () => {
    cy.get("div[data-testid='header-coming-soon-tag']").should(
      "have.length",
      2
    );
    cy.get("div[data-testid='header-coming-soon-tag']")
      .first()
      .parent()
      .should("contain", "Ecosystem");
    cy.get("div[data-testid='header-coming-soon-tag']")
      .last()
      .parent()
      .should("contain", "Build");
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
    cy.findByTestId("statistic-title-TOTAL DFI MINTED").should("be.visible");
    cy.findByTestId("statistic-title-TOTAL VALUE LOCKED IN USD").should(
      "be.visible"
    );
    cy.findByTestId("statistic-title-MASTERNODES").should("be.visible");
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
    cy.findByTestId("blockchainFeatureSection-text").should(
      "have.text",
      "NON-TURING-COMPLETE BLOCKCHAINDesigned for Decentralized Finance DeFiChain offers comprehensive functionality " +
        "tailored to the Distributed Ledger Technology (DLT) community, with an emphasis on simplicity, speed, and security."
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
        cy.get(`[data-testid='highlights-${feature}-${area}']`).should(
          "be.visible"
        );
      });
    });
  });

  // No TC
  it("should have Blog posts with links displayed", () => {
    cy.get("[data-testid='blog-post-container-link']")
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

  it.skip("should have Footer Social links", () => {
    // TODO
  });
});