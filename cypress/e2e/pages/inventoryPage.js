import BasePage from "./basePage";

class InventoryPage extends BasePage {

    getHeaderContainer() { return '[data-test="header-container"]' }

    getInventoryList() { return '[data-test="inventory-list"]' }

    getInventoryFooter() { return '[data-test="footer"]' }

    getAddProductToCartButton() { return '[data-test="add-to-cart-sauce-labs-backpack"]' }

    getTextAddToCart() { return 'Add to cart' }

    getTextRemoveToCart() { return 'Remove' }

    getRemoveProductInCartButton() { return '[data-test="remove-sauce-labs-backpack"]' }

    getShoppingCartBadge() { return '[data-test="shopping-cart-badge"]' }

    inventoryItemPagination() {
        cy.get('[data-test="inventory-list"]').children().then((childrens) => {
            expect(childrens).to.have.length(6)
        })

        cy.get('[data-test="footer"]').scrollIntoView()
    }

    inventoryAddProductToCart() {
        this.clickElement(this.getAddProductToCartButton())
        this.checkElementVisible(this.getRemoveProductInCartButton(), this.getTextRemoveToCart())
        this.checkElementVisible(this.getShoppingCartBadge(), 1)

    }

    inventoryRemoveProductToCart() {
        this.clickElement(this.getAddProductToCartButton(), this.getTextAddToCart())
        this.clickElement(this.getRemoveProductInCartButton())
        this.checkElementVisible(this.getAddProductToCartButton(), this.getTextAddToCart())
        this.checkElementExist(this.getShoppingCartBadge(), false)


    }

}

export default new InventoryPage() 