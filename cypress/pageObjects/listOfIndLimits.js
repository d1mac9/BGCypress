class listOfIndLimits
{
    getResetFilter(){
        return cy.get('button[type="reset"]')
    }

    getButtonCreateIndLimit(){
        return cy.get('.button-module_secondary__Sx2AO > div')
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
        return cy.get('.list--no-search-results_H3LkG')
        
    }
    
    getIndLimitDetailPage(){
        return cy.get('.item--table-col-company_1XUj6')
    }

}

export default listOfIndLimits;