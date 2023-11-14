context("/media page on desktop", () => {
  before(() => {
    cy.visit("/media");
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.interceptGeckoApi();
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("have.text", "Media");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Media resources and assets.",
    );
  });

  it("should have MediaSection", () => {
    cy.findByTestId("MediaSection").within(() => {
      cy.findByTestId("Section.Title").should(
        "have.text",
        "DeFiChain covered in the press and media.",
      );
      cy.findAllByTestId("MediaSection.Card").should(
        "have.length.at.least",
        20,
      );
    });
  });
});

context("/media page on mobile", () => {
  before(() => {
    cy.visit("/media");
  });

  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.interceptGeckoApi();
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("have.text", "Media");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Media resources and assets.",
    );
  });

  it("should have MediaSection", () => {
    cy.findByTestId("MediaSection").within(() => {
      cy.findByTestId("Section.Title").should(
        "have.text",
        "DeFiChain covered in the press and media.",
      );
      cy.findAllByTestId("MediaSection.Card").should(
        "have.length.at.least",
        20,
      );
    });
  });
});
