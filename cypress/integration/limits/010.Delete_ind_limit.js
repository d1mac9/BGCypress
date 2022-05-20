/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import listOfIndLimits from 'C:/Users/BSPB/Documents/Bank guarantee/cypress/pageObjects/listOfIndLimits.js'
import sidebar from '../../pageObjects/sidebar';
import deleteModalWindow from '../../pageObjects/deleteModalWindow';

describe ('DeleteIndLimit', function (){

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

it ('DeleteIndLimit', function (){

  const ListOfIndLimits = new listOfIndLimits()
  const AuthPage = new authPage()
  const Sidebar = new sidebar()
  const DeleteModalWindow = new deleteModalWindow()


  cy.visit( Cypress.env('urlTestStg'))


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()


// Заполнение поля "Компания"
ListOfIndLimits.getCompanyFilter().type(data.NameLiptSoft)

// Заполнение поля "Мин. сумма лимита"
ListOfIndLimits.getMinAmountFilter().type('100000')

// Заполнение поля "Макс. сумма лимита"
ListOfIndLimits.getMaxAmountFilter().type('100000')

// Заполнение поля "Период действия с"
ListOfIndLimits.getStartDateFilter().type(data.dateStart)

// Заполнение поля "Период действия по"
ListOfIndLimits.getEndDateFilter().type(data.dateEnd)

cy.wait(2000)

//Нажать на вызов контекстного меню
DeleteModalWindow.getBtnMenu().click({force: true})

//Нажать на удаление контекстного меню
DeleteModalWindow.getBtnDelete().click()

//Проверка заголовка в модальном окне удаления
DeleteModalWindow.getHeadModalDelete().click().should('contain.text', 'Удалить индивидуальный лимит?')

//Проверка текста алерта в модальном окне удаления
DeleteModalWindow.getAlertModalDelete().click().should('contain.text', 'После удаления восстановить лимит будет невозможно. Лимит перестанет действовать, и все данные о нём будут удалены из системы.')

//Нажать на удаление контекстного меню
DeleteModalWindow.getSubmitModalDelete().click()

cy.wait(500)

//Проверка, что лимит удален
ListOfIndLimits.getNoSearchResults().should('contain.text', 'По этому запросу ничего не найдено.')
})

})




