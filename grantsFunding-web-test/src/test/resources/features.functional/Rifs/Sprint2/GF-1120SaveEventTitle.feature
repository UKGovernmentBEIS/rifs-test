#Author: Nasir Khan
Feature: As a user
In order to apply for an opportunity
I should be able to enter title and save

@Sprint2
Scenario: Verify user able enter free text in title field and able to save.
Given I am on the opportunity detail page
When I click on Make an application
And I click on event title link on application overview page
Then I should be able to enter title "Seminar on space Technologies AutoTest"
And I should be able save and Continue
And I should return back to overview page.



Scenario: Verify user able to enter free text in the title field and able to mark as complete
Scenario: Verify when user mark as complete after entering some words, it should show time date and time time replacing mark as complete link.
