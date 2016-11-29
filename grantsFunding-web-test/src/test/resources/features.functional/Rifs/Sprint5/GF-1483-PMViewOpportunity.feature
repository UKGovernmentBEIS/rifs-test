#Author: Nasir Khan
Feature: As a Portfolio manager
  In order to create new opportunity
  I should be able to Preview existing opportunity

  @Sprint5
  Scenario: Verify user able to preview existing opportunity- Passed
    Given I launch application
    And I click portfoliomanagerlink
    When I choose existing opportunity on create oportunity page
    And I open opportunity from the list
    Then I should see all sections on opportunity detail page
  @Sprint5
  Scenario: Verify user able to navigate through each of the sections through next button -Failed
    When I click firstnext button
    Then I should see section "2. What we will ask you"
    When I click on next button again
    Then I should see section "3. Assessment criteria"
    When I click on previous button
    Then I should see section "2. What we will ask you"
  @Sprint5
  Scenario: Verify return to opportunity link returns to opportunity library- Passed
    When I click on return to opportunity link
    Then I should return back to opportunity list page
    

  Scenario: Verify opportunity preview page to show template view link - Passed

  Scenario: Verify when user clicks on template view link it will navigate to template view page.

  Scenario: Verify opportunity preview page to show guidance link which should take to guidance page. - Not implemented yet.   GF-1429 IN VERIFICATION
