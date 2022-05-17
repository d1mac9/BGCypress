class listOfCompanyGroups {

    getTabGroupLimits() {
        return cy.get('.styles--padding_3OWWl').last()
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
        return cy.get('.groupsCompaniesList--no-search-results_1wVm9')
        
    }

    getGrLimitDetailPage(){
        return cy.get('.listItem--company-name_uac6n')
    }

    getButtonCreateCompanyGr(){
        return cy.get('button[type="button"]').last()
    }

}
export default listOfCompanyGroups