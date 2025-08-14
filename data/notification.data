/**
 * Contains notification messages and templates for the Contact page.
 * @typedef {Object} NotificationData
 * @property {Object} ContactPage - Notifications related to the Contact page.
 * @property {string} ContactPage.errorNotification - Error message shown when mandatory fields are not completed.
 * @property {string} ContactPage.successNotification - Success message shown after feedback is submitted.
 * @property {function(string): string} ContactPage.successHeaderNotification - Returns a personalized success header message.
 * @property {string} ContactPage.emptyForename - Error message for empty forename field.
 * @property {string} ContactPage.emptyEmail - Error message for empty email field.
 * @property {string} ContactPage.emptyMessage - Error message for empty message field.
 */
const notificationData = {
    ContactPage: {
        errorNotification: `We welcome your feedback - but we won't get it unless you complete the form correctly.`,
        successNotification: `We welcome your feedback - tell it how it is.`,
        successHeaderNotification: (name) =>
            `Thanks ${name}, we appreciate your feedback.`,
        emptyForename: 'Forename is required',
        emptyEmail: 'Email is required',
        emptyMessage: 'Message is required'
    }
};

export { notificationData };
