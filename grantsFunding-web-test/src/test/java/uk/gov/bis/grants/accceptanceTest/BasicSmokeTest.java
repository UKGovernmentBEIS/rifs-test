package uk.gov.bis.grants.accceptanceTest;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = { "html:target/cucumber-reports/html", "json:target/cucumber-reports/cucumber.json" }, 
		features = {"src/test/resources/features.functional/BasicSmoke"},glue="uk.gov.bis.grants.stepdefs",tags={"@current","~@ignore"})


public class BasicSmokeTest {

}
