import { timeoutData } from '../data/timeout.data';

class ShopPage{
    constructor(page) {
        this.page = page;
        this.indivisualProduct=this.page.locator(`//li[contains(@class,'product')]/div`);
        this.productTitle = this.indivisualProduct.locator(`//h4`);
        this.productPrice = this.indivisualProduct.locator(`//p/span`);
        this.productBuyButton = this.indivisualProduct.locator(`//p/a`);
    }

    /**
     * Waits for all products on the shop page to be loaded (network idle).
     * @returns {Promise<void>} Resolves when all products are loaded.
     */
    async waitForAllProductsToBeLoaded() {
        console.log('Waiting for all products to be loaded');
        await this.page.waitForLoadState('networkidle');
        console.log('All products are loaded');
    }

    /**
     * Adds products to the cart based on the provided cart data.
     * Waits for all products to be loaded before adding.
     * @param {Array<{product: string, quantity: number}>} cartData - Array of products and quantities to add to cart.
     * @returns {Promise<void>} Resolves when all products are added to the cart.
     */
    async addToCart(cartData) {
        await this.waitForAllProductsToBeLoaded();
        const count = await this.indivisualProduct.count();
        console.log(`Total products visible: ${count}`);
        console.log(`Adding products to cart: ${JSON.stringify(cartData)}`);
        for (const product of cartData) {
            console.log(`Processing product: ${product.product} with quantity: ${product.quantity}`);
            for (let i = 0; i < count; i++) {
                let productName = await this.productTitle.nth(i).innerText();
                if (productName === product.product) {
                    await this.productBuyButton.nth(i).waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
                    for (let j = 0; j < product.quantity; j++) {
                        await this.productBuyButton.nth(i).click();
                    }
                    console.log(`Added ${product.quantity} of ${productName} to cart`);
                    break;
                }
            }
        }
        console.log(`Added all products to cart`);
    }
}

export { ShopPage }