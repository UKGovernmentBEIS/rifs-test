#Author: Nasir Khan
Feature: GF-1127, GF-1166 Application submitted successfully
  As a user
  In order to apply for an opportunity
  I should be able to submit application successfully

  #GF-1127
  @Sprint4
  Scenario: Verify user able to submit application after completing all sections
    Given I am on the opportunity detail page
    And I click on Make an application
    When I click on event title link on application overview page
    Then I should be able to enter title "Seminar on space Technologies AutoTest"
    And I should be able select mark as complete checkbox  "EventTitle" page
    And I should be able save and Continue
    When I open provisional date section
    And I enter valid date
      | 22 | 01 | 2017 |
    And I enter duration "4"
    And I click mark as complete
    And I save and continue
    Then I should return back to overview page.
    When I open event objectives page
    Then I should be able to enter event objective "Seminar on space Technologies AutoTest"
    And I should be able select mark as complete checkbox  "EventObjective" page
    And I should be able save and Continue
    And I should return back to overview page.
    When I open section "TopicsnSpeakers"
    And I  enter "Speakers to deliver event speach" in "TopicsnSpeakers"
    Then I should be able select mark as complete checkbox  "TopicsnSpeakers" page
    And I should be able save and Continue
    And I should return back to overview page.
    When I open section "EventAudience"
    Then I should be able to enter "<text>" in "EventAudience"
    Then I should be able select mark as complete checkbox  "EventAudience" page
    And I should be able save and Continue
    And I should return back to overview page.
    When I open section "Costs"
    Then I should be able to add cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I should be able select mark as complete checkbox  "costs" page
    And I should be able save and Continue
    And I should be able to see "Costs"status as "Completed"
    When I click on submit Application button
    Then I should see application submitted page

  #GF-1166
  @Sprint4
  Scenario: Verify user should not be be able to submit when any of the sections in progress
    Given I am on the opportunity detail page
    And I click on Make an application
    When I click on event title link on application overview page
    Then I should be able to enter title "Seminar on space Technologies AutoTest"
    And I should be able save and Continue
    When I open provisional date section
    And I enter valid date
      | 22 | 01 | 2017 |
    And I enter duration "4"
    And I click mark as complete
    And I save and continue
    Then I should return back to overview page.
    When I open event objectives page
    Then I should be able to enter event objective "Seminar on space Technologies AutoTest"
    And I should be able select mark as complete checkbox  "EventObjective" page
    And I should be able save and Continue
    And I should return back to overview page.
    When I open section "TopicsnSpeakers"
    And I  enter "Speakers to deliver event speach" in "TopicsnSpeakers"
    Then I should be able select mark as complete checkbox  "TopicsnSpeakers" page
    And I should be able save and Continue
    And I should return back to overview page.
    When I open section "EventAudience"
    Then I should be able to enter "<text>" in "EventAudience"
    Then I should be able select mark as complete checkbox  "EventAudience" page
    And I should be able save and Continue
    And I should return back to overview page.
    When I open section "Costs"
    Then I should be able to add cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I should be able select mark as complete checkbox  "costs" page
    And I should be able save and Continue
    And I should be able to see "Costs"status as "Completed"
    When I click on submit Application button
    Then I should see page error "All questions must be answered"
    And I should see error "Event title   In progress"
