const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, request } = require('@playwright/test');
const axios = require('axios');

Given('the API endpoint is set to {string}', function (endpoint) {
    this.endpoint = endpoint;

}); 

