Feature: Application setup
	In order to get funding for the published opportunity
	I should be able to set up application on grants funding system

  
@BasicSmoke
Scenario: End to end initiate application.
Given I am on application start page
And I click on start application
And I login as applicant
When I fill in application form 
And I submit
Then I should successfully save application 
And I should land on manage application page









