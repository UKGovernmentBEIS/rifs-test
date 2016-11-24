Feature: GF-1162 Applicant previews cost details

  Background: 
    Given I am on the opportunity detail page
    And I click on Make an application
    And I open section "Costs"
    And I add cost items
      | Training-Autotest | 500 | Training required to deliver Seminar Innovations |
    And I click on save
    And Costs page should display the "Preview this page" button

  @Sprint4
  Scenario: User able to enter cost items and preview costs - happy path
    When I click "Preview this page" at Costs page
    Then I should see the "Costs preview page"
    And I should be able to see the "Return to application overview" link at costs preview
    And I should be able to see the cost item added
      | Training-Autotest | 500.00 |
    And The Total Requested is '500.00'
    And I should be able to see the "Close" button at costs preview

  @Sprint4
  Scenario: User able to enter cost items, preview costs and return back to Costs page
    When I click "Preview this page" at Costs page
    And I see the "Costs preview page"
    And I see the "Return to application overview" link at costs preview
    And I click the "Return to application overview" link at costs preview
    Then I should see application "Overview - RIFS" page

  @Sprint4
  Scenario: When applicant selects the Close button, then they are navigated to Application overview page
    When I click "Preview this page" at Costs page
    And I see the "Costs preview page"
    And I click the "Close" button at costs preview
    Then I should see application "Costs - RIFS" page
    And I should see 1 cost items remaining
    And Cost items should be
      | Training-Autotest | 500.00 |
