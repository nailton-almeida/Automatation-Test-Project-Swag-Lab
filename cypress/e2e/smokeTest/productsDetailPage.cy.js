/// <reference types="cypress" />

describe('Product Detail Page Test', function () {

    beforeEach(() => {
        cy.loginInUI();
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').click()

    })

    it("Check image photo is valid", function () {
        cy.get('[data-test="item-sauce-labs-backpack-img"]').should('be.visible')
            .and('have.prop', 'naturalWidth')
            .should('be.greaterThan', 0)

        cy.get('[data-test="item-sauce-labs-backpack-img"]')
            .and('have.prop', 'naturalHeight')
            .should('be.greaterThan', 0)
    })

    it("Check product details information", function () {

        cy.get('[data-test="inventory-item-desc"]').should('be.visible')
            .and('have.length.greaterThan', 0)
            .and('have.text', "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.")

        cy.get('[data-test="inventory-item-name"]').should('be.visible')
            .and("have.text", "Sauce Labs Backpack")
    })

})