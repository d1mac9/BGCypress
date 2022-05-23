class deleteModalWindow {

    getHeadModalDelete(){
        return cy.get('.modal--header_2KfOM')
    }

    getAlertModalDelete(){
        return cy.get('.alert-module_body__10GK6')
    }

    getSubmitModalDelete(){
        return cy.get('.button-module_danger-filled__3MMgl > div')
    }

    getTextReasonLabel(){
        return cy.get('.groupCompaniesModal--textarea-block_26uiu > div > .labelText--label-text_1fHCM > :nth-child(1)')
    }

    getTextReason(){
        return cy.get('textarea[name="reason"]')
    }

}
export default deleteModalWindow;