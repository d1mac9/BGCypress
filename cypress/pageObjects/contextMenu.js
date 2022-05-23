class contextMenu{

    getBtnEdit(){
        return cy.get('.styles--table-button_15Ijm')
    }

    getBtnMenu(){
        return cy.get('.TableMenu--menu-button_1BbaF')
    }

    getBtnHistoryOfChanges(){
        return cy.get('.menu-module_wrapper__1PPh7').children().first()
    }

    getBtnDelete(){
        return cy.get('.menu-module_wrapper__1PPh7').children().last()
    }

}
export default contextMenu