import { timeoutData } from '../data/timeout.data';

class HomePage {
    constructor(page) {
        this.page = page;
        this.homeTab = this.page.locator(`//a[text()='Home']`);
        this.startShoppingButton = this.page.locator(`//a[contains(text(),'Start Shopping') and contains(@class,'btn')]`);
    }

    /**
     * Navigates to the Home page by clicking the Home tab.
     * Waits for the Home tab to be visible before clicking.
     * @param {void}
     * @returns {Promise<void>} Resolves when navigation is complete.
     */
    async goToHomePage() {
        await this.homeTab.waitFor({ state: 'visible', timeout: timeoutData.navigationTimeout });
        await this.homeTab.click();
        console.log('Navigated to Home page');
        await this.page.waitForLoadState('networkidle');
        console.log('Home page is fully loaded');
    }

    /**
     * Clicks the 'Start Shopping' button on the Home page.
     * Waits for the button to be visible before clicking.
     * @returns {Promise<void>} Resolves when the button is clicked.
     */
    async clickOnStartShoppingButton() {
        await this.startShoppingButton.waitFor({ state: 'visible', timeout: timeoutData.navigationTimeout });
        await this.startShoppingButton.click();
        console.log('Clicked on Start Shopping button');
    }
}

export { HomePage };