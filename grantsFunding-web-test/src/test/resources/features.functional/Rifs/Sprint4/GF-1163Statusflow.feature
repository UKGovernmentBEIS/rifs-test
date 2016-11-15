#Author: your.email@your.domain.com

Feature: Application status flow.

Background:
Given I am on the opportunity detail page
When I click on Make an application

@current
Scenario: Verify user able to enter date in Provisional Date and view status as Completed
And I open provisional date section
And I enter valid date
|22|01|2017|
And I enter duration "4"
And I click mark as complete
And I save and continue
Then I should return back to overview page.
And I should be able to see status as "Completed"

Scenario Outline: Verify user able enter text in Event Objective and view status as In Progress
Given I am on application overview page
And I open event objectives page
When I enter event objective "<text>"
And I save and continue
Then I should return back to overview page.
And I should be able to see status as Completed
And I should be able to see status as In Progress
Examples: 
|text|
|This is a test message - AutoTest|

Scenario: Verify user able to enter date in Provisional Date and view status as Completed
Given I am on application overview page
When I open provisional date section
And I enter valid date
|22|01|2017|
And I enter duration "4"
And I click mark as complete
And I save and continue
Then I should return back to overview page
And I should be able to see status as Completed
