class createIndLimit
{
    getHead(){
        return cy.get('.create--title_3hRAJ')
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

    getClient(){
        return cy.get('input[name="client"]')
    }

    getButtonCreateIndLimit(){
        return cy.get('button[type="submit"]')
    }

    getListOfCompany(){
        return cy.get('.list--list-item_CmPFo')
    }

}

export default createIndLimit;