/// <reference types="cypress"/>

describe("Fazer o cadastro do cliente", () => {
    
    it("Deve fazer o login e ir para página de pagamento", () => {
     cy.visit("http://127.0.0.1:5173/cadastro");
     cy.get('#nome_cliente').type("Nadielly Xavier de Medeiros");
     cy.get('#email_cliente').type("nadielly@gmail.com");
     cy.get('#confirma_email').type("nadielly@gmail.com");
     cy.get('#telefone').type("62999891515");
     cy.get('#cpf').type("02145678991");
     cy.get('#senha').type("12345678");
     cy.get('#confirmasenha').type("12345678");
     cy.get('#cmdEnviaCadastro').click();
     cy.get(".pre").should("contain", "Usuário cadastrado com sucesso");
     cy.pause();
   });
  
     it("Deve aparecer a mensagem de erro", () => {
         cy.visit("http://127.0.0.1:5173/cadastro");
         cy.get('#nome_cliente').type("Nadielly Xavier de Medeiros");
         cy.get('#email_cliente').type("nadielly@gmail.com");
         cy.get('#confirma_email').type("nady@gmail.com");
         cy.get('#telefone').type("999999999");
         cy.get('#cpf').type("02145678991");
         cy.get('#senha').type("12345678");
         cy.get('#confirmasenha').type("2345678");
         cy.get('#cmdEnviaCadastro').click();
         cy.pause();
      });

      


   });
  