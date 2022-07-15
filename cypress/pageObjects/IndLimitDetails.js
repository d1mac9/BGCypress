class indLimitDetails {

    getButtonCreateIndLimit(){
        return cy.get('a > .button-module_primary__2Uu-9 > div')
    }
    getHead(){
        return cy.get('.detail--title_1D1N2')
    }
    getCompanyName(){
        return cy.get('.detail--company-info-title-link_29--A')
    }
    getCompanyInn(){
        return cy.get(':nth-child(1) > .detail--value__3BAh')
    }

    
}

export default indLimitDetails;