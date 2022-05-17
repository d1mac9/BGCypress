class listOfGrLimits {

    getTabGroupLimits(){
        return cy.get(':nth-child(2) > .tab-head-module_tab__WpYVI > div')
    }

    getButtonCreateGrLimit(){
        return cy.get('button[type="button"]').last()
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
        return cy.get('.item--company-name_7t9X_')
    }

    getNoSearchResults(){
        return cy.get('.list--no-search-results_14hNu')
        
    }

}
export default listOfGrLimits