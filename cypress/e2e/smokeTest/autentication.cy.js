/// <reference types="cypress" />

import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/inventoryPage";

describe('Authentication in login form tests', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.fixture('credencialsToAutentication').as('fakeUserData');
    });

    it("Success login with valid credencials", function () {
        loginPage.checkElementVisible(loginPage.getUsernameElement())
        loginPage.enterUsername(this.fakeUserData.validCredencials.validUsername);
        loginPage.enterPassword(this.fakeUserData.validCredencials.validPassword);
        loginPage.clickSubmitLoginButton();
        inventoryPage.checkElementVisible(inventoryPage.getHeaderContainer());
    })

    it("Fail login with invalid credencials", function () {
        loginPage.checkElementVisible(loginPage.getUsernameElement())
        loginPage.enterUsername(this.fakeUserData.invalidCredencials.invalidUsername);
        loginPage.enterPassword(this.fakeUserData.invalidCredencials.invalidPassword);
        loginPage.clickSubmitLoginButton();
        loginPage.loginErrorMessage()

    })

    it("Fail login without user credencial", function () {
        loginPage.checkElementVisible(loginPage.getUsernameElement())
        loginPage.enterPassword(this.fakeUserData.invalidCredencials.invalidPassword);
        loginPage.clickSubmitLoginButton();
        loginPage.loginErrorMessage()
    })

    it("Fail login without pass credencial", function () {
        loginPage.checkElementVisible(loginPage.getUsernameElement())
        loginPage.enterUsername(this.fakeUserData.invalidCredencials.invalidUsername);
        loginPage.clickSubmitLoginButton();
        loginPage.loginErrorMessage()
    })
});