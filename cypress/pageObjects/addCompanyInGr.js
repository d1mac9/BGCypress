class addCompanyInGr{

    getHead() {
        return cy.get('.groupCreate--title_FStYD')
    }

    getCompanyChoose(){
        return cy.get('.companiesSearch--ids-input_2ofOS > div > .input-module_input__3SpIc')
    }

    getListOfCompany(){
        return cy.get('.list--list-item_5a8jG')
    }

    getBtnChoose(){
        return cy.get('.companiesSearch--add-button_2ttDT')
    }

    getCompanyColumnName(){
        return cy.get('.styles--table-header_srbuR').first()

    }
    getInnColumnName(){
        return cy.get('.styles--table-header_srbuR').last()
    }

    getCompanyName(){
        return cy.get('.companiesBatch--company-name-link_31a_p')
    }

    getCompanyInn(){
        return cy.get('.styles--table-body_3f45- > .styles--table-row_1Om7f > :nth-child(2)')
    }

    getBtnDeleteCompany(){
        return cy.get('.styles--table-button_15Ijm')
    }

    getCommentLabel(){
        return cy.get('.labelText--label-text_1fHCM')
    }
    
    getCommentReason(){
        return cy.get('textarea[name="reason"]')
    }

    getBtnCreateGr(){
        return cy.get('.groupCreate--create-button_1umq8')
    }
}
export default addCompanyInGr