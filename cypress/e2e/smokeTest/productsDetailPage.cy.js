/// <reference types="cypress" />

import productDetail from "../pages/productDetailPage"

describe('Product Detail Page Test', function () {

    beforeEach(() => {
        cy.loginInUI();
        productDetail.clickElement(productDetail.getInventoryItemName(), productDetail.getProductName())
    })

    it("Check image photo is valid", function () {
        productDetail.checkImageProduct();
    })

    it.only("Check product details information", function () {

        productDetail.checkProductName();
        productDetail.checkProductDescription();
    })

})