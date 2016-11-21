#Author:Nasir Khan
Feature: Apply for an opportunity
As a user
In order to get funding
I should be able to apply for an opportunity

@End2End
Scenario: Apply for a given opportunity-End to end Scenario
Given I launch application
And I should be able to land on start page
When I click on applicant link
Then I should be able to see opportunity list page

When I select an Opportunity from list
Then I should be able to see details of that opportunity

When I click on Make an application
Then I should see application "Overview - RIFS" page
And I should see all six questions displayed

When I click on event title link on application overview page
Then I should be able to enter title "Seminar on space Technologies AutoTest"
Then I should be able select mark as complete checkbox
And I should be able save and Continue

When I open provisional date section
And I enter valid date
|22|01|2017|
And I enter duration "4"
And I click mark as complete
And I save and continue
Then I should return back to overview page.


When I open event objectives page
Then I should be able to enter event objective "Seminar on space Technologies AutoTest"
Then I should be able select mark as complete checkbox
And I should be able save and Continue
And I should return back to overview page.

When I open section "TopicsnSpeakers"
And I  enter "Speakers to deliver event speach" in "TopicsnSpeakers"
Then I should be able select mark as complete checkbox  "TopicsnSpeakers" page
And I should be able save and Continue
And I should return back to overview page.

When I open section "EventAudience"
Then I should be able to enter "<text>" in "EventAudience"
Then I should be able select mark as complete checkbox  "EventAudience" page
And I should be able save and Continue
And I should return back to overview page.

When I open section "Costs"
Then I should be able to add cost items
|Training-Autotest|500|Training required to deliver Seminar Innovations|
And I should be able select mark as complete checkbox  "costs" page
And I should be able save and Continue
And I should be able to see "Costs"status as "Completed"




