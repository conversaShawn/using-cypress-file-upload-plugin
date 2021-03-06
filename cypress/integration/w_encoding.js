// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe("Uploading a pdf and reading the file using encoding", () => {
    before("visit this upload pdf website", () => {
      cy.visit("https://www.docdroid.net/");
    });
    it("uploads file and visible", () => {
      cy.get("#select").contains("Select Files").should("exist");
  
      cy.fixture("sample.pdf", "base64").then(fileContent => {
        cy.get("input[type=file]").attachFile({
          fileContent: fileContent.toString(),
          fileName: "sample.pdf",
          mimeType: "application/pdf",
          encoding: "base64"
        });
      });
    });
  });
  