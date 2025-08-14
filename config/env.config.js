/**
 * Environment configuration for the test suite.
 * @typedef {Object} EnvConfig
 * @property {string} baseUrl - The base URL for the application under test.
 */
const envConfig = {
    baseUrl: process.env.TEST_ENV || 'https://jupiter.cloud.planittesting.com/',
};

export { envConfig };
