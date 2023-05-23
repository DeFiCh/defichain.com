import {
  desktopWalletsUrls,
  mobileWalletsUrls,
  webWallets,
} from "../../fixture/wallets.config";

const viewports = ["macbook-16", "iphone-xr", "ipad-2"];

viewports.forEach((viewport) => {
  context(`/explore/wallets on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/explore/wallets");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have Choose Wallet section visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-explore-wallets-defichain-wallets",
        "CHOOSE A WALLET THAT SUITS YOU"
      );
      cy.checkElementVisibilityAndText(
        "section-header-explore-dex-decentralized-exchange",
        "DeFiChain Wallets"
      );
      cy.checkElementVisibilityAndText(
        "section-desc-explore-dex-decentralized-exchange",
        "Gain access to the DeFi landscape through non-custodial wallets designed for a multitude of requirements."
      );
    });

    it("should have Start exploring section clickable", () => {
      if (viewport === "macbook-16") {
        cy.findByTestId("start-exploring-button").click({
          scrollBehavior: false,
        });
        cy.url().should("include", "#explore-wallets-daily-use-section");
      }
      cy.checkElementVisibilityAndText(
        "section-title-for-daily-use",
        "FOR DAILY USE"
      );
      cy.checkElementVisibilityAndText(
        "for-daily-use-section-title",
        "Daily access to DeFiChain"
      );

      cy.checkElementVisibilityAndText(
        "for-daily-use-section-subtitle",
        "These wallets provide lightweight, easy access to DeFiChain’s suite of features. Best suited for users who interact with DeFiChain on a near-daily basis, while not compromising on speed and security of funds."
      );
    });

    it("should have For Daily Use elements visible and expected links", () => {
      webWallets.forEach((webWallet) => {
        cy.checkElementVisibilityAndHref(webWallet.testId, webWallet.url);
      });
      mobileWalletsUrls.forEach((mobileWallet) => {
        cy.checkElementVisibilityAndHref(mobileWallet.testId, mobileWallet.url);
      });
    });

    it("should have Suitable For Advanced usage elements visible and expected text", () => {
      cy.checkElementVisibilityAndText(
        "section-title-advance-usage",
        "SUITABLE FOR ADVANCE USAGE"
      );
      cy.checkElementVisibilityAndText(
        "advance-use-section-title",
        "Advanced usage of DeFiChain"
      );
      cy.checkElementVisibilityAndText(
        "advance-use-section-subtitle",
        "Advanced wallets that are suited for complex usage of DeFiChain, such as masternode and multi-signature management along with much more."
      );
    });

    it("should have Desktop Wallets links visible and expected text", () => {
      let defichainAppVersion: string;
      let ainVersion: string;

      const username = "mikhail-zlochevskyi";
      const password =
        "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";

      cy.getLatestVersion("DeFiCh/ain", username, password)
        .then((latestVersion1: any) => {
          ainVersion = latestVersion1;

          return cy.getLatestVersion(
            "BirthdayResearch/defichain-app",
            username,
            password
          );
        })
        .then((latestVersion2: any) => {
          defichainAppVersion = latestVersion2;

          const walletsList = desktopWalletsUrls(
            ainVersion,
            defichainAppVersion
          );
          walletsList.forEach((desktopWallet) => {
            cy.checkElementVisibilityAndHref(
              desktopWallet.testId,
              desktopWallet.url
            );
          });
        });
    });
  });
});
