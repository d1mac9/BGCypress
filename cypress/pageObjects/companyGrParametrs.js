class companyGrParametrs{

    getHead(){
        return cy.get('.groupCompaniesDetail--title_5o1gI')
    }

    getGrName(){
        return cy.get('input[name="name"]')
    }

    getGrCode(){
        return cy.get('input[name="code"]')
    }
    
    getBtnEditGroup(){
        return cy.get('.groupComponents--button_3Jlqa').children()
    }

    getAlert(){
        return cy.get('.styles--alert-text_3DzaA')
    }

    getLabelGrName(){
        return cy.get('.groupComponents--input-container_vq9E1 > :nth-child(1) > .labelText--label-text_1fHCM > :nth-child(1)')
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
        return cy.get('.groupComponents--textarea-block_3UncF > div > .labelText--label-text_1fHCM > :nth-child(1)')
    }

    getReason(){
        return cy.get('textarea[name="reason"]')
    }

    getCompanyName(){
        return cy.get('.groupComponents--link_1BHwh')
    }

    getCompanyInn(){
        return cy.get('.styles--table-body_3f45- > .styles--table-row_1Om7f > :nth-child(2)')
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