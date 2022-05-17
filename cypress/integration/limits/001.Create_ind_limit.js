/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import createIndLimit from '../../pageObjects/createIndLimit';
import listOfIndLimits from 'C:/Users/BSPB/Documents/Bank guarantee/cypress/pageObjects/listOfIndLimits.js'
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


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

//Нажать на кнопку "Создание индивидуального лимита"
cy.wait(2000)
ListOfIndLimits.getButtonCreateIndLimit().last().click()

// проверка заголовков полей
CreateIndLimit.getHead().should('contain.text', 'Создание индивидуального лимита')


//Заполнить поле "Сумма лимита"
CreateIndLimit.getAmount().type('100000')

//Заполнить поля "Период действия"
CreateIndLimit.getStartDate().type(data.dateStart)
CreateIndLimit.getEndDate().type(data.dateEnd)

//Заполнить поле "Клиент"
CreateIndLimit.getClient().type(data.NameLiptSoft)

//Выбрать компанию
CreateIndLimit.getListOfCompany().click()

//Нажать на кнопку "Создать лимит"
CreateIndLimit.getButtonCreateIndLimit().click()

//Открылась страница индивидуальных лимитов
cy.url().should('eq', Cypress.env('urlTestStg') + '/limits/principal-limits')

})

})




