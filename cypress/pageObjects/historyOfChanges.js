class historyOfChanges {

    getHead(){
        return cy.get('[data-cypress-element="limits-modal-title"]')
    }

    getDate(){
        return cy.get('[data-cypress-element="history-modal-date"]')
    }

    getText(){
        return cy.get('')
    }

}
export default historyOfChanges