import "@testing-library/cypress/add-commands";

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Intercept SSR /_next/data/* page load click and wait
       * @param {() => void} exec to execute before waiting
       */
      interceptServerSideWait(exec: () => void): Chainable<null>;
      interceptGeckoApi(): Chainable<null>;
      checkElementVisibilityAndText(
        testId: string,
        expectedText: string
      ): Chainable<null>;
      checkElementVisibilityAndHref(
        testId: string,
        expectedHref: string
      ): Chainable<null>;
      getLatestVersion(
        repo: string,
        username: string,
        password: string
      ): Chainable<null>;
    }
  }
}

Cypress.Commands.add(
  "checkElementVisibilityAndText",
  (testId, expectedText) => {
    cy.findByTestId(testId).should("be.visible").and("have.text", expectedText);
  }
);

Cypress.Commands.add(
  "checkElementVisibilityAndHref",
  (testId, expectedHref) => {
    cy.findByTestId(testId)
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", expectedHref);
  }
);

Cypress.Commands.add("getLatestVersion", (repo, username, password) => {
  return cy
    .request({
      method: "GET",
      url: `https://api.github.com/repos/${repo}/releases/latest`,
      auth: {
        username,
        password,
      },
    })
    .its("body.tag_name")
    .then((tag_name) => tag_name.replaceAll("v", ""));
});

Cypress.Commands.add("interceptServerSideWait", (exec: () => void) => {
  cy.intercept("GET", "/_next/data/**").as("nextData");
  exec();
  cy.wait("@nextData");
  cy.wait(500);
});

Cypress.Commands.add("interceptGeckoApi", () => {
  cy.intercept("https://api.coingecko.co/api/v3/coins/defichain", {});
  cy.intercept(
    "https://widgets.coingecko.com/coingecko-coin-ticker-widget.js",
    {}
  );
});
