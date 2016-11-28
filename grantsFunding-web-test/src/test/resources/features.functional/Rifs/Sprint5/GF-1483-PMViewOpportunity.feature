#Author: Nasir Khan
Feature: As a Portfolio manager
  In order to create new opportunity
  I should be able to Preview existing opportunity

  @current
  Scenario: Verify user able to preview existing opportunity- Passed
    Given I launch application
    And I click portfoliomanagerlink
    When I choose existing opportunity on create oportunity page
    And I open opportunity from the list
    Then I should be able to see opportunity details
    And I should see all the sections

  Scenario: Verify user able to navigate through each of the sections through next button -Failed

  Scenario: Verify return to opportunity link returns to opportunity library- Passed

  Scenario: Verify opportunity preview page to show template view link - Passed

  Scenario: Verify when user clicks on template view link it will navigate to template view page.

  Scenario: Verify opportunity preview page to show guidance link which should take to guidance page. - Not implemented yet.   GF-1429 IN VERIFICATION
