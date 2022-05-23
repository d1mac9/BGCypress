/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import addCompanyInGr from '../../pageObjects/addCompanyInGr';
import listOfCompanyGroups from '../../pageObjects/listOfCompanyGroups';
import sidebar from '../../pageObjects/sidebar';
import companyGrParametrs from '../../pageObjects/companyGrParametrs';

describe ('AddCompanyInGroup', function (){

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

it ('AddCompanyInGroup', function (){

  const ListOfCompanyGroups = new listOfCompanyGroups()
  const AuthPage = new authPage()
  const CompanyGrParametrs = new companyGrParametrs()
  const AddCompanyInGr = new addCompanyInGr()
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
cy.wait(2000)

// Переход в детальную страницу группы компаний
ListOfCompanyGroups.getGrLimitDetailPage().children().first().click()

// Нажать кнопку "Добавить компании"
CompanyGrParametrs.getBtnAddCompany().click()
cy.wait(1000)

// Проверить название заголовка
AddCompanyInGr.getHead().should('contain.text', 'Добавление компаний в состав группы')

//Заполнить название компании
AddCompanyInGr.getCompanyChoose().type(data.NameZenit)
cy.wait(2000)

//Выбрать компанию
AddCompanyInGr.getListOfCompany().click()

//Нажать "Выбрать"
AddCompanyInGr.getBtnChoose().click()

//Проверка названия столбца компании
AddCompanyInGr.getCompanyColumnName().should('contain.text', 'Компания')

//Проверка названия столбца ИНН
AddCompanyInGr.getInnColumnName().should('contain.text', 'ИНН')

//Проверка названия компании
AddCompanyInGr.getCompanyName().should('contain.text', data.NameZenit)

//Проверка ИНН компании
AddCompanyInGr.getCompanyInn().should('contain.text', data.INNZenit)

//Удаление уже добавленной компании
AddCompanyInGr.getBtnDeleteCompany().click()

//Заполнить название компании
AddCompanyInGr.getCompanyChoose().type(data.NameZenit)
cy.wait(2000)

//Выбрать компанию
AddCompanyInGr.getListOfCompany().click()


//Нажать "Выбрать"
AddCompanyInGr.getBtnChoose().click()

//Проверка названия заголовка комментария
AddCompanyInGr.getCommentLabel().should('contain.text','Причина добавления')

//Заполнить поле комментарий
AddCompanyInGr.getCommentReason().type('Автотест')

//Нажать кнопку "Добавить в группу"
AddCompanyInGr.getBtnCreateGr().click()

//Проверить переход на детальную страницу группы компаний
cy.wait(1000)
cy.url().should('contains', Cypress.env('urlTestStg') + '/limits/group-companies/')
})

})




