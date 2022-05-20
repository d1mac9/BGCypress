/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import deleteModalWindow from '../../pageObjects/deleteModalWindow';
import listOfCompanyGroups from '../../pageObjects/listOfCompanyGroups';
import sidebar from '../../pageObjects/sidebar';
import companyGrParametrs from '../../pageObjects/companyGrParametrs';

describe ('DeleteCompanyInGroup', function (){

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

it ('DeleteCompanyInGroup', function (){

  const ListOfCompanyGroups = new listOfCompanyGroups()
  const AuthPage = new authPage()
  const CompanyGrParametrs = new companyGrParametrs()
  const DeleteModalWindow = new deleteModalWindow()
  const Sidebar = new sidebar()



  cy.visit( Cypress.env('urlTestStg'))


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

//Нажать на кнопку "Создание группового лимита"
ListOfCompanyGroups.getTabGroupLimits().should('contain.text', 'Группы компаний').click()
cy.wait(2000)

// Заполнение поля "Компания"
ListOfCompanyGroups.getCompanyFilter().type(data.NameLiptSoft)

// Заполнение поля "Название"
ListOfCompanyGroups.getGroupNameFilter().type(data.GroupOfCompaniesName)

// Заполнение поля "Код"
ListOfCompanyGroups.getCodeFilter().type(data.CompanyGroupCode)
cy.wait(3000)

// Переход в детальную страницу группы компаний
ListOfCompanyGroups.getGrLimitDetailPage().children().first().click()

// Нажать иконку удалить
CompanyGrParametrs.getBtnTableDeleteClick(data.NameZenit)
cy.wait(1000)

//Проверка заголовка в модальном окне удаления
DeleteModalWindow.getHeadModalDelete().click().should('contain.text', 'Удалить компанию из состава группы?')

//Проверка текста алерта в модальном окне удаления
//\u00A0 - это не разрывной пробел, в DOM страницы = &nbsp;
DeleteModalWindow.getAlertModalDelete().click().should('contain.text', `Компания [ИНН: ${data.INNZenit}]\u00A0${data.NameZenit}\u00A0больше не будет входить в группу\u00A0${data.GroupOfCompaniesName}.`)

//Проверка заголовка текстового поля
DeleteModalWindow.getTextReasonLabel().should('contain.text', 'Причина удаления')

//Заполнение комментария
DeleteModalWindow.getTextReason().type('Автотест')

//Нажать на удаление контекстного меню
DeleteModalWindow.getSubmitModalDelete().click()
cy.wait(1000)

//Проверить переход на детальную страницу группы компаний
cy.url().should('contains', Cypress.env('urlTestStg') + '/limits/group-companies/')

//Проверка отсутствия компании в группе
CompanyGrParametrs.getCompanyName().should('not.contain.text', data.NameZenit)

})

})




