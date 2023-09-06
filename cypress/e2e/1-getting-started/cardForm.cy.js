/// <reference types="cypress"/>

describe("Envio de formulário", () => {
    it("Deve poder realizar o cadastro do cartão", () => {
      cy.visit("http://127.0.0.1:5173/payment");
      cy.get(".name__form > input").type("Gabriel");
      cy.get(".cardNumber__form > input").type("7776257384765873");
      cy.get(".cpf__form > input").type("87465294756");
      cy.get(".surname__form > input").type("card");
      cy.get(".expiry__form > input").type("11/30");
      cy.get(".CVV__form > input").type("333");
      cy.get(".cep__form > input").type("23745627");
      cy.get(".logradouro__form > input").type("Nome da rua");
      cy.get(".houseNumber__form > input").type("476");
      cy.get(".complement__form > input").type("complemento");
      cy.get(".neighborhood__form > input").type("bairro");
      cy.get(".city__form > input").type("cidade");
      cy.get(".state__form > input").type("estado");
      cy.get(".buttonSubmit").click();
      cy.get(".pre").should("contain", "Gabriel");
      cy.pause();
    });
  
    it("Deve aparecer as mensagens de erro", () => {
      cy.visit("http://127.0.0.1:5173/payment");
      cy.get(".name__form > input").type("12");
      cy.get(".cardNumber__form > input").type("777625");
      cy.get(".cpf__form > input").type("8746");
      cy.get(".expiry__form > input").type("11/20");
      cy.get(".CVV__form > input").type("33322");
      cy.get(".cep__form > input").type("237456");
      cy.get(".buttonSubmit").click();
    });
  });
  