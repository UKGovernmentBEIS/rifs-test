#Author: Nasir Khan
Feature: GF-1233 Preview opportunity sections

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
   
   
@Sprint5
  Scenario: All sections are clickable
  And I open opportunity template view
  When I click on "Setup-Titile" link
  Then I should see "title" preview page
  
  When I click on "setupDeadline" link
  Then I should see "Opportunity deadlines" preview page

  When I click on "setupValue" link
  Then I should see "Grant Value" preview page
  
   When I click on "setupAssessmentCriteria" link
  Then I should see "Assessment criteria" preview page
  
   When I click on "setupAboutthisOpport" link
  Then I should see "About this opportunity" preview page
  
   When I click on "setupWhatweaskyou" link
  Then I should see "What we will ask you" preview page
  
  
  
  
  