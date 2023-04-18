context("/ecosystem page on desktop", () => {
  before(() => {
    cy.visit("/ecosystem");
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.interceptGeckoApi();
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("have.text", "Ecosystem");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Be part of the DeFiChain Ecosystem"
    );
  });

  it("should have contribute section", () => {
    cy.findByTestId("EcosystemSection.Contribute").within(() => {
      cy.findByTestId("Section.Title").should(
        "have.text",
        "Contribute to DeFiChain"
      );
      cy.findByTestId("EcosystemSection.Developer").should("be.visible");
    });
  });

  it("should have conpartnerstribute section", () => {
    cy.findByTestId("EcosystemSection.Partners").within(() => {
      cy.findByTestId("Section.Title").should("have.text", "Partners");
      cy.findByTestId("EcosystemSection.CakeDeFi").should("be.visible");
      cy.findByTestId("EcosystemSection.Staking").should("be.visible");
      cy.findByTestId("EcosystemSection.Blockspot").should("be.visible");
      cy.findByTestId("EcosystemSection.Messari").should("be.visible");
    });
  });
});

context("/ecosystem page on mobile", () => {
  before(() => {
    cy.visit("/ecosystem");
  });

  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.interceptGeckoApi();
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("have.text", "Ecosystem");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Be part of the DeFiChain Ecosystem"
    );
  });

  it("should have contribute section", () => {
    cy.findByTestId("EcosystemSection.Contribute").within(() => {
      cy.findByTestId("Section.Title").should(
        "have.text",
        "Contribute to DeFiChain"
      );
      cy.findByTestId("EcosystemSection.Developer").should("be.visible");
    });
  });

  it("should have conpartnerstribute section", () => {
    cy.findByTestId("EcosystemSection.Partners").within(() => {
      cy.findByTestId("Section.Title").should("have.text", "Partners");
      cy.findByTestId("EcosystemSection.CakeDeFi").should("be.visible");
      cy.findByTestId("EcosystemSection.Staking").should("be.visible");
      cy.findByTestId("EcosystemSection.Blockspot").should("be.visible");
      cy.findByTestId("EcosystemSection.Messari").should("be.visible");
    });
  });
});
