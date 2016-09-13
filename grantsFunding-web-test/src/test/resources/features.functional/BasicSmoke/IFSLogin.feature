Feature: Login to IFS
As an existing user
I should be able to login to IFS


Scenario: Apply opportunity by registering as  new user
Given I am Opportunity details page
When I click on apply button
Then I should able to register new user as
|nasirkhan.ifs	|Pa55w0rd123 |

@Login
Scenario: user login 
Given I launch app
When I login with user as
|paul.plum@gmail.com|Passw0rd|
Then I should be able to see dashboard.

