context("/ on macbook-16", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.interceptGeckoApi();
  });

  // QA-813 - TC2 - Step 2 & 3
  it("should have Coming soon on Ecosystem and Build sections", () => {
    cy.get("div[data-testid='header-coming-soon-tag']").should(
      "have.length",
      2
    );
    cy.get("div[data-testid='header-coming-soon-tag']")
      .first()
      .parent()
      .should("contain", "Ecosystem");
    cy.get("div[data-testid='header-coming-soon-tag']")
      .last()
      .parent()
      .should("contain", "Build");
  });
});
