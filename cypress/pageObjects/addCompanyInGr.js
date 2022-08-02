class addCompanyInGr{

    getHead() {
        return cy.get('[class^=groupCreate--title_]')
    }

    getCompanyChoose(){
        return cy.get('[class^=formInputWrap--input-wrap_] > [class^=input-module_input_]')
    }

    getListOfCompany(){
        return cy.get('[class^=list--list-item_]')
    }

    getBtnChoose(){
        return cy.get('[class^=companiesSearch--add-button_]')
    }

    getCompanyColumnName(){
        return cy.get('[class^=styles--table-header_]').first()

    }
    getInnColumnName(){
        return cy.get('[class^=styles--table-header_]').last()
    }

    getCompanyName(){
        return cy.get('[class^=companiesBatch--company-name-link_]')
    }

    getCompanyInn(){
        return cy.get('[class^=styles--table-body_] > [class^=styles--table-row_] > :nth-child(2)')
    }

    getBtnDeleteCompany(){
        return cy.get('[data-cypress-element="table-body-button-delete"]')
    }

    getCommentLabel(){
        return cy.get('[class^=labelText--label-text_]')
    }
    
    getCommentReason(){
        return cy.get('textarea[name="reason"]')
    }

    getBtnCreateGr(){
        return cy.get('[class^=groupCreate--create-button_]')
    }
}
export default addCompanyInGr