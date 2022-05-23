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


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

//Перейти во вкладку "Группы компаний"
ListOfCompanyGroups.getTabGroupLimits().should('contain.text', 'Группы компаний').click()

//Проверка кнопки фильтра, что она заблокирована
ListOfCompanyGroups.getResetFilter().should('be.disabled')

// Заполнение поля "Компания"
ListOfCompanyGroups.getCompanyFilter().type(data.NameLiptSoft)

// Заполнение поля "Название"
ListOfCompanyGroups.getGroupNameFilter().type(data.GroupOfCompaniesName)

// Заполнение поля "Код"
ListOfCompanyGroups.getCodeFilter().type('999946445')

// Проверка кнопки фильтра что она разблокирована
ListOfCompanyGroups.getResetFilter().should('be.enabled')

// Проверка текста при отсутствии результатов
cy.wait(500)
ListOfCompanyGroups.getNoSearchResults().should('contain.text', 'По этому запросу ничего не найдено.')

// Заполнение поля "Код"
ListOfCompanyGroups.getCodeFilter().clear().type(data.CompanyGroupCode)

// Переход в детальную страницу группы компаний
ListOfCompanyGroups.getGrLimitDetailPage().children().first().click()

// Проверка названия заголовка
CompanyGrParametrs.getHead().should('contain.text', 'Параметры группы компаний')

// Проверка названия группы
CompanyGrParametrs.getGrName().should('contain.value', data.GroupOfCompaniesName)

// Проверка кода группы
CompanyGrParametrs.getGrCode().should('contain.value', data.CompanyGroupCode)

// Проверка названия компании
CompanyGrParametrs.getCompanyName().should('contain.text', data.NameLiptSoft)

// Проверка ИНН компании
CompanyGrParametrs.getCompanyInn().should('contain.text', data.INNLiptSoft)

})

})



