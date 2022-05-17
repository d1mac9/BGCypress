class createCompanyGr{

    getHead(){
        return cy.get('.groupCreate--title_FStYD')
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
        return cy.get('.companiesSearch--ids-input_2ofOS > div > .input-module_input__3SpIc')

    }

    getListOfCompany(){
        return cy.get('.list--list-item_5a8jG')
    }

    getBtnChoose(){
        return cy.get('.companiesSearch--add-button_2ttDT')
    }

    getBtnCreateGroup(){
        return cy.get('button[type="button"]').last()
    }

}
export default createCompanyGr