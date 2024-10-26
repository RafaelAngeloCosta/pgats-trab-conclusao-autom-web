class ContatoUs {
    preencherContatoUs() {
    cy.on("uncaught:exception", (err, runnable) => {
        // Verifica se o erro é relacionado à API do Google Maps
        if (err.message.includes("Google Maps API is required")) {
            // Se for, exibe um aviso no console
            console.warn("Erro de API do Google Maps ignorado:", err.message);
            // Retorna false para evitar que o erro cause a falha do teste
            return false;
        }
        // Caso contrário, continua com o tratamento normal do erro
        return true;
    }); 

      cy.get(`.contact-form h2`)
        .should('be.visible')
        .and('have.text', 'Get In Touch')
  
      cy.get('[data-qa="name"]').type(`Tester`)
      cy.get('[data-qa="email"]').type(`teste36565@gmail.com`)
      cy.get('[data-qa="subject"]').type(`Test Automation Test`)
      cy.get('[data-qa="message"]').type(`Learning Test Automation`)
  
      cy.fixture('example.json').as('arquivo')
      cy.get('input[name="upload_file"]').selectFile('@arquivo')
  
      cy.get('[data-qa="submit-button"]').click()
    }
}

export default new ContatoUs()