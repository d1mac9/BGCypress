/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import createGrLimit from '../../pageObjects/createGrLimit';
import listOfGrLimits from '../../pageObjects/listOfGrLimits';
import sidebar from '../../pageObjects/sidebar';

describe ('CreateGrLimit', function (){

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

it ('CreateGrLimit', function (){

  const ListOfGrLimits = new listOfGrLimits()
  const AuthPage = new authPage()
  const CreateGrLimit = new createGrLimit()
  const Sidebar = new sidebar()


  cy.visit( Cypress.env('urlTestStg'))


cy.log('Авторизоваться по админом, нажать войти')
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

cy.log('Выбрать "Лимиты гарантий"')
Sidebar.getMenuItem().contains('Лимиты гарантий').click()


cy.log('Перейти на вкладку "Групповые лимиты"')
ListOfGrLimits.getTabGroupLimits().should('contain.text', 'Групповые лимиты').click()
cy.wait(2000)

cy.log('Нажать на кнопку "Создание группового лимита"')
ListOfGrLimits.getButtonCreateGrLimit().click()

cy.log('Проверка заголовка полей')
CreateGrLimit.getHead().should('contain.text', 'Создание группового лимита')


cy.log('Заполнить поле "Сумма лимита"')
CreateGrLimit.getAmount().type(data.SumLimit)

cy.log('Заполнить поля "Период действия"')
CreateGrLimit.getStartDate().type(data.dateStart)
CreateGrLimit.getEndDate().type(data.dateEnd)

cy.log('Заполнить поле "Клиент"')
CreateGrLimit.getCompany().type(data.GroupOfCompaniesName)

cy.log('Выбрать компанию')
CreateGrLimit.getListOfCompany().click()

cy.log('Нажать на кнопку "Создать лимит"')
CreateGrLimit.getButtonCreateGrLimit().click()

cy.log('Открылась страница групповых лимитов')
cy.url().should('contains', Cypress.env('urlTestStg') + '/limits/group-limits').and('not.contain','/create')

})

})




