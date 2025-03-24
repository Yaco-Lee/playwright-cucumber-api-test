Feature: API Testing for meta endpoint

  Scenario: Verify GET request to meta endpoint returns expected status code and expected data fields
    Given the API endpoint is set to "{BASE_URL}/"
    When I send a GET request
    Then the response status code should be 200
    And the response should contain the field "paths"
    And the response should contain the field "status"