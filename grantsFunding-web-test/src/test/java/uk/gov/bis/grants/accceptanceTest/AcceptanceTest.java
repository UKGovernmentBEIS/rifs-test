package uk.gov.bis.grants.accceptanceTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format = { "html:target/cucumber-reports/html",
		"json:target/cucumber-reports/cucumber.json" }, features = {
				"src/test/resources/features.functional/Rifs/" }, glue = "uk.gov.bis.grants.stepdefs", tags = {
						"@Sprint1,@Sprint2,@Sprint3,@Sprint4", "~@ignore,@Pending" })
// glue="uk.gov.bis.grants.stepdefs",tags={"@current","~@ignore,@Pending"})

public class AcceptanceTest {

}
