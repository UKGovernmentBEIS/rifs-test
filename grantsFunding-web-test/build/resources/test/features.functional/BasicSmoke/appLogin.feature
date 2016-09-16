Feature: Login as applicant/Portfolio manager
	As a user I want to be able to login to application

@regression
Scenario: Applicant Successful login
 Given I am on login page
 When I login as applicant user
 Then I should be able to login successfully
 
@regression
Scenario: Portfolio manager successful login
 Given I am on login page
 When I login as an exiting Portfolio manager
 Then  I should land on to my dashboard

@regression
Scenario: Invalid user login
 Given I am on login page
 When I login with incorrect user details 
 Then  I should not be able to login
 And I should see error message
 
@regression
Scenario: login with empty email box
Given I am on login page
When I login with empty email box
Then  I should not be able to login
And I should see error message as "Enter valid email address"

@regression
Scenario: login with no password entered
Given I am on login page
When I login with no password
Then  I should not be able to login
And I should see inline error message under password field as "Enter your password"
 
 

