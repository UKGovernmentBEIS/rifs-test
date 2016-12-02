#Author: Nasir Khan
Feature: Preview opportunity sections

  Background: 
    Given I launch application
    And I click portfoliomanagerlink
    When I choose existing opportunity on create oportunity page
    And I open opportunity from the list
@Sprint5
  Scenario: Validate setup tab displays all six sections :
   And I open opportunity template view
   Then I should see setup 
   And I should see all the sections in SetupTab 
   
   

  Scenario: All sections are clickable

  Scenario: Verify opportunity title link display opportunity title

  Scenario: Verify on all preview pages, continue button returns back to set up tab

  Scenario: Verify all preview pages show content as given in the wireframe.
