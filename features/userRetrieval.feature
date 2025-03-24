Feature: API Testing for User Details retrieval endpoint

Scenario: Retrieve user details with valid user_id
    Given the API endpoint is set to "{BASE_URL}/users/{user_id}"
    When I send a GET request with valid user_id 123
    Then the response status code should be 200
    And response content type should be "application/json"
    And the response body should contain a user object with ID matching "123"
    And response fields should have the following fields and data types:
      | id      | number  |
      | name    | string  |
      | company | string  |
      | email   | string  |
      | phone   | string  |