// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe("Testing Angies code", () => {
    before("visit download url", () => {
      cy.visit('https://www.docdroid.net/');
    });
    it("Add Syllabus", () => {
      cy.get("#select").contains("Select Files").should("exist");
      // be sure to update "fixturesFolder": "../../../fixtures" in cypress.json
      cy.fixture("moveSample.pdf").then((fileContent) => {
        cy.get("input[type=file]").attachFile({
          fileContent: fileContent.toString(),
          fileName: "moveSample.pdf",
          mimeType: "application/pdf",
        });
      });
    });
  });
  