Feature:GF-1212 ApplicationOverview
As a user 
In order to apply for an opportunity
I should be able to fill in application details through application overview page

@Sprint2
Scenario: verify all questions are clickable on application overview. 
Given I am on the opportunity detail page
When I click on Make an application
Then I should see application "Overview" page
And I should see all six questions are clickable
And I should be click event title
And navigate to "Event title" page

@Pending
Scenario Outline: Verify all links take to respective page.
Given I am on the opportunity detail page
When I click on Make an application
And I click on "<Section>"
Then I should be able to naviate to page "<Section>"
Examples:
|Section|
|provisionalDate|
|EventObjs|
|TopicsnSpeakers|
|EventAudience|
|costs|

Scenario: Verify when user clicks any question it should take to new page.
Scenario: Verify guidance link is clickable and should open on same page.
Scenario: Verify back link on guidance page to take back to application overview page.
Scenario: Verify submit button should throw validation message
Scenario: Verify preview application link is clickable and should open in same page(dummy page for now)
Scenario: Verify Opportunity title is displayed at page level with hardcoded opportunity code number.
Scenario: Verify user name is displayed on top right hand corner of the page.
Scenario: Page title is displayed as "Application Overview

