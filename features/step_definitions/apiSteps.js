const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const axios = require('axios');

Given('the API endpoint is set to {string}', function (endpoint) {
    this.endpoint = endpoint;
});

When('I send a GET request', async function () {
    const response = await axios.get(this.endpoint);
    this.response = response;
});

Then('the response status code should be {int}', function (statusCode) {
    expect(this.response.status).toBe(statusCode);
});

Then('the response should contain the field {string}', function (field) {
    expect(this.response.data).toHaveProperty(field);
});
