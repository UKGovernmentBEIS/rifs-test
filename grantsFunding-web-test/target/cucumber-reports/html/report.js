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
  "duration": 5478548216,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_applicant_link()"
});
formatter.result({
  "duration": 2380631185,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_an_Opportunity_from_list()"
});
formatter.result({
  "duration": 165962672,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_details_of_that_opportunity()"
});
formatter.result({
  "duration": 10411128,
  "status": "passed"
});
formatter.after({
  "duration": 165159,
  "status": "passed"
});
formatter.after({
  "duration": 36043,
  "status": "passed"
});
formatter.after({
  "duration": 36054,
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
  "duration": 3027318582,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_applicant_link()"
});
formatter.result({
  "duration": 2150910548,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_an_Opportunity_from_list()"
});
formatter.result({
  "duration": 148399264,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_all_sections_on_opportunity_detail_page()"
});
formatter.result({
  "duration": 10408570020,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_firstnext_button()"
});
formatter.result({
  "duration": 154859321,
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
  "duration": 41080417,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_next_button_again()"
});
formatter.result({
  "duration": 193711584,
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
  "duration": 28545077,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_previous_button()"
});
formatter.result({
  "duration": 149990637,
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
  "duration": 23403898,
  "status": "passed"
});
formatter.after({
  "duration": 49598,
  "status": "passed"
});
formatter.after({
  "duration": 38482,
  "status": "passed"
});
formatter.after({
  "duration": 36149,
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
  "duration": 3025842464,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_land_on_start_page()"
});
formatter.result({
  "duration": 8371189,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_applicant_start_link()"
});
formatter.result({
  "duration": 2046029678,
  "status": "passed"
});
formatter.after({
  "duration": 291424,
  "status": "passed"
});
formatter.after({
  "duration": 15367,
  "status": "passed"
});
formatter.after({
  "duration": 18580,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Applicant link clickable and open in same page.",
  "description": "",
  "id": "gf-1118-appication-start-page;applicant-link-clickable-and-open-in-same-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Sprint1"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on applicant link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see opportunity list page",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_launch_application()"
});
formatter.result({
  "duration": 3024865224,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_applicant_link()"
});
formatter.result({
  "duration": 2149035143,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_opportunity_list_page()"
});
formatter.result({
  "duration": 2052321350,
  "status": "passed"
});
formatter.after({
  "duration": 29317,
  "status": "passed"
});
formatter.after({
  "duration": 16195,
  "status": "passed"
});
formatter.after({
  "duration": 15241,
  "status": "passed"
});
formatter.uri("Sprint-1/GF1119-OpportunityOverview.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Auther : Nasir Khan"
    }
  ],
  "line": 2,
  "name": "GF1119 Opportunity overview page",
  "description": "As a user \nIn order to apply for an opportunity\nI should be able see opportuntiy oview page with questions",
  "id": "gf1119-opportunity-overview-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Overview page to show all questions",
  "description": "",
  "id": "gf1119-opportunity-overview-page;overview-page-to-show-all-questions",
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
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see application \"Overview\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see all six questions displayed",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3148765962,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 154100909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overview",
      "offset": 26
    }
  ],
  "location": "ThenSteps.i_should_see_application_page(String)"
});
formatter.result({
  "duration": 9379708,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_all_six_questions_displayed()"
});
formatter.result({
  "duration": 169182820,
  "status": "passed"
});
formatter.after({
  "duration": 42537,
  "status": "passed"
});
formatter.after({
  "duration": 25421,
  "status": "passed"
});
formatter.after({
  "duration": 33078,
  "status": "passed"
});
formatter.uri("Sprint2/GF-1120SaveEventTitle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Nasir Khan"
    }
  ],
  "line": 2,
  "name": "GF-1120 Event title",
  "description": "As a user \r\nIn order to apply for an opportunity\r\nI should be able to enter title and save",
  "id": "gf-1120-event-title",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on event title link on application overview page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3146382611,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 142517742,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 144151704,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify user able enter free text in title field and able to save.",
  "description": "",
  "id": "gf-1120-event-title;verify-user-able-enter-free-text-in-title-field-and-able-to-save.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I should be able to enter title \"Seminar on space Technologies AutoTest\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should be able save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should return back to overview page.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest",
      "offset": 33
    }
  ],
  "location": "ThenSteps.i_should_be_able_to_enter_title(String)"
});
formatter.result({
  "duration": 123199764,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_save_and_Continue()"
});
formatter.result({
  "duration": 151798339,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 27171,
  "status": "passed"
});
formatter.after({
  "duration": 17746,
  "status": "passed"
});
formatter.after({
  "duration": 14214,
  "status": "passed"
});
formatter.after({
  "duration": 14114,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify user able to enter free text in the title field and able to mark as complete",
  "description": "",
  "id": "gf-1120-event-title;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter title \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able select mark as complete checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should be able save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should return back to overview page.",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "gf-1120-event-title;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete;",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 26,
      "id": "gf-1120-event-title;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete;;1"
    },
    {
      "cells": [
        "Seminar on space Technologies AutoTest"
      ],
      "line": 27,
      "id": "gf-1120-event-title;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on event title link on application overview page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3151281893,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 143278800,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 146744114,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user able to enter free text in the title field and able to mark as complete",
  "description": "",
  "id": "gf-1120-event-title;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter title \"Seminar on space Technologies AutoTest\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able select mark as complete checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should be able save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should return back to overview page.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title(String)"
});
formatter.result({
  "duration": 111496687,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_select_mark_as_complete_checkbox()"
});
formatter.result({
  "duration": 54767214,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_save_and_Continue()"
});
formatter.result({
  "duration": 156040142,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 25103,
  "status": "passed"
});
formatter.after({
  "duration": 32349,
  "status": "passed"
});
formatter.after({
  "duration": 14935,
  "status": "passed"
});
formatter.after({
  "duration": 14774,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Verify date time stamp is displayed when mark as complete is clicked",
  "description": "",
  "id": "gf-1120-event-title;verify-date-time-stamp-is-displayed-when-mark-as-complete-is-clicked",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I enter title \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able select mark as complete checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be able to see date and time stamp",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "gf-1120-event-title;verify-date-time-stamp-is-displayed-when-mark-as-complete-is-clicked;",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 36,
      "id": "gf-1120-event-title;verify-date-time-stamp-is-displayed-when-mark-as-complete-is-clicked;;1"
    },
    {
      "cells": [
        "Seminar on space Technologies AutoTest"
      ],
      "line": 37,
      "id": "gf-1120-event-title;verify-date-time-stamp-is-displayed-when-mark-as-complete-is-clicked;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on event title link on application overview page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3141659848,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 144239612,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 150459525,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify date time stamp is displayed when mark as complete is clicked",
  "description": "",
  "id": "gf-1120-event-title;verify-date-time-stamp-is-displayed-when-mark-as-complete-is-clicked;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I enter title \"Seminar on space Technologies AutoTest\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able select mark as complete checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be able to see date and time stamp",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title(String)"
});
formatter.result({
  "duration": 155968736,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_select_mark_as_complete_checkbox()"
});
formatter.result({
  "duration": 881102977,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 149578895,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_date_and_time_stamp()"
});
formatter.result({
  "duration": 261277499,
  "status": "passed"
});
formatter.after({
  "duration": 43098,
  "status": "passed"
});
formatter.after({
  "duration": 33414,
  "status": "passed"
});
formatter.after({
  "duration": 23315,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 39,
      "value": "#Validate word count:"
    }
  ],
  "line": 41,
  "name": "Verify word count to show n words remaining when marked as complete",
  "description": "",
  "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I enter title \"\u003ctext\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I open event title page again",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see word count \"\u003ccount\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;",
  "rows": [
    {
      "cells": [
        "text",
        "count"
      ],
      "line": 47,
      "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;1"
    },
    {
      "cells": [
        "Seminar on space Technologies AutoTest",
        "Words remaining: 15"
      ],
      "line": 48,
      "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;2"
    },
    {
      "cells": [
        "Seminar",
        "Words remaining: 19"
      ],
      "line": 49,
      "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;3"
    },
    {
      "cells": [
        "Seminar on space Technologies",
        "Words remaining: 16"
      ],
      "line": 50,
      "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;4"
    },
    {
      "cells": [
        "Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test",
        "Words remaining: 0"
      ],
      "line": 51,
      "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;5"
    },
    {
      "cells": [
        "Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test",
        "2 words over limit"
      ],
      "line": 52,
      "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on event title link on application overview page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3151821491,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 157000671,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 319638227,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Verify word count to show n words remaining when marked as complete",
  "description": "",
  "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I enter title \"Seminar on space Technologies AutoTest\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I open event title page again",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see word count \"Words remaining: 15\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title(String)"
});
formatter.result({
  "duration": 119558561,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 165988667,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 267881055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Words remaining: 15",
      "offset": 25
    }
  ],
  "location": "ThenSteps.i_should_see_word_count(String)"
});
formatter.result({
  "duration": 31224949,
  "status": "passed"
});
formatter.after({
  "duration": 35400,
  "status": "passed"
});
formatter.after({
  "duration": 36728,
  "status": "passed"
});
formatter.after({
  "duration": 19036,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on event title link on application overview page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3144390461,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 174615147,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 152968590,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify word count to show n words remaining when marked as complete",
  "description": "",
  "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I enter title \"Seminar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I open event title page again",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see word count \"Words remaining: 19\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title(String)"
});
formatter.result({
  "duration": 109003627,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 174732031,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 154216580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Words remaining: 19",
      "offset": 25
    }
  ],
  "location": "ThenSteps.i_should_see_word_count(String)"
});
formatter.result({
  "duration": 25905562,
  "status": "passed"
});
formatter.after({
  "duration": 27939,
  "status": "passed"
});
formatter.after({
  "duration": 12804,
  "status": "passed"
});
formatter.after({
  "duration": 12367,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on event title link on application overview page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3152975675,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 150875509,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 170174197,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verify word count to show n words remaining when marked as complete",
  "description": "",
  "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I enter title \"Seminar on space Technologies\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I open event title page again",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see word count \"Words remaining: 16\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title(String)"
});
formatter.result({
  "duration": 87738792,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 160037703,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 151253169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Words remaining: 16",
      "offset": 25
    }
  ],
  "location": "ThenSteps.i_should_see_word_count(String)"
});
formatter.result({
  "duration": 30289979,
  "status": "passed"
});
formatter.after({
  "duration": 26622,
  "status": "passed"
});
formatter.after({
  "duration": 12842,
  "status": "passed"
});
formatter.after({
  "duration": 13072,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on event title link on application overview page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3192558945,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 178711155,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 197661895,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Verify word count to show n words remaining when marked as complete",
  "description": "",
  "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I enter title \"Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I open event title page again",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see word count \"Words remaining: 0\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title(String)"
});
formatter.result({
  "duration": 126087003,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 151094400,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 151994257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Words remaining: 0",
      "offset": 25
    }
  ],
  "location": "ThenSteps.i_should_see_word_count(String)"
});
formatter.result({
  "duration": 29385351,
  "status": "passed"
});
formatter.after({
  "duration": 27901,
  "status": "passed"
});
formatter.after({
  "duration": 13690,
  "status": "passed"
});
formatter.after({
  "duration": 12796,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on event title link on application overview page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3248361858,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 173330938,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 149092087,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Verify word count to show n words remaining when marked as complete",
  "description": "",
  "id": "gf-1120-event-title;verify-word-count-to-show-n-words-remaining-when-marked-as-complete;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I enter title \"Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I open event title page again",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see word count \"2 words over limit\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title(String)"
});
formatter.result({
  "duration": 196979301,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 180996032,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 152081903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 words over limit",
      "offset": 25
    }
  ],
  "location": "ThenSteps.i_should_see_word_count(String)"
});
formatter.result({
  "duration": 28063063,
  "status": "passed"
});
formatter.after({
  "duration": 42795,
  "status": "passed"
});
formatter.after({
  "duration": 22162,
  "status": "passed"
});
formatter.after({
  "duration": 16697,
  "status": "passed"
});
formatter.uri("Sprint2/GF-1121DateEntry.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Nasir Khan"
    }
  ],
  "line": 2,
  "name": "GF-1121 Enter start date",
  "description": "As a user \r\nin order to apply to an opportunity\r\nI should be able to apply by entering start date of my event",
  "id": "gf-1121-enter-start-date",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "Verify user able to mark as complete for valid date and duration",
  "description": "",
  "id": "gf-1121-enter-start-date;verify-user-able-to-mark-as-complete-for-valid-date-and-duration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on application overview page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I open provisional date section",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter valid date",
  "rows": [
    {
      "cells": [
        "22",
        "01",
        "2017"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter duration \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click mark as complete",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should return back to overview page.",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_application_overview_page()"
});
formatter.result({
  "duration": 130026571,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_provisional_date_section()"
});
formatter.result({
  "duration": 205042158,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_valid_date(DataTable)"
});
formatter.result({
  "duration": 2285436665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 64891290,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 53430048,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 152413840,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 202612,
  "status": "passed"
});
formatter.after({
  "duration": 16759,
  "status": "passed"
});
formatter.after({
  "duration": 12842,
  "status": "passed"
});
formatter.after({
  "duration": 16895,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user able to save date and duration",
  "description": "",
  "id": "gf-1121-enter-start-date;verify-user-able-to-save-date-and-duration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I open provisional date section",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter valid date",
  "rows": [
    {
      "cells": [
        "22",
        "02",
        "2018"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter duration \"8\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should return back to overview page.",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_open_provisional_date_section()"
});
formatter.result({
  "duration": 146712123,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_valid_date(DataTable)"
});
formatter.result({
  "duration": 2199462643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 71094127,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 188479191,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 330416,
  "status": "passed"
});
formatter.after({
  "duration": 25636,
  "status": "passed"
});
formatter.after({
  "duration": 21143,
  "status": "passed"
});
formatter.after({
  "duration": 212302,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "verify user able to save duration only",
  "description": "",
  "id": "gf-1121-enter-start-date;verify-user-able-to-save-duration-only",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I open provisional date section",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter duration \"8\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should return back to overview page.",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_open_provisional_date_section()"
});
formatter.result({
  "duration": 151443193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 61246921,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 154914154,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 923994,
  "status": "passed"
});
formatter.after({
  "duration": 236799,
  "status": "passed"
});
formatter.after({
  "duration": 700002,
  "status": "passed"
});
formatter.after({
  "duration": 1995691,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify user able to save date only",
  "description": "",
  "id": "gf-1121-enter-start-date;verify-user-able-to-save-date-only",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I open provisional date section",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter valid date",
  "rows": [
    {
      "cells": [
        "22",
        "02",
        "2018"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should return back to overview page.",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_open_provisional_date_section()"
});
formatter.result({
  "duration": 144332641,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_valid_date(DataTable)"
});
formatter.result({
  "duration": 2227718560,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 149854737,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 276889,
  "status": "passed"
});
formatter.after({
  "duration": 28935,
  "status": "passed"
});
formatter.after({
  "duration": 23460,
  "status": "passed"
});
formatter.after({
  "duration": 250875,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "User can save any invalid entry",
  "description": "",
  "id": "gf-1121-enter-start-date;user-can-save-any-invalid-entry",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I open provisional date section",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "22",
        "mm",
        "2017"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter duration \"dd\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I save and continue",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I should return back to overview page.",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_open_provisional_date_section()"
});
formatter.result({
  "duration": 146176234,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2224600339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dd",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 66632090,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 151701500,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 284204,
  "status": "passed"
});
formatter.after({
  "duration": 16760,
  "status": "passed"
});
formatter.after({
  "duration": 11907,
  "status": "passed"
});
formatter.after({
  "duration": 204155,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Verify user not able mark as complete with invalid month",
  "description": "",
  "id": "gf-1121-enter-start-date;verify-user-not-able-mark-as-complete-with-invalid-month",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I open provisional date section",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "22",
        "00",
        "2017"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter duration \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click mark as complete",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I save and continue on date entry",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I should see error message \"Must provide a valid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_open_provisional_date_section()"
});
formatter.result({
  "duration": 143040465,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2247198975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 61987794,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 57773928,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 150763556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must provide a valid date",
      "offset": 28
    }
  ],
  "location": "ThenSteps.i_should_see_error_message(String)"
});
formatter.result({
  "duration": 36040161,
  "status": "passed"
});
formatter.after({
  "duration": 39368,
  "status": "passed"
});
formatter.after({
  "duration": 193210,
  "status": "passed"
});
formatter.after({
  "duration": 240653,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "invalid day",
  "description": "",
  "id": "gf-1121-enter-start-date;invalid-day",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "35",
        "01",
        "2017"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I enter duration \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I click mark as complete",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I save and continue on date entry",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I should see error message \"Must provide a valid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2225894931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 65929784,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 54097488,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 155862490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must provide a valid date",
      "offset": 28
    }
  ],
  "location": "ThenSteps.i_should_see_error_message(String)"
});
formatter.result({
  "duration": 31797066,
  "status": "passed"
});
formatter.after({
  "duration": 25034,
  "status": "passed"
});
formatter.after({
  "duration": 17103,
  "status": "passed"
});
formatter.after({
  "duration": 287585,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Negative values in day",
  "description": "",
  "id": "gf-1121-enter-start-date;negative-values-in-day",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "-3",
        "01",
        "2017"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I enter duration \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I click mark as complete",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I save and continue on date entry",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I should see error message \"Must provide a valid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2191155129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 64490994,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 50974210,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 148888250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must provide a valid date",
      "offset": 28
    }
  ],
  "location": "ThenSteps.i_should_see_error_message(String)"
});
formatter.result({
  "duration": 26927439,
  "status": "passed"
});
formatter.after({
  "duration": 39956,
  "status": "passed"
});
formatter.after({
  "duration": 14763,
  "status": "passed"
});
formatter.after({
  "duration": 296501,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Negative values in month",
  "description": "",
  "id": "gf-1121-enter-start-date;negative-values-in-month",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "3",
        "-01",
        "2017"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I enter duration \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click mark as complete",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I save and continue on date entry",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I should see error message \"Must provide a valid date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2200874115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 63620299,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 53501963,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 151262962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must provide a valid date",
      "offset": 28
    }
  ],
  "location": "ThenSteps.i_should_see_error_message(String)"
});
formatter.result({
  "duration": 41363505,
  "status": "passed"
});
formatter.after({
  "duration": 36707,
  "status": "passed"
});
formatter.after({
  "duration": 25924,
  "status": "passed"
});
formatter.after({
  "duration": 261625,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Negative values in year",
  "description": "",
  "id": "gf-1121-enter-start-date;negative-values-in-year",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 91,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "3",
        "01",
        "-2017"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I enter duration \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I click mark as complete",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "I save and continue on date entry",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I should see error message \"Must be today or later\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2212748940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 93152103,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 47299160,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 145907194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must be today or later",
      "offset": 28
    }
  ],
  "location": "ThenSteps.i_should_see_error_message(String)"
});
formatter.result({
  "duration": 28265194,
  "status": "passed"
});
formatter.after({
  "duration": 29472,
  "status": "passed"
});
formatter.after({
  "duration": 40620,
  "status": "passed"
});
formatter.after({
  "duration": 204334,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Past date cannot be mark as complete",
  "description": "",
  "id": "gf-1121-enter-start-date;past-date-cannot-be-mark-as-complete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 100,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 102,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "3",
        "01",
        "2016"
      ],
      "line": 103
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I enter duration \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I click mark as complete",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "I save and continue on date entry",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I should see error message \"Must be today or later\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2235167304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 60697915,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 51205171,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 147407649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must be today or later",
      "offset": 28
    }
  ],
  "location": "ThenSteps.i_should_see_error_message(String)"
});
formatter.result({
  "duration": 55468641,
  "status": "passed"
});
formatter.after({
  "duration": 18676,
  "status": "passed"
});
formatter.after({
  "duration": 9364,
  "status": "passed"
});
formatter.after({
  "duration": 129113,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Validate error messsage when duration is empty",
  "description": "",
  "id": "gf-1121-enter-start-date;validate-error-messsage-when-duration-is-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "3",
        "01",
        "2017"
      ],
      "line": 112
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "I enter duration \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I click mark as complete",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I save and continue on date entry",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I should see duration field error \"Must be a whole number\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2217848632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 98514102,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 66691749,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 143443069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must be a whole number",
      "offset": 35
    }
  ],
  "location": "ThenSteps.i_should_see_duration_field_error(String)"
});
formatter.result({
  "duration": 25350346,
  "status": "passed"
});
formatter.after({
  "duration": 18049,
  "status": "passed"
});
formatter.after({
  "duration": 9728,
  "status": "passed"
});
formatter.after({
  "duration": 173318,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "Validate error messsage when duration is negative value",
  "description": "",
  "id": "gf-1121-enter-start-date;validate-error-messsage-when-duration-is-negative-value",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 118,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "3",
        "01",
        "2017"
      ],
      "line": 121
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "I enter duration \"-6\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I click mark as complete",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "I save and continue on date entry",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I should see duration field error \"Minimum value is 1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2214135520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-6",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 65186142,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 63756051,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 152295860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Minimum value is 1",
      "offset": 35
    }
  ],
  "location": "ThenSteps.i_should_see_duration_field_error(String)"
});
formatter.result({
  "duration": 35286719,
  "status": "passed"
});
formatter.after({
  "duration": 22514,
  "status": "passed"
});
formatter.after({
  "duration": 15849,
  "status": "passed"
});
formatter.after({
  "duration": 145977,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Validate error messsage when duration non numeric",
  "description": "",
  "id": "gf-1121-enter-start-date;validate-error-messsage-when-duration-non-numeric",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 127,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 129,
  "name": "I enter invalid date",
  "rows": [
    {
      "cells": [
        "3",
        "01",
        "2017"
      ],
      "line": 130
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I enter duration \"days\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I click mark as complete",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "I save and continue on date entry",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I should see duration field error \"Must be a whole number\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 2269370697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "days",
      "offset": 18
    }
  ],
  "location": "WhenSteps.i_enter_duration(String)"
});
formatter.result({
  "duration": 69744116,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 48735099,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 156705191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must be a whole number",
      "offset": 35
    }
  ],
  "location": "ThenSteps.i_should_see_duration_field_error(String)"
});
formatter.result({
  "duration": 31776040,
  "status": "passed"
});
formatter.after({
  "duration": 23769,
  "status": "passed"
});
formatter.after({
  "duration": 14818,
  "status": "passed"
});
formatter.after({
  "duration": 192507,
  "status": "passed"
});
formatter.uri("Sprint2/GF-1212ApplicationOverview.feature");
formatter.feature({
  "line": 1,
  "name": "GF-1212 ApplicationOverview",
  "description": "As a user \r\nIn order to apply for an opportunity\r\nI should be able to fill in application details through application overview page",
  "id": "gf-1212-applicationoverview",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "verify all questions are clickable on application overview.",
  "description": "",
  "id": "gf-1212-applicationoverview;verify-all-questions-are-clickable-on-application-overview.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see application \"Overview\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see all six questions are clickable",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be click event title",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "navigate to \"Event title\" page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3141062167,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 157145517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overview",
      "offset": 26
    }
  ],
  "location": "ThenSteps.i_should_see_application_page(String)"
});
formatter.result({
  "duration": 9777181,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_all_six_questions_are_clickable()"
});
formatter.result({
  "duration": 170027754,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_click_event_title()"
});
formatter.result({
  "duration": 152321587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Event title",
      "offset": 13
    }
  ],
  "location": "ThenSteps.navigate_to_page(String)"
});
formatter.result({
  "duration": 6742716,
  "status": "passed"
});
formatter.after({
  "duration": 19672,
  "status": "passed"
});
formatter.after({
  "duration": 10248,
  "status": "passed"
});
formatter.after({
  "duration": 67441,
  "status": "passed"
});
formatter.uri("Sprint2/GF1117PreviewTitle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Nasir Khan"
    }
  ],
  "line": 2,
  "name": "GF-1117 Preview title",
  "description": "As a user in order to submit application\r\nI should be able preview entered title.",
  "id": "gf-1117-preview-title",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Entered words \u003c\u003d20 should be previewable",
  "description": "",
  "id": "gf-1117-preview-title;entered-words-\u003c\u003d20-should-be-previewable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on the event tite page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter title \"\u003ctitle\u003e\" within required word size limit",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be able to preview",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should be able to view entered \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "gf-1117-preview-title;entered-words-\u003c\u003d20-should-be-previewable;",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 18,
      "id": "gf-1117-preview-title;entered-words-\u003c\u003d20-should-be-previewable;;1"
    },
    {
      "cells": [
        "Seminar on space technologies autoTest"
      ],
      "line": 19,
      "id": "gf-1117-preview-title;entered-words-\u003c\u003d20-should-be-previewable;;2"
    },
    {
      "cells": [
        "Seminar one space"
      ],
      "line": 20,
      "id": "gf-1117-preview-title;entered-words-\u003c\u003d20-should-be-previewable;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Make an application",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3144797038,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 158622505,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Entered words \u003c\u003d20 should be previewable",
  "description": "",
  "id": "gf-1117-preview-title;entered-words-\u003c\u003d20-should-be-previewable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on the event tite page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter title \"Seminar on space technologies autoTest\" within required word size limit",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be able to preview",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should be able to view entered \"Seminar on space technologies autoTest\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_event_tite_page()"
});
formatter.result({
  "duration": 151355203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space technologies autoTest",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title_within_required_word_size_limit(String)"
});
formatter.result({
  "duration": 195380576,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_preview()"
});
formatter.result({
  "duration": 163375009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space technologies autoTest",
      "offset": 34
    }
  ],
  "location": "ThenSteps.i_should_be_able_to_view_entered(String)"
});
formatter.result({
  "duration": 34020416,
  "status": "passed"
});
formatter.after({
  "duration": 31718,
  "status": "passed"
});
formatter.after({
  "duration": 22517,
  "status": "passed"
});
formatter.after({
  "duration": 17708,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Make an application",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3244173669,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 149049923,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Entered words \u003c\u003d20 should be previewable",
  "description": "",
  "id": "gf-1117-preview-title;entered-words-\u003c\u003d20-should-be-previewable;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on the event tite page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter title \"Seminar one space\" within required word size limit",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should be able to preview",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should be able to view entered \"Seminar one space\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_event_tite_page()"
});
formatter.result({
  "duration": 141092501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar one space",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title_within_required_word_size_limit(String)"
});
formatter.result({
  "duration": 85113218,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_preview()"
});
formatter.result({
  "duration": 149130175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar one space",
      "offset": 34
    }
  ],
  "location": "ThenSteps.i_should_be_able_to_view_entered(String)"
});
formatter.result({
  "duration": 22364071,
  "status": "passed"
});
formatter.after({
  "duration": 20315,
  "status": "passed"
});
formatter.after({
  "duration": 9502,
  "status": "passed"
});
formatter.after({
  "duration": 9002,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Entered words \u003e\u003d20 should be previewable",
  "description": "",
  "id": "gf-1117-preview-title;entered-words-\u003e\u003d20-should-be-previewable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the event tite page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter title \"\u003ctitle\u003e\" outside required word size limit",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should be able to preview",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I should be able to view entered \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "gf-1117-preview-title;entered-words-\u003e\u003d20-should-be-previewable;",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 30,
      "id": "gf-1117-preview-title;entered-words-\u003e\u003d20-should-be-previewable;;1"
    },
    {
      "cells": [
        "Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test"
      ],
      "line": 31,
      "id": "gf-1117-preview-title;entered-words-\u003e\u003d20-should-be-previewable;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Make an application",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3141376905,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 143554200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Entered words \u003e\u003d20 should be previewable",
  "description": "",
  "id": "gf-1117-preview-title;entered-words-\u003e\u003d20-should-be-previewable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the event tite page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter title \"Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test\" outside required word size limit",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should be able to preview",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I should be able to view entered \"Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_event_tite_page()"
});
formatter.result({
  "duration": 143008148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test",
      "offset": 15
    }
  ],
  "location": "WhenSteps.i_enter_title_outside_required_word_size_limit(String)"
});
formatter.result({
  "duration": 135606194,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_preview()"
});
formatter.result({
  "duration": 155861557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest test test test test test test test test test test test test test test test test test",
      "offset": 34
    }
  ],
  "location": "ThenSteps.i_should_be_able_to_view_entered(String)"
});
formatter.result({
  "duration": 57959488,
  "status": "passed"
});
formatter.after({
  "duration": 29887,
  "status": "passed"
});
formatter.after({
  "duration": 22180,
  "status": "passed"
});
formatter.after({
  "duration": 40627,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Make an application",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3143747411,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 149615189,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Empty title cannot preview",
  "description": "",
  "id": "gf-1117-preview-title;empty-title-cannot-preview",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Sprint2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on the event tite page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I keep title field empty",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click on preview",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see error message \"Field cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_event_tite_page()"
});
formatter.result({
  "duration": 142770544,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_keep_title_field_empty()"
});
formatter.result({
  "duration": 25398097,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_preview()"
});
formatter.result({
  "duration": 149481744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Field cannot be empty",
      "offset": 28
    }
  ],
  "location": "ThenSteps.i_should_see_error_message(String)"
});
formatter.result({
  "duration": 29151889,
  "status": "passed"
});
formatter.after({
  "duration": 20881,
  "status": "passed"
});
formatter.after({
  "duration": 13237,
  "status": "passed"
});
formatter.after({
  "duration": 10561,
  "status": "passed"
});
formatter.uri("Sprint3/GF-1122SaveEventTitle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Nasir Khan"
    }
  ],
  "line": 2,
  "name": "GF-1122 Event Objective",
  "description": "As a user \r\nIn order to apply for an opportunity\r\nI should be able to enter event object and preview",
  "id": "gf-1122-event-objective",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I open event objectives page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3143616807,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 144670790,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_objectives_page()"
});
formatter.result({
  "duration": 143556781,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify user able enter objectives and save.",
  "description": "",
  "id": "gf-1122-event-objective;verify-user-able-enter-objectives-and-save.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sprint3"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I should be able to enter event objective \"Seminar on space Technologies AutoTest\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should be able save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should return back to overview page.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest",
      "offset": 43
    }
  ],
  "location": "ThenSteps.i_should_be_able_to_enter_event_objective(String)"
});
formatter.result({
  "duration": 72581603,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_save_and_Continue()"
});
formatter.result({
  "duration": 162998740,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 26538,
  "status": "passed"
});
formatter.after({
  "duration": 18100,
  "status": "passed"
});
formatter.after({
  "duration": 14059,
  "status": "passed"
});
formatter.after({
  "duration": 12952,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify user able to enter free text in the title field and able to mark as complete",
  "description": "",
  "id": "gf-1122-event-objective;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Sprint3"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I  enter event objective \"Seminar on space Technologies AutoTest\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able select mark as complete checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should be able save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should return back to overview page.",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "gf-1122-event-objective;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete;",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 26,
      "id": "gf-1122-event-objective;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete;;1"
    },
    {
      "cells": [
        "Seminar on space Technologies AutoTest"
      ],
      "line": 27,
      "id": "gf-1122-event-objective;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the opportunity detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Make an application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I open event objectives page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_the_opportunity_detail_page()"
});
formatter.result({
  "duration": 3138740159,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 155129557,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_objectives_page()"
});
formatter.result({
  "duration": 149660032,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user able to enter free text in the title field and able to mark as complete",
  "description": "",
  "id": "gf-1122-event-objective;verify-user-able-to-enter-free-text-in-the-title-field-and-able-to-mark-as-complete;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Sprint3"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I  enter event objective \"Seminar on space Technologies AutoTest\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able select mark as complete checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should be able save and Continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should return back to overview page.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Seminar on space Technologies AutoTest",
      "offset": 26
    }
  ],
  "location": "WhenSteps.i_enter_event_objective(String)"
});
formatter.result({
  "duration": 100133308,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_select_mark_as_complete_checkbox()"
});
formatter.result({
  "duration": 51406714,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_save_and_Continue()"
});
formatter.result({
  "duration": 151179824,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 25948,
  "status": "passed"
});
formatter.after({
  "duration": 23277,
  "status": "passed"
});
formatter.after({
  "duration": 15004,
  "status": "passed"
});
formatter.after({
  "duration": 15910,
  "status": "passed"
});
});