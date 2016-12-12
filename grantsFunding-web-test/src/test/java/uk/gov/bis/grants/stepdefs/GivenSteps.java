package uk.gov.bis.grants.stepdefs;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.PageFactory;
import uk.gov.bis.grants.pagemodel.*;

public class GivenSteps {

	BasePage basepage;
	startPage appStartPge;

	AppFormPage appformPage;
	ApplicationCostEntry appCostPage;
	OpportunityTemplateView oppTemplate;

	public WebDriver driver;

	public GivenSteps(SharedWebDriver driver) {
		this.driver = driver;

		appStartPge = PageFactory.initElements(driver, startPage.class);

		appformPage = PageFactory.initElements(driver, AppFormPage.class);
		appCostPage = PageFactory.initElements(driver, ApplicationCostEntry.class);
		oppTemplate = PageFactory.initElements(driver,OpportunityTemplateView.class);

	}

	@Given("^I launch app$")
	public void i_launch_app() throws Throwable {

		// landingPage.gotoOpportunityPage();
		Thread.sleep(2000);

	}
	@Given("^I click portfoliomanagerlink$")
	public void i_click_portfoliomanagerlink() throws Throwable {
	   appStartPge.asaPortfolioManager();
	}


	@Given("^I am Opportunity details page$")
	public void i_am_Opportunity_details_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		Thread.sleep(2000);
	}

	@Then("^I should able to register new user as$")
	public void i_should_able_to_register_new_user_as(DataTable arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		throw new PendingException();
	}

	@Given("^I am on application start page$")
	public void i_am_on_application_start_page() throws Throwable {

		appformPage.gotoOpportunityPage();
		Thread.sleep(2000);
	}

	@Given("^I click on start application$")
	public void i_click_on_start_application() throws Throwable {
		appStartPge.startApplication();

	}

	@Given("^I launch application$")
	public void i_launch_application() throws Throwable {
		appformPage.launch_app();
	}

	@Given("^I am on the opportunity detail page$")
	public void i_am_on_the_opportunity_detail_page() throws Throwable {
		appformPage.launch_app();
		appformPage.gotoOpportunityPage();

	}

	@Then("^I should be able to see landing page\\.$")
	public void i_should_be_able_to_see_landing_page() throws Throwable {
		// appformPage.verifyLinkDisplayed();
	}

	@Given("^I am on the event title page$")
	public void i_am_on_the_event_tite_page() throws Throwable {
		appformPage.OpenTitilePage();
	}

	@Given("^I am on application overview page$")
	public void i_am_on_application_overview_page() throws Throwable {
		appformPage.gotoApplicationOverviewPage();
		appformPage.verifyPageTitle("Overview");
	}

	@Given("^I  add cost items$")
	public void i_add_cost_items(DataTable arg1) throws Throwable {
		appCostPage.AddCostItem(arg1);
	}
	
	@Given("^I click on duplicate this opportunity$")
	public void i_click_on_duplicate_this_opportunity() throws Throwable {
		oppTemplate.duplicateOpportunity();
	   
	}

	@After()
	/**
	 * Embed a screenshot in test report if test is marked as failed
	 */
	public void embedScreenshot(Scenario scenario) {

		if (scenario.isFailed()) {
			try {
				scenario.write("Current Page URL is " + driver.getCurrentUrl());
				// byte[] screenshot = getScreenshotAs(OutputType.BYTES);
				byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				System.err.println(somePlatformsDontSupportScreenshots.getMessage());
			}

		}

	}

}