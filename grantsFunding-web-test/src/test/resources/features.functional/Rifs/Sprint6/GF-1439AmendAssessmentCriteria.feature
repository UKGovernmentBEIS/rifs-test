#Author: Nasir Khan
Feature: GF-1439 Amend Assessment criteria
  As a Portfolio manager
  In order to setup an opportunity
  I should be able to amend assessment criteria

  @Sprint6
  Scenario Outline: Verify user able edit assessment criteria and save
    Given I launch application
    And I click portfoliomanagerlink
    And I choose existing opportunity on create oportunity page
    And I open opportunity from the list
    And I open opportunity template view
    And I click on "setupAssessmentCriteria" link
    When I enter "<text>" in setup "setupAssessmentCriteria"
    Then I should be able save
    And I should return back to set-up pages

    Examples: 
      | text                                   |
      | Seminar on space technologies-autoTest |

  @Sprint6
  Scenario: Vaidate assessment criteria field not to save >500 words
    When I click on "setupAssessmentCriteria" link
    And I  enter 501 in setup "setupAssessmentCriteria"
    And I  click save
    Then I should see error message "Word limit exceeded"
@Sprint6
  Scenario: Validate user not able to save with empty field
    When I enter "" in setup "setupAssessmentCriteria"
    And I  click save
    Then I should see error message "Field cannot be empty"

  #Validate word count:
  @Sprint6
  Scenario Outline: Verify word count to show n words remaining 
    When I  enter <wordCount> in setup "setupAssessmentCriteria"
    And I  click save
    And I click on "setupAssessmentCriteria" link
    Then I should see word count "<count>" on "setupAssessmentCriteria"

    Examples: 
      | wordCount | count                |
      |         5 | Words remaining: 495 |
      |         1 | Words remaining: 499 |
      |         4 | Words remaining: 496 |
      |       500 | Words remaining: 0   |

      
 @Sprint6
  Scenario Outline: verify word count shows words over limit when >500 words entered
    When I  enter <wordCount> in setup "setupAssessmentCriteria"
    Then I should see word count "<count>" on "setupAssessmentCriteria"

    Examples: 
      | wordCount | count                |
      |       503 | 3 words over limit   |
      |       510 | 10 words over limit   |  