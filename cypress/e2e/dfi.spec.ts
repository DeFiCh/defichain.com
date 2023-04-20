const viewports = ["iphone-xr", "macbook-16"];

viewports.forEach((viewport) => {
  context(`/explore/dfi on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/explore/dfi");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have title,subtitle,desc displayed and expected text", () => {
      cy.findByTestId("section-title-explore-dfi")
        .should("be.visible")
        .and("have.text", "EXPLORE THE POWER OF DFI");
      cy.findByTestId("section-sub-title")
        .should("be.visible")
        .and("have.text", "Experience DeFi with DFI");
      cy.findByTestId("section-desc")
        .should("be.visible")
        .and(
          "have.text",
          "Our native token unlocks the power of decentralized finance, giving you access to a growing ecosystem of cutting-edge DeFi tools and innovative blockchain applications."
        );
    });

    it("should have Start exploring section clickable", () => {
      if (viewport === "macbook-16") {
        cy.findByTestId("start-exploring-button").click({ force: true }); // covered by another element
        cy.url().should("include", "#statistics-display-dfi");
      }
      cy.findByTestId("statistic-title-dfi-minted").should("be.visible");
      cy.findByTestId("statistic-title-circulating-supply").should(
        "be.visible"
      );
    });

    it("should have Purchase DFI easily section with links ", () => {
      cy.findByTestId("section-title-purchase-dfi")
        .should("be.visible")
        .and("have.text", "PURCHASE $DFI EASILY");
      cy.findByTestId("get-dfi-title")
        .should("be.visible")
        .and("have.text", "Get DFI on trusted exchanges");
      cy.findByTestId("get-dfi-desc")
        .should("be.visible")
        .and(
          "have.text",
          "Use our partner links to securely buy DFI on trusted cryptocurrency exchanges and easily transfer them to your DeFiChain wallet address."
        );
    });

    it("should have Read from Whitepaper button visible and clickable", () => {
      cy.findByTestId("explore-dmc-button-read-from-whitepaper")
        .should("be.visible")
        .and("have.attr", "href")
        .and("include", "/white-paper");
    });
  });
});
