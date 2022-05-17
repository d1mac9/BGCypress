class indLimitDetails {

    getButtonCreateIndLimit(){
        return cy.get('a > .button-module_primary__2Uu-9 > div')
    }
    getHead(){
        return cy.get('.detail--title_1s4oc')
    }
    getCompanyName(){
        return cy.get('.detail--company-info-title-link_q9Qff')
    }
    getCompanyInn(){
        return cy.get(':nth-child(1) > .detail--value_2M98I')
    }

    
}

export default indLimitDetails;