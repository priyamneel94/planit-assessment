/**
 * Test data for the suite, including user info and cart items.
 * @typedef {Object} TestSuiteData
 * @property {Object} testCase1 - Data for test case 1.
 * @property {string} testCase1.forename - Forename for test case 1.
 * @property {string} testCase1.email - Email for test case 1.
 * @property {string} testCase1.message - Message for test case 1.
 * @property {Object} testCase2 - Data for test case 2.
 * @property {string} testCase2.forename - Forename for test case 2.
 * @property {string} testCase2.email - Email for test case 2.
 * @property {string} testCase2.message - Message for test case 2.
 * @property {Object} testCase3 - Data for test case 3.
 * @property {Array<Object>} testCase3.items - Array of cart items for test case 3.
 * @property {string} testCase3.items[].product - Product name.
 * @property {number} testCase3.items[].quantity - Quantity of the product.
 */
const testSuiteData = {
    testCase1: {
        forename: 'Axel Witsel',
        email: 'axelwillNeverGiveUp@example.com',
        message: 'This is a test message for Axel Witsel!'
    },
    testCase2: {
        forename: 'Cristiano Ronaldo',
        email: 'cristiano@example.com',
        message: 'This is a test message for Cristiano Ronaldo!'
    },
    testCase3: {
        items: [
            { product: 'Stuffed Frog', quantity: 2 },
            { product: 'Fluffy Bunny', quantity: 5 },
            { product: 'Valentine Bear', quantity: 3 }
        ]
    }
};

export { testSuiteData };