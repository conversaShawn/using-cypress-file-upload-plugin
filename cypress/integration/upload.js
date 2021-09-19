// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe("Testing click", () => {

  beforeEach("Visit Upload URL", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
  });

  it("will pass without click before attachFile", () => {
    const filepath = "../../img/scott-goodwill-y8Ngwq34_Ak-unsplash.pdf";
    cy.get('input[type="file"]').attachFile(filepath);
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains(
      "scott-goodwill-y8Ngwq34_Ak-unsplash.pdf"
    );
  });
  it("will fail with click before attachFile", () => {
    const filepath = "../../img/scott-goodwill-y8Ngwq34_Ak-unsplash.pdf";
    cy.get('input[type="file"]').click().attachFile(filepath); //adding click() here causes test to fail
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains(
      "scott-goodwill-y8Ngwq34_Ak-unsplash.pdf"
    );
  });

  
});
