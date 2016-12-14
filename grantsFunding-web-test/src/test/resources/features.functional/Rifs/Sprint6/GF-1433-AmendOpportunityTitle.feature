#Author: Nasir Khan
Feature: GF-1433 Amend opportunity title
  As a Portfolio manager
  In order to setup an opportunity
  I should be able to amend opportunity titile

  @Sprint6
  Scenario Outline: Verify user able edit title info and save.
    Given I launch application
    And I click portfoliomanagerlink
    And I choose existing opportunity on create oportunity page
    And I open opportunity from the list
    And I open opportunity template view
    And I click on "Setup-Titile" link
    When I enter "<text>" in setup "Setup-Title"
    Then I should be able save
    And I should return back to set-up pages

    Examples: 
      | text                                   |
      | Seminar on space technologies-autoTest |

  @Sprint6
  Scenario: Vaidate opportunity title field not to save >20 words
    When I click on "Setup-Titile" link
    When I enter 25 in PM setup "Setup-Title"
    And I  click save
    Then I should see error message "Word limit exceeded"

  @Sprint6
  Scenario: Vaidate user not able to save with empty field
    When I enter "" in setup "Setup-Title"
    And I  click save
    Then I should see error message "Field cannot be empty"

  #Validate word count:
  @Sprint6
  Scenario Outline: Verify word count to show n words remaining
    When I enter <wordCount> in PM setup "Setup-Title"
    And I  click save
    And I click on "Setup-Titile" link
    Then I should see word count "<count>" on "Setup-Titile"

    Examples: 
      | wordCount | count               |
      |         5 | Words remaining: 15 |
      |         1 | Words remaining: 19 |
      |         4 | Words remaining: 16 |
      |        20 | Words remaining: 0  |

  @Sprint6
  Scenario Outline: verify word count shows words over limit when >20 words entered
    When I enter <wordCount> in PM setup "Setup-Title"
    Then I should see word count "<count>" on "Setup-Titile"

    Examples: 
      | wordCount | count               |
      |        23 | 3 words over limit  |
      |        30 | 10 words over limit |
