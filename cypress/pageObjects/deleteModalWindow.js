class deleteModalWindow {

    getHeadModalDelete(){
        return cy.get('[class^=modal--header_]')
    }

    getAlertModalDelete(){
        return cy.get('.alert-module_body__10GK6')
    }

    getSubmitModalDelete(){
        return cy.get('.button-module_danger-filled__3MMgl > div')
    }

    getTextReasonLabel(){
        return cy.get('[class^=groupCompaniesModal--textarea-block_] > div > [class^=labelText--label-text_] > :nth-child(1)')
    }

    getTextReason(){
        return cy.get('textarea[name="reason"]')
    }

}
export default deleteModalWindow;