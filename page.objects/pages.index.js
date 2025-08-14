/**
 * Aggregates all page objects for easy access in tests.
 * @class Index
 * @param {import('playwright').Page} page - Playwright page object.
 * @property {HomePage} homePage - Home page object.
 * @property {ShopPage} shopPage - Shop page object.
 * @property {ContactPage} contactPage - Contact page object.
 * @property {CartPage} cartPage - Cart page object.
 */
import { HomePage } from './home.js';
import { ContactPage } from './contact.js';
import { ShopPage } from './shop.js';  
import { CartPage } from './cart.js'; 

class Index {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.shopPage = new ShopPage(page);
        this.contactPage = new ContactPage(page);
        this.cartPage = new CartPage(page);
    }
}

export { Index };
