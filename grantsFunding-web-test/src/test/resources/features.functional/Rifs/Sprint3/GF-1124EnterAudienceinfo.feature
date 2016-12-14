#Author: Nasir Khan
Feature: GF-1124 Enter EventAudience
  As a user 
  In order to apply for an opportunity
  I should be able to enter event audience

  Background: 
    Given I am on the opportunity detail page
    When I click on Make an application
    And I enter application reference
    And I open section "EventAudience"

  @Sprint3
  Scenario Outline: Verify user able topics and speakers info and save.
    Then I should be able to enter "<text>" in "EventAudience"
    And I should be able save and Continue
    And I should return back to overview page.

    Examples: 
      | text                                   |
      | Seminar on space technologies-autoTest |

  @Sprint3
  Scenario Outline: Verify user able to enter free text in the title field and able to mark as complete
    And I  enter "<text>" in "EventAudience"
    Then I should be able select mark as complete checkbox  "EventAudience" page
    And I should be able save and Continue
    And I should return back to overview page.

    Examples: 
      | text                                   |
      | Seminar on space Technologies AutoTest |

  @Sprint3
  Scenario Outline: Verify date time stamp is displayed when mark as complete is clicked
    And I  enter "<text>" in "EventAudience"
    And I should be able select mark as complete checkbox  "EventAudience" page
    And I save and continue
    Then I should be able to see date and time stamp on "EventAudience" page

    Examples: 
      | text                                     |
      | Seminar on space Technologies time stamp |

  @Sprint3
  Scenario: Validate mark as complete for entered text >500
    And I  enter 501 words in "EventAudience"
    And I should be able select mark as complete checkbox  "EventAudience" page
    And I should be able save and Continue
    Then I should see error message "Word limit exceeded"

  @Sprint3
  Scenario: Validate user able to enter 500 words and mark as complete
    And I  enter 500 words in "EventAudience"
    And I should be able select mark as complete checkbox  "EventAudience" page
    And I save and continue
    Then I should be able to see date and time stamp on "EventAudience" page

  #Validate word count:
  @Sprint3
  Scenario Outline: Verify word count to show n words remaining when marked as complete
    And I  enter <wordCount> words in "EventAudience"
    And I save and continue
    And I open section "EventAudience"
    Then I should see word count "<count>" on "EventAudience"

    Examples: 
      | wordCount                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | count                |
      | 5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Words remaining: 495 |
      | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Words remaining: 499 |
      | 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Words remaining: 496 |
      | 503 | 3 words over limit   |
      | 500 | Words remaining: 0   |
