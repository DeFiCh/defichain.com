import { viewports } from "../../fixture/main.config";

viewports.forEach((viewport) => {
  context(`/explore/masternodes on ${viewport}`, () => {
    beforeEach(() => {
      cy.visit("/explore/masternodes");
      cy.viewport(<Cypress.ViewportPreset>viewport);
    });
  });
});
