class createCompanyGr{

    getHead(){
        return cy.get('[class^=groupCreate--title_]')
    }

    getAlertText(){
        return cy.get('.alert-module_body__10GK6 > span')
    }

    getGrName(){
        return cy.get('input[name="name"]')
    }

    getGrCode(){
        return cy.get('input[name="code"]')
    }

    getCompaniesSearch(){
        return cy.get('.companiesSearch--ids-input_3zTZl > :nth-child(1) > .formInputWrap--input-wrap_3WO-4 > .input-module_input__3SpIc')

    }

    getListOfCompany(){
        return cy.get('[class^=list--list-item_]')
    }

    getBtnChoose(){
        return cy.get('[class^=companiesSearch--add-button_]')
    }

    getBtnCreateGroup(){
        return cy.get('button[type="button"]').last()
    }

}
export default createCompanyGr