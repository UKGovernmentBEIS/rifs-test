#Author: Nasir Khan
Feature: GF-1120 save and continue
As a user 
In order to apply for an opportunity
I should be able to enter title and save

Background:
Given I am on the opportunity detail page
When I click on Make an application
And I click on event title link on application overview page


@Sprint2
Scenario: Verify user able enter free text in title field and able to save.
Then I should be able to enter title "Seminar on space Technologies AutoTest"
And I should be able save and Continue
And I should return back to overview page.

@Pending
Scenario: Verify user able to enter free text in the title field and able to mark as complete
And I  enter title "Seminar on space Technologies AutoTest"
Then I should be able click mark as complete link
And I should remain on the same page.

@Pending
Scenario: Verify date time stamp is displayed when mark as complete is clicked
And I  enter title "Seminar on space Technologies AutoTest"
And I should be able click mark as complete link
Then I should be able to see date and time stamp 


#Validate word count:
@Sprint2
Scenario Outline: Verify word count to show n words remaining when marked as complete
And I enter title "<text>"
And I save and continue
And I open event title page again
Then I should see word count "<count>"
Examples:
|text|count|
|Seminar on space Technologies AutoTest| 15 words remaining |
|Seminar|19 words remaining |
|Seminar on space Technologies|16 words remaining|
|Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test|0 words remaining|
|Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test|2 words over limit|


Scenario: Verify word count to show n words remaining for <20 words when user clicks on save and continue and revisits event title page.
Scenario: Verify word count to show n words remaining for <20 words in title and user navigates to other links and revisits event title page.
#Entered words > 20 words
Scenario: Verify word count to show "n words over limit" when user enters >20 words and clicks on mark as complete
Scenario: Verify word count to show "n words over limit" when user enters >20 words and clicks on save and continue and re-visit event title page.
#Error Validations:
Scenario: Verify mark as complete on empty field should throw error message "Field cannot be empty"
Scenario: Verify preview link with empty field should throw error message "Field cannot be empty"
Scenario: Verify word >20 entered and click on mark as complete should throw error message "Word limit exceeded"
