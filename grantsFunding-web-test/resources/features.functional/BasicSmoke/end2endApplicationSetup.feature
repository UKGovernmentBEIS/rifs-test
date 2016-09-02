Feature: Application setup
	In order to get funding for the published opportunity
	I should be able to set up application on grants funding system


Scenario: Verify application start page
 Given I am on opportunity description page
 When I click on apply funding link
 Then I should be able to see opportunity start page

 
@current 
Scenario Outline: End to end applcation setup 
Given I am on application start page
When I click on start
And I login with <username> <password>
Then I should see application form 
And  I should be able to enter "Test project" in project title
And  I should be able to enter "Test description" in short description
And I should be able to submit form 
And I should see "application saved successfully"

Examples: 
  |username|password|
  |test     |test   |
  |test1    |test1  |
  

