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
      cy.get("h2#abstract").should("have.text", "1. Abstract");
      cy.get("h2#executive-summary").should(
        "have.text",
        "2. Executive summary"
      );
      cy.get("h2#background").should("have.text", "3. Background/Industry");
      cy.get("h2#alternatives").should(
        "have.text",
        "4. Comparing existing DeFi alternatives"
      );
      cy.get("h2#solution").should("have.text", "5. DeFiChain Solution");
      cy.get("h2#design").should("have.text", "6. DeFiChain Design");
      cy.get("h2#building-blocks").should(
        "have.text",
        "7. DeFi Building Blocks"
      );
      cy.get("h2#dfi-coin").should("have.text", "8. $DFI coin");
      cy.get("h2#defichain-foundation").should(
        "have.text",
        "9. DeFiChain Foundation"
      );
      cy.get("h2#marketing").should("have.text", "10. Marketing");
      cy.get("h2#roadmap").should("have.text", "11. Roadmap and Milestones");
      cy.get("h2#future").should("have.text", "12. A Glimpse into the Future");
      cy.get("h2#footnotes").should("have.text", "13. Footnotes");
    });
  });
});
