class createGrLimit {
    
    getHead(){
        return cy.get('[class^=create--title_]')
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
        return cy.get('[class^=list-item--wrapper_]')
    }

}

export default createGrLimit;