/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import createCompanyGr from '../../pageObjects/createCompanyGr';
import listOfCompanyGroups from '../../pageObjects/listOfCompanyGroups';
import grLimitDetails from '../../pageObjects/grLimitDetails';
import sidebar from '../../pageObjects/sidebar';

describe ('CreateCompanyGr', function (){

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

it ('CreateCompanyGr', function (){

  const ListOfCompanyGroups = new listOfCompanyGroups()
  const AuthPage = new authPage()
  const CreateCompanyGr = new createCompanyGr()
  const GrLimitDetails = new grLimitDetails()
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

cy.log('Нажать на кнопку "Создание группы компаний"')
ListOfCompanyGroups.getButtonCreateCompanyGr().click()

cy.log('проверка заголовков полей')
CreateCompanyGr.getHead().should('contain.text', 'Создание группы компаний')

cy.log('проверка текста алерта')
CreateCompanyGr.getAlertText().should('contain.text', 'Введите название и код группы из решения об установлении лимита.')

cy.log('Заполнить поле "Название"')
CreateCompanyGr.getGrName().type(data.GroupOfCompaniesName)

cy.log('Заполнить поле "Код"')
CreateCompanyGr.getGrCode().type(data.CompanyGroupCode)

cy.log('Заполнить поле "Выбор компаний"')
CreateCompanyGr.getCompaniesSearch().type(data.NameLiptSoft)
cy.wait(2000)

cy.log('Выбрать компанию')
CreateCompanyGr.getListOfCompany().click()

cy.log('Нажать "Выбрать"')
CreateCompanyGr.getBtnChoose().click()
cy.wait(2000)

cy.log('Нажать на кнопку "Создать группу"')
CreateCompanyGr.getBtnCreateGroup().click()
cy.wait(1000)

cy.log('Проверка заголовка страницы')
GrLimitDetails.getHead().should('contain.text', 'Лимиты группы компаний')

cy.log('Проверка названия группы')
GrLimitDetails.getGroupName().should('contain.text', data.GroupOfCompaniesName)

cy.log('Проверка кода группы')
GrLimitDetails.getGrCode().should('contain.text', data.CompanyGroupCode)

cy.log('Проверка кол-ва компаний')
GrLimitDetails.getCountOfCompanies().should('contain.text', '1')

cy.log('Раскрыть аккордеон')
GrLimitDetails.getAccordeonTab().click()

cy.log('Проверить название компании')
GrLimitDetails.getСomposition().should('contain.text', `[ИНН: ${data.INNLiptSoft}] ${data.NameLiptSoft}`)
})

})




