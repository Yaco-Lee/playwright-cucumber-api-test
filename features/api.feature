Feature: API Testing for meta endpoint

  Scenario: Verify GET request to meta endpoint returns expected status code
    Given the API endpoint is set to "https://fake-json-api.mock.beeceptor.com/" 
    When I send a GET request
    Then the response status code should be 200

  Scenario: Verify GET request to meta endpoint returns expected 'paths' field
    Given the API endpoint is set to "https://fake-json-api.mock.beeceptor.com/" 
    When I send a GET request
    Then the response should contain the field "paths"

  Scenario: Verify GET request to meta endpoint returns expected 'status' field
    Given the API endpoint is set to "https://fake-json-api.mock.beeceptor.com/" 
    When I send a GET request
    Then the response should contain the field "status"

# For the above scenarios I modified the Titles to separate assertions, changed API base URL, and change expected field names to match API definition