#Author: Nasir Khan
Feature: GF-1337
  As a user
  In order to submit my cost items correctly
  I shoulld be able to edit cost items

  @Sprint4
  Scenario: User able to enter cost items and edit entered by revisting same cost item
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    And I open section "Costs"
    And I  add cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I should be able save and Continue
    And I open section "Costs"
    When I click on added Item
    Then I should be able to edit cost Items
      | Training-Autotest-Updated | 300 | Training required to deliver Seminar Innovations |
    And I should be able save and Continue

  @Sprint4
  Scenario: User able to add cost items and then delete one of the item if needed.
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    When I open section "Costs"
    Then I should be able to add cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I should be able to add one more cost item
      | Stationary-Autotest | 200 | Stationary required to deliver Seminar Innovations |
    And I should be able to add one more cost item
      | Travel-Autotest | 100 | Travel required to deliver Seminar Innovations |
    And I should be able save and Continue
    When I open section "Costs"
    Then I should be able to delete 1 item
    And I should see 2 cost items remaining
