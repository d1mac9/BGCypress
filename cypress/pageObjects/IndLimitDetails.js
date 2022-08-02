class indLimitDetails {

    getButtonCreateIndLimit(){
        return cy.get('a > [class^=button-module_primary_] > div')
    }
    getHead(){
        return cy.get('[class^=detail--title_]')
    }
    getCompanyName(){
        return cy.get('[class^=detail--company-info-title-link_]')
    }
    getCompanyInn(){
        return cy.get(':nth-child(1) > [class^=detail--value_]')
    }

    
}

export default indLimitDetails;