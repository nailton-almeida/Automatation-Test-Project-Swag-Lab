/// <reference types="cypress" />

class BasePage {

    visitPage(urlPath) {
        cy.visit(urlPath)
    }

    clickElement(locatorElement, contentElement = false) {

        if (contentElement !== false) {
            cy.get(locatorElement).contains(contentElement).click()
        }

        else {
            cy.get(locatorElement).click()
        }
    }

    typeInElement(locatorElement, stringToType, contentElement = false) {

        if (contentElement !== false) {
            cy.get(locatorElement).contains(contentElement).type(stringToType)
        }
        else {
            cy.get(locatorElement).type(stringToType)
        }
    }

    checkElementVisible(locatorElement, contentElement = false) {
        if (contentElement !== false) {
            return cy.get(locatorElement).contains(contentElement).should('be.visible')
        }

        else {
            return cy.get(locatorElement).should('be.visible')
        }
    }

    checkElementExist(locatorElement, shouldExist= true, contentElement = false) {
        const assertion = shouldExist ? 'exist' : 'not.exist';
        
        if (contentElement !== false) {
            return cy.get(locatorElement).contains(contentElement).should(assertion)
        }

        else {
            return cy.get(locatorElement).should(assertion)
        }
    }
}

export default BasePage;