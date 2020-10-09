describe('tela inicial', () => {

    //a cada teste definido deve começar com o it e suas ações dentro do mesmo
    it('Entra pela url no site', () => {
        cy.visit('/')

        // cy.get(SELETOR_CSS)

        //contains = achar se tem alguma tag com o conteudo definido
        //should = vai buscar o que você quer dentro da tag, como mostra abaixo eu quero
        //que o haja a palavra hackon na tag então eu coloco o comando "to.have.length" e defino 
        // que deve ter mais de 1
        // para mais informações (https://docs.cypress.io/guides/references/assertions.html#Chai).
        cy.contains('HackOn').should('to.have.length', 1)
    })

    //it('should add a new task', () => {

        //cy.visit('/')

        //INPUT
        //cy.get([name=nome_do_input])
        //ou
        //type servirá para que o próprio cypress escreva no input
        //cy.get('[data-cy=nome_do_input]').type('o que quer que digite no input')
        //Dica... existe um id próprio pro cypress que é o "data-cy= nome_do_id"
        //Pois mesmo mudando o id não precisa mudar no teste o mesmo id, e dá liberdade pro dev e pr QA 

        //BOTÃO
        //cy.get('[data-cy=nome_do_botão]').click()
        //pega o botão e utiliza o click para que ele seja acionado

        //CONFIRMAR QUE ADICIONOU
        //cy.get('[data-cy=nome_do_que_foi_adicionado]').should('to.have.length', 1)

        //CONFIRMAR QUE A QUE ADICIONOU É A QUE VC QUER
        //cy.contains('nova tarefa').should('to.have.length', 1)
    //})

       //it('should add a two task', () => {

        //cy.visit('/')

        
        //cy.get('[data-cy=nome_do_input]').type('nova tarefa')
        //cy.get('[data-cy=nome_do_botão]').click()

        //cy.get('[data-cy=nome_do_input]').type('outra tarefa')
        //cy.get('[data-cy=nome_do_botão]').click()

        //cy.get('[data-cy=nome_do_que_foi_adicionado]').should('to.have.length', 2)
        //cy.contains('nova tarefa').should('to.have.length', 1)
        //cy.contains('outra tarefa').should('to.have.length', 1)
    //})
})