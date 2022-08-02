class listOfCompanyGroups {

    getResetFilter(){
        return cy.get('button[type="reset"]')
    }

    getTabGroupLimits() {
        return cy.get('[class^=styles--header_]').last()
    }

    getGroupNameFilter(){
        return cy.get('input[name="name"]')
    }

    getCodeFilter(){
        return cy.get('input[name="code"]')
    }

    getCompanyFilter(){
        return cy.get('input[name="company"]')
    }

    getNoSearchResults(){
        return cy.get('[class^=groupsCompaniesList--no-search-results_]')
        
    }

    getGrLimitDetailPage(){
        return cy.get('[class^=listItem--company-name_]')
    }

    getButtonCreateCompanyGr(){
        return cy.get('button[type="button"]').last()
    }

}
export default listOfCompanyGroups