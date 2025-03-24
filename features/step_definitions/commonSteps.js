require('dotenv').config(); 
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, request } = require('@playwright/test');

Given('the API endpoint is set to {string}', function (endpoint) {
    const baseUrl = process.env.BASE_URL;
    this.endpoint = endpoint.replace('{BASE_URL}', baseUrl);
});

When('I send a GET request', async function () {
    const apiContext = await request.newContext();
    const response = await apiContext.get(this.endpoint);
  
    this.response = {
      status: response.status(),
      headers: response.headers(),
      data: await response.json()
    };
  
    await apiContext.dispose();
  });

Then('the response status code should be {int}', async function (statusCode) {
    expect(this.response.status).toBe(statusCode);
});

Then('the response should contain the field {string}', async function (field) {
    expect(this.response.data).toHaveProperty(field);
});

Then('response content type should be {string}', async function (responseContentType) {
  const contentType = this.response.headers['content-type'];
  expect(contentType).toBe(responseContentType);
});

Then('response fields should have the following fields and data types:', async function (dataTable) {
  const rows = dataTable.rows();
  let body = this.response.data;

  const users = Array.isArray(body) ? body : [body];

  users.forEach(user => {
    rows.forEach(([field, expectedType]) => {
      expect(user).toHaveProperty(field);

      const actualValue = user[field];
      if (expectedType === 'number') {
        expect(typeof actualValue).toBe('number');
      } else if (expectedType === 'string') {
        expect(typeof actualValue).toBe('string');
      } else if (expectedType === 'string (URL)') {
        expect(typeof actualValue).toBe('string');
        expect(actualValue).toMatch(/^https?:\/\/.+/);
      } else {
        throw new Error(`Unknown expected type: ${expectedType}`);
      }
    });
  });
});