/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import contextMenu from '../../pageObjects/contextMenu';
import deleteModalWindow from '../../pageObjects/deleteModalWindow';
import listOfCompanyGroups from '../../pageObjects/listOfCompanyGroups';
import sidebar from '../../pageObjects/sidebar';


describe ('DeleteCompanyGr', function (){

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

it ('DeleteCompanyGr', function (){

    const ListOfCompanyGroups = new listOfCompanyGroups()
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
ListOfCompanyGroups.getTabGroupLimits().should('contain.text', 'Группы компаний').click()

// Заполнение поля "Компания"
ListOfCompanyGroups.getCompanyFilter().type(data.NameLiptSoft)

// Заполнение поля "Название"
ListOfCompanyGroups.getGroupNameFilter().type(data.GroupOfCompaniesNameChanged)

// Заполнение поля "Код"
ListOfCompanyGroups.getCodeFilter().type(data.CompanyGroupCodeChanged)

//Ожидание загрузки результатов
cy.wait(2000)

//Нажать на вызов контекстного меню
ContextMenu.getBtnMenu().click({force: true})

//Нажать на удаление контекстного меню
ContextMenu.getBtnDelete().click()

//Проверка заголовка в модальном окне удаления
DeleteModalWindow.getHeadModalDelete().should('contain.text', 'Удалить группу компаний?')

//Проверка текста алерта в модальном окне удаления
//\u00A0 - это не разрывной пробел, в DOM страницы = &nbsp;
DeleteModalWindow.getAlertModalDelete().should('contain.text', `Вы собираетесь удалить группу\u00A0[${data.CompanyGroupCodeChanged}] ${data.GroupOfCompaniesNameChanged}.Групповые лимиты перестанут действовать\u00A0для компаний из состава. После удаления восстановить группу невозможно.`)

//Нажать на удаление контекстного меню
DeleteModalWindow.getSubmitModalDelete().click()

cy.wait(500)

//Проверка, что лимит удален
ListOfCompanyGroups.getNoSearchResults().should('contain.text', 'По этому запросу ничего не найдено.')

})

})




