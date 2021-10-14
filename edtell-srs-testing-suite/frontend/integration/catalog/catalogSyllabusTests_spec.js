// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
//  <reference types="../../support" />

describe("Testing upload pdf", () => {
    before("visit download url", () => {
      cy.visit('https://www.docdroid.net/');
    });
    it("Add Syllabus", () => {
      cy.get("#select").contains("Select Files").should("exist");
  
      cy.fixture("2018-How-the-World-Tests.pdf.pdf").then((fileContent) => {
        cy.get("input[type=file]").attachFile({
          fileContent: fileContent.toString(),
          fileName: "2018-How-the-World-Tests.pdf.pdf",
          mimeType: "application/pdf",
        });
      });
    });
  });
  