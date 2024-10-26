class Menu {
    
    menus = {
        PRODUTOS: 'Products',
        CONTATOS: 'Contact us'

    }    
    
    irParaProdutos(){
        cy.contains(`Products`).click()
    }

    irParaLoginCadastro(){
        cy.contains('Signup').click()
    }

    irPara(menu){
        cy.contains(menu).click()
    }

}

export default new Menu()