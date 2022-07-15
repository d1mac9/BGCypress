class contextMenu{

    getBtnEdit(){
        return cy.get('.styles--table-button_3UXU7')
    }

    getBtnMenu(){
        return cy.get('[data-cypress-element="tableMenu-button-contextMenu"]')
    }

    getBtnHistoryOfChanges(){
        return cy.get('.menu-module_wrapper__1PPh7').children().first()
    }

    getBtnDelete(){
        return cy.get('.menu-module_wrapper__1PPh7').children().last()
    }

}
export default contextMenu