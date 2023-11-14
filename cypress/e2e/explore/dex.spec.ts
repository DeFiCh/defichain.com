import { viewports } from "../../fixture/main.config";

viewports.forEach((viewport) => {
  context(`/explore/dex on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/explore/dex");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have DEX header section visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-explore-dex-decentralized-exchange",
        "DECENTRALIZED EXCHANGE",
      );
      cy.checkElementVisibilityAndText(
        "section-header-explore-dex-decentralized-exchange",
        "Trade effortlessly with DeFiChain DEX",
      );
      cy.checkElementVisibilityAndText(
        "section-desc-explore-dex-decentralized-exchange",
        "Trade, Arbitrage and Earn in a DEX which empowers you with full control.",
      );
    });

    it("should have Start exploring button visible and navigate to the expected area", () => {
      cy.findByTestId("start-exploring-button").scrollIntoView();
      if (viewport === "macbook-16") {
        cy.findByTestId("start-exploring-button").click({
          scrollBehavior: false,
        });
        cy.url().should("include", "#explore-dex-statistics-display");
      }
      cy.checkElementVisibilityAndText(
        "statistic-title-total-value-locked",
        "TOTAL VALUE LOCKED",
      );
      cy.checkElementVisibilityAndText(
        "statistic-title-trading-volume",
        "TRADING VOLUME (24H)",
      );
      cy.checkElementVisibilityAndText(
        "statistic-title-statistics-display-tokens",
        "TOKENS",
      );
    });

    it("should have Why DEX section visible and expected text", () => {
      cy.checkElementVisibilityAndText("title", "Why DEX?");
      cy.checkElementVisibilityAndText(
        "desc",
        "Experience trustless trading, arbitrage, and earnings with DeFiChain DEX's wide array of liquidity pools.",
      );

      cy.checkElementVisibilityAndHref(
        "secondary-button-explore-dex",
        "https://defiscan.live/dex",
      );
    });

    it("should have Why DEX elements visible and expected text", () => {
      cy.checkElementVisibilityAndText("trade-assets-title", "TRADE ASSETS");
      cy.checkElementVisibilityAndText(
        "trade-assets-desc",
        "Seamlessly swap tokens with ease and convenience.",
      );
      cy.checkElementVisibilityAndText(
        "wide-selection-of-tokens-title",
        "WIDE SELECTION OF TOKENS",
      );
      cy.checkElementVisibilityAndText(
        "wide-selection-of-tokens-desc",
        "Discover endless possibilities with 60+ dTokens - Your key to a diverse DeFi playground.",
      );
      cy.checkElementVisibilityAndText(
        "profit-from-liquidity-mining-title",
        "PROFIT FROM LIQUIDITY MINING",
      );
      cy.checkElementVisibilityAndText(
        "profit-from-liquidity-mining-desc",
        "Contribute liquidity, earn rewards, and withdraw whenever you want.",
      );
      cy.checkElementVisibilityAndText(
        "advanced-swaps-title",
        "ADVANCED SWAPS",
      );
      cy.checkElementVisibilityAndText(
        "advanced-swaps-desc",
        "Instant multi-pool trades or future-price-based dToken swaps at your fingertips.",
      );
    });
  });
});
