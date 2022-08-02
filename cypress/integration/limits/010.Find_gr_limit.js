/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import listOfGrLimits from '../../pageObjects/listOfGrLimits';
import grLimitDetails from '../../pageObjects/grLimitDetails';
import sidebar from '../../pageObjects/sidebar';


describe ('FindGrLimit', function (){

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

it ('FindGrLimit', function (){

    const ListOfGrLimits = new listOfGrLimits()
    const AuthPage = new authPage()
    const GrLimitDetails = new grLimitDetails()
    const Sidebar = new sidebar()


  cy.visit( Cypress.env('urlTestStg'))


cy.log('Авторизоваться по админом, нажать войти')
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

cy.log('Выбрать "Лимиты гарантий"')
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

cy.log('Перейти во вкладку "Групповые лимиты"')
ListOfGrLimits.getTabGroupLimits().should('contain.text', 'Групповые лимиты').click()

cy.log('Проверка кнопки фильтра, что она заблокирована')
ListOfGrLimits.getResetFilter().should('be.disabled')

cy.log('Заполнение поля "Компания"')
ListOfGrLimits.getCompanyFilter().type(data.NameLiptSoft)

cy.log('Заполнение поля "Группа компаний"')
ListOfGrLimits.getGroupOfCompaniesFilter().type(data.GroupOfCompaniesName)

cy.log('Заполнение поля "Мин. сумма лимита"')
ListOfGrLimits.getMinAmountFilter().type(data.SumLimit)

cy.log('Заполнение поля "Макс. сумма лимита"')
ListOfGrLimits.getMaxAmountFilter().type(data.SumLimit)

cy.log('Заполнение поля "Период действия с"')
ListOfGrLimits.getStartDateFilter().type(data.dateStart)

cy.log('Заполнение поля "Период действия по"')
ListOfGrLimits.getEndDateFilter().type('12112022')

cy.log('Проверка кнопки фильтра что она разблокирована')
ListOfGrLimits.getResetFilter().should('be.enabled')

cy.log('Проверка текста при отсутствии результатов')
cy.wait(500)
ListOfGrLimits.getNoSearchResults().should('contain.text', 'По этому запросу ничего не найдено.')

cy.log('Заполнение поля "Период действия по"')
ListOfGrLimits.getEndDateFilter().clear().type(data.dateEnd)

cy.log('Переход в детальную страницу группового лимита')
ListOfGrLimits.getGrLimitDetailPage().children().first().click()

cy.log('Проверка заголовка страницы')
GrLimitDetails.getHead().should('contain.text', 'Лимиты группы компаний')

cy.log('Проверка названия группы')
GrLimitDetails.getGroupName().should('contain.text', data.GroupOfCompaniesNameChanged)

cy.log('Проверка кода группы')
GrLimitDetails.getGrCode().should('contain.text', data.CompanyGroupCodeChanged)

cy.log('Проверка кол-ва компаний')
GrLimitDetails.getCountOfCompanies().should('contain.text', '1')

cy.log('Раскрыть аккордеон')
GrLimitDetails.getAccordeonTab().click()

cy.log('Проверка названия и ИНН компании')
GrLimitDetails.getСomposition().should('contain.text', `[ИНН: ${data.INNLiptSoft}] ${data.NameLiptSoft}`)
})

})




