Feature: API Testing for Generate Fake Users endpoint

  Scenario: Verify GET request to users endpoint returns expected status code
    Given the API endpoint is set to "{BASE_URL}/users"
    When I send a GET request
    Then the response status code should be 200
    And response content type should be "application/json"
    And response body should contain an array of user objects

  Scenario: Verify response body contains all fields
    Given the API endpoint is set to "{BASE_URL}/users"
    When I send a GET request
    Then response fields should have the following fields and data types:
      | Field     | Data Type        |
      | id        | number           |
      | name      | string           |
      | company   | string           |
      | username  | string           |
      | email     | string           |
      | address   | string           |
      | zip       | string           |
      | state     | string           |
      | country   | string           |
      | phone     | string           |
      | photo     | string (URL)     |


