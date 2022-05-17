class createGrLimit {
    
    getHead(){
        return cy.get('.create--title_1wKRW')
    }
    
    getAmount(){
        return cy.get('input[name="amount"]')
    }

    getStartDate(){
        return cy.get('input[name="startDate"]')
    }

    getEndDate(){
        return cy.get('input[name="endDate"]')
    }

    getCompany(){
        return cy.get('input[name="group"]')
    }

    getButtonCreateGrLimit(){
        return cy.get('button[type="submit"]')
    }

    getListOfCompany(){
        return cy.get('.list-item--wrapper_1IF_Z')
    }

}

export default createGrLimit;