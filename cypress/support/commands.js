// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from "../e2e/pages/loginPage"
import inventoryPage from "../e2e/pages/inventoryPage";


Cypress.Commands.add('loginInUI', function () {
    cy.fixture('..//fixtures//credencialsToAutentication.json').then((fakeUserData) => {
        cy.visit('/')
        loginPage.checkElementVisible(loginPage.getUsernameElement())
        loginPage.enterUsername(fakeUserData.validCredencials.validUsername);
        loginPage.enterPassword(fakeUserData.validCredencials.validPassword);
        loginPage.clickSubmitLoginButton();
        inventoryPage.checkElementVisible(inventoryPage.getHeaderContainer());
    })
})

