#Author: Nasir Khan
Feature: GF-1125 Cost Entry
  GF-1126
  GF-1337
  As a user
  In order to apply for an opportunity
  I should be able to enter itemised cost for the event

  @Sprint4
  Scenario: User able to enter cost items and save - happy path
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    When I open section "Costs"
    Then I should be able to add cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I click on save
    And I should be able save and Continue
    And I should be able to see "Costs"status as "In progress"

  @Sprint4
  Scenario: User able to enter cost items and mark as complete - happy path
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    When I open section "Costs"
    Then I should be able to add cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I click on save
    And I should be able select mark as complete checkbox  "costs" page
    And I should be able save and Continue
    And I should be able to see "Costs"status as "Completed"

  @Sprint4
  Scenario: User able to add more than one items and save - happy path
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
    And I should be able to see "Costs"status as "In progress"

  @Sprint4
  Scenario: User able to add 10 or above items and save - happy path
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    When I open section "Costs"
    Then I should be able to add 10 cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I should be able save and Continue
    And I should be able to see "Costs"status as "In progress"

  @Sprint4
  Scenario: User able to mark as complete when total items costs is <=2000
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    When I open section "Costs"
    Then I should be able to add cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I should be able to add one more cost item
      | Stationary-Autotest | 200 | Stationary required to deliver Seminar Innovations |
    And I should be able to add one more cost item
      | Travel-Autotest | 1300 | Travel required to deliver Seminar Innovations |
    And I should be able select mark as complete checkbox  "costs" page
    And I should be able save and Continue
    And I should be able to see "Costs"status as "Completed"

  #Validation check scenarios
  @Sprint4
  Scenario: user should not be able to mark as complete if the total cost exceeds 2000
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    When I open section "Costs"
    And I should be able to add 5 cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I should be able select mark as complete checkbox  "costs" page
    And I should be able save and Continue
    Then I should see error message "Total requested exceeds limit. Please check costs of items."

  @Sprint4
  Scenario: user should not be able to save cost item with invalid cost entry
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    And I open section "Costs"
    And I should be able to add cost item with invalid currency
      | Training-Autotest | xxx.xx | Training required to deliver Seminar Innovations |
    Then I should see error message "Must be a valid currency value"

  @Sprint4
  Scenario: user should not be able to save cost item with empty item name field
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    And I open section "Costs"
    And I should be able to add cost item with invalid currency
      |  | 20 | Training required to deliver Seminar Innovations |
    Then I should see error message "'item' cannot be empty"

  @Sprint4
  Scenario: user should not be able to save cost item with empty justification field
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    And I open section "Costs"
    And I should be able to add cost item with invalid currency
      | Training-Autotest | 20.00 |  |
    Then I should see error message "'justification' cannot be empty"

  @Sprint4
  Scenario: user should get an error message when wordcount exceeds 200 words
    Given I am on the opportunity detail page
    And I click on Make an application
    And I enter application reference
    When I open section "Costs"
    And I should be able to add cost items
      | Training-Autotest | 500 | T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T T |
    Then I should see error message "Word limit exceeded"
