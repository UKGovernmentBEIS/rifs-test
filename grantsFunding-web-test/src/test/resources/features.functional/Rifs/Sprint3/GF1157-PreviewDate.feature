#Author: Nasir Khan
Feature: GF-1157 Preview Event Date entered
  As a user in order to submit application
  I should be able preview entered event start date.

  Background: 
    Given I am on the opportunity detail page
    When I click on Make an application
    And I open section "provisionalDate"

  @Sprint3
  Scenario: happy path1- Validate user able to preview valid entered date and duration.
    And I enter valid date
      | 22 | 01 | 2017 |
    And I enter duration "4"
    Then I should be able to preview
    And I should see entered date"22 January 2017" in preview page
    And I should see end date "25 January 2017" in preview page
    And I should see duration "4" in preview page

  @Sprint3
  Scenario: happy path2- Validate user able to preview valid entered date and duration.
    And I enter valid date
      | 22 | 10 | 2017 |
    And I enter duration "5"
    Then I should be able to preview
    And I should see entered date"22 October 2017" in preview page
    And I should see end date "26 October 2017" in preview page
    And I should see duration "5" in preview page

  @Sprint3
  Scenario: Validate close button on preview to return to application overview
    And I click on preview
    And I click on close button preview
    Then I should return back to overview page.

  @Sprint3
  Scenario: close link on preview page to return back to Date entry page
    And I click on preview
    And I click on close button preview
    Then I should return back to Dateform page

  @Sprint3
  Scenario: Past date cannot be mark as complete
    And I enter invalid date
      | 3 | 01 | 2016 |
    And I enter duration "4"
    And I click on preview
    Then I should see error message "Must be today or later"

  @Sprint3
  Scenario: Verify user not able to preview with invalid month entered
    And I enter invalid date
      | 22 | 00 | 2017 |
    And I enter duration "4"
    And I click on preview
    Then I should see error message "Must provide a valid date"

  @Sprint3
  Scenario: invalid day
    And I enter invalid date
      | 35 | 01 | 2017 |
    And I enter duration "4"
    And I click on preview
    Then I should see error message "Must provide a valid date"

  @Sprint3
  Scenario: Validate error messsage when duration non numeric
    When I enter invalid date
      | 3 | 01 | 2017 |
    And I enter duration "days"
    And I click on preview
    Then I should see duration field error "Must be a whole number"

  @Sprint3
  Scenario: Validate error messsage when duration is empty
    When I enter invalid date
      | 3 | 01 | 2017 |
    And I enter duration ""
    And I click on preview
    Then I should see duration field error "Must be a whole number"
