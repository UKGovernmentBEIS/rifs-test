#Author: Adnan Khalid
Feature: GF-1428 ChooseTypeOfOpportunity
  
  As a user
  In order to apply for an opportunity
  I should be able to choose from Applicant or Portfolio manager

  @current
  Scenario: Verify Portfolio manager journey link is active
    Given I am on the start page
    When I click "portfoliomanagerlink"
    Then I should be directed to "create a new opportunity" page

  Scenario: Verify Portfolio managers name (Portfolio Peter) is present at top right corner of page
    Given I am on "create a new opportunity" page
    Then I should see "portfoliopeter" on top right corner

  Scenario: Verify Homepage link takes PM back to role selection start page
    Given I am on "create a new opportunity" page
    When I click on "Homepage" link
    Then it should take me back to the start page

  Scenario: Verify PM is able to select one of two options presented 'Create new opportunity & reuse existing opportunity' and Continue
    Given I am on the start page
    When I click "portfoliomanagerlink"
    Then I should be directed to "create a new opportunity" page
    And I should be able to select reuse an exisiting opportunity
    And I should be able to select Continue

  Scenario: Verify PM can cancel by selecting Cancel button and return to home page

  Scenario: Verify Guidance for portfolio managers navigates user to a guidance for portfolio managers page (Dummy page for now)
