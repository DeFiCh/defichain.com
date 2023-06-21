import { whitepaperTitles } from "../fixture/whitepaper.config";

const viewports = ["macbook-16", "iphone-xr", "ipad-2"];

viewports.forEach((viewport) => {
  context(`/white-paper on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/white-paper");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have Documentation section visible expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-white-paper-documentation",
        "DOCUMENTATION FOR DEFICHAIN ECOSYSTEM"
      );
      cy.checkElementVisibilityAndText(
        "section-header-white-paper-documentation",
        "Whitepaper"
      );
    });

    it("should have all the expected Titles visible expected text", () => {
      whitepaperTitles.forEach((wpTitle) => {
        cy.findByTestId(wpTitle.id)
          .scrollIntoView()
          .should("be.visible")
          .and("include.text", wpTitle.text);
      });
    });

    // remove skip once bug with scrolling fixed
    it.skip("should be able to navigate on sidemenu", () => {
      if (viewport === "macbook-16") {
        whitepaperTitles.forEach((wpTitle) => {
          // if (wpTitle.id != "defichain-foundation")
          cy.checkElementVisibilityAndHref(
            `link-${wpTitle.id}`,
            `#${wpTitle.id}`
          );
        });
      }
    });
  });
});
