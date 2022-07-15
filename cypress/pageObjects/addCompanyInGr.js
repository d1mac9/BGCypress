class addCompanyInGr{

    getHead() {
        return cy.get('[class^=groupCreate--title_]')
    }

    getCompanyChoose(){
        return cy.get('.formInputWrap--input-wrap_3WO-4 > .input-module_input__3SpIc')
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
        return cy.get('.styles--table-button_3UXU7')
    }

    getCommentLabel(){
        return cy.get('.labelText--label-text_1fHCM')
    }
    
    getCommentReason(){
        return cy.get('textarea[name="reason"]')
    }

    getBtnCreateGr(){
        return cy.get('[class^=groupCreate--create-button_]')
    }
}
export default addCompanyInGr