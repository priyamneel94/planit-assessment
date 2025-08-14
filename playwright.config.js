// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

module.exports = defineConfig({
  testDir: './test.specs',
  timeout: 60 * 1000,
  expect: {
    timeout: 10000
  },
  fullyParallel: false,
  workers: 1,
  reporter: [ ['line'],["allure-playwright", {
    detail: true,
    outputFolder: "./test.reports/allure-results",
    suiteTitle: true,
  },]],
  use: {
    actionTimeout: 0,
    testIdAttribute: 'id',
    headless: true,
    acceptDownloads: true,
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //     name: 'firefox',
    //     use: {
    //             contextOptions: {
    //             acceptDownloads: true,
    //         },
    //         ...devices['Desktop Firefox'],
    //         viewport: { width: 1600, height: 900 },
    //     }
    // },
    {
        name: 'Chrome',
        use: { 
            contextOptions: {
                permissions: ['clipboard-read', 'clipboard-write'],
                acceptDownloads: true,
            },
            ...devices['Desktop Chrome'],
            viewport: { width: 1600, height: 900 },
        }
    },
  ],
});