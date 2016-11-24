#Author: your.email@your.domain.com
Feature: Application status flow.

  Background: 
    Given I am on the opportunity detail page
    When I click on Make an application

  @Sprint4
  Scenario: Verify status when user marks as complete for event title
    And I open section "EventTitle"
    And I  enter "Test status for event title question" in "EventTitle"
    And I should be able select mark as complete checkbox  "EventTitle" page
    And I should be able save and Continue
    Then I should return back to overview page.
    And I should be able to see "EventTitle"status as "Completed"

  @Sprint4
  Scenario: Verify status when user save and continue for event title
    And I open section "EventTitle"
    And I  enter "Test status for event title question" in "EventTitle"
    And I should be able save and Continue
    Then I should return back to overview page.
    And I should be able to see "EventTitle"status as "In progress"

  @Sprint4
  Scenario: Verify status when user save and continue for event title
    And I open section "EventTitle"
    And I  enter "" in "EventTitle"
    And I should be able save and Continue
    Then I should return back to overview page.
    And I should be able to see "EventTitle"status as "Not started"

  @Sprint4
  Scenario: Verify status when user marks as complete for event Audience
    And I open section "EventAudience"
    And I  enter "Test status for event audience question" in "EventAudience"
    And I should be able select mark as complete checkbox  "EventAudience" page
    And I should be able save and Continue
    Then I should return back to overview page.
    And I should be able to see "EventAudience"status as "Completed"

  @Sprint4
  Scenario: Verify status when user save and continue for event Audience
    And I open section "EventAudience"
    And I  enter "Test status for event audience question" in "EventAudience"
    And I should be able save and Continue
    Then I should return back to overview page.
    And I should be able to see "EventAudience"status as "In progress"

  @Sprint4
  Scenario: Verify user able to enter date in Provisional Date and view status as Completed
    And I open provisional date section
    And I enter valid date
      | 22 | 01 | 2017 |
    And I enter duration "4"
    And I click mark as complete
    And I save and continue
    Then I should return back to overview page.
    And I should be able to see "provisionalDate"status as "Completed"

  @Sprint4
  Scenario: Verify user able to enter date in Provisional Date and view status as Completed
    And I open provisional date section
    And I enter valid date
      | 22 | 01 | 2017 |
    And I enter duration "4"
    And I save and continue
    Then I should return back to overview page.
    And I should be able to see "provisionalDate"status as "In progress"

  Scenario: Validate save and continue to keep the status of question in "In-progress"

  Scenario: Validate nothing entered should keep the status as Not started

  Scenario: Validate user entered info + marked as complete + preview - should keep the status "In-progress" ??

  Scenario: Validate user entered info +mark as complete + save and continue - should update the status as "Completed"

  Scenario: Validate completed question when user opens - It should open in preview page

  Scenario: Validate edit link on preview should replace the time stamp checkbox mark as complete with edit mode - not implemented yet.

  Scenario: Validate user when opens In progress status question, it should open page in edit mode

  Scenario: Validate user updates entered text and save and continue should keep the status in In-progress

  Scenario: Validate user updates completed section with same text(removes and re-enters) then it should keep the status as completed.

  Scenario: Validate user in edit page, if they preview they should see only close button and close button should take back to edit page but not overview page.

  Scenario: Validate user previews completed question, preview page close button should return back to overview page.

  Scenario: Validate when user opens a completed question and clicks on edit and remove all the entered text and click on save and continue it should update the status as "Not started"

  Scenario: Validate when user opens an In progress question and removes entered text and hit save and continue, it should return back to overview with status as "Not started"

  Scenario: Validate completed question when opened in edit and without editing any info, user clicks on return to application overview on top, it should return to overview page with status as In-Progress.
