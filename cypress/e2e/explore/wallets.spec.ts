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
        cy.checkElementVisibilityAndText("sub-title", "DeFiChain Wallets");
        cy.checkElementVisibilityAndText(
          "desc",
          "Gain access to the DeFi landscape through non-custodial wallets designed for a multitude of requirements."
        );
      });
    });

    it("should have Start exploring section clickable", () => {
      if (viewport === "macbook-16") {
        cy.findByTestId("start-exploring-button").click({
          scrollBehavior: false,
        });
        cy.url().should("include", "#explore-wallets-daily-use-section");
      }
      cy.checkElementVisibilityAndText(
        "section-title-for-daily-use",
        "FOR DAILY USE"
      );
      cy.checkElementVisibilityAndText(
        "for-daily-use-section-title",
        "Daily access to DeFiChain"
      );
      // cy.checkElementVisibilityAndText(
      //   "harness-dfi-power-title",
      //   "Harness the power of DFI"
      // );
    });
  });
});
