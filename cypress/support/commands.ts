import '@testing-library/cypress/add-commands'

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Intercept SSR /_next/data/* page load click and wait
       * @param {() => void} exec to execute before waiting
       */
      interceptServerSideWait (exec: () => void): Chainable<null>
    }
  }
}

Cypress.Commands.add('interceptServerSideWait', (exec: () => void) => {
  cy.intercept('GET', '/_next/data/**').as('nextData')
  exec()
  cy.wait('@nextData')
  cy.wait(500)
})
