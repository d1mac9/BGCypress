class companyGrParametrs{

    getHead(){
        return cy.get('.groupCompaniesDetail--title_5o1gI')
    }

    getGroupName(){
        return cy.get('input[name="name"]')
    }

    getGroupCode(){
        return cy.get('input[name="code"]')
    }

    getCompanyName(){
        return cy.get('.groupComponents--link_1BHwh')
    }

    getCompanyInn(){
        return cy.get('.styles--table-body_3f45- > .styles--table-row_1Om7f > :nth-child(2)')
    }

    getBtnEditGroup(){
        return cy.get('')
    }

    getBtnDeleteGroup(){
        return cy.get('')
    }

    getBtnAddCompany(){
        return cy.get('.button-module_secondary__Sx2AO').last()
    }

    getSubtitle(){
        return cy.get('')
    }

    getHistory(){
        return cy.get('.change-history_1nJiY')
    }
    
    getBtnDeleteCompany(){
        return cy.get('.styles--table-button_15Ijm')
    }

    getBtnTableDeleteClick(Name){
        let isName = false
        cy.get("tr td:nth-child(1)")
        .each(($e1, index) => {
            const StoreText = $e1.text();
            if (StoreText.includes(Name)){
                isName = true
                return cy.get(`:nth-child(${index++}) > .styles--table-col-buttons_3sSOO > .styles--svg-wrapper_22V0N > .styles--table-button_15Ijm`).click()
            }
        })
        if(!isName){
            return cy.log(`${Name} не найдена`)
        }
    }
}
export default companyGrParametrs