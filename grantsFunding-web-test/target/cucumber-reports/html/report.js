$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BasicSmoke/GF725-SelectOpptemplate.feature");
formatter.feature({
  "line": 1,
  "name": "Select Opportunity template from list",
  "description": "As a user I want to be able to select an oppotunity template from given list",
  "id": "select-opportunity-template-from-list",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#Verify only Portfolio manager should be able to see list of opportunity templates and create opportunity."
    },
    {
      "line": 7,
      "value": "#Verify Opportunity templates are retrieved from db,any change to template in database should show updated template in UI."
    },
    {
      "line": 8,
      "value": "#Verify when Opptype is choosen from the list, Opportunity template field to be populated with relevant templates from database."
    },
    {
      "line": 9,
      "value": "#Verify each Opportunity is associated to an Opp type."
    },
    {
      "line": 10,
      "value": "#Verify Portfolio manager able to select an opportunity from the list and initiate button to take to further next steps to configure."
    },
    {
      "line": 11,
      "value": "#Verify Portfolio manager should be able to edit by re-selecting different opportunity and save."
    },
    {
      "line": 12,
      "value": "#Verify when new Opptype added , it should be listed in the Opptype list field."
    },
    {
      "line": 13,
      "value": "#Verify when new Opp template added in db and associated to a particular opp type, it should be populated in template list when associated Opptype is selected."
    }
  ],
  "line": 18,
  "name": "OppType associated to Opportunity templates",
  "description": "",
  "id": "select-opportunity-template-from-list;opptype-associated-to-opportunity-templates",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I login as an exiting Portfolio manager",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on create opportunity link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am on Opportunity initiate page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I choose an Opptype \"Event\" from list",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see following \u003cOpportunityTemplates\u003e in template list",
  "rows": [
    {
      "cells": [
        "Exploring innovation seminars"
      ],
      "line": 25
    },
    {
      "cells": [
        "Networking event"
      ],
      "line": 26
    },
    {
      "cells": [
        "Conference"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_login_page()"
});
formatter.result({
  "duration": 8500795394,
  "error_message": "java.lang.AssertionError: Failed: Application Failed to launch\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat uk.gov.bis.grants.pagemodel.BasePage.launch_app(BasePage.java:41)\n\tat uk.gov.bis.grants.stepdefs.GivenSteps.i_am_on_login_page(GivenSteps.java:99)\n\tat ✽.Given I am on login page(BasicSmoke/GF725-SelectOpptemplate.feature:19)\n",
  "status": "failed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_an_exiting_Portfolio_manager()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GivenSteps.i_click_on_create_opportunity_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GivenSteps.i_am_on_Opportunity_initiate_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Event",
      "offset": 21
    }
  ],
  "location": "WhenSteps.i_choose_an_Opptype_from_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_see_following_OpportunityTemplates_in_template_list(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 241792300,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 99350433,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 91839835,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 29,
      "value": "#When I choose an Opptype \"Test-opp\" from list"
    },
    {
      "line": 30,
      "value": "#Then I should see following \u003cOpportunityTemplates\u003e in template list"
    },
    {
      "line": 31,
      "value": "#|Values|"
    },
    {
      "line": 32,
      "value": "#|Conference-test|"
    },
    {
      "line": 33,
      "value": "#|Conference-test|"
    }
  ],
  "line": 38,
  "name": "Select Opptype and template",
  "description": "",
  "id": "select-opportunity-template-from-list;select-opptype-and-template",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on Opportunity initiate page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I choose an Opptype \"Test-opp\" from list",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I choose template \"Conference-test1\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should be able to initiate opportunity",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_Opportunity_initiate_page()"
});
formatter.result({
  "duration": 6981717962,
  "error_message": "java.lang.AssertionError: Failed: Application Failed to launch\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat uk.gov.bis.grants.pagemodel.BasePage.launch_app(BasePage.java:41)\n\tat uk.gov.bis.grants.stepdefs.GivenSteps.i_am_on_Opportunity_initiate_page(GivenSteps.java:121)\n\tat ✽.Given I am on Opportunity initiate page(BasicSmoke/GF725-SelectOpptemplate.feature:39)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test-opp",
      "offset": 21
    }
  ],
  "location": "WhenSteps.i_choose_an_Opptype_from_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Conference-test1",
      "offset": 19
    }
  ],
  "location": "WhenSteps.i_choose_template(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_initiate_opportunity()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 140437361,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 83768576,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 70693894,
  "status": "passed"
});
formatter.uri("BasicSmoke/appLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login as applicant/Portfolio manager",
  "description": "As a user I want to be able to login to application",
  "id": "login-as-applicant/portfolio-manager",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Applicant Successful login",
  "description": "",
  "id": "login-as-applicant/portfolio-manager;applicant-successful-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login as applicant user",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_login_page()"
});
formatter.result({
  "duration": 7305194862,
  "error_message": "java.lang.AssertionError: Failed: Application Failed to launch\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat uk.gov.bis.grants.pagemodel.BasePage.launch_app(BasePage.java:41)\n\tat uk.gov.bis.grants.stepdefs.GivenSteps.i_am_on_login_page(GivenSteps.java:99)\n\tat ✽.Given I am on login page(BasicSmoke/appLogin.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_applicant_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 119774307,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 90225328,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 68174786,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Portfolio manager successful login",
  "description": "",
  "id": "login-as-applicant/portfolio-manager;portfolio-manager-successful-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I login as an exiting Portfolio manager",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should land on to my dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_login_page()"
});
formatter.result({
  "duration": 6687068768,
  "error_message": "java.lang.AssertionError: Failed: Application Failed to launch\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat uk.gov.bis.grants.pagemodel.BasePage.launch_app(BasePage.java:41)\n\tat uk.gov.bis.grants.stepdefs.GivenSteps.i_am_on_login_page(GivenSteps.java:99)\n\tat ✽.Given I am on login page(BasicSmoke/appLogin.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_an_exiting_Portfolio_manager()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_land_on_to_my_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 188977661,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 98052776,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 77106010,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid user login",
  "description": "",
  "id": "login-as-applicant/portfolio-manager;invalid-user-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I login with incorrect user details",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should not be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see error message",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_login_page()"
});
formatter.result({
  "duration": 6861154910,
  "error_message": "java.lang.AssertionError: Failed: Application Failed to launch\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat uk.gov.bis.grants.pagemodel.BasePage.launch_app(BasePage.java:41)\n\tat uk.gov.bis.grants.stepdefs.GivenSteps.i_am_on_login_page(GivenSteps.java:99)\n\tat ✽.Given I am on login page(BasicSmoke/appLogin.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "location": "WhenSteps.i_login_with_incorrect_user_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_not_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_see_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 201055622,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 189252496,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 203152855,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "login with empty email box",
  "description": "",
  "id": "login-as-applicant/portfolio-manager;login-with-empty-email-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I login with empty email box",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should not be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I should see error message as \"Enter valid email address\"",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_login_page()"
});
formatter.result({
  "duration": 6624845475,
  "error_message": "java.lang.AssertionError: Failed: Application Failed to launch\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat uk.gov.bis.grants.pagemodel.BasePage.launch_app(BasePage.java:41)\n\tat uk.gov.bis.grants.stepdefs.GivenSteps.i_am_on_login_page(GivenSteps.java:99)\n\tat ✽.Given I am on login page(BasicSmoke/appLogin.feature:25)\n",
  "status": "failed"
});
formatter.match({
  "location": "WhenSteps.i_login_with_empty_email_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_not_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter valid email address",
      "offset": 31
    }
  ],
  "location": "ThenSteps.i_should_see_error_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 117796314,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 84584805,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 70188242,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "login with no password entered",
  "description": "",
  "id": "login-as-applicant/portfolio-manager;login-with-no-password-entered",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I login with no password",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I should not be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I should see inline error message under password field as \"Enter your password\"",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_login_page()"
});
formatter.result({
  "duration": 6601039457,
  "error_message": "java.lang.AssertionError: Failed: Application Failed to launch\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat uk.gov.bis.grants.pagemodel.BasePage.launch_app(BasePage.java:41)\n\tat uk.gov.bis.grants.stepdefs.GivenSteps.i_am_on_login_page(GivenSteps.java:99)\n\tat ✽.Given I am on login page(BasicSmoke/appLogin.feature:32)\n",
  "status": "failed"
});
formatter.match({
  "location": "WhenSteps.i_login_with_no_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_not_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter your password",
      "offset": 59
    }
  ],
  "location": "ThenSteps.i_should_see_inline_error_message_under_password_field_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 157461980,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 78340081,
  "status": "passed"
});
formatter.write("Current Page URL is https://ifs.dev.innovateuk.org/assessment/assessor/dashboard");
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 90623281,
  "status": "passed"
});
});