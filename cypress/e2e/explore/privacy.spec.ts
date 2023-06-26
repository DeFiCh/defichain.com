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
        "section-header-privacy-policy-protecting",
        "Privacy Policy"
      );
      cy.checkElementVisibilityAndText(
        "section-desc-privacy-policy-protecting",
        "Discover our commitment to protecting your privacy through our strict privacy policy"
      );
    });

    it("should have all the expected Titles visible expected text", () => {
      titles.forEach((privacyTitle) => {
        cy.findByTestId(privacyTitle.id)
          .scrollIntoView()
          .should("be.visible")
          .and("include.text", privacyTitle.title);
      });
    });

    it("should be able to navigate on side menu", () => {
      if (viewport === "macbook-16") {
        titles.forEach((privacyTitle) => {
          cy.findByTestId(privacyTitle.id).click();
          cy.checkElementVisibilityAndHref(
            `link-${privacyTitle.id}`,
            `#${privacyTitle.id}`
          );
        });
      }
    });
  });
});
