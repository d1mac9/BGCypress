/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import listOfCompanyGroups from '../../pageObjects/listOfCompanyGroups';
import sidebar from '../../pageObjects/sidebar';
import contextMenu from '../../pageObjects/contextMenu';
import companyGrParametrs from '../../pageObjects/companyGrParametrs';


describe ('ChangeCompanyGr', function (){

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

it ('ChangeCompanyGr', function (){

    const ListOfCompanyGroups = new listOfCompanyGroups()
    const AuthPage = new authPage()
    const Sidebar = new sidebar()
    const CompanyGrParametrs = new companyGrParametrs()
    const ContextMenu = new contextMenu()


  cy.visit( Cypress.env('urlTestStg'))


cy.log('Авторизоваться по админом, нажать войти')
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

cy.log('Выбрать "Лимиты гарантий"')
Sidebar.getMenuItem().contains('Лимиты гарантий').click()

cy.log('Перейти во вкладку "Группы компаний"')
ListOfCompanyGroups.getTabGroupLimits().should('contain.text', 'Группы компаний').click()

cy.log('Заполнение поля "Компания"')
ListOfCompanyGroups.getCompanyFilter().type(data.NameLiptSoft)

cy.log('Заполнение поля "Название"')
ListOfCompanyGroups.getGroupNameFilter().type(data.GroupOfCompaniesName)

cy.log('Заполнение поля "Код"')
ListOfCompanyGroups.getCodeFilter().clear().type(data.CompanyGroupCode)
cy.wait(1000)

cy.log('Переход в детальную страницу группы компаний')
ContextMenu.getBtnEdit().click({force: true})


cy.log('Нажать кнопку "Редактировать"')
CompanyGrParametrs.getBtnEditGroup().click()

cy.log('Проверка, что кнопка сохранить по дефолту задизейблена')
CompanyGrParametrs.getBtnEditGroup().parent().should('be.disabled')

cy.log('Проверить название алерта')
CompanyGrParametrs.getAlert().should('contain.text', 'Введите название и код группы из решения об установлении лимита.')

cy.log('Проверить заголовок поля "Название"')
CompanyGrParametrs.getLabelGrName().should('contain.text', 'Название')

cy.log('Проверить наличие подсказки под полем "Название"')
CompanyGrParametrs.getHintGrName().should('contain.text', 'Максимум 30 символов')

cy.log('Проверить заполненное название')
CompanyGrParametrs.getGrName().should('contain.value', data.GroupOfCompaniesName)

cy.log('Изменить название')
CompanyGrParametrs.getGrName().clear().type(data.GroupOfCompaniesNameChanged)

cy.log('Проверить заголовок поля "Код"')
CompanyGrParametrs.getLabelGrCode().should('contain.text', 'Код')

cy.log('Проверить наличие подсказки под полем "Код"')
CompanyGrParametrs.getHintGrCode().should('contain.text', 'Максимум 10 символов')

cy.log('Проверить заполненный код')
CompanyGrParametrs.getGrCode().should('contain.value', data.CompanyGroupCode)

cy.log('Изменить Код')
CompanyGrParametrs.getGrCode().clear().type(data.CompanyGroupCodeChanged)

cy.log('Проверить заголовок поля "Причина изменения"')
CompanyGrParametrs.getLabelReason().should('contain.text', 'Причина изменения')

cy.log('Проверить плейсхолдер поля "Причина изменения"')
CompanyGrParametrs.getReason().should('have.attr', 'placeholder', 'Например, согласно такому-то постановлению')

cy.log('Заполнить поле "Причина изменения"')
CompanyGrParametrs.getReason().type('Автотест')

cy.log('Нажать "Сохранить"')
CompanyGrParametrs.getBtnEditGroup().click()

cy.log('Нажать кнопку "Назад"')
cy.get('.back-button-module_wrapper__2lR16').click()

cy.log('Заполнение поля "Название"')
ListOfCompanyGroups.getGroupNameFilter().clear().type(data.GroupOfCompaniesNameChanged)

cy.log('Заполнение поля "Код"')
ListOfCompanyGroups.getCodeFilter().clear().type(data.CompanyGroupCodeChanged)

cy.log('Переход в детальную страницу группы компаний')
ListOfCompanyGroups.getGrLimitDetailPage().children().first().click()

cy.log('Проверка названия группы')
CompanyGrParametrs.getGrName().should('contain.value', data.GroupOfCompaniesNameChanged)

cy.log('Проверка кода группы')
CompanyGrParametrs.getGrCode().should('contain.value', data.CompanyGroupCodeChanged)
})

})




