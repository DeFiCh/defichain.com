const viewports = ["iphone-xr", "macbook-16"];

viewports.forEach((viewport) => {
  context(`/explore/dfi on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/explore/dfi");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have Explore DFI section visible and expected text", () => {
      it("should be visible with expected text", () => {
        cy.checkElementVisibilityAndText(
          "section-title-explore-dfi",
          "EXPLORE THE POWER OF DFI"
        );
        cy.checkElementVisibilityAndText(
          "section-sub-title",
          "Experience DeFi with DFI"
        );
        cy.checkElementVisibilityAndText(
          "section-desc",
          "Our native token unlocks the power of decentralized finance, giving you access to a growing ecosystem of cutting-edge DeFi tools and innovative blockchain applications."
        );
      });
    });

    it("should have Start exploring section clickable", () => {
      if (viewport === "macbook-16") {
        cy.findByTestId("start-exploring-button").click({ force: true }); // covered by another element
        cy.url().should("include", "#statistics-display-dfi");
      }
      cy.checkElementVisibilityAndText(
        "statistic-title-dfi-minted",
        "TOTAL DFI MINTED"
      );
      cy.checkElementVisibilityAndText(
        "statistic-title-circulating-supply",
        "CIRCULATING SUPPLY"
      );
    });

    it("should have Building better tomorrow section visible ", () => {
      // TODO:
    });

    it("should have Purchase DFI easily section with links ", () => {
      cy.checkElementVisibilityAndText(
        "section-title-purchase-dfi",
        "PURCHASE $DFI EASILY"
      );
      cy.checkElementVisibilityAndText(
        "get-dfi-title",
        "Get DFI on trusted exchanges"
      );
      cy.checkElementVisibilityAndText(
        "get-dfi-desc",
        "Use our partner links to securely buy DFI on trusted cryptocurrency exchanges and easily transfer them to your DeFiChain wallet address."
      );
    });

    it("should have Trusted exchanges visible and clickable ", () => {
      // TODO:
    });

    it("should have Read from Whitepaper section visible and clickable", () => {
      cy.checkElementVisibilityAndText(
        "section-title-transparent-distribution",
        "TRANSPARENT DISTRIBUTION"
      );
      cy.checkElementVisibilityAndText(
        "initial-token-dist-title",
        "Initial Token Distribution"
      );

      cy.checkElementVisibilityAndHref(
        "explore-dmc-button-read-from-whitepaper",
        "/white-paper"
      );
    });

    it("should have Initial supply and Masternodes sections visible ", () => {
      // TODO:
    });

    it("should have DeFiChain ERC-20 section visible and clickable ", () => {
      cy.checkElementVisibilityAndText("erc-20-title", "DeFiChain ERC-20");
      cy.checkElementVisibilityAndText(
        "erc-20-desc",
        "DeFiChain ERC-20 token provides greater flexibility for users between Ethereum and DeFiChain.This allows the wider crypto ecosystem to experience the real value of Native DeFi on DeFiChain."
      );
      cy.checkElementVisibilityAndHref(
        "explore-dmc-button-erc-20-learn-more",
        "https://blog.defichain.com/defichains-first-move-to-become"
      );
      cy.checkElementVisibilityAndHref(
        "view-contract-btn",
        "https://etherscan.io/token/0x8Fc8f8269ebca376D046Ce292dC7eaC40c8D358A"
      );
      cy.findByTestId("view-contract-btn")
        .should("have.attr", "target")
        .and("include", "_blank");
    });
  });
});
