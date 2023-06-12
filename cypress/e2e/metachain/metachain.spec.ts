import { viewports } from "../../fixture/main.config";

viewports.forEach((viewport) => {
  context(`/meta-chain on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/meta-chain");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have meta chain hero banner header section visible and expected text", () => {
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
    it("should have Start exploring button visible and navigate to the expected area (#metachain-key-features)", () => {
      cy.findByTestId("start-exploring-button")
        .scrollIntoView()
        .then(() => {
          if (viewport === "macbook-16" || viewport === "ipad-2") {
            cy.findByTestId("start-exploring-button").click({
              scrollBehavior: false,
            });
            cy.url().should("include", "#metachain-key-features");
          }
          cy.checkElementVisibilityAndText(
            "section-title-metachain-key-features",
            "KEY FEATURES"
          );
          cy.checkElementVisibilityAndText(
            "title",
            "Ethereum's power meets innovation"
          );
          cy.checkElementVisibilityAndText(
            "desc",
            "Provides an EVM-compatible environment that allows developers, familiar with the Ethereum ecosystem, to seamlessly and effortlessly build next generation applications on the Native DeFiChain."
          );
          // SVG icons
          cy.checkElementVisibilityAndText(
            "evm-&-utxo-integration-title",
            "EVM & UTXO INTEGRATION"
          );
          cy.checkElementVisibilityAndText(
            "evm-&-utxo-integration-desc",
            "Supports both UTXO and Ethereum account model, providing privacy and simplicity seamlessly."
          );
          cy.checkElementVisibilityAndText(
            "scalable-ecosystem-title",
            "SCALABLE ECOSYSTEM"
          );
          cy.checkElementVisibilityAndText(
            "scalable-ecosystem-desc",
            "Unrestricted cross-compatibility empowers DFI users with extensive access to Ethereum and EVM-compatible chains."
          );
          cy.checkElementVisibilityAndText(
            "low-transaction-fees-title",
            "LOW TRANSACTION FEES"
          );
          cy.checkElementVisibilityAndText(
            "low-transaction-fees-desc",
            "Empowering builders and users with cost-effective transaction fees."
          );
          cy.checkElementVisibilityAndText(
            "low-switching-costs-title",
            "LOW SWITCHING COSTS"
          );
          cy.checkElementVisibilityAndText(
            "low-switching-costs-desc",
            "Seamless dApp deployment and effortless cross-chain interaction simplified using Meta Chain."
          );
        });
    });
  });
});
