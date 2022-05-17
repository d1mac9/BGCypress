class deleteModalWindow {
    
    getBtnMenu(){
        return cy.get('.TableMenu--menu-button_1BbaF')
    }

    getBtnDelete(){
        return cy.get('.menu-module_wrapper__1PPh7').children().last()
    }

    getHeadModalDelete(){
        return cy.get('.modal--header_2KfOM')
    }

    getAlertModalDelete(){
        return cy.get('.alert-module_body__10GK6')
    }

    getSubmitModalDelete(){
        return cy.get('.button-module_danger-filled__3MMgl > div')
    }

}
export default deleteModalWindow;