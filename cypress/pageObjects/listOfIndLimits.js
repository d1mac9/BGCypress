class listOfIndLimits
{
    getResetFilter(){
        return cy.get('button[type="reset"]')
    }

    getButtonCreateIndLimit(){
        return cy.get('[data-cypress-element="filter-button-principalLimitsCreate"]')
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

    getNoSearchResults(){
        return cy.get('[class^=list--no-search-results_]')
        
    }
    
    getIndLimitDetailPage(){
        return cy.get('[data-cypress-element="table-body-row-companyName"]')
    }

}

export default listOfIndLimits;