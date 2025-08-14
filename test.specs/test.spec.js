/**
 * Playwright test suite for Jupiter Toys application.
 * Contains test cases for form submission, notifications, and cart operations.
 *
 * Test Case 1: Submit form with empty mandatory fields and verify error notifications.
 * Test Case 2: Submit form with valid data and verify success notifications.
 * Test Case 3: Buy products, verify price and subtotal for each product, and verify total price.
 */
import { test, expect } from '@playwright/test';
import { envConfig } from '../config/env.config.js';
import { staticData } from '../data/static.data.js';
import { notificationData } from '../data/notification.data.js';
import { testSuiteData } from '../data/test.suite.data.js';
import { Index } from '../page.objects/pages.index.js';

test.describe('Test Suite', () => {
    test.setTimeout(180000);
    let page;
    
    test.beforeAll(async ({ browser }) => {
        console.log('<=== In Before All ===>');
        console.log(`Running test on ${browser.browserType().name()} version: ${browser.version()}`);
        page = await browser.newPage();
    });

    test.beforeEach(async ({}) => {
        console.log('<=== In Before Each ===>');
        console.log(`Navigating to base URL: ${envConfig.baseUrl}`);
        await page.goto(envConfig.baseUrl);
    });

    test('Test Case 1 - Submit Form with empty mandatory fields and verify error notifications. Verify error notification are not visible when form is filled', async () => {
        console.log('<=== In Test Case 1 ===>');
        const index = new Index(page)
        await index.contactPage.goToContactPage();
        await index.contactPage.clickOnSubmit();
        let headerNotification = await index.contactPage.getHeaderNotification();
        expect(headerNotification).toBe(notificationData.ContactPage.errorNotification);
        let actualMandatoryFieldsErrorNotifications = await index.contactPage.getAllMandatoryFieldsErrorNotifications();
        let expectedMandatoryFieldsErrorNotifications = [
            notificationData.ContactPage.emptyForename,
            notificationData.ContactPage.emptyEmail,
            notificationData.ContactPage.emptyMessage
        ];
        expect(actualMandatoryFieldsErrorNotifications).toEqual(expectedMandatoryFieldsErrorNotifications);
        await index.contactPage.enterForename(testSuiteData.testCase1.forename);
        await index.contactPage.enterEmail(testSuiteData.testCase1.email);
        await index.contactPage.enterMessage(testSuiteData.testCase1.message);
        expect(await index.contactPage.mandatoryFieldsErrorNotification.isVisible()).toBe(false);
        headerNotification = await index.contactPage.getHeaderNotification();
        expect(headerNotification).toBe(notificationData.ContactPage.successNotification);
        console.log('Test Case 1 completed successfully');
    });

    test('Test Case 2 - Submit Form with valid data', async () => {
        console.log('<=== In Test Case 2 ===>');
        const index = new Index(page);
        await index.contactPage.goToContactPage();
        await index.contactPage.enterForename(testSuiteData.testCase2.forename);
        await index.contactPage.enterEmail(testSuiteData.testCase2.email);
        await index.contactPage.enterMessage(testSuiteData.testCase2.message);
        let headerNotification = await index.contactPage.getHeaderNotification();
        expect(headerNotification).toBe(notificationData.ContactPage.successNotification);
        await index.contactPage.clickOnSubmit();
        await index.contactPage.waitForSendingFeedbackProgressBarToDisappear();
        headerNotification = await index.contactPage.getHeaderSuccessNotification();
        expect(headerNotification).toBe(notificationData.ContactPage.successHeaderNotification(testSuiteData.testCase2.forename));
        console.log('Test Case 2 completed successfully');
    });

    test('Test Case 3 - Buy product and verify price of each product. Verify total price', async () => {
        console.log('<=== In Test Case 3 ===>');
        const index = new Index(page);
        await index.homePage.clickOnStartShoppingButton();
        await index.shopPage.addToCart(testSuiteData.testCase3.items);
        await index.cartPage.goToCartPage();
        for (const product of testSuiteData.testCase3.items) {
            expect((await index.cartPage.getColumnValueByItemName(product.product, 'Price')).split('$')[1]).toBe((staticData.shopPage.prices[product.product]).split('$')[1]);
            console.log(`Verified price of item ${product.product}`);
            expect(parseFloat((await index.cartPage.getColumnValueByItemName(product.product, 'Subtotal')).split('$')[1])).toBe(parseFloat((staticData.shopPage.prices[product.product]).split('$')[1]) * product.quantity);
            console.log(`Verified subtotal of item ${product.product}`);
        }
        expect(parseFloat(await index.cartPage.getTotalPrice())).toBe(await index.cartPage.getSumOfSubtotalOfAllItems());
        console.log('Verified total price matches the sum of all item subtotals');
        console.log('Test Case 3 completed successfully');
    });

    test.afterEach(async () => {
        console.log('<=== In After Each ===>');
        const index = new Index(page);
        await index.homePage.goToHomePage();
    });

    test.afterAll(async () => {
        console.log('<=== In After All ===>');
        await page.close();
        console.log('Test suite completed successfully');
    });
});
