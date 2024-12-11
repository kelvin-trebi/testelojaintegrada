describe('Logar e adicionar produto', () => {
  it('Deve utilizar cupom vencido', () => {
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
//utilizo cupom não encontrado
    cy.get('#usarCupom')
      .type('20LIMITADO')
    cy.get('#btn-cupom')
      .click()
//valido que exibe mensagem de alerta     
    cy.get('.alert').should('be.visible').and('contain', 'Cupom não encontrado')
//guardo os valores em texto, e dou replace nos simbolos
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
//valido que o valor continue o mesmo
      expect(subtotal).to.be.eq(totalExibido)
    cy.get('.span12 > .principal').scrollIntoView().click();
  });
});
});
});