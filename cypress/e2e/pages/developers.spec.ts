context("Developers page on desktop", () => {
  before(() => {
    cy.visit("/developers");
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("contain.text", "Developers");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Build on DeFiChain"
    );
  });

  it("should have page DeveloperResourcesSection", () => {
    cy.findByTestId("DeveloperResourcesSection").within(() => {
      cy.findByTestId("Section.Title").should("be.visible");
      cy.findByTestId("ResourceSection.Github").should("be.visible");
      cy.findByTestId("ResourceSection.Reddit").should("be.visible");
      cy.findByTestId("ResourceSection.Explore").should("be.visible");
      cy.findByTestId("ResourceSection.Whitepaper").should("be.visible");
      cy.findByTestId("ResourceSection.Cli").should("be.visible");
    });
  });

  it("should have contributors sections", () => {
    cy.findByTestId("CoreContributors").within(() => {
      cy.findByTestId("Section.Title").should("be.visible");
      cy.findByTestId("DevelopersPage.Contributors.Text").should("be.visible");
    });
  });
});

context("Developers page on mobile", () => {
  before(() => {
    cy.visit("/developers");
  });

  beforeEach(() => {
    cy.viewport("iphone-x");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("contain.text", "Developers");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Build on DeFiChain"
    );
  });

  it("should have page DeveloperResourcesSection", () => {
    cy.findByTestId("DeveloperResourcesSection").within(() => {
      cy.findByTestId("Section.Title").should("be.visible");
      cy.findByTestId("ResourceSection.Github").should("be.visible");
      cy.findByTestId("ResourceSection.Reddit").should("be.visible");
      cy.findByTestId("ResourceSection.Explore").should("be.visible");
      cy.findByTestId("ResourceSection.Whitepaper").should("be.visible");
      cy.findByTestId("ResourceSection.Cli").should("be.visible");
    });
  });

  it("should have contributors sections", () => {
    cy.findByTestId("CoreContributors").within(() => {
      cy.findByTestId("Section.Title").should("be.visible");
      cy.findByTestId("DevelopersPage.Contributors.Text").should("be.visible");
    });
  });
});
