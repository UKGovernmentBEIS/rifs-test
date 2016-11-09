#Author: Nasir Khan
Feature: GF-1121 Enter start date
	As a user 
	in order to apply to an opportunity
	I should be able to apply by entering start date of my event
	


@Sprint2
Scenario: Verify user able to mark as complete for valid date and duration
Given I launch application
And I click on applicant link
And I select an Opportunity from list
And I click on Make an application
When I open provisional date section
And I enter valid date
|22|01|2017|
And I enter duration "4"
And I click mark as complete
And I save and continue
Then I should return back to overview page.

@Sprint2
Scenario: Verify user able to save date and duration
When I open provisional date section
And I enter valid date
|22|02|2018|
And I enter duration "8"
And I save and continue
Then I should return back to overview page.

@Sprint2
Scenario: verify user able to save duration only
When I open provisional date section 
And I enter duration "8"
And I save and continue
Then I should return back to overview page.

@Sprint2
Scenario: Verify user able to save date only 
When I open provisional date section
And I enter valid date
|22|02|2018|
And I save and continue
Then I should return back to overview page.

@Sprint2
Scenario: User can save any invalid entry
When I open provisional date section 
And I enter invalid date
|22|mm|2017|
And I enter duration "dd"
And I save and continue
Then I should return back to overview page.


@Sprint2
Scenario: Verify user not able mark as complete with invalid month
When I open provisional date section
And I enter invalid date
|22|00|2017|
And I enter duration "4"
And I click mark as complete
And I save and continue on date entry 
Then I should see error message "Must provide a valid date"

@Sprint2
Scenario: invalid day
And I enter invalid date
|35|01|2017|
And I enter duration "4"
When I click mark as complete
And I save and continue on date entry 
Then I should see error message "Must provide a valid date"

@Sprint2
Scenario: Negative values in day
And I enter invalid date
|-3|01|2017|
And I enter duration "4"
When I click mark as complete
And I save and continue on date entry 
Then I should see error message "Must provide a valid date"

@Sprint2
Scenario: Negative values in month
And I enter invalid date
|3|-01|2017|
And I enter duration "4"
When I click mark as complete
And I save and continue on date entry 
Then I should see error message "Must provide a valid date"

@Sprint2
Scenario: Negative values in year
And I enter invalid date
|3|01|-2017|
And I enter duration "4"
When I click mark as complete
And I save and continue on date entry
Then I should see error message "Must be today or later"

@Sprint2
Scenario: Past date cannot be mark as complete
And I enter invalid date
|3|01|2016|
And I enter duration "4"
When I click mark as complete
And I save and continue on date entry 
Then I should see error message "Must be today or later"

@Sprint2
Scenario: Validate error messsage when duration is empty
When I enter invalid date
|3|01|2017|
And I enter duration ""
And I click mark as complete
And I save and continue on date entry 
Then I should see duration field error "Must be a whole number"

@Sprint2
Scenario: Validate error messsage when duration is negative value
When I enter invalid date
|3|01|2017|
And I enter duration "-6"
When I click mark as complete
And I save and continue on date entry
Then I should see duration field error "Minimum value is 1"

@Sprint2
Scenario: Validate error messsage when duration non numeric
When I enter invalid date
|3|01|2017|
And I enter duration "days"
When I click mark as complete
And I save and continue on date entry 
Then I should see duration field error "Must be a whole number"

Scenario: Validate when user enters valid future date and mark as complete, it should show time stamp replacing mark as complete link.



