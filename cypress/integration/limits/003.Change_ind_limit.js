/// <reference types="Cypress" />

import authPage from '../../pageObjects/authPage';
import listOfIndLimits from '../../pageObjects/listOfIndLimits'
import sidebar from '../../pageObjects/sidebar';
import changeLimitModal from '../../pageObjects/changeLimitModal';
import contextMenu from '../../pageObjects/contextMenu';

describe ('ChangeIndLimit', function (){

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

it ('ChangeIndLimit', function (){

  const ListOfIndLimits = new listOfIndLimits()
  const AuthPage = new authPage()
  const Sidebar = new sidebar()
  const ChangeLimitModal = new changeLimitModal()
  const ContextMenu = new contextMenu()

  cy.visit( Cypress.env('urlTestStg'))


//Авторизоваться по админом, нажать войти
AuthPage.getLogin().type(data.fullAdmin)
AuthPage.getSubmitButton().click()

//Выбрать "Лимиты гарантий"
Sidebar.getMenuItem().contains('Лимиты гарантий').click()


// Заполнение поля "Компания"
ListOfIndLimits.getCompanyFilter().type(data.NameLiptSoft)

// Заполнение поля "Мин. сумма лимита"
ListOfIndLimits.getMinAmountFilter().type(data.SumLimit)

// Заполнение поля "Макс. сумма лимита"
ListOfIndLimits.getMaxAmountFilter().type(data.SumLimit)

// Заполнение поля "Период действия с"
ListOfIndLimits.getStartDateFilter().type(data.dateStart)

// Заполнение поля "Период действия по"
ListOfIndLimits.getEndDateFilter().type(data.dateEnd)

cy.wait(2000)

//Нажать на "Редактировать"
ContextMenu.getBtnEdit().click({force: true})

//Проверка, что кнопка сохранить по дефолту задизейблена
ChangeLimitModal.getBtnSubmit().should('be.disabled')

//Проверка заголовка в модальном окне удаления
ChangeLimitModal.getHead().should('contain.text', 'Изменение индивидуального лимита')

//Проверка заголовка названия и ИНН компании
ChangeLimitModal.getClientLabel().should('contain.text', 'Клиент')

//Проверка названия компании
ChangeLimitModal.getCompanyName().should('contain.text', data.NameLiptSoft)

//Проверка ИНН компании
ChangeLimitModal.getCompanyInn().should('contain.text', `ИНН ${data.INNLiptSoft}`)

//Проверка заголовка поля сумма лимита
ChangeLimitModal.getLimitSumLabel().should('contain.text', 'Сумма лимита')

//Проверка текущего значения суммы лимита
ChangeLimitModal.getLimitSum().should('contain.value', '100 000.00')

//Изменение текущего значения суммы лимита
ChangeLimitModal.getLimitSum().clear().type(data.SumLimitChanged)

//Проверка заголовка "Период действия"
ChangeLimitModal.getPeriodLabel().should('contain.text', 'Период действия')

//Проверка текущего значения даты начала лимита
ChangeLimitModal.getStartDate().should('contain.value', data.dateStart)

//Изменение значения даты начала лимита
ChangeLimitModal.getStartDate().clear().type(data.dateStartChanged)

//Проверка текущего значения даты окончания лимита
ChangeLimitModal.getEndDate().should('contain.value', data.dateEnd)

//Изменение значения даты окончания лимита
ChangeLimitModal.getEndDate().clear().type(data.dateEndChanged)

//Проверка заголовка "Причина изменения"
ChangeLimitModal.getReasonLabel().should('contain.text', 'Причина изменения')

//Заполнение поля "Причина изменения"
ChangeLimitModal.getReason().type('Автотест')

//Нажать на удаление контекстного меню
ChangeLimitModal.getBtnSubmit().click()

// Заполнение поля "Компания"
ListOfIndLimits.getCompanyFilter().clear().type(data.NameLiptSoft)

// Заполнение поля "Мин. сумма лимита"
ListOfIndLimits.getMinAmountFilter().clear().type(data.SumLimitChanged)

// Заполнение поля "Макс. сумма лимита"
ListOfIndLimits.getMaxAmountFilter().clear().type(data.SumLimitChanged)

// Заполнение поля "Период действия с"
ListOfIndLimits.getStartDateFilter().clear().type(data.dateStartChanged)

// Заполнение поля "Период действия по"
ListOfIndLimits.getEndDateFilter().clear().type(data.dateEndChanged)

cy.wait(2000)

// Переход в детальную страницу индивидуального лимита
ListOfIndLimits.getIndLimitDetailPage().children().first().click()

})
})