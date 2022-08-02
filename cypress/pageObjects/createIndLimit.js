class createIndLimit
{
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

    getClient(){
        return cy.get('input[name="client"]')
    }

    getButtonCreateIndLimit(){
        return cy.get('button[type="submit"]')
    }

    getListOfCompany(){
        return cy.get('[class^=list--list-item_]')
    }

}

export default createIndLimit;