/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import listOfIndLimits from '../../pageObjects/listOfIndLimits.js'
import sidebar from '../../pageObjects/sidebar';
import indLimitDetails from '../../pageObjects/IndLimitDetails';

describe ('FindIndLimit', function (){

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

it ('FindIndLimit', function (){

  const ListOfIndLimits = new listOfIndLimits()
  const AuthPage = new authPage()
  const Sidebar = new sidebar()
  const IndLimitDetails = new indLimitDetails()


  cy.visit( Cypress.env('urlTestStg'))


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()
cy.wait(1000)

// Заполнение поля "Компания"
ListOfIndLimits.getCompanyFilter().type(data.NameLiptSoft)

// Заполнение поля "Мин. сумма лимита"
ListOfIndLimits.getMinAmountFilter().type('100000')

// Заполнение поля "Макс. сумма лимита"
ListOfIndLimits.getMaxAmountFilter().type('100000')

// Заполнение поля "Период действия с"
ListOfIndLimits.getStartDateFilter().type(data.dateStart)

// Заполнение поля "Период действия по"
ListOfIndLimits.getEndDateFilter().type('12112022')
cy.wait(1000)

//Проверка текста при отсутствии результатов
ListOfIndLimits.getNoSearchResults().should('contain.text', 'По этому запросу ничего не найдено.')

// Заполнение поля "Период действия по"
ListOfIndLimits.getEndDateFilter().clear().type(data.dateEnd)
cy.wait(1000)

// Переход в детальную страницу индивидуального лимита
ListOfIndLimits.getIndLimitDetailPage().children().first().click()

//Проверка заголовка формы
IndLimitDetails.getHead().should('contain.text', 'Лимиты компании')

//Проверка названия компании
IndLimitDetails.getCompanyName().should('contain.text', data.NameLiptSoft)

//Проверка ИНН компании
IndLimitDetails.getCompanyInn().should('contain.text', data.INNLiptSoft)

})

})




