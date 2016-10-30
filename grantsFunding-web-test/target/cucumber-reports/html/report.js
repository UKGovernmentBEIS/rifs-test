$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sprint-1/GF1116-OpportunityDetails.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Auther : Nasir Khan"
    }
  ],
  "line": 2,
  "name": "GF-1116 Opportunity detail page",
  "description": "As a user \nIn order to apply for an opportunity\nI should be able to see Opportunity details.",
  "id": "gf-1116-opportunity-detail-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Open Opp detail page from opp list page.",
  "description": "",
  "id": "gf-1116-opportunity-detail-page;open-opp-detail-page-from-opp-list-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Sprint1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on applicant link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select an Opportunity from list",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be able to see details of that opportunity",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_launch_application()"
});
formatter.result({
  "duration": 4767475362,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_applicant_link()"
});
formatter.result({
  "duration": 2312855208,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_an_Opportunity_from_list()"
});
formatter.result({
  "duration": 144521657,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_details_of_that_opportunity()"
});
formatter.result({
  "duration": 7296379,
  "status": "passed"
});
formatter.after({
  "duration": 95222,
  "status": "passed"
});
formatter.after({
  "duration": 20628,
  "status": "passed"
});
formatter.after({
  "duration": 19161,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Opportunity detail page to show all sections and clickable",
  "description": "",
  "id": "gf-1116-opportunity-detail-page;opportunity-detail-page-to-show-all-sections-and-clickable",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Sprint1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on applicant link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select an Opportunity from list",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see all sections on opportunity detail page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click firstnext button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see section \"2. The events we will fund\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on next button again",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should see section \"3. What events should cover\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on previous button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see section \"2. The events we will fund\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_launch_application()"
});
formatter.result({
  "duration": 3023619135,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_applicant_link()"
});
formatter.result({
  "duration": 2144384812,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_an_Opportunity_from_list()"
});
formatter.result({
  "duration": 151119655,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_all_sections_on_opportunity_detail_page()"
});
formatter.result({
  "duration": 10350939789,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_firstnext_button()"
});
formatter.result({
  "duration": 146290081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2. The events we will fund",
      "offset": 22
    }
  ],
  "location": "ThenSteps.i_should_see_section(String)"
});
formatter.result({
  "duration": 26860926,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_next_button_again()"
});
formatter.result({
  "duration": 164151623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3. What events should cover",
      "offset": 22
    }
  ],
  "location": "ThenSteps.i_should_see_section(String)"
});
formatter.result({
  "duration": 19512753,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_previous_button()"
});
formatter.result({
  "duration": 139909158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2. The events we will fund",
      "offset": 22
    }
  ],
  "location": "ThenSteps.i_should_see_section(String)"
});
formatter.result({
  "duration": 19801819,
  "status": "passed"
});
formatter.after({
  "duration": 35972,
  "status": "passed"
});
formatter.after({
  "duration": 14446,
  "status": "passed"
});
formatter.after({
  "duration": 13923,
  "status": "passed"
});
formatter.uri("Sprint-1/GF1118-ApplicationStart.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Auther : Nasir Khan"
    }
  ],
  "line": 2,
  "name": "GF-1118 Appication start page",
  "description": "As a user \nIn order to apply for an opportunity\nI should be able to see applicant link to start applying.",
  "id": "gf-1118-appication-start-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Start page to show applicant start link",
  "description": "",
  "id": "gf-1118-appication-start-page;start-page-to-show-applicant-start-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Sprint1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I should be able to land on start page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see applicant start link",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_launch_application()"
});
formatter.result({
  "duration": 3021571193,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_land_on_start_page()"
});
formatter.result({
  "duration": 6579257,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_applicant_start_link()"
});
