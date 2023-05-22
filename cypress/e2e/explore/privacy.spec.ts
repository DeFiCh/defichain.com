import { viewports } from "../../fixture/main.config";

viewports.forEach((viewport) => {
  context(`/privacy-policy on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/privacy-policy");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have Protection section visible", () => {
      cy.checkElementVisibilityAndText(
        "section-title-privacy-policy-protecting",
        "PROTECTING YOUR PRIVACY"
      );
      cy.checkElementVisibilityAndText(
        "section-header-explore-dex-decentralized-exchange",
        "Privacy Policy"
      );
      cy.checkElementVisibilityAndText(
        "section-desc-explore-dex-decentralized-exchange",
        "Discover our commitment to protecting your privacy through our strict privacy policy"
      );
    });
  });
});
