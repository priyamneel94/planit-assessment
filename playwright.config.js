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
    reporter: [
      ['line'],
      ['html', { outputFolder: 'playwright-report', open: 'never' }]
    ],
  use: {
    actionTimeout: 0,
    testIdAttribute: 'id',
    headless: true,
    acceptDownloads: true,
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1600, height: 900 },
        contextOptions: {
          permissions: ['clipboard-read', 'clipboard-write'],
          acceptDownloads: true,
        },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1600, height: 900 },
        contextOptions: {
          acceptDownloads: true,
        },
      },
    },
  ],
});

