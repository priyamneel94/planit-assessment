import { timeoutData } from "../data/timeout.data";

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartIcon = this.page.locator(`//i[contains(@class,'icon-shopping-cart')]/parent::a`);
        this.itemsTable = this.page.locator(`//table`)
        this.tableHeading = this.itemsTable.locator(`//th`);
        /**
         * Returns a locator for a table row by its index.
         * @param {number} index - Row index (1-based).
         * @returns {Locator} Locator for the table row.
         */
        this.tableRowByIndex = function(index) {
            return this.itemsTable.locator(`//tbody/tr[${index}]`);
        }

        /**
         * Returns a locator for a table cell by row and column index.
         * @param {number} rowIndex - Row index (1-based).
         * @param {number} colIndex - Column index (1-based).
         * @returns {Locator} Locator for the table cell.
         */
        this.tableCellByRowAndCol = function(rowIndex, colIndex) {
            return this.itemsTable.locator(`//tbody/tr[${rowIndex}]/td[${colIndex}]`);
        }

        /**
         * Returns a locator for all table cells in a given column.
         * @param {number} colIndex - Column index (1-based).
         * @returns {Locator} Locator for all cells in the column.
         */
        this.tableCellByColumn = function(colIndex) {
            return this.itemsTable.locator(`//tbody/tr/td[${colIndex}]`);
        }
        this.totalPrice = this.page.locator(`//tfoot/tr[1]`)
    }

    /**
     * Navigates to the cart page and waits for it to be fully loaded.
     * @returns {Promise<void>} Resolves when navigation and loading are complete.
     */
    async goToCartPage() {
        await this.cartIcon.waitFor({ state: 'visible', timeout: timeoutData.defaultTimeout });
        await this.cartIcon.click();
        console.log('Navigated to Cart page');
        await this.itemsTable.waitFor({ state: 'visible', timeout: timeoutData.navigationTimeout });
        console.log('Cart page is fully loaded')
    }

    /**
     * Gets the column index for a given table heading.
     * @param {string} heading - The column heading to search for.
     * @returns {Promise<number>} The column index (1-based).
     */
    async getColumnIndexByTableHeading(heading) {
        const headers = await this.tableHeading.allTextContents();
        return (headers.indexOf(heading) + 1);
    }

    /**
     * Gets the row index for a given item name.
     * @param {string} itemName - The item name to search for.
     * @returns {Promise<number>} The row index (1-based).
     */
    async getRowIndexByItemName(itemName) {
        const itemIndex = await this.getColumnIndexByTableHeading('Item');
        const itemNames = await this.tableCellByColumn(itemIndex).allTextContents();
        const trimmedNames = itemNames.map(name => name.trim());
        return trimmedNames.indexOf(itemName) + 1;
    }

    /**
     * Gets the value of a cell for a given item name and column name.
     * @param {string} itemName - The item name to search for.
     * @param {string} columnName - The column name to search for.
     * @returns {Promise<string>} The cell value as a string.
     */
    async getColumnValueByItemName(itemName, columnName) {
        const itemIndex = await this.getRowIndexByItemName(itemName);
        const columnIndex = await this.getColumnIndexByTableHeading(columnName);
        const cell = this.tableCellByRowAndCol(itemIndex, columnIndex);
        return (await cell.textContent());
    }

    /**
     * Calculates the sum of all item subtotals in the cart.
     * @returns {Promise<number>} The sum of all subtotals.
     */
    async getSumOfSubtotalOfAllItems() {
        const subtotalIndex = await this.getColumnIndexByTableHeading('Subtotal');
        const subtotals = await this.tableCellByColumn(subtotalIndex).allTextContents();
        return subtotals.reduce((acc, curr) => acc + parseFloat(curr.split('$')[1]), 0);
    }

    /**
     * Gets the total price from the cart summary.
     * @returns {Promise<string>} The total price as a string.
     */
    async getTotalPrice() {
        const totalPrice = await this.totalPrice.innerText();
        return totalPrice.split(':')[1].trim();
    }
}

export { CartPage };
