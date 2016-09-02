$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("end2endApplicationSetup.feature");
formatter.feature({
  "line": 1,
  "name": "Application setup",
  "description": "In order to get funding for the published opportunity\r\nI should be able to set up application on grants funding system",
  "id": "application-setup",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "End to end initiate application.",
  "description": "",
  "id": "application-setup;end-to-end-initiate-application.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@BasicSmoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on application start page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on start application",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I login as applicant",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill in application form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I submit",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should successfully save application",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I should land on manage application page",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_application_start_page()"
});
formatter.result({
  "duration": 52518497756,
  "status": "passed"
});
formatter.match({
  "location": "GivenSteps.i_click_on_start_application()"
});
formatter.result({
  "duration": 203441932,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 201 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LT03379\u0027, ip: \u0027172.16.8.227\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_66\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, safari\u003dtrue, warnings\u003d{}, webdriver.remote.quietExceptions\u003dtrue, hasMetadata\u003dtrue, databaseEnabled\u003dfalse, deviceName\u003diPhone Simulator, platform\u003dMAC, desired\u003d{browserVersion\u003d9.2, platformVersion\u003d7.1, webdriver.remote.quietExceptions\u003dtrue, browserName\u003dsafari, platformName\u003diOS, deviceName\u003diPhone Simulator, device\u003diPhone 6 Plus}, webdriver.remote.sessionid\u003d6f64fa6c53304b898561756f1abf572b, browserVersion\u003d9.2, platformVersion\u003d7.1, locationContextEnabled\u003dfalse, webStorageEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dsafari, javascriptEnabled\u003dtrue, platformName\u003diOS, device\u003diPhone 6 Plus}]\nSession ID: 6f64fa6c53304b898561756f1abf572b\n*** Element info: {Using\u003dcss selector, value\u003d.button.button-start-now}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\r\n\tat com.sun.proxy.$Proxy16.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\r\n\tat uk.gov.bis.grants.pagemodel.BasePage.find(BasePage.java:57)\r\n\tat uk.gov.bis.grants.pagemodel.BasePage.click(BasePage.java:63)\r\n\tat uk.gov.bis.grants.pagemodel.startPage.startApplication(startPage.java:46)\r\n\tat uk.gov.bis.grants.stepdefs.GivenSteps.i_click_on_start_application(GivenSteps.java:73)\r\n\tat ✽.And I click on start application(end2endApplicationSetup.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GivenSteps.i_login_as_applicant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WhenSteps.i_fill_in_application_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WhenSteps.i_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_successfully_save_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_land_on_manage_application_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://www.apple.com/");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3569015425,
  "status": "passed"
});
formatter.write("Current Page URL is http://www.apple.com/");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2691293205,
  "status": "passed"
});
formatter.write("Current Page URL is http://www.apple.com/");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 2573595765,
  "status": "passed"
});
formatter.uri("landingpage.feature");
formatter.feature({
  "line": 1,
  "name": "Landing Page",
  "description": "I want to be able to see landing page",
  "id": "landing-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify landing page",
  "description": "",
  "id": "landing-page;verify-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@BasicSmoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should be able to see landing page.",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_launch_app()"
});
formatter.result({
  "duration": 6702384550,
  "status": "passed"
});
formatter.match({
  "location": "GivenSteps.i_should_be_able_to_see_landing_page()"
});
formatter.result({
  "duration": 192611723,
  "error_message": "java.lang.AssertionError: Failed:Link not displayed\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat uk.gov.bis.grants.pagemodel.LandingPage.verifyLinkDisplayed(LandingPage.java:88)\r\n\tat uk.gov.bis.grants.stepdefs.GivenSteps.i_should_be_able_to_see_landing_page(GivenSteps.java:102)\r\n\tat ✽.Then I should be able to see landing page.(landingpage.feature:7)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is http://www.apple.com/");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 2576624304,
  "status": "passed"
});
formatter.write("Current Page URL is http://www.apple.com/");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 2136507492,
  "status": "passed"
});
formatter.write("Current Page URL is http://www.apple.com/");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 2579331659,
  "status": "passed"
});
});