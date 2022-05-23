class сhangeLimitModal {

    getHead(){
        return cy.get('.modal--header_2KfOM')
    }

    getClientLabel(){
        return cy.get('.style--label_1Pc7X')
    }

    getCompanyName(){
        return cy.get('.style--name_3Lg7w')
    }

    getCompanyInn(){
        return cy.get('.style--code_17eot')
    }

    getLimitSumLabel(){
        return cy.get('.create-base--limit_3KSE_ > div')
    }

    getLimitSum(){
        return cy.get('input[name="amount"]')
    }

    getPeriodLabel(){
        return cy.get('.formDate--wrapper_2Cenf').children()
    }

    getStartDate(){
        return cy.get('input[name="startDate"]').last()
    }

    getEndDate(){
        return cy.get('input[name="endDate"]').last()
    }

    getReasonLabel(){
        return cy.get('.style--textarea-block_1nLpx > div')
    }

    getReason(){
        return cy.get('textarea[name="reason"]')
    }

    getBtnSubmit(){
        return cy.get('.style--btn-block_2Xs-t > :nth-child(1) > .button-module_primary__2Uu-9')
    }

    getBtnCancelReset(){
        return cy.get('button[type="button"]').contains('Отменить и вернуться')
    }
}
export default сhangeLimitModal