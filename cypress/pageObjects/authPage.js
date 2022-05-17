class authPage
{
    getLogin(){
        return cy.get('[data-cypress-element="login-input" ]')
    }

    getSubmitButton(){
        return cy.get('button[type="submit"]')
    }

}

export default authPage;