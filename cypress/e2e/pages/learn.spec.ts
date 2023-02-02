context("Learn page on desktop", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/learn");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("contain.text", "Learn");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Learn more and understand DeFiChain"
    );
  });

  it("should have page heading", () => {
    cy.findByTestId("HowToSection.Title").should("have.text", "How To Guides");
  });

  it("should have md posts", () => {
    cy.findAllByTestId("HowToCard").each((element) => {
      cy.wrap(element).within(() => {
        cy.findByTestId("HowToCard.Title").should("be.visible");
        cy.findByTestId("HowToCard.Desc").should("be.visible");
        cy.findByTestId("HowToCard.Button").should("be.visible");
      });
    });
  });

  it("should have faq", () => {
    cy.findAllByTestId("FAQEntry").each((element) => {
      cy.wrap(element).within(() => {
        cy.findByTestId("FAQEntry.Title").should("be.visible").click();
        cy.findByTestId("FAQEntry.Desc").should("be.visible");
      });
    });
  });
});

context("Learn page on mobile", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/learn");
    cy.intercept("");
  });

  it("should have Header", () => {
    cy.findByTestId("Header.title").should("contain.text", "Learn");
    cy.findByTestId("Header.desc.main").should(
      "have.text",
      "Learn more and understand DeFiChain"
    );
  });

  it("should have page heading", () => {
    cy.findByTestId("HowToSection.Title").should("have.text", "How To Guides");
  });

  it("should have md posts", () => {
    cy.findAllByTestId("HowToCard").each((element) => {
      cy.wrap(element).within(() => {
        cy.findByTestId("HowToCard.Title").should("be.visible");
        cy.findByTestId("HowToCard.Desc").should("be.visible");
        cy.findByTestId("HowToCard.Button").should("be.visible");
      });
    });
  });

  it("should have faq", () => {
    cy.findAllByTestId("FAQEntry").each((element) => {
      cy.wrap(element).within(() => {
        cy.findByTestId("FAQEntry.Title").should("be.visible").click();
        cy.findByTestId("FAQEntry.Desc").should("be.visible");
      });
    });
  });
});
