/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import listOfCompanyGroups from '../../pageObjects/listOfCompanyGroups';
import companyGrParametrs from '../../pageObjects/companyGrParametrs';
import sidebar from '../../pageObjects/sidebar';


describe ('FindIndLimit', function (){

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

it ('FindIndLimit', function (){

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

//Нажать на кнопку "Создание группового лимита"
ListOfCompanyGroups.getTabGroupLimits().should('contain.text', 'Группы компаний').click()

// Заполнение поля "Компания"
ListOfCompanyGroups.getCompanyFilter().type(data.NameLiptSoft)

// Заполнение поля "Название"
ListOfCompanyGroups.getGroupNameFilter().type(data.GroupOfCompaniesName)

// Заполнение поля "Код"
ListOfCompanyGroups.getCodeFilter().type('999946445')


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
CompanyGrParametrs.getGroupName().should('contain.value', data.GroupOfCompaniesName)

// Проверка кода группы
CompanyGrParametrs.getGroupCode().should('contain.value', data.CompanyGroupCode)

// Проверка названия компании
CompanyGrParametrs.getCompanyName().should('contain.text', data.NameLiptSoft)

// Проверка ИНН компании
CompanyGrParametrs.getCompanyInn().should('contain.text', data.INNLiptSoft)

})

})




