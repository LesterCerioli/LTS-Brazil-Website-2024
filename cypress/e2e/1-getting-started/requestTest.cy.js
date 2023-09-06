/// <reference types="cypress"/>

describe("Teste da página de pedidos", () => {
    it("Deve ter todas as funcionalidade da página", () => {
      cy.visit("http://127.0.0.1:5174/request");
      cy.get(".option__container > :nth-child(2)").click();
      cy.get(".categoria").should("contain", "Saladas/Massa/Arrozes");
      cy.get(".option__container > :nth-child(3)").click();
      cy.get(".categoria").should("contain", "Pratos quentes");
      cy.get(".option__container > :nth-child(4)").click();
      cy.get(".categoria").should("contain", "Pratos frios");
      cy.get(".option__container > :nth-child(5)").click();
      cy.get(".categoria").should("contain", "Complementos");
      cy.get(".option__container > :nth-child(6)").click();
      cy.get(".categoria").should("contain", "Tortas salgadas");
      cy.get(".option__container > :nth-child(7)").click();
      cy.get(".categoria").should("contain", "Sobremesa");
      cy.get(".option__container > :nth-child(8)").click();
      cy.get(".categoria").should("contain", "Diet/Light");
      cy.get(".option__container > :nth-child(9)").click();
      cy.get(".categoria").should("contain", "Bolos");
      cy.get(".option__container > :nth-child(1)").click();
      cy.get(".categoria").should("contain", "Combos especiais");
      cy.pause();
      cy.get(":nth-child(1) > .txt__container").click();
      cy.get(":nth-child(2) > .txt__container").click();
      cy.get(".total__valor").should("contain", "R$ 210");
      cy.get(":nth-child(1) > .produto__quantidade").type("0");
      cy.get(".total__valor").should("contain", "R$ 1380");
      cy.get(":nth-child(1) > .icons__container > .icon__camera").click();
      cy.get(".modalPhoto__tittle").should("contain", "FALÁFEL COM TABULE");
      cy.get(".modalPhoto__close").click();
      cy.get(":nth-child(1) > .remove__button").click();
      cy.get(".total__valor").should("contain", "R$ 80");
      cy.get(":nth-child(1) > .icons__container > .icon__camera").click();
      cy.get(".modalPhoto__tittle").should("contain", "FALÁFEL COM TABULE");
      cy.get(".modalPhoto__comprar").click();
      cy.get(".total__valor").should("contain", "R$ 1380");
    });
  });
  