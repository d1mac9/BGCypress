class сhangeLimitModal {

    getHead(){
        return cy.get('[data-cypress-element="limits-modal-title"]')
    }

    getClientLabel(){
        return cy.get('[data-cypress-element="limits-modal-client-label"]')
    }

    getCompanyName(){
        return cy.get('[data-cypress-element="limits-modal-client-link"]')
    }

    getCompanyInn(){
        return cy.get('[data-cypress-element="limits-modal-client-code"]')
    }

    getLimitSumLabel(){
        return cy.get('[data-cypress-element="limits-modal-requestDateGE"] > :nth-child(1) > :nth-child(1) > div')
    }

    getLimitSum(){
        return cy.get('input[name="amount"]')
    }

    getPeriodLabel(){
        return cy.get('[class^=formDate--wrapper_]').children()
    }

    getStartDate(){
        return cy.get('input[name="startDate"]').last()
    }

    getEndDate(){
        return cy.get('input[name="endDate"]').last()
    }

    getReasonLabel(){
        return cy.get('[data-cypress-element="limits-modal-requestDateGE"]').parent().children().last()
    }

    getReason(){
        return cy.get('textarea[name="reason"]')
    }

    getBtnSubmit(){
        return cy.get('button[data-cypress-element="limits-modal-button-submit"]')
    }

    getBtnCancelReset(){
        return cy.get('button[type="button"]').contains('Отменить и вернуться')
    }
}
export default сhangeLimitModal