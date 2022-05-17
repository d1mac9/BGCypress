class grLimitDetails {
    
    getHead(){
        return cy.get('.detail--title_r-VBm > span')
    }

    getGroupName(){
        return cy.get('.card--name_ogzIM > span')
    }

    getGrCode(){
        return cy.get(':nth-child(1) > .card--group-info-body_1Uw88 > span')
    }

    getCountOfCompanies(){
        return cy.get(':nth-child(2) > .card--group-info-body_1Uw88 > span')
    }

    getAccordeonTab(){
        return cy.get('.accordion-tab-module_main__2iWuD')
    }

    getСomposition(){
        return cy.get('.card--companies-group-item_CQSmM > span')
    }

    getBtnCreateGrLimit(){
        return cy.get('button[type="button"]').last()
    }

}
export default grLimitDetails