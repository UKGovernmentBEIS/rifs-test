#Auther : Nasir Khan
Feature: Appication start page
As a user 
In order to apply for an opportunity
I should be able to see applicant link to start applying.



Scenario:Start page to show applicant start link
Given I launch application
Then I should be able to land on start page
And I should see applicant start link


Scenario: Applicant link clickable and open in same page.
Given I launch application
When I click on applicant link
Then I should be able to see opportunity list page

Scenario: Start page to general page header
Given I lanuch application
Then I should be bae to land on start page
And I see page header as general ""

@manual
Scenario: Start page to be as per GDS Standard

@manual 
Scenario: Cross browser test

@performance
Scenario: Load test start page.







 

