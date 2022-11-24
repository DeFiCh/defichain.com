context("/media page on desktop", () => {
  before(() => {
    cy.visit("/media");
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("have.text", "Media");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Media resources and assets."
    );
  });

  it("should have MediaSection", () => {
    cy.findByTestId("MediaSection").within(() => {
      cy.findByTestId("Section.Title").should(
        "have.text",
        "DeFiChain covered in the press and media."
      );
      cy.findAllByTestId("MediaSection.Card").should(
        "have.length.at.least",
        20
      );
    });
  });

  it("should have DownloadSection", () => {
    cy.findByTestId("DownloadSection").within(() => {
      cy.findByTestId("Section.Title").should("have.text", "Downloads");
      cy.findAllByTestId("DownloadSection.Card").should("have.length", 5);
    });
  });
});

context("/media page on mobile", () => {
  before(() => {
    cy.visit("/media");
  });

  beforeEach(() => {
    cy.viewport("iphone-x");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("have.text", "Media");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Media resources and assets."
    );
  });

  it("should have MediaSection", () => {
    cy.findByTestId("MediaSection").within(() => {
      cy.findByTestId("Section.Title").should(
        "have.text",
        "DeFiChain covered in the press and media."
      );
      cy.findAllByTestId("MediaSection.Card").should(
        "have.length.at.least",
        20
      );
    });
  });
});
