#Author: Nasir Khan
Feature:  GF-1125 Cost Entry
As a user
In order to apply for an opportunity
I should be able to enter itemised cost for the event


@Sprint4
Scenario: User able to enter cost items and save - happy path
Given I am on the opportunity detail page
And I click on Make an application
When I open section "Costs"
Then I should be able to add cost items
|Training-Autotest|500|Training required to deliver Seminar Innovations|
And I click on save
And I should be able save and Continue
And I should be able to see "Costs"status as "In progress"


@Sprint4
Scenario: User able to enter cost items and mark as complete - happy path
Given I am on the opportunity detail page
And I click on Make an application
When I open section "Costs"
Then I should be able to add cost items
|Training-Autotest|500|Training required to deliver Seminar Innovations|
And I click on save
And I should be able select mark as complete checkbox  "costs" page
And I should be able save and Continue
And I should be able to see "Costs"status as "Completed"

@Sprint4
Scenario: User able to add more than one items and save - happy path
Given I am on the opportunity detail page
And I click on Make an application
When I open section "Costs"
Then I should be able to add cost items
|Training-Autotest|500|Training required to deliver Seminar Innovations|
And I should be able to add one more cost item
|Stationary-Autotest|200|Stationary required to deliver Seminar Innovations|
And I should be able to add one more cost item
|Travel-Autotest|100|Travel required to deliver Seminar Innovations|
And I should be able save and Continue
And I should be able to see "Costs"status as "In progress"


@Sprint4
Scenario: User able to add 10 or above items and save - happy path
Given I am on the opportunity detail page
And I click on Make an application
When I open section "Costs"
Then I should be able to add 10 cost items
|Training-Autotest|500|Training required to deliver Seminar Innovations|
And I should be able save and Continue
And I should be able to see "Costs"status as "In progress"





