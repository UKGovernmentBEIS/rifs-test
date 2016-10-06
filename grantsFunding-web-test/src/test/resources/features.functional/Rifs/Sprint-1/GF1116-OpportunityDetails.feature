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

When I click firstnext button 
Then I should see section "2. The events we will fund"

When I click on next button again 
Then I should see section "3. What events should cover"

When I click on previous button 
Then I should see section "2. The events we will fund"

Scenario: Opportunity detail page should show about this opportunity section as default and should display only "Next" button.

Scenario: Controls next button is clickable and should take to next section "The events we will fund"
Given I launch application
And I click on application link

Scenario: User viewing section "The events we will fund",when click on previous button, it should display section "About this opportunity"
Scenario: User viewing section "What events should cover" when click on previous button it should display section "The events we will fund" and when click on next it should display "4. How to get funding"
Scenario: User should able to move back and forth between sections with controls Next and Previous.
Scenario: General guidance link on detail page to be clickable and take to guidance page 
Scenario: Make an application button should take user to application overview page.







 

