Feature: Select Opportunity template from list
	As a user I want to be able to select an oppotunity template from given list



    #Verify only Portfolio manager should be able to see list of opportunity templates and create opportunity.
    #Verify Opportunity templates are retrieved from db,any change to template in database should show updated template in UI.
    #Verify when Opptype is choosen from the list, Opportunity template field to be populated with relevant templates from database.
    #Verify each Opportunity is associated to an Opp type.
    #Verify Portfolio manager able to select an opportunity from the list and initiate button to take to further next steps to configure.
    #Verify Portfolio manager should be able to edit by re-selecting different opportunity and save.
    #Verify when new Opptype added , it should be listed in the Opptype list field.
    #Verify when new Opp template added in db and associated to a particular opp type, it should be populated in template list when associated Opptype is selected.



@regression
Scenario: OppType associated to Opportunity templates
Given I am on login page
And I login as an exiting Portfolio manager
And I click on create opportunity link
And I am on Opportunity initiate page
When I choose an Opptype "Event" from list 
Then I should see following <OpportunityTemplates> in template list
|Exploring innovation seminars|
|Networking event|
|Conference|

#When I choose an Opptype "Test-opp" from list 
#Then I should see following <OpportunityTemplates> in template list
#|Values|
#|Conference-test|
#|Conference-test|



@regression
Scenario: Select Opptype and template
Given I am on Opportunity initiate page
When I choose an Opptype "Test-opp" from list 
And I choose template "Conference-test1"
Then I should be able to initiate opportunity


Scenario: Select Opptype and Opportunity template
Given I am on Opportunity initiate page
When I choose an Opptype "event" from the list
Then I should be able to choose "innovations seminar" grants template
And I should be able to navigate to by next step after click on initiate button.



Scenario: Select diff Opptype and diff Opportunity template
Given I am on Opportunity initiate page
When I choose an Opptype "xxxx" from the list
Then I should be able to choose "xxxxxxxx" grants template
And I should be able to navigate to by next step after click on initiate button.


Scenario: Select an Opportunity
Given I am on Opportuity initiate page
When I choose an Opptype "Event"
Then I should be able to select an Opportunity template "Innovations" from list
 
 
 @manual
  Scenario: Validated updated template appears in list
 Given I update the opportunity template in db
 Then I should be able see updated template under associated Opptype
 
@manual
Scenario: Validate new Opptype and associated Opportunity
Given I add new Opptype in db
And I new Opportunity template in db
When I am on Opportunity initiate page
Then I should be able to see new Opptype in type list
And I should be able to see new Opp template in template list.

@manual 
Scenario: Validate new Opptype added appears in UI list
Given I add new Opptype in db
When I am on Opportunity initiate page
Then I should be able to see new Opptype listed in UI.


    

 
 

