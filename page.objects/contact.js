import { timeoutData } from '../data/timeout.data';

class ContactPage {
    constructor(page) {
        this.page = page;
        this.contactTab = this.page.locator(`//a[text()='Contact']`);
        this.submitButton = this.page.locator(`//a[text()='Submit']`);
        this.headerErrorNotification = this.page.locator('#header-message');
        this.headerSuccessNotification = this.page.locator(`//div[contains(@class,'alert-success')]`);
        this.mandatoryFieldsErrorNotification = this.page.locator(`//span[contains(@class,'help-inline')]`);
        this.forename = this.page.locator(`#forename`);
        this.email = this.page.locator(`#email`);
        this.message = this.page.locator(`#message`);
        this.sendingFeedback = this.page.locator(`//h1[text()='Sending Feedback']`);
    }

    /**
     * Navigates to the Contact page by clicking the Contact tab.
     * Waits for the Contact tab to be visible before clicking.
     * @returns {Promise<void>} Resolves when navigation is complete.
     */
    async goToContactPage() {
        await this.contactTab.waitFor({ state: 'visible', timeout: timeoutData.navigationTimeout });
        await this.contactTab.click();
        console.log('Navigated to Contact page');
        await this.page.waitForLoadState('networkidle');
        console.log('Contact page is fully loaded');
    }

    /**
     * Clicks the Submit button on the Contact page.
     * Waits for the button to be visible before clicking.
     * @returns {Promise<void>} Resolves when the button is clicked.
     */
    async clickOnSubmit() {
        await this.submitButton.waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
        await this.submitButton.click();
        console.log('Clicked on Submit button');
    }

    /**
     * Gets the text of the header notification.
     * Waits for the notification to be visible before retrieving text.
     * @returns {Promise<string>} The notification text.
     */
    async getHeaderNotification() {
        await this.headerErrorNotification.waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
        return this.headerErrorNotification.innerText();
    }

    /**
     * Gets the text of the header success notification post submission.
     * Waits for the notification to be visible before retrieving text.
     * @returns {Promise<string>} The success notification text.
     */
    async getHeaderSuccessNotification() {
        await this.headerSuccessNotification.waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
        return this.headerSuccessNotification.innerText();
    }

    /**
     * Gets the error messages for all mandatory fields as an array of strings.
     * Waits for the first error notification to be visible before retrieving all texts.
     * @returns {Promise<string[]>} Array of error notification texts.
     */
    async getAllMandatoryFieldsErrorNotifications() {
        await this.mandatoryFieldsErrorNotification.first().waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
        return this.mandatoryFieldsErrorNotification.allInnerTexts();
    }

    /**
     * Enters the provided forename into the forename field.
     * Waits for the field to be visible before filling.
     * @param {string} forename - The forename to enter.
     * @returns {Promise<void>} Resolves when the forename is entered.
     */
    async enterForename(forename) {
        await this.forename.waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
        await this.forename.fill(forename);
        console.log(`Entered forename: ${forename}`);
    }

    /**
     * Enters the provided email into the email field.
     * Waits for the field to be visible before filling.
     * @param {string} email - The email to enter.
     * @returns {Promise<void>} Resolves when the email is entered.
     */
    async enterEmail(email) {
        await this.email.waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
        await this.email.fill(email);
        console.log(`Entered email: ${email}`);
    }

    /**
     * Enters the provided message into the message field.
     * Waits for the field to be visible before filling.
     * @param {string} message - The message to enter.
     * @returns {Promise<void>} Resolves when the message is entered.
     */
    async enterMessage(message) {
        await this.message.waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
        await this.message.fill(message);
        console.log(`Entered message: ${message}`);
    }

    /**
     * Waits for the 'Sending Feedback' progress bar to appear and then disappear.
     * @returns {Promise<void>} Resolves when the progress bar disappears.
     */
    async waitForSendingFeedbackProgressBarToDisappear() {
        await this.sendingFeedback.waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
        console.log('Sending Feedback Progress bar appeared');
        await this.sendingFeedback.waitFor({ state: 'hidden', timeout: timeoutData.sendingFeedbackTimeout });
        console.log('Sending Feedback Progress bar disappeared');
    }
}

export { ContactPage };