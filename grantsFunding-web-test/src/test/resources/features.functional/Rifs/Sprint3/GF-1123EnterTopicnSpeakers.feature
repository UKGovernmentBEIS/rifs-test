#Author: Nasir Khan
Feature: GF-1123 Enter Topic and Speakers
  As a user 
  In order to apply for an opportunity
  I should be able to enter topic and speakers.

  Background: 
    Given I am on the opportunity detail page
    When I click on Make an application
    And I open section "TopicsnSpeakers"

  @Sprint3
  Scenario Outline: Verify user able topics and speakers info and save.
    Then I should be able to enter "<text>" in "TopicsnSpeakers"
    And I should be able save and Continue
    And I should return back to overview page.

    Examples: 
      | text                                   |
      | Seminar on space technologies-autoTest |

  @Sprint3
  Scenario Outline: Verify user able to enter free text in the title field and able to mark as complete
    And I  enter "<text>" in "TopicsnSpeakers"
    Then I should be able select mark as complete checkbox  "TopicsnSpeakers" page
    And I should be able save and Continue
    And I should return back to overview page.

    Examples: 
      | text                                   |
      | Seminar on space Technologies AutoTest |

  @Sprint3
  Scenario Outline: Verify date time stamp is displayed when mark as complete is clicked
    And I  enter "<text>" in "TopicsnSpeakers"
    And I should be able select mark as complete checkbox  "TopicsnSpeakers" page
    And I should be able save and Continue
    Then I should be able to see date and time stamp on "TopicsnSpeakers" page

    Examples: 
      | text                                           |
      | Seminar on space Technologies verify timestamp |

  @Sprint3
  Scenario: Validate mark as complete for entered text >500
    And I  enter 501 words in "TopicsnSpeakers"
    And I should be able select mark as complete checkbox  "TopicsnSpeakers" page
    And I should be able save and Continue
    Then I should see error message "Word limit exceeded"

  @Sprint3
  Scenario: Validate user able to enter 500 words and mark as complete
    And I  enter 500 words in "TopicsnSpeakers"
    And I should be able select mark as complete checkbox  "TopicsnSpeakers" page
    And I save and continue
    Then I should be able to see date and time stamp on "TopicsnSpeakers" page

  #Validate word count:
  @Sprint3
  Scenario Outline: Verify word count to show n words remaining when marked as complete
    And I  enter <wordCount> words in "TopicsnSpeakers"
    And I save and continue
    And I open section "TopicsnSpeakers"
    Then I should see word count "<count>" on "TopicsnSpeakers"

    Examples: 
      | wordCount                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | count                |
      | 5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Words remaining: 495 |
      | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Words remaining: 499 |
      | 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Words remaining: 496 |
      | 503 | 3 words over limit |
      | 500 | Words remaining: 0 |
