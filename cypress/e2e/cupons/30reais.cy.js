describe('Logar e adicionar produto', () => {
  it('Deve utilizar cupom de 30reais', () => {
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
//adiciona cupom 30reais
    cy.get('#usarCupom')
      .type('30REAIS')
    cy.get('#btn-cupom')
      .click()
    cy.scrollTo('bottom');
//subtotal
    cy.get('.subtotal > .titulo').invoke('text').then((subtotalTexto) => {
      const subtotal = parseFloat(subtotalTexto.trim()
      .replace('R$', '')
      .replace(',', '.')
      .replace('-', ''));
    cy.log('Texto capturado', subtotalTexto)
//valor desconto
    cy.get('#cupom_desconto').invoke('text').then((descontoTexto) => {
      const desconto = parseFloat(descontoTexto.trim()
      .replace('R$', '')
      .replace(',', '.')
      .replace('-', ''));
      const totalEsperado = subtotal - desconto;
    cy.log('Texto capturado', descontoTexto)
//total
    cy.get('.total > .titulo').invoke('text').then((totalTexto) => {
      const totalExibido = parseFloat(totalTexto.trim()
      .replace('R$', '')
      .replace(',', '.')
      .replace('-', ''));
    cy.log('Texto capturado', totalEsperado)
//valido que total aparece igual a conta do totalEsperado L33
      expect(totalExibido).to.be.closeTo(totalEsperado, 0.10);
    cy.get('.span12 > .principal').scrollIntoView().click();
  
    });
    });
  });
});
});
