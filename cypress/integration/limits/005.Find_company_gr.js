/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import listOfCompanyGroups from '../../pageObjects/listOfCompanyGroups';
import companyGrParametrs from '../../pageObjects/companyGrParametrs';
import sidebar from '../../pageObjects/sidebar';


describe ('FindCompanyGr', function (){

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

it ('FindCompanyGr', function (){

    const ListOfCompanyGroups = new listOfCompanyGroups()
    const AuthPage = new authPage()
    const CompanyGrParametrs = new companyGrParametrs()
    const Sidebar = new sidebar()


  cy.visit( Cypress.env('urlTestStg'))


cy.log('Авторизоваться по админом, нажать войти')
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

cy.log('Выбрать "Лимиты гарантий"')
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

cy.log('Перейти во вкладку "Группы компаний"')
ListOfCompanyGroups.getTabGroupLimits().should('contain.text', 'Группы компаний').click()

cy.log('Проверка кнопки фильтра, что она заблокирована')
ListOfCompanyGroups.getResetFilter().should('be.disabled')

cy.log('Заполнение поля "Компания"')
ListOfCompanyGroups.getCompanyFilter().type(data.NameLiptSoft)

cy.log('Заполнение поля "Название"')
ListOfCompanyGroups.getGroupNameFilter().type(data.GroupOfCompaniesName)

cy.log('Заполнение поля "Код"')
ListOfCompanyGroups.getCodeFilter().type('999946445')

cy.log('Проверка кнопки фильтра что она разблокирована')
ListOfCompanyGroups.getResetFilter().should('be.enabled')

cy.log('Проверка текста при отсутствии результатов')
cy.wait(500)
ListOfCompanyGroups.getNoSearchResults().should('contain.text', 'По этому запросу ничего не найдено.')

cy.log('Заполнение поля "Код"')
ListOfCompanyGroups.getCodeFilter().clear().type(data.CompanyGroupCode)

cy.log('Переход в детальную страницу группы компаний')
ListOfCompanyGroups.getGrLimitDetailPage().children().first().click()

cy.log('Проверка названия заголовка')
CompanyGrParametrs.getHead().should('contain.text', 'Параметры группы компаний')

cy.log('Проверка названия группы')
CompanyGrParametrs.getGrName().should('contain.value', data.GroupOfCompaniesName)

cy.log('Проверка кода группы')
CompanyGrParametrs.getGrCode().should('contain.value', data.CompanyGroupCode)

cy.log('Проверка названия компании')
CompanyGrParametrs.getCompanyName().should('contain.text', data.NameLiptSoft)

cy.log('Проверка ИНН компании')
CompanyGrParametrs.getCompanyInn().should('contain.text', data.INNLiptSoft)

})

})




