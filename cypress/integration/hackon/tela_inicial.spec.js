describe('tela inicial', () => {

    it('Entra pela url no site', () => {

        cy.visit('/')

    })

    it('Testar botões', () => {

        //CERTO para links
        cy.get('a[href="#features"]').first().click();

        //ERRADO este é para botão
        // cy.get('a[data-cy="btn_ti"]').click()
        // cy.get('a[data-cy="btn_algoritmo"]').click()
        // cy.get('a[data-cy="btn_bd"]').click()
        // cy.get('a[data-cy="btn_arqcomp"]').click()
        // cy.get('a[data-cy="btn_pi"]').click()
        // cy.get('a[data-cy="btn_inicio"]').click()

    })
})