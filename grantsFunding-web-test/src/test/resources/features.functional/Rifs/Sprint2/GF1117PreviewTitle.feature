#Author: Nasir Khan
Feature: Preview title
	As a user in order to submit application
	I should be able preview entered title.
	
Background:
Given I am on the opportunity detail page
And I click on Make an application
	

@Sprint2
Scenario Outline: Entered words <=20 should be previewable
And I am on the event tite page
When I enter title "<title>" within required word size limit
Then I should be able to preview 
And I should be able to view entered "<title>"
Examples:
|title|
|Seminar on space technologies autoTest|
|Seminar one space|


@Sprint2
Scenario Outline: Entered words >=20 should be previewable
And I am on the event tite page
When I enter title "<title>" outside required word size limit
Then I should be able to preview 
And I should be able to view entered "<title>"
Examples:
|title|
|Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test|



Scenario: Entered words marked as complete should be previewable.
Scenario: Empty field cannot be previewed.nothing should happened? 
Scenario: Edit link on preview should return back to edit title page
Scenario: Close link on preview should close preview and return back to application overview.
Scenario: Entered word can be previewed before saved and on preview close, entered words should be transiently saved. 
Scenario: Edit link in preview should replace time stamp with Mark as complete link.
Scenario: Validate preview before mark as complete, edit link in preview should return back to edit page with still showing link "Mark as complete"