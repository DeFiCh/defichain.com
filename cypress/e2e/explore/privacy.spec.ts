import { viewports } from "../../fixture/main.config";
import { titles } from "../../fixture/privacy.config";

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

    it("should have all the expected Titles visible expected text", () => {
      titles.forEach((privacyTitle) => {
        cy.get(`h2#${privacyTitle.id}`)
          .scrollIntoView()
          .should("be.visible")
          .and("include.text", privacyTitle.title);
      });
    });

    it("should be able to navigate on side menu", () => {
      if (viewport === "macbook-16") {
        titles.forEach((privacyTitle) => {
          cy.get(`#${privacyTitle.id}`).click();
          cy.checkElementVisibilityAndHref(
            `link-${privacyTitle.id}`,
            `#${privacyTitle.id}`
          );
        });
      }
    });
  });
});
