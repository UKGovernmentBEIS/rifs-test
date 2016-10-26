#Author: Nasir Khan
Feature: GF-1121 Enter start date
	As a user 
	in order to apply to an opportunity
	I should be able to apply by entering start date of my event
	
Scenario: Verify user able to enter valid date and mark as complete
Given I am on application overview page
When I open provisional date section
And I enter valid date
And I enter valid duration
Then I should be able to mark as complete



Scenario: Verify user able to enter valid date and save
Given I am on application overview page
When I open provisional date section
And I enter valid date
And I enter valid duration
Then I should be able to mark as complete

@current
Scenario: Verify user able to mark as complete only valid date and duration
Given I am on application overview page
When I open provisional date section
And I enter invalid date
|22|00|2017|
And I enter duration "4"
And I click mark as complete
Then I should see error message "Must provide a valid date"

#When I open provisional date section
And I enter invalid date
|35|01|2017|
And I enter duration "4"
When I click mark as complete
Then I should see error message "Must provide a valid date"


When I enter invalid date
|3|01|2017|
And I enter duration ""
When I click mark as complete
Then I should see duration field error "Field cannot be empty"



Scenario: Validate user able to edit date or duration.
Scenario: Verify user can preview only valid date and duration
Scenarios: verify user can mark as complete only valid date and duration


Validate user able to save only duration field.
Validate when user enters valid future date and mark as complete, it should show time stamp replacing mark as complete link.
Validate when user enters past date and when save or mark as complete, it should throw error "date cannot be in the past"
Validate user when enters chars in date and click on mark as complete , it should throw error message "Please provide appropriate date and no of days"
Validate past date, user should not be able to save past date. 
Validate special chars in date or duration field
Validate duration field: 
User can only enter numeric 
Validate user enters valid date and duration is empty and tries to save, it should be able to save and return back to overview page.
Validate user able to edit duration.
User should not be able to save special chars or -negative values
User should not enter too long number 6 or 10 digits number
User can't save date with empty days in the field? should give error message?

@tag1
Scenario: Title of your scenario
Given I want to write a step with precondition
	And some other precondition
When I complete action
	And some other action
	And yet another action
Then I validate the outcomes
	And check more outcomes

@tag2
Scenario Outline: Title of your scenario outline
Given I want to write a step with <name>
When I check for the <value> in step
Then I verify the <status> in step

Examples:
    | name  |value | status |
    | name1 |  5   | success|
    | name2 |  7   | Fail   |
