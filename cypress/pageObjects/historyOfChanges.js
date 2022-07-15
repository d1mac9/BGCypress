class historyOfChanges {

    getHead(){
        return cy.get('[data-cypress-element="limits-modal-title"]')
    }

    getDate(){
        return cy.get('.style--item-date_1KcM_')
    }

    getText(){
        return cy.get('')
    }

}
export default historyOfChanges