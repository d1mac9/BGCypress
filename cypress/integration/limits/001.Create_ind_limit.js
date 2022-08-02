/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import createIndLimit from '../../pageObjects/createIndLimit';
import listOfIndLimits from '../../pageObjects/listOfIndLimits';
import sidebar from '../../pageObjects/sidebar';

describe ('CreateIndLimit', function (){

  let data; 
  before(() => {  
    // runs once before all tests in the block
    cy.fixture('bgConfig').then((fData) => {
         
       data = fData; 
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

it ('CreateIndLimit', function (){

  const ListOfIndLimits = new listOfIndLimits()
  const AuthPage = new authPage()
  const CreateIndLimit = new createIndLimit()
  const Sidebar = new sidebar()


  cy.visit( Cypress.env('urlTestStg'))


cy.log('Авторизоваться по админом, нажать войти')
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

cy.log('Выбрать "Лимиты гарантий"')
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

cy.log('Нажать на кнопку "Создание индивидуального лимита"')
cy.wait(2000)
ListOfIndLimits.getButtonCreateIndLimit().click()

cy.log('проверка заголовков полей')
CreateIndLimit.getHead().should('contain.text', 'Создание индивидуального лимита')
cy.wait(1000)

cy.log('Заполнить поле "Сумма лимита"')
CreateIndLimit.getAmount().type(data.SumLimit)

cy.log('Заполнить поля "Период действия"')
CreateIndLimit.getStartDate().type(data.dateStart)
CreateIndLimit.getEndDate().type(data.dateEnd)

cy.log('Заполнить поле "Клиент"')
CreateIndLimit.getClient().type(data.NameLiptSoft)
cy.wait(2000)

cy.log('Выбрать компанию')
CreateIndLimit.getListOfCompany().click()

cy.log('Нажать на кнопку "Создать лимит"')
CreateIndLimit.getButtonCreateIndLimit().click()

cy.log('Открылась страница индивидуальных лимитов')
cy.url().should('contains', Cypress.env('urlTestStg') + '/limits/principal-limits').and('not.contain','/create')

})

})




