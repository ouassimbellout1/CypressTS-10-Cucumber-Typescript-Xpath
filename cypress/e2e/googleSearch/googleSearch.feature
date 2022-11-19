Feature: Search with Google

  Background: Navigate to Google
    Given J'accede à google
    When Google est affiché

  Scenario: Hello again and google search 1
    Then First search

  Scenario: Hello again and google search 2
    Then Second search : "Cypress 11"
