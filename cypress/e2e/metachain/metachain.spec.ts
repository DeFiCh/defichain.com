import { viewports } from "../../fixture/main.config";

viewports.forEach((viewport) => {
  context(`/meta-chain on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/meta-chain");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have DEX header section visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-meta-chain",
        "THE UPGRADED ECOSYSTEM"
      );
      cy.checkElementVisibilityAndText(
        "section-header-meta-chain",
        "Meta Chain: Build for Bitcoin & Ethereum"
      );
      cy.checkElementVisibilityAndText(
        "section-desc-meta-chain",
        "Unrivaled innovation and interoperability, without compromising on scalability or security. Meta Chain is for building dApps on the world's largest blockchains."
      );
    });
  });
});
