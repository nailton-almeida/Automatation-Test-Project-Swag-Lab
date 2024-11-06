/// <reference types="cypress" />

import inventoryPage from "../pages/inventoryPage";

describe('Using inventory products page', () => {

    beforeEach(() => {
        cy.loginInUI();
    })

    it("Inventory Pagination", function () {
        inventoryPage.inventoryItemPagination();
    })

    it("Add product to cart", function () {
        inventoryPage.checkElementVisible(inventoryPage.getAddProductToCartButton(), inventoryPage.getTextAddToCart());
        inventoryPage.inventoryAddProductToCart();
    });

    it.only("Remove product in cart", function () {
        inventoryPage.checkElementVisible(inventoryPage.getAddProductToCartButton(), inventoryPage.getTextAddToCart())
        inventoryPage.inventoryRemoveProductToCart()
    })
})