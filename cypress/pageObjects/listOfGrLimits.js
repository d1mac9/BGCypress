class listOfGrLimits {

    getResetFilter(){
        return cy.get('button[type="reset"]')
    }

    getTabGroupLimits(){
        return cy.get(':nth-child(2) > .tab-head-module_tab__WpYVI > div')
    }

    getButtonCreateGrLimit(){
        return cy.get('[class^=button-module_secondary_] > div')
    }

    getGroupOfCompaniesFilter(){
        return cy.get('input[name="groupOfCompanies"]')
    }

    getCompanyFilter(){
        return cy.get('input[name="company"]')
    }

    getMinAmountFilter(){
        return cy.get('input[name="minAmountLimit"]')
    }

    getMaxAmountFilter(){
        return cy.get('input[name="maxAmountLimit"]')
    }

    getStartDateFilter(){
        return cy.get('input[name="startDate"]')
    }

    getEndDateFilter(){
        return cy.get('input[name="endDate"]')
        
    }

    getCheckboxFilter(){
        return cy.get('input[type="checkbox"]')
    }

    getGrLimitDetailPage(){
        return cy.get('[class^=item--company-name_]')
    }

    getNoSearchResults(){
        return cy.get('[class^=list--no-search-results_]')
        
    }

}
export default listOfGrLimits