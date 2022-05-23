/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import listOfIndLimits from '../../pageObjects/listOfIndLimits'
import sidebar from '../../pageObjects/sidebar';
import deleteModalWindow from '../../pageObjects/deleteModalWindow';
import contextMenu from '../../pageObjects/contextMenu';

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
  const ContextMenu = new contextMenu()


  cy.visit( Cypress.env('urlTestStg'))


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()


// Заполнение поля "Компания"
ListOfIndLimits.getCompanyFilter().type(data.NameLiptSoft)

// Заполнение поля "Мин. сумма лимита"
ListOfIndLimits.getMinAmountFilter().type(data.SumLimitChanged)

// Заполнение поля "Макс. сумма лимита"
ListOfIndLimits.getMaxAmountFilter().type(data.SumLimitChanged)

// Заполнение поля "Период действия с"
ListOfIndLimits.getStartDateFilter().type(data.dateStartChanged)

// Заполнение поля "Период действия по"
ListOfIndLimits.getEndDateFilter().type(data.dateEndChanged)

cy.wait(2000)

//Нажать на вызов контекстного меню
ContextMenu.getBtnMenu().click({force: true})

//Нажать на удаление контекстного меню
ContextMenu.getBtnDelete().click()

//Проверка заголовка в модальном окне удаления
DeleteModalWindow.getHeadModalDelete().should('contain.text', 'Удалить индивидуальный лимит?')

//Проверка текста алерта в модальном окне удаления
DeleteModalWindow.getAlertModalDelete().should('contain.text', 'После удаления восстановить лимит будет невозможно. Лимит перестанет действовать, и все данные о нём будут удалены из системы.')

//Нажать на удаление контекстного меню
DeleteModalWindow.getSubmitModalDelete().click()

cy.wait(500)

//Проверка, что лимит удален
ListOfIndLimits.getNoSearchResults().should('contain.text', 'По этому запросу ничего не найдено.')
})

})




