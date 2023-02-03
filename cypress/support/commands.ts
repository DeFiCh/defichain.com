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
    }
  }
}

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
