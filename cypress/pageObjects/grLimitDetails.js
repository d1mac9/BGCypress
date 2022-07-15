class grLimitDetails {
    
    getHead(){
        return cy.get('[data-cypress-element="groupLimitDetail-title"]')
    }

    getGroupName(){
        return cy.get('[data-cypress-element="card-group-name"]')
    }

    getGrCode(){
        return cy.get('[data-cypress-element="card-group-code-value"]')
    }

    getCountOfCompanies(){
        return cy.get('[data-cypress-element="card-group-company-count-value"]')
    }

    getAccordeonTab(){
        return cy.get('.accordion-tab-module_main__2iWuD')
    }

    getСomposition(){
        return cy.get('[data-cypress-element="card-group-company-title-сompanies-list"]')
    }

    getBtnCreateGrLimit(){
        return cy.get('[data-cypress-element="groupLimitDetail-create-button"]')
    }

}
export default grLimitDetails