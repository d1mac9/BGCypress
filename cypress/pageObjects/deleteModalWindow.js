class deleteModalWindow {

    getHeadModalDelete(){
        return cy.get('[class^=modal--header_]')
    }

    getAlertModalDelete(){
        return cy.get('[class^=alert-module_body_]')
    }

    getSubmitLimitModalDelete(){
        return cy.get('[data-cypress-element="limits-modal-button-submit"]')
    }

    getSubmitGroupModalDelete(){
        return cy.get('[data-cypress-element="deleteGroup-modal-button-submit"]')
    }
    getSubmitCompanyModalDelete(){
        return cy.get('[data-cypress-element="deleteCompany-modal-button-submit"]')
    }

    getTextReasonLabel(){
        return cy.get('[class^=groupCompaniesModal--textarea-block_] > div > [class^=labelText--label-text_] > :nth-child(1)')
    }

    getTextReason(){
        return cy.get('textarea[name="reason"]')
    }

}
export default deleteModalWindow;