class listOfIndLimits
{
    getResetFilter(){
        return cy.get('button[type="reset"]')
    }

    getButtonCreateIndLimit(){
        return cy.get('button[type="button"]')
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
        return cy.get('.list--no-search-results_3o8u2')
        
    }
    
    getIndLimitDetailPage(){
        return cy.get('.item--table-col-company_3KHWv')
    }

}

export default listOfIndLimits;