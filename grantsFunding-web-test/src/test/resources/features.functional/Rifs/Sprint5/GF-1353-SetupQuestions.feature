#Author: Nasir Khan
Feature: GF-1353 Preview opportunity questions

  Background: 
    Given I launch application
    And I click portfoliomanagerlink
    When I choose existing opportunity on create oportunity page
    And I open published opportunity from the list
@Sprint6
  Scenario: Validate questions tab displays all six questions :
   And I open opportunity template view
   When I click on Questions tab
   Then I should see all six questions displayed
  
  
  
  
  