#Auther : Nasir Khan
Feature: GF-1116 Opportunity detail page
As a user 
In order to apply for an opportunity
I should be able to see Opportunity details.


@Sprint1
Scenario: Open Opp detail page from opp list page.
Given I launch application
And I click on applicant link
When I select an Opportunity from list
Then I should be able to see details of that opportunity

@Sprint1
Scenario: Opportunity detail page to show all sections and clickable
Given I launch application
And I click on applicant link
When I select an Opportunity from list
Then I should see all sections on opportunity detail page



@ignore
@manual
Scenario: Start page to general page header
Given I lanuch application
Then I should be bae to land on start page
And I see page header as general ""

@ignore
@manual
Scenario: Start page to be as per GDS Standard
@ignore
@manual 
Scenario: Cross browser test
@ignore
@performance
Scenario: Load test start page.







 

