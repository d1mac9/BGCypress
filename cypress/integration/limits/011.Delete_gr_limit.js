/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import listOfGrLimits from '../../pageObjects/listOfGrLimits';
import deleteModalWindow from '../../pageObjects/deleteModalWindow';
import sidebar from '../../pageObjects/sidebar';
import contextMenu from '../../pageObjects/contextMenu';


describe ('DeleteGrLimit', function (){

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

it ('DeleteGrLimit', function (){

    const ListOfGrLimits = new listOfGrLimits()
    const AuthPage = new authPage()
    const DeleteModalWindow = new deleteModalWindow()
    const Sidebar = new sidebar()
    const ContextMenu = new contextMenu()


  cy.visit( Cypress.env('urlTestStg'))


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

//Нажать на кнопку "Создание группового лимита"
ListOfGrLimits.getTabGroupLimits().should('contain.text', 'Групповые лимиты').click()

// Заполнение поля "Компания"
ListOfGrLimits.getCompanyFilter().type(data.NameLiptSoft)

// Заполнение поля "Группа компаний"
ListOfGrLimits.getGroupOfCompaniesFilter().type(data.GroupOfCompaniesName)

// Заполнение поля "Мин. сумма лимита"
ListOfGrLimits.getMinAmountFilter().type(data.SumLimit)

// Заполнение поля "Макс. сумма лимита"
ListOfGrLimits.getMaxAmountFilter().type(data.SumLimit)

// Заполнение поля "Период действия с"
ListOfGrLimits.getStartDateFilter().type(data.dateStart)

// Заполнение поля "Период действия по"
ListOfGrLimits.getEndDateFilter().type(data.dateEnd)




//Ожидание загрузки результатов
cy.wait(2000)

//Нажать на вызов контекстного меню
ContextMenu.getBtnMenu().click({force: true})

//Нажать на удаление контекстного меню
ContextMenu.getBtnDelete().click()

//Проверка заголовка в модальном окне удаления
DeleteModalWindow.getHeadModalDelete().should('contain.text', 'Удалить групповой лимит?')

//Проверка текста алерта в модальном окне удаления
DeleteModalWindow.getAlertModalDelete().should('contain.text', 'После удаления восстановить лимит будет невозможно. Лимит перестанет действовать, и все данные о нём будут удалены из системы.')

//Нажать на удаление контекстного меню
DeleteModalWindow.getSubmitModalDelete().click()

cy.wait(500)

//Проверка, что лимит удален
ListOfGrLimits.getNoSearchResults().should('contain.text', 'По этому запросу ничего не найдено.')


})

})




