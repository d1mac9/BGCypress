class companyGrParametrs{

    getHead(){
        return cy.get('[class^=groupCompaniesDetail--title_]')
    }

    getGrName(){
        return cy.get('input[name="name"]')
    }

    getGrCode(){
        return cy.get('input[name="code"]')
    }
    
    getBtnEditGroup(){
        return cy.get('[class^=groupComponents--button_]').children()
    }

    getAlert(){
        return cy.get('[class^=styles--alert-text_]')
    }

    getLabelGrName(){
        return cy.get('[class^=groupComponents--input-container_] > :nth-child(1) > [class^=labelText--label-text_] > :nth-child(1)')
    }

    getHintGrName(){
        return cy.get(':nth-child(1) > .formInputWrap--helper-text_3r4eP')
    }

    getLabelGrCode(){
        return cy.get(':nth-child(2) > .labelText--label-text_1fHCM > :nth-child(1)')
    }

    getHintGrCode(){
        return cy.get(':nth-child(2) > .formInputWrap--helper-text_3r4eP')
    }

    getLabelReason(){
        return cy.get('[class^=groupComponents--textarea-block_] > div > [class^=labelText--label-text_] > :nth-child(1)')
    }

    getReason(){
        return cy.get('textarea[name="reason"]')
    }

    getCompanyName(){
        return cy.get('[class^=groupComponents--link_]')
    }

    getCompanyInn(){
        return cy.get('[class^=styles--table-body_] > [class^=styles--table-row_] > :nth-child(2)')
    }

    getBtnDeleteGroup(){
        return cy.get('')
    }

    getBtnAddCompany(){
        return cy.get('.button-module_secondary__Sx2AO').last()
    }

    getHistory(){
        return cy.get('.change-history_1nJiY')
    }
    
    getBtnDeleteCompany(){
        return cy.get('.styles--table-button_3UXU7')
    }

    getBtnTableDeleteClick(Name){
        let isName = false
        cy.get("tr td:nth-child(1)")
        .each(($e1, index) => {
            const StoreText = $e1.text();
            if (StoreText.includes(Name)){
                isName = true
                return cy.get(`:nth-child(${index++}) > [class^=styles--table-col_] > [class^=styles--svg-wrapper_] > [class^=styles--table-button_]`).click()
            }
        })
        if(!isName){
            return cy.log(`${Name} не найдена`)
        }
    }
}
export default companyGrParametrs