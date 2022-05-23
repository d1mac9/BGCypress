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


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

//Нажать на кнопку "Создание группового лимита"

ListOfGrLimits.getTabGroupLimits().should('contain.text', 'Групповые лимиты').click()
cy.wait(2000)
ListOfGrLimits.getButtonCreateGrLimit().click()

// проверка заголовков полей
CreateGrLimit.getHead().should('contain.text', 'Создание группового лимита')


//Заполнить поле "Сумма лимита"
CreateGrLimit.getAmount().type(data.SumLimit)

//Заполнить поля "Период действия"
CreateGrLimit.getStartDate().type(data.dateStart)
CreateGrLimit.getEndDate().type(data.dateEnd)
//Заполнить поле "Клиент"
CreateGrLimit.getCompany().type(data.GroupOfCompaniesName)
//Выбрать компанию
CreateGrLimit.getListOfCompany().click()

//Нажать на кнопку "Создать лимит"
CreateGrLimit.getButtonCreateGrLimit().click()

//Открылась страница групповых лимитов
cy.url().should('eq', Cypress.env('urlTestStg') + '/limits/group-limits')

})

})




