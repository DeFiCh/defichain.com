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
        "H1 2024 OVERVIEW",
      );
      cy.checkElementVisibilityAndText("metachain-roadmap-subtitle", "Roadmap");
      cy.checkElementVisibilityAndText(
        "metachain-roadmap-desc",
        "The decentralized finance (DeFi) landscape is continuously evolving, and DeFiChain aims to be at the forefront by expanding DeFiChain’s capabilities, accessibility, and real-world impact.",
      );
      cy.checkElementVisibilityAndText(
        "metachain-roadmap-descContinue",
        "After collaborative discussions between the DeFiChain Labs team and engaged community members, a roadmap has been formulated that charts an ambitious course for the first half of 2024. ",
      );

      cy.findByTestId("metachain-roadmap-diagram").should("exist");

      cy.checkElementVisibilityAndText("roadmap-dvm-title", "DVM Native Layer");
      cy.checkElementVisibilityAndText(
        "roadmap-dvm-description",
        "dToken Fixes, DUSD Locks Support, State Relayer Improvements",
      );

      cy.checkElementVisibilityAndText(
        "roadmap-metachain-title",
        "MetaChain EVM Layer",
      );
      cy.checkElementVisibilityAndText(
        "roadmap-metachain-description",
        "Ocean improvements, Stability Upgrades, Storage Upgrades",
      );

      cy.checkElementVisibilityAndText(
        "roadmap-experimentation-title",
        "R&D Experimentation",
      );
      cy.checkElementVisibilityAndText(
        "roadmap-experimentation-description",
        "WASM Engine Design",
      );

      cy.checkElementVisibilityAndText("roadmap-growth-title", "Growth");
      cy.checkElementVisibilityAndText(
        "roadmap-growth-description",
        "Developer Support Program, Event Series Kickoff, Partnerships Expansion, Digital Acquisition Campaign",
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
