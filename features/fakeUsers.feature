Feature: Generate Fake Users endpoint
  Scenario: Verify successful generation of fake users
    Given the API endpoint is set to "https://fake-json-api.mock.beeceptor.com/users"
    When I send a GET request to the endpoint
    Then the response status code should be 200
    And the response content type should be "application/json"
    And the response body should contain an array of user objects
    And each user object should have the required fields: id, name, company, username, email, address, zip, state, country, phone, and photo