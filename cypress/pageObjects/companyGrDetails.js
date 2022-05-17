class companyGrDetails{

    getHead(){
        return cy.get('.groupCompaniesDetail--title_5o1gI')
    }

    getGroupName(){
        return cy.get('input[name="name"]')
    }

    getGroupCode(){
        return cy.get('input[name="code"]')
    }

    getCompanyName(){
        return cy.get('.groupComponents--link_1BHwh')
    }

    getCompanyInn(){
        return cy.get('.styles--table-body_3f45- > .styles--table-row_1Om7f > :nth-child(2)')
    }

}
export default companyGrDetails