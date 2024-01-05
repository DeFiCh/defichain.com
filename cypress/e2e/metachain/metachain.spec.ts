import { viewports } from "../../fixture/main.config";

viewports.forEach((viewport) => {
  context(`/metachain on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/metachain");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have MetaChain hero banner header section visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-meta-chain",
        "THE UPGRADED ECOSYSTEM",
      );
      cy.checkElementVisibilityAndText(
        "section-header-meta-chain",
        "MetaChain: Build for Bitcoin & Ethereum",
      );
      cy.checkElementVisibilityAndText(
        "section-desc-meta-chain",
        "Unrivaled innovation and interoperability, without compromising on scalability or security. MetaChain is for building dApps on the world's largest blockchains.",
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
            "KEY FEATURES",
          );
          cy.checkElementVisibilityAndText(
            "title",
            "Ethereum's power meets innovation",
          );
          cy.checkElementVisibilityAndText(
            "desc",
            "Provides an EVM-compatible environment that allows developers, familiar with the Ethereum ecosystem, to seamlessly and effortlessly build next generation applications on the Native DeFiChain.",
          );
          // SVG icons
          cy.checkElementVisibilityAndText(
            "evm-&-utxo-integration-title",
            "EVM & UTXO INTEGRATION",
          );
          cy.checkElementVisibilityAndText(
            "evm-&-utxo-integration-desc",
            "Supports both UTXO and Ethereum account model, providing privacy and simplicity seamlessly.",
          );
          cy.checkElementVisibilityAndText(
            "scalable-ecosystem-title",
            "SCALABLE ECOSYSTEM",
          );
          cy.checkElementVisibilityAndText(
            "scalable-ecosystem-desc",
            "Unrestricted cross-compatibility empowers DFI users with extensive access to Ethereum and EVM-compatible chains.",
          );
          cy.checkElementVisibilityAndText(
            "low-transaction-fees-title",
            "LOW TRANSACTION FEES",
          );
          cy.checkElementVisibilityAndText(
            "low-transaction-fees-desc",
            "Empowering builders and users with cost-effective transaction fees.",
          );
          cy.checkElementVisibilityAndText(
            "low-switching-costs-title",
            "LOW SWITCHING COSTS",
          );
          cy.checkElementVisibilityAndText(
            "low-switching-costs-desc",
            "Seamless dApp deployment and effortless cross-chain interaction simplified using MetaChain.",
          );
        });
    });

    it("should have the Roadmap section visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-metachain-roadmap-title",
        "METACHAIN'S KEY UPDATES",
      );
      cy.checkElementVisibilityAndText("metachain-roadmap-subtitle", "Roadmap");
      cy.checkElementVisibilityAndText(
        "metachain-roadmap-desc",
        "Become an early pioneer in the next frontier of DeFiChain. Explore our roadmap and join us in testing and shaping the features of MetaChain. Leverage our knowledge library below to start your journey.",
      );
      cy.findByTestId("metachain-roadmap-img").should("exist");
    });

    it("should have the Roadmap Agenda section visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "metachain-agenda-title-DevNet",
        "DevNet",
      );
      cy.findByTestId("metachain-agenda-DevNet")
        .trigger("mouseover", { scrollBehavior: "center" })
        .findByTestId("metachain-agenda-desc-DevNet")
        .should(
          "have.text",
          "Kick-off stage, setting up MetaChain's environment for internal testing.",
        );

      cy.checkElementVisibilityAndText(
        "metachain-agenda-title-FloppyNet",
        "FloppyNet",
      );
      cy.findByTestId("metachain-agenda-FloppyNet")
        .trigger("mouseover", { scrollBehavior: "center" })
        .findByTestId("metachain-agenda-desc-FloppyNet")
        .should(
          "have.text",
          "The alpha version of our TestNet - publicly accessible, expect rollbacks and limited volatility.",
        );

      cy.checkElementVisibilityAndText(
        "metachain-agenda-title-TestNet",
        "TestNet",
      );
      cy.findByTestId("metachain-agenda-TestNet")
        .trigger("mouseover", { scrollBehavior: "center" })
        .findByTestId("metachain-agenda-desc-TestNet")
        .should(
          "have.text",
          "Final version of TestNet - deploy and interact with smart contracts in a stable environment.",
        );

      cy.checkElementVisibilityAndText(
        "metachain-agenda-title-Infrastructure",
        "Infrastructure",
      );
      cy.findByTestId("metachain-agenda-Infrastructure")
        .trigger("mouseover", { scrollBehavior: "center" })
        .findByTestId("metachain-agenda-desc-Infrastructure")
        .should(
          "have.text",
          "Integrating key infrastructure like MetaScan and Ocean to prepare MetaChain for MainNet.",
        );
      cy.checkElementVisibilityAndText(
        "metachain-agenda-title-MainNet Launch",
        "MainNet Launch",
      );
      cy.findByTestId("metachain-agenda-MainNet Launch")
        .trigger("mouseover", { scrollBehavior: "center" })
        .findByTestId("metachain-agenda-desc-MainNet Launch")
        .should(
          "have.text",
          "The official launch - experience MetaChain's fully operational network.",
        );
    });

    it("should have FAQ section visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "faq-title",
        "Frequently Asked Questions",
      );
      cy.findByTestId("faq-title-What is MetaChain?").click({
        scrollBehavior: "center",
      });
      cy.findByTestId("faq-title-How is MetaChain related to DeFiChain?").click(
        {
          scrollBehavior: "center",
        },
      );
      cy.findByTestId("faq-title-How can I build on MetaChain?").click({
        scrollBehavior: "center",
      });
      cy.findByTestId(
        "faq-title-What token(s) can be used on MetaChain?",
      ).click({
        scrollBehavior: "center",
      });

      cy.checkElementVisibilityAndText(
        "faq-title-What is MetaChain?",
        "What is MetaChain?",
      );
      cy.checkElementVisibilityAndText(
        "faq-desc-What is MetaChain?",
        "MetaChain is a smart contract execution layer which is EVM compatible and runs on top of the native DeFiChain.",
      );

      cy.checkElementVisibilityAndText(
        "faq-title-How is MetaChain related to DeFiChain?",
        "How is MetaChain related to DeFiChain?",
      );
      cy.checkElementVisibilityAndText(
        "faq-desc-How is MetaChain related to DeFiChain?",
        "MetaChain expands the scope for DeFiChain, allowing it to link to various chains by enhancing interoperability.",
      );

      cy.checkElementVisibilityAndText(
        "faq-title-How can I build on MetaChain?",
        "How can I build on MetaChain?",
      );
      cy.checkElementVisibilityAndText(
        "faq-desc-How can I build on MetaChain?",
        "Refer to the documentation here for more details.",
      );
      cy.findByTestId("faq-link")
        .should("be.visible")
        .and("have.attr", "href")
        .and(
          "include",
          "https://defich.github.io/handbook/guides/guide_changi.html",
        );

      cy.checkElementVisibilityAndText(
        "faq-title-What token(s) can be used on MetaChain?",
        "What token(s) can be used on MetaChain?",
      );
      cy.checkElementVisibilityAndText(
        "faq-desc-What token(s) can be used on MetaChain?",
        "MetaChain currently only supports native DFI tokens on MetaChain. You may obtain them by swapping DFI UTXO on Light Wallet (feature in progress)",
      );
    });
  });
});
