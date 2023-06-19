import { viewports } from "../../fixture/main.config";
import { masternodeElements } from "../../fixture/masternodes.config";

viewports.forEach((viewport) => {
  context(`/explore/masternodes on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/explore/masternodes");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have Learn About Masternodes section visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-explore-masternodes-learn-about-masternodes",
        "LEARN ABOUT MASTERNODES"
      );
      cy.checkElementVisibilityAndText(
        "section-header-explore-masternodes-learn-about-masternodes",
        "DeFiChain Masternodes"
      );
      cy.checkElementVisibilityAndText(
        "section-desc-explore-masternodes-learn-about-masternodes",
        "Secure, incentivized, community-driven nodes powering DeFiChain."
      );
    });

    it("should have Start exploring button visible and navigate to the expected area", () => {
      cy.findByTestId("start-exploring-button").scrollIntoView();
      if (viewport === "macbook-16") {
        cy.findByTestId("start-exploring-button").click({
          scrollBehavior: false,
        });
        cy.url().should("include", "#statistics_display_masternodes");
      }
      cy.checkElementVisibilityAndText(
        "statistic-title-masternodes",
        "MASTERNODES"
      );
      cy.checkElementVisibilityAndText(
        "statistic-title-tvl",
        "TOTAL VALUE LOCKED"
      );
    });

    it("should have Own A Masternode section displayed and with expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-masternodes-benefits-section",
        "OWN A MASTERNODE"
      );
      cy.checkElementVisibilityAndText("title", "Benefits of Masternodes");
      cy.checkElementVisibilityAndText(
        "desc",
        "Unlock the full utility of DeFiChain with a masternode."
      );

      cy.checkElementVisibilityAndHref(
        "explore-dmc-button-masternodes-benefits-section",
        "/explore/masternodes/technical-guide"
      );
    });

    it("should have Own A Masternode elements visible and expected text", () => {
      masternodeElements.forEach((element) => {
        cy.checkElementVisibilityAndText(element.id, element.text);
      });
    });
  });
});
