#Author: Nasir Khan
Feature: GF-1122 Event Objective 
As a user 
In order to apply for an opportunity
I should be able to enter event object and preview

Background:
Given I am on the opportunity detail page
When I click on Make an application
And I open event objectives page

@Sprint3
Scenario: Verify user able enter objectives and save.
Then I should be able to enter event objective "Seminar on space Technologies AutoTest"
And I should be able save and Continue
And I should return back to overview page.

@Sprint3
Scenario Outline: Verify user able to enter free text in the title field and able to mark as complete
And I  enter event objective "<title>"
Then I should be able select mark as complete checkbox
And I should be able save and Continue
And I should return back to overview page.
Examples:
|title|
|Seminar on space Technologies AutoTest|

@Sprint3
Scenario Outline: Verify date time stamp is displayed when mark as complete is clicked
And I  enter event objective "Seminar on space Technologies AutoTest"
And I should be able select mark as complete checkbox  "EventObjs" page
And I save and continue
And I open event objectives page
Then I should be able to see date and time stamp on "EvenObjs" page
Examples:
|title|
|Seminar on space Technologies AutoTest|

#Validate word count:
@Sprint3
Scenario Outline: Verify word count to show n words remaining when marked as complete
And I enter event <wordCount> words in event objective
And I save and continue
And I open event objectives page
Then I should see word count "<hint>" on event ObjectivePage
Examples:
|wordCount|hint|
|5| Words remaining: 495 |
|1|Words remaining: 499 |
|4|Words remaining: 496 |
|503|3 words over limit|

@Sprint3
Scenario: Validate mark as complete for entered text >500
And I enter event 501 words in event objective
And I should be able select mark as complete checkbox  "EventObjs" page
And I should be able save and Continue
Then I should see error message "Word limit exceeded"

@Sprint3
Scenario: Validate user able to enter 500 words and mark as complete
And I enter event 500 words in event objective
And I should be able select mark as complete checkbox  "EventObjs" page
And I save and continue
And I open event objectives page
Then I should be able to see date and time stamp on "EvenObjs" page

@wip
Scenario: Verify word count to show n words remaining for <20 words when user clicks on save and continue and revisits event title page.
Scenario: Verify word count to show n words remaining for <20 words in title and user navigates to other links and revisits event title page.
#Entered words > 20 words
Scenario: Verify word count to show "n words over limit" when user enters >20 words and clicks on mark as complete
Scenario: Verify word count to show "n words over limit" when user enters >20 words and clicks on save and continue and re-visit event title page.
#Error Validations:
Scenario: Verify mark as complete on empty field should throw error message "Field cannot be empty"
Scenario: Verify preview link with empty field should throw error message "Field cannot be empty"
Scenario: Verify word >20 entered and click on mark as complete should throw error message "Word limit exceeded"
