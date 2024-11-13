import BasePage from "./basePage"

class ProductDetail extends BasePage {


    getInventoryItemName() { return '[data-test="inventory-item-name"]' }

    getProductImage() { return '[data-test="item-sauce-labs-backpack-img"]' }

    getProductDescriptionElement() { return '[data-test="inventory-item-desc"]' }

    getProductName() { return 'Sauce Labs Backpack' }

    getProductDescritionText() { return "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection." }

    checkImageProduct() {
        this.checkImageinPage(this.getProductImage())
    }

    checkProductDescription() {
        this.checkTextInPage(this.getProductDescriptionElement(), this.getProductDescritionText())
    }

    checkProductName() {
        this.checkTextInPage(this.getInventoryItemName(), this.getProductName())
    }






}

export default new ProductDetail()

