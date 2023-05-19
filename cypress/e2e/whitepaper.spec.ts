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
        "section-header-explore-dex-decentralized-exchange",
        "Whitepaper"
      );
    });

    it("should have all the expected Titles visible expected text", () => {
      whitepaperTitles.forEach((wpTitle) => {
        cy.get(`h2#${wpTitle.id}`)
          .scrollIntoView()
          .should("be.visible")
          .and("have.text", wpTitle.text);
      });
    });
  });
});
