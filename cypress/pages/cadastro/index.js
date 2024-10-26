class Cadastro {   
    preencherFormulario() {
        const timestamp = new Date().getTime()
        const signUpName = 'Tester QA'

        Cypress.env('signUpName', signUpName)

        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@mail.com`)
        cy.contains('button', 'Signup').click()

        cy.get('input[type=radio]').check('Mrs')
        cy.get('input[type=radio]').eq(1).check() // 0, 1, 2
          
        cy.get('[type=password]').type('12345', { log: false })

        cy.get('[data-qa="days"]').select('5')
        cy.get('[data-qa="months"]').select('2')
        cy.get('[data-qa="years"]').select('1993')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('[data-qa="first_name"]').type('Cristiano')
        cy.get('[data-qa="last_name"]').type('Ronaldo')
        cy.get('[data-qa="company"]').type('Empresa Teste PGATS')
        cy.get('[data-qa="address"]').type('contatopgats@pgats.com')

        cy.get('[data-qa="country"]').select('Israel')
        cy.get('[data-qa="state"]').type('Goias')
        cy.get('[data-qa="city"]').type('Goiânia')
        cy.get('[data-qa="zipcode"]').type('74.400000')
        cy.get('[data-qa="mobile_number"]').type('62 98878-7878')
        cy.get('[data-qa="create-account"]').click()

        cy.url().should('includes', 'account_created')
        //'https://automationexercise.com/account_created'
       
        cy.get('[data-qa="account-created"]').should('be.visible')

        cy.get('[data-qa="continue-button"]').click() 

        return this
    }

    iniciarCadastro(usuario){
        cy.get('[data-qa="signup-name"]').type(`Tester QA`)
        cy.get('[data-qa="signup-email"]').type(usuario)
        cy.contains('button', 'Signup').click()

        return this
    }

    verificarSeCadastroFoiConcluido(){
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
        
        return this
    }

}

export default new Cadastro()