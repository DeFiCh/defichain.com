const viewports = ["iphone-xr", "ipad-2", "macbook-16"];

viewports.forEach((viewport) => {
  context(`/explore/dex on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/explore/dex");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have DEX header section visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-explore-dex-decentralized-exchange",
        "DECENTRALIZED EXCHANGE"
      );
      cy.checkElementVisibilityAndText(
        "section-header-explore-dex-decentralized-exchange",
        "Trade effortlessly with DeFiChain DEX"
      );
      cy.checkElementVisibilityAndText(
        "section-desc-explore-dex-decentralized-exchange",
        "Trade, Arbitrage and Earn in a DEX which empowers you with full control."
      );
    });
  });
});
