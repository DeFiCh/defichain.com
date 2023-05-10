const viewports = ["macbook-16", "iphone-xr", "ipad-2"];

viewports.forEach((viewport) => {
  context(`/explore/wallets on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/explore/wallets");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have Choose Wallet section visible and expected text", () => {
      it("should be visible with expected text", () => {
        cy.checkElementVisibilityAndText(
          "section-title-explore-wallets-defichain-wallets",
          "CHOOSE A WALLET THAT SUITS YOU"
        );
        // cy.checkElementVisibilityAndText(
        //   "section-sub-title",
        //   "Experience DeFi with DFI"
        // );
        // cy.checkElementVisibilityAndText(
        //   "section-desc",
        //   "Our native token unlocks the power of decentralized finance, giving you access to a growing ecosystem of cutting-edge DeFi tools and innovative blockchain applications."
        // );
      });
    });
  });
});
