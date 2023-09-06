/ cypress/integration/menu.spec.js
describe("Menu Test", () => {
    it("should display suggestions when clicking on", () => {
      cy.visit("http://127.0.0.1:5173/menu");
      cy.contains("Rio de Janeiro").click();
      cy.get(".container-botoes-lojas").should("be.visible");
      cy.get(".container-botoes-lojas a").should("have.length", 8);
    })

    it("should display suggestions when clicking on button", () => {
      cy.visit("http://127.0.0.1:5173/menu");
      cy.contains("São Paulo").click();
      cy.get(".container-botoes-lojas").should("be.visible");
      cy.get(".container-botoes-lojas a").should("have.length", 1);
      
    });
})