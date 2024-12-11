describe('Logar e adicionar produto', () => {
  it('Deve utilizar cupom de frete gratis', () => {
    cy.visit('https://qastoredesafio.lojaintegrada.com.br/')
    cy.get('.logo > .cor-principal')
      .should('have.text', "QA Store Desafio")
    cy.get('[href="https://qastoredesafio.lojaintegrada.com.br/produtooolalal"] > .titulo')
      .click()
    cy.get(':nth-child(1) > .listagem-item > .info-produto > .nome-produto')
      .click()
    cy.get('.plus > .fa')
      .click()
    cy.get('.comprar > .botao')
      .click()
//adicionar cupom fete gratis    
    cy.get('#usarCupom')
      .type('FRETEGRATIS')
    cy.get('#btn-cupom')
      .click()
    cy.scrollTo('bottom');

//validar se exibe o texto Frete Gratis apos inserie cupom
    cy.get('.cupom-valor').should('be.visible').and('contain', 'Frete Grátis')
    cy.get('.subtotal > .titulo').invoke('text').then((subtotalTexto) => {
      const subtotal = parseFloat(subtotalTexto.trim()
        .replace('R$', '')
        .replace(',', '.')
        .replace('-', ''));
    cy.get('.total > .titulo').invoke('text').then((totalTexto) => {
      const totalExibido = parseFloat(totalTexto.trim()
        .replace('R$', '')
        .replace(',', '.')
        .replace('-', ''));
//comparo que o valor do subtotal é o mesmo do total       
      expect(subtotal).to.be.eq(totalExibido)
    cy.get('.span12 > .principal').scrollIntoView().click();

    });
    });
  });
});