Feature: IFS code base on cloud infrastructure
As an existing codebase of IFS
I should be able to deploy on cloud and launch application successfully

@IFS-SmokeTest
Scenario: Validate Landing Page
Given I launch app
Then I should be able to see app landing page "Innovation Funding Service - Sign in"

@IFS-SmokeTest
Scenario: user login 
Given I launch app
When I login with user as
|paul.plum@gmail.com|Passw0rd|
Then I should be able to see dashboard.

@Wip 
Scenario: Apply opportunity by registering as  new user
Given I am Opportunity details page
When I click on apply button
Then I should able to register new user as
|nasirkhan.ifs	|Pa55w0rd123 |
