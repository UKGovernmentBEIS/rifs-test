#Author: Nasir Khan
Feature: GF-1435-PM date entry
As as Portfolio manager
In order to create an opportunity
I should be able to enter opening and closing date

Scenario: Verify user able to edit the existing date to new date
Scenario: Verify date field should always accept date format DD M YYYY
Scenario: Verify user should not be able to save past date 
Scenario: Verify user not able to save non numeric data in date fields
Scenario: Verify user can save empty fields 
Scenario: Verify when user enters valid date and clicks on opportunity template, then entered info should be transiently saved. 
Scenario: Verify when user selects Yes for end date,it should show closing date field.
Scenario: Verify above scenarios for closing date field.
Scenario: Verify closing date always greater than open date
#Validations trigger on mark as complete
Scenario: User should be able to mark as complete with only valid dates entered.
Scenario: Verify user cannot mark as complete with empty date fields.
Scenario: Verify user cannot mark as complete with empty closing date.
Scenario: Verify user cannot mark as complete with invalid day of month eg. 32-01-2017
Scenario: Verify user cannot mark as complete with invalid month eg. 02-24-2017
Scenario: Verify user cannot mark as complete with invalid year : eg. 02-04-0000
Scenario: Verify user cannot mark as complete with negative values 
Scenario: Verify user cannot mark as complete with entered date as past.