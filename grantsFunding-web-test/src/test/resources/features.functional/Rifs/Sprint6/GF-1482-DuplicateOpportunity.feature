#Author: Nasir Khan

Feature: GF-1482 Preview opportunity sections

@Sprint6
  Scenario: End to End duplicate opportunity and verify it appears in opportunity list
    Given I launch application
    And I click portfoliomanagerlink
    And I choose existing opportunity on create oportunity page
    And I open published opportunity from the list
    And I open opportunity template view
    When I click on duplicate this opportunity
    Then I should see new opportunity created

  Scenario Outline: Verify new opportunity appears in list page
    Given I click on "Setup-Titile" link
    And I enter "<text>" in setup "Setup-Title"
    And I  click save
    When I click on opportunity library link
    Then I should see my opportuinty "<text>" listed on the page

    Examples: 
      | text                                                   |
      | Created opportunity by duplicating existing -Auto Test |
