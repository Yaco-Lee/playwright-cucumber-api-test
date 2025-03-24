const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, request } = require('@playwright/test');

When('I send a GET request with valid user_id {int}', async function (userId) {
    const apiContext = await request.newContext();
    const endpointWithId = this.endpoint.replace('{user_id}', userId);
    const response = await apiContext.get(endpointWithId);
  
    this.response = {
      status: response.status(),
      headers: response.headers(),
      data: await response.json()
    };
  
    await apiContext.dispose();
});

Then('the response body should contain a user object with ID matching {string}', function (expectedId) {
    const user = this.response.data;

    expect(user).toHaveProperty('id');
    expect(String(user.id)).toBe(expectedId); 
});
