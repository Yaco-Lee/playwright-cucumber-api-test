const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Then('response body should contain an array of user objects', async function () {
    const responseBody = this.response.data;
    expect(Array.isArray(responseBody)).toBe(true);
});
