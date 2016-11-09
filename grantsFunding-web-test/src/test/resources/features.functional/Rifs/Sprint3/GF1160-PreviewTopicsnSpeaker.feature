#Author: Nasir Khan
Feature: GF-1160 Preview Topic and speakers
	As a user in order to submit application
	I should be able preview entered topic and speakers info.
	
Background:
Given I am on the opportunity detail page
And I click on Make an application
And I open section "TopicsnSpeakers"
@Sprint3	
Scenario Outline: Entered words <500 should be previewable
When I  enter "<text>" in "TopicsnSpeakers"
Then I should be able to preview 
And I should be able to view entered "<text>"
Examples:
|text|
|Seminar on space technologies autoTest|

@Sprint3
Scenario: Empty eventObj cannot preview
When I  enter "" in "TopicsnSpeakers"
And I click on preview
Then I should see error message "Field cannot be empty"

@Sprint3
Scenario Outline: Entered words >=500 should be previewable
When I  enter "<text>" in "TopicsnSpeakers"
Then I should be able to preview 
And I should be able to view entered "<text>"
Examples:
|text|
|t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t  t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t t|


Scenario: Empty title cannot preview
And I am on the event tite page
When I keep title field empty
And I click on preview
Then I should see error message "Field cannot be empty"



Scenario: Entered words marked as complete should be previewable.
Scenario: Empty field cannot be previewed.nothing should happened? 
Scenario: Edit link on preview should return back to edit title page
Scenario: Close link on preview should close preview and return back to application overview.
Scenario: Entered word can be previewed before saved and on preview close, entered words should be transiently saved. 
Scenario: Edit link in preview should replace time stamp with Mark as complete link.
Scenario: Validate preview before mark as complete, edit link in preview should return back to edit page with still showing link "Mark as complete"