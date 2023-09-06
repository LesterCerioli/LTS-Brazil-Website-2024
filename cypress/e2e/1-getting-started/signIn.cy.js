/// <reference types="cypress"/>

describe("Fazer o login", () => {
    it("Deve fazer o login e ir para página de pagamento", () => {
     cy.visit("http://127.0.0.1:5173/authentication");
     cy.get('#email').type("nadielly@gmail.com");
     cy.get('#senha').type("12345678");
     cy.get('#cmdOK').click();
     cy.pause();
   });
  
     it("Deve aparecer a mensagem de erro", () => {
     cy.visit("http://127.0.0.1:5173/authentication");
     cy.get('#email').type("nady@gmail.com");
     cy.get('#senha').type("1234");
     cy.get('#cmdOK').click();
     cy.pause();
    });

    it("Deve ir para o cadastro do cliente", () => {
      cy.visit("http://127.0.0.1:5173/authentication");
      cy.get('.cmdCadastrese').click();
      
     });
   });
  