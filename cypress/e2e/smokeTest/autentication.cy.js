/// <reference types="cypress" />

describe('Authentication in login form tests', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('credencialsToAutentication').as('fakeUserData');
    });

    it("Success login with valid credencials", function () {
        cy.get('.login_wrapper-inner').should('be.visible')
        cy.get('[data-test="username"]').type(this.fakeUserData.validCredencials.validUsername);
        cy.get('[data-test="password"]').type(this.fakeUserData.validCredencials.validPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="inventory-container"]').should('be.visible')
    })

    it("Fail login with invalid credencials", function () {
        cy.get('.login_wrapper-inner').should('be.visible')
        cy.get('[data-test="username"]').type(this.fakeUserData.invalidCredencials.invalidUsername);
        cy.get('[data-test="password"]').type(this.fakeUserData.invalidCredencials.invalidPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and("have.text", "Epic sadface: Username and password do not match any user in this service")
    })

    it("Fail login without user credencial", function () {
        cy.get('.login_wrapper-inner').should('be.visible')
        cy.get('[data-test="password"]').type(this.fakeUserData.invalidCredencials.invalidPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and("have.text", "Epic sadface: Username is required");
    })

    it("Fail login without user credencial", function () {
        cy.get('.login_wrapper-inner').should('be.visible')
        cy.get('[data-test="username"]').type(this.fakeUserData.invalidCredencials.invalidUsername);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and("have.text", "Epic sadface: Password is required");
    })




});