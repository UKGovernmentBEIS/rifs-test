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
  "duration": 4546324009,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_applicant_link()"
});
formatter.result({
  "duration": 2284169994,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_an_Opportunity_from_list()"
});
formatter.result({
  "duration": 147392475,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_details_of_that_opportunity()"
});
formatter.result({
  "duration": 7351586,
  "status": "passed"
});
formatter.after({
  "duration": 181277,
  "status": "passed"
});
formatter.after({
  "duration": 21558,
  "status": "passed"
});
formatter.after({
  "duration": 20530,
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
  "duration": 3024986347,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_applicant_link()"
});
formatter.result({
  "duration": 2144392450,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_an_Opportunity_from_list()"
});
formatter.result({
  "duration": 143049897,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_all_sections_on_opportunity_detail_page()"
});
formatter.result({
  "duration": 10372055972,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_firstnext_button()"
});
formatter.result({
  "duration": 146394911,
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
  "duration": 28896419,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_next_button_again()"
});
formatter.result({
  "duration": 182352206,
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
  "duration": 20102951,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_previous_button()"
});
formatter.result({
  "duration": 154419129,
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
  "duration": 21420885,
  "status": "passed"
});
formatter.after({
  "duration": 26067,
  "status": "passed"
});
formatter.after({
  "duration": 12935,
  "status": "passed"
});
formatter.after({
  "duration": 13941,
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
  "duration": 3024417545,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_land_on_start_page()"
});
formatter.result({
  "duration": 7816457,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_applicant_start_link()"
});
formatter.result({
  "duration": 2033441702,
  "status": "passed"
});
formatter.after({
  "duration": 277536,
  "status": "passed"
});
formatter.after({
  "duration": 15622,
  "status": "passed"
});
formatter.after({
  "duration": 16486,
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
  "duration": 3025159536,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_applicant_link()"
});
formatter.result({
  "duration": 2141886186,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_opportunity_list_page()"
});
formatter.result({
  "duration": 2038750473,
  "status": "passed"
});
formatter.after({
  "duration": 26494,
  "status": "passed"
});
formatter.after({
  "duration": 14027,
  "status": "passed"
});
formatter.after({
  "duration": 13485,
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
  "duration": 3141062945,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 139201728,
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
  "duration": 6559121,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_all_six_questions_displayed()"
});
formatter.result({
  "duration": 135380129,
  "status": "passed"
});
formatter.after({
  "duration": 24291,
  "status": "passed"
});
formatter.after({
  "duration": 19079,
  "status": "passed"
});
formatter.after({
  "duration": 11115,
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
  "duration": 3142007130,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 138370504,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 139628486,
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
  "duration": 103598004,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_save_and_Continue()"
});
formatter.result({
  "duration": 149109605,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 33539,
  "status": "passed"
});
formatter.after({
  "duration": 24195,
  "status": "passed"
});
formatter.after({
  "duration": 13108,
  "status": "passed"
});
formatter.after({
  "duration": 11329,
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
  "duration": 3142180105,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 135386226,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 136518361,
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
  "duration": 67598789,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_select_mark_as_complete_checkbox()"
});
formatter.result({
  "duration": 45211703,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_save_and_Continue()"
});
formatter.result({
  "duration": 146049175,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 46078,
  "status": "passed"
});
formatter.after({
  "duration": 15268,
  "status": "passed"
});
formatter.after({
  "duration": 19676,
  "status": "passed"
});
formatter.after({
  "duration": 12982,
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
  "duration": 3140899154,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 140118708,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 139765179,
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
  "duration": 67542365,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_select_mark_as_complete_checkbox()"
});
formatter.result({
  "duration": 726836511,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 141240912,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_date_and_time_stamp()"
});
formatter.result({
  "duration": 164386590,
  "status": "passed"
});
formatter.after({
  "duration": 23980,
  "status": "passed"
});
formatter.after({
  "duration": 12643,
  "status": "passed"
});
formatter.after({
  "duration": 11639,
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
  "duration": 3137732139,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 141702269,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 135976933,
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
  "duration": 89438334,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 159942288,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 137379957,
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
  "duration": 22715901,
  "status": "passed"
});
formatter.after({
  "duration": 23742,
  "status": "passed"
});
formatter.after({
  "duration": 12633,
  "status": "passed"
});
formatter.after({
  "duration": 12188,
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
  "duration": 3146046114,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 136822598,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 150354573,
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
  "duration": 89922447,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 151853573,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 134669187,
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
  "duration": 22643195,
  "status": "passed"
});
formatter.after({
  "duration": 121220,
  "status": "passed"
});
formatter.after({
  "duration": 16654,
  "status": "passed"
});
formatter.after({
  "duration": 12589,
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
  "duration": 3137263022,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 138114505,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 142905544,
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
  "duration": 66145088,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 149277618,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 149292722,
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
  "duration": 18993176,
  "status": "passed"
});
formatter.after({
  "duration": 23922,
  "status": "passed"
});
formatter.after({
  "duration": 28423,
  "status": "passed"
});
formatter.after({
  "duration": 20739,
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
  "duration": 3140785148,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 138564719,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 136683828,
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
  "duration": 95519635,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 168551651,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 142188770,
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
  "duration": 19381516,
  "status": "passed"
});
formatter.after({
  "duration": 26496,
  "status": "passed"
});
formatter.after({
  "duration": 12093,
  "status": "passed"
});
formatter.after({
  "duration": 12342,
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
  "duration": 3147257662,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 342092001,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_event_title_link_on_application_overview_page()"
});
formatter.result({
  "duration": 140898937,
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
  "duration": 99610382,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 350118428,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_title_page_again()"
});
formatter.result({
  "duration": 139056459,
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
  "duration": 22129762,
  "status": "passed"
});
formatter.after({
  "duration": 25379,
  "status": "passed"
});
formatter.after({
  "duration": 12277,
  "status": "passed"
});
formatter.after({
  "duration": 11382,
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
  "duration": 129558943,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_provisional_date_section()"
});
formatter.result({
  "duration": 140375295,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_valid_date(DataTable)"
});
formatter.result({
  "duration": 3187848954,
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
  "duration": 55444273,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 43332332,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 550848980,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 227292,
  "status": "passed"
});
formatter.after({
  "duration": 14564,
  "status": "passed"
});
formatter.after({
  "duration": 11919,
  "status": "passed"
});
formatter.after({
  "duration": 13342,
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
  "duration": 137815473,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_valid_date(DataTable)"
});
formatter.result({
  "duration": 3154293015,
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
  "duration": 61176657,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 170309593,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 199703,
  "status": "passed"
});
formatter.after({
  "duration": 13919,
  "status": "passed"
});
formatter.after({
  "duration": 92677,
  "status": "passed"
});
formatter.after({
  "duration": 9618,
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
  "duration": 146305978,
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
  "duration": 74696197,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 146041282,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 748625,
  "status": "passed"
});
formatter.after({
  "duration": 169904,
  "status": "passed"
});
formatter.after({
  "duration": 379303,
  "status": "passed"
});
formatter.after({
  "duration": 148749,
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
  "duration": 137587148,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_valid_date(DataTable)"
});
formatter.result({
  "duration": 3173948000,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 158322433,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 210663,
  "status": "passed"
});
formatter.after({
  "duration": 25199,
  "status": "passed"
});
formatter.after({
  "duration": 161297,
  "status": "passed"
});
formatter.after({
  "duration": 20761,
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
  "duration": 142464749,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 3203346376,
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
  "duration": 69002412,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue()"
});
formatter.result({
  "duration": 155078012,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 225114,
  "status": "passed"
});
formatter.after({
  "duration": 12648,
  "status": "passed"
});
formatter.after({
  "duration": 106838,
  "status": "passed"
});
formatter.after({
  "duration": 9445,
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
  "duration": 141499404,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_invalid_date(DataTable)"
});
formatter.result({
  "duration": 3185776721,
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
  "duration": 78097455,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 45615875,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 341099591,
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
  "duration": 29412589,
  "status": "passed"
});
formatter.after({
  "duration": 18602,
  "status": "passed"
});
formatter.after({
  "duration": 127782,
  "status": "passed"
});
formatter.after({
  "duration": 9285,
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
  "duration": 3185144568,
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
  "duration": 49091500,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 43017689,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 244778539,
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
  "duration": 51773572,
  "status": "passed"
});
formatter.after({
  "duration": 23747,
  "status": "passed"
});
formatter.after({
  "duration": 225567,
  "status": "passed"
});
formatter.after({
  "duration": 10525,
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
  "duration": 3168427651,
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
  "duration": 50385242,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 40957000,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 243425893,
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
  "duration": 22223353,
  "status": "passed"
});
formatter.after({
  "duration": 18902,
  "status": "passed"
});
formatter.after({
  "duration": 252942,
  "status": "passed"
});
formatter.after({
  "duration": 10585,
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
  "duration": 3166495903,
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
  "duration": 52219206,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 41639385,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 238707392,
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
  "duration": 22369818,
  "status": "passed"
});
formatter.after({
  "duration": 36007,
  "status": "passed"
});
formatter.after({
  "duration": 263775,
  "status": "passed"
});
formatter.after({
  "duration": 15329,
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
  "duration": 3171723296,
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
  "duration": 50533990,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 46666024,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 144397811,
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
  "duration": 23528189,
  "status": "passed"
});
formatter.after({
  "duration": 25675,
  "status": "passed"
});
formatter.after({
  "duration": 168559,
  "status": "passed"
});
formatter.after({
  "duration": 9867,
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
  "duration": 3149889232,
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
  "duration": 69286090,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 41528843,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 136102596,
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
  "duration": 22497235,
  "status": "passed"
});
formatter.after({
  "duration": 27800,
  "status": "passed"
});
formatter.after({
  "duration": 183144,
  "status": "passed"
});
formatter.after({
  "duration": 9306,
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
  "duration": 3141680123,
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
  "duration": 48732983,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 72334112,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 136050147,
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
  "duration": 25930405,
  "status": "passed"
});
formatter.after({
  "duration": 15992,
  "status": "passed"
});
formatter.after({
  "duration": 120394,
  "status": "passed"
});
formatter.after({
  "duration": 8009,
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
  "duration": 3155821500,
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
  "duration": 61153783,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 43007500,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 265007628,
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
  "duration": 23314507,
  "status": "passed"
});
formatter.after({
  "duration": 16447,
  "status": "passed"
});
formatter.after({
  "duration": 125185,
  "status": "passed"
});
formatter.after({
  "duration": 31776,
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
  "duration": 3168239043,
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
  "duration": 48914407,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_mark_as_complete()"
});
formatter.result({
  "duration": 39430442,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_save_and_continue_on_date_entry()"
});
formatter.result({
  "duration": 137215287,
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
  "duration": 23129729,
  "status": "passed"
});
formatter.after({
  "duration": 18363,
  "status": "passed"
});
formatter.after({
  "duration": 130703,
  "status": "passed"
});
formatter.after({
  "duration": 8947,
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
  "duration": 3140041473,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 138789371,
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
  "duration": 18463440,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_all_six_questions_are_clickable()"
});
formatter.result({
  "duration": 163433186,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_click_event_title()"
});
formatter.result({
  "duration": 145915800,
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
  "duration": 6207216,
  "status": "passed"
});
formatter.after({
  "duration": 17280,
  "status": "passed"
});
formatter.after({
  "duration": 8187,
  "status": "passed"
});
formatter.after({
  "duration": 7724,
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
  "duration": 3142132977,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 154717521,
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
  "duration": 143304896,
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
  "duration": 68189627,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_preview()"
});
formatter.result({
  "duration": 141764551,
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
  "duration": 23867522,
  "status": "passed"
});
formatter.after({
  "duration": 16837,
  "status": "passed"
});
formatter.after({
  "duration": 8963,
  "status": "passed"
});
formatter.after({
  "duration": 8335,
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
  "duration": 3139684137,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 154487664,
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
  "duration": 146776216,
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
  "duration": 70732186,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_preview()"
});
formatter.result({
  "duration": 144103038,
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
  "duration": 23921760,
  "status": "passed"
});
formatter.after({
  "duration": 19090,
  "status": "passed"
});
formatter.after({
  "duration": 13986,
  "status": "passed"
});
formatter.after({
  "duration": 218611,
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
  "duration": 3136998658,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 138202600,
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
  "duration": 140304181,
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
  "duration": 96742335,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_preview()"
});
formatter.result({
  "duration": 140555172,
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
  "duration": 20117321,
  "status": "passed"
});
formatter.after({
  "duration": 18342,
  "status": "passed"
});
formatter.after({
  "duration": 12331,
  "status": "passed"
});
formatter.after({
  "duration": 9060,
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
  "duration": 3136220624,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 148631742,
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
  "duration": 140688649,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_keep_title_field_empty()"
});
formatter.result({
  "duration": 20051817,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_preview()"
});
formatter.result({
  "duration": 139399415,
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
  "duration": 21734850,
  "status": "passed"
});
formatter.after({
  "duration": 18651,
  "status": "passed"
});
formatter.after({
  "duration": 9540,
  "status": "passed"
});
formatter.after({
  "duration": 9072,
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
  "duration": 3136392653,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 135849013,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_objectives_page()"
});
formatter.result({
  "duration": 144619069,
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
  "duration": 54878306,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_save_and_Continue()"
});
formatter.result({
  "duration": 171870275,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 19880,
  "status": "passed"
});
formatter.after({
  "duration": 19318,
  "status": "passed"
});
formatter.after({
  "duration": 9597,
  "status": "passed"
});
formatter.after({
  "duration": 9281,
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
  "duration": 3156647201,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_Make_an_application()"
});
formatter.result({
  "duration": 135718155,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_event_objectives_page()"
});
formatter.result({
  "duration": 142829246,
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
  "duration": 55431532,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_select_mark_as_complete_checkbox()"
});
formatter.result({
  "duration": 48952458,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_save_and_Continue()"
});
formatter.result({
  "duration": 149615581,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_return_back_to_overview_page()"
});
formatter.result({
  "duration": 28734,
  "status": "passed"
});
formatter.after({
  "duration": 17454,
  "status": "passed"
});
formatter.after({
  "duration": 9732,
  "status": "passed"
});
formatter.after({
  "duration": 14701,
  "status": "passed"
});
});