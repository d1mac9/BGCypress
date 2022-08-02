class createCompanyGr{

    getHead(){
        return cy.get('[class^=groupCreate--title_]')
    }

    getAlertText(){
        return cy.get('[class^=alert-module_body_] > span')
    }

    getGrName(){
        return cy.get('input[name="name"]')
    }

    getGrCode(){
        return cy.get('input[name="code"]')
    }

    getCompaniesSearch(){
        return cy.get('[class^=companiesSearch--ids-input_] > :nth-child(1) > [class^=formInputWrap--input-wrap_] > [class^=input-module_input_]')

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