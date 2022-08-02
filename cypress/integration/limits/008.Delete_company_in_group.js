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


cy.log('Авторизоваться по админом, нажать войти')
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

cy.log('Выбрать "Лимиты гарантий"')
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

cy.log('Перейти на вкладку "Группы компаний"')
ListOfCompanyGroups.getTabGroupLimits().should('contain.text', 'Группы компаний').click()
cy.wait(2000)

cy.log('Заполнение поля "Компания"')
ListOfCompanyGroups.getCompanyFilter().type(data.NameLiptSoft)

cy.log('Заполнение поля "Название"')
ListOfCompanyGroups.getGroupNameFilter().type(data.GroupOfCompaniesNameChanged)

cy.log('Заполнение поля "Код"')
ListOfCompanyGroups.getCodeFilter().type(data.CompanyGroupCodeChanged)
cy.wait(3000)

cy.log('Переход в детальную страницу группы компаний')
ListOfCompanyGroups.getGrLimitDetailPage().children().first().click()

cy.log('Нажать иконку удалить')
CompanyGrParametrs.getBtnTableDeleteClick(data.NameZenit)
cy.wait(1000)

cy.log('Проверка заголовка в модальном окне удаления')
DeleteModalWindow.getHeadModalDelete().click().should('contain.text', 'Удалить компанию из состава группы?')

cy.log('Проверка текста алерта в модальном окне удаления')
//\u00A0 - это неразрывной пробел, в DOM страницы = &nbsp;
DeleteModalWindow.getAlertModalDelete().click().should('contain.text', `Компания [ИНН: ${data.INNZenit}]\u00A0${data.NameZenit}\u00A0больше не будет входить в группу\u00A0${data.GroupOfCompaniesNameChanged}.`)

cy.log('Проверка заголовка текстового поля')
DeleteModalWindow.getTextReasonLabel().should('contain.text', 'Причина удаления')

cy.log('Заполнение комментария')
DeleteModalWindow.getTextReason().type('Автотест')

cy.log('Нажать на удаление контекстного меню')
DeleteModalWindow.getSubmitCompanyModalDelete().click()
cy.wait(1000)

cy.log('Проверить переход на детальную страницу группы компаний')
cy.url().should('contains', Cypress.env('urlTestStg') + '/limits/group-companies/')

cy.log('Проверка отсутствия компании в группе')
CompanyGrParametrs.getCompanyName().should('not.contain.text', data.NameZenit)

})

})




