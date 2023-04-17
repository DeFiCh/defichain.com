import { ecosystemLinks, resourcesLinks } from "../fixture/homepage.config";

const viewports = ["iphone-xr", "macbook-16"];

viewports.forEach((viewport) => {
  context(`Homepage on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });

    it("should have Explore section dropdown elements", () => {
      if (viewport === "iphone-xr") {
        cy.findByTestId("header-open-menu").click();
        cy.findByTestId("header-tablet-menu-item-EXPLORE").click();
      } else if (viewport === "macbook-16") {
        cy.findByTestId("header-desktop-dropdown-item-EXPLORE").trigger(
          "mouseover"
        );
      }

      cy.findByTestId("header-nav-elem-explore-defiscan-live")
        .should("be.visible")
        .and("have.attr", "href")
        .and("include", "https://defiscan.live/");
      cy.findByTestId("header-nav-elem-explore-crypto-id")
        .should("be.visible")
        .and("have.attr", "href")
        .and("include", "https://chainz.cryptoid.info/");
      ecosystemLinks.forEach((ecosystemItem) => {
        cy.findByTestId(`header-nav-elem-explore-${ecosystemItem.headerTestid}`)
          .should("be.visible")
          .and("have.attr", "href")
          .and("include", ecosystemItem.link);
      });
    });

    // QA-813 - TC2 - Step 2 & 3
    it("should have Coming soon on Ecosystem and Build sections", () => {
      cy.findByTestId("header-coming-soon-tag-Ecosystem").should(
        "contain",
        "COMING SOON"
      );
      cy.findByTestId("header-coming-soon-tag-Build").should(
        "contain",
        "COMING SOON"
      );
      cy.findByTestId("header-coming-soon-tag-Explore").should(
        "not.contain",
        "COMING SOON"
      );
      cy.findByTestId("header-coming-soon-tag-Community").should(
        "not.contain",
        "COMING SOON"
      );
    });

    // No TC
    it("should have Get DFI button", () => {
      if (viewport === "iphone-xr") {
        cy.findByTestId("header-open-menu").click();
        cy.findAllByTestId("header-get-dfi-button").last().click();
      } else if (viewport === "macbook-16") {
        cy.findAllByTestId("header-get-dfi-button").first().click();
      }
      cy.url().should("include", "/explore/dfi#get-dfi");
      cy.findAllByTestId("section-title-purchase-dfi").should("be.visible");
    });

    // No TC
    it("should have expected Header title and description", () => {
      cy.findByTestId("header-title").should(
        "have.text",
        "Connecting old and new worlds"
      );

      // No TC
      cy.findByTestId("header-desc").should(
        "have.text",
        "A blockchain dedicated to fast, intelligent and transparent decentralized financial services, accessible by everyone."
      );
    });

    // No TC
    it("should have Start exploring section clickable", () => {
      if (viewport === "iphone-xr") {
        cy.findByTestId("statistic-title-tvl-locked")
          .should("be.visible")
          .and("have.text", "TVL IN USD");
      } else if (viewport === "macbook-16") {
        cy.findByTestId("startExploring-button").click({ force: true }); // covered by another element
        cy.url().should("include", "/#statistics_display");
        cy.findByTestId("statistic-title-tvl-locked")
          .should("be.visible")
          .and("have.text", "TOTAL VALUE LOCKED IN USD");
      }

      cy.findByTestId("statistic-title-dfi-minted")
        .should("be.visible")
        .and("have.text", "TOTAL DFI MINTED");
      cy.findByTestId("statistic-title-masternodes")
        .should("be.visible")
        .and("have.text", "MASTERNODES");
    });

    // No TC
    it("should have clickable Explore DeFi Meta Chain button", () => {
      cy.findByTestId("secondary-button-explore-dmc")
        .should("be.visible")
        .and("have.attr", "href")
        .and("include", "https://meta.defichain.com");
      cy.findByTestId("secondary-button-explore-dmc")
        .should("have.attr", "target")
        .and("include", "_blank");
    });

    // No TC
    it("should have clickable View all articles button", () => {
      cy.findByTestId("secondary-button-view-all-articles")
        .should("be.visible")
        .and("have.attr", "href")
        .and("include", "https://blog.defichain.com");
      cy.findByTestId("secondary-button-view-all-articles")
        .should("have.attr", "target")
        .and("include", "_blank");
    });

    // No TC
    it("should have Ecosystem links displayed", () => {
      ecosystemLinks.forEach((ecosystemItem) => {
        cy.findByTestId(
          `ecosystem-link-${ecosystemItem.testid}`
        ).scrollIntoView();
        cy.findByTestId(`ecosystem-link-${ecosystemItem.testid}`)
          .should("contain", ecosystemItem.title)
          .and("be.visible")
          .and("have.attr", "href")
          .and("include", ecosystemItem.link);
      });
    });

    // No TC
    it("should have expected Blockchain feature section title and description", () => {
      cy.findByTestId("section-title-non-turing-complete-blockchain").should(
        "be.visible"
      );
      cy.findByTestId(
        "section-header-Designed,for,Decentralized,Finance"
      ).should("be.visible");
      cy.findByTestId("section-desc-Designed,for,Decentralized,Finance")
        .should("be.visible")
        .and(
          "have.text",
          "DeFiChain offers comprehensive functionality tailored to the Distributed Ledger Technology (DLT) " +
            "community, with an emphasis on simplicity, speed, and security."
        );
    });

    // No TC
    it("should have Blockchain features section displayed", () => {
      const textAreas = ["title", "desc"];
      const features = [
        "THROUGHPUT",
        "SECURITY",
        "IMMUTABILITY",
        "DEVELOPMENT",
        "VARIETY",
      ];
      textAreas.forEach((area) => {
        features.forEach((feature) => {
          if (viewport === "iphone-xr" && feature === "DEVELOPMENT") {
            cy.get("ul.blockchain-features-dots > li > button")
              .last()
              .click({ force: true }); // covered by div.mx-6 md:mx-12 xl:mx-[120px]
          }
          cy.findAllByTestId(`highlights-${feature}-${area}`).should(
            "be.visible"
          );
        });
      });
    });

    // No TC
    it("should have Blog posts with links displayed", () => {
      cy.findAllByTestId("blog-post-container-link")
        .should("be.visible")
        .and("have.attr", "href")
        .and("include", "https://blog.defichain.com/");
    });

    // No TC
    it("should have Footer Explore links displayed", () => {
      ecosystemLinks.forEach((ecosystemItem) => {
        cy.findByTestId(`footer-${ecosystemItem.footerTestid}`)
          .should("be.visible")
          .should("have.attr", "href", ecosystemItem.link);
      });
    });

    // No TC
    it("should have Footer Resources links displayed", () => {
      resourcesLinks.forEach((resourcesItem) => {
        cy.findByTestId(`footer-${resourcesItem.footerTestid}`)
          .should("be.visible")
          .should("have.attr", "href", resourcesItem.link);
      });
    });

    it("should have Footer Social links", () => {
      cy.findAllByTestId("socialsRow-GitHub")
        .should("be.visible")
        .should("have.attr", "href", "https://github.com/DeFiCh/ain");
      cy.findAllByTestId("socialsRow-Reddit")
        .should("be.visible")
        .should(
          "have.attr",
          "href",
          "https://www.reddit.com/r/defiblockchain/"
        );
      cy.findAllByTestId("socialsRow-YouTube")
        .should("be.visible")
        .should("have.attr", "href", "https://www.youtube.com/DeFiChain");
      cy.findAllByTestId("socialsRow-Telegram")
        .should("be.visible")
        .should("have.attr", "href", "https://t.me/defiblockchain");
      cy.findAllByTestId("socialsRow-Twitter")
        .should("be.visible")
        .should("have.attr", "href", "https://twitter.com/defichain");
    });

    it("should have Privacy policy link", () => {
      if (viewport === "iphone-xr") {
        cy.findAllByTestId("footer-mobile-privacy")
          .should("be.visible")
          .should("have.attr", "href", "/privacy-policy");
      } else if (viewport === "macbook-16") {
        cy.findAllByTestId("footer-web-privacy")
          .should("be.visible")
          .should("have.attr", "href", "/privacy-policy");
      }
    });

    it("should have Language dropdown", () => {
      cy.findAllByTestId("site-lang-dropdown").should("be.visible");
    });
  });
});
