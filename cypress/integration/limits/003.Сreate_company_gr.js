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


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

//Нажать на кнопку "Создание группового лимита"
ListOfCompanyGroups.getTabGroupLimits().should('contain.text', 'Группы компаний').click()
cy.wait(2000)
ListOfCompanyGroups.getButtonCreateCompanyGr().click()

// проверка заголовков полей
CreateCompanyGr.getHead().should('contain.text', 'Создание группы компаний')

// проверка текста алерта
CreateCompanyGr.getAlertText().should('contain.text', 'Введите название и код группы из решения об установлении лимита.')

//Заполнить поле "Название"
CreateCompanyGr.getGrName().type(data.GroupOfCompaniesName)

//Заполнить поле "Код"
CreateCompanyGr.getGrCode().type(data.CompanyGroupCode)

//Заполнить поле "Выбор компаний"
CreateCompanyGr.getCompaniesSearch().type(data.NameLiptSoft)
cy.wait(2000)

//Выбрать компанию
CreateCompanyGr.getListOfCompany().click()

//Нажать "Выбрать"
CreateCompanyGr.getBtnChoose().click()
cy.wait(2000)

//Нажать на кнопку "Создать группу"
CreateCompanyGr.getBtnCreateGroup().click()
cy.wait(1000)

//Проверка заголовка страницы
GrLimitDetails.getHead().should('contain.text', 'Лимиты группы компаний')

//Проверка названия группы
GrLimitDetails.getGroupName().should('contain.text', data.GroupOfCompaniesName)

//Проверка кода группы
GrLimitDetails.getGrCode().should('contain.text', data.CompanyGroupCode)

//Проверка кол-ва компаний
GrLimitDetails.getCountOfCompanies().should('contain.text', '1')

//Раскрыть аккордеон
GrLimitDetails.getAccordeonTab().click()

//Проверить название компании
GrLimitDetails.getСomposition().should('contain.text', `[ИНН: ${data.INNLiptSoft}] ${data.NameLiptSoft}`)
})

})




