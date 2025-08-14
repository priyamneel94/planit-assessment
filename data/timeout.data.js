/**
 * Timeout values for various actions in the test suite.
 * @typedef {Object} TimeoutData
 * @property {number} defaultTimeout - Default timeout for actions.
 * @property {number} navigationTimeout - Timeout for navigation actions.
 * @property {number} sendingFeedbackTimeout - Timeout for feedback submission.
 */
const timeoutData = {
    defaultTimeout: 5000,
    navigationTimeout: 10000,
    sendingFeedbackTimeout: 30000
};

export { timeoutData };