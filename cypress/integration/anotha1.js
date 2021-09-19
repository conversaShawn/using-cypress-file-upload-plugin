// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe("Upload File Functionality", function () {
  it("Upload sample.pdf", function () {
    //visit website
    cy.visit("https://www.docdroid.net/");

    //click Select Files button
    cy.get("#select").contains("Select Files")//.click(); //click() doesn't actually do anything in this situation

    cy.wait(2000);

    //upload File
    const fileName = "sample.pdf";
    cy.fixture("sample.pdf").then((fileContent) => {
      cy.get("input[type=file]").attachFile({
        fileContent,
        fileName,
        mimeType: "application/pdf",
      });
    });

    cy.wait(3000);

    //click close button
    cy.get(".mfp-close").click();

    //assert file uploaded
    cy.get(".bs-component > .panel > .panel-heading > .panel-title").should(
      "contain",
      "sample.pdf"
    );
  });
});
