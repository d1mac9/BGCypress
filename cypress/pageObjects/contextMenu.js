class contextMenu{

    getBtnEdit(){
        // return cy.get('[data-cypress-element="table-body-row-button-change"]')
        return cy.get('[class^=styles--table-button_]')
    }

    getBtnMenu(){
        return cy.get('[data-cypress-element="tableMenu-button-contextMenu"]')
    }

    getBtnHistoryOfChanges(){
        return cy.get('[data-cypress-element="tableMenu-contextMenu-button-changeHistory"]')
    }

    getBtnDelete(){
        return cy.get('[data-cypress-element="tableMenu-contextMenu-button-delete"]')
    }

}
export default contextMenu