package uk.gov.bis.grants.stepdefs;



import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.gov.bis.grants.pagemodel.BasePage;
import uk.gov.bis.grants.pagemodel.LandingPage;
import uk.gov.bis.grants.pagemodel.createOpportunityPage;
import uk.gov.bis.grants.pagemodel.guidancePage;
import uk.gov.bis.grants.pagemodel.loginPage;
import uk.gov.bis.grants.pagemodel.startPage;


public class GivenSteps {
	LandingPage landingPage;
	guidancePage guidancePage1;
	BasePage basepage;
	startPage  appStartPge;
	loginPage loginpage;
	createOpportunityPage createOpp;
	
	public WebDriver driver;

	
	public GivenSteps(SharedWebDriver driver){
		this.driver=driver;
		
		landingPage = PageFactory.initElements(driver,LandingPage.class);
		appStartPge = PageFactory.initElements(driver,startPage.class);
		loginpage= PageFactory.initElements(driver,loginPage.class);
		createOpp = PageFactory.initElements(driver,createOpportunityPage.class);
	}
 
	
	
	
	@Given("^I launch app$")
	public void i_launch_app() throws Throwable {
		landingPage.launch_app();
		landingPage.gotoOpportunityPage();
		Thread.sleep(2000);
	    
	}
	
	
	@Given("^I am Opportunity details page$")
	public void i_am_Opportunity_details_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		landingPage.launch_app();
		landingPage.gotoOpportunityPage();
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
	    // Write code here that turns the phrase above into concrete actions
		landingPage.launch_app();
		landingPage.gotoOpportunityPage();
		Thread.sleep(2000);
	}
	
	@Given("^I am on login page$")
	public void i_am_on_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		landingPage.launch_app();
		landingPage.gotoLogin();
	}
	
	@Given("^I click on start application$")
	public void i_click_on_start_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		appStartPge.startApplication();
	    
	}
	
	@Given("^I login as applicant$")
	public void i_login_as_applicant() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		loginpage.login_app("newbie.nina@rc.co.uk", "password");
	    
	}

	
	@Given("^I am on Opportunity initiate page$")
	public void i_am_on_Opportunity_initiate_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		landingPage.launch_app();
		landingPage.gotoOppInitiatePage();
	}

	@Given("^I click on create opportunity link$")
	public void i_click_on_create_opportunity_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  createOpp.click_createOpplink();  
	}
	

	@Then("^I should be able to see landing page\\.$")
	public void i_should_be_able_to_see_landing_page() throws Throwable {
		
		landingPage.verifyLinkDisplayed();
	   
	}

	
	 @After()
	    /**
	     * Embed a screenshot in test report if test is marked as failed
	     */
	    public void embedScreenshot(Scenario scenario) {
	       
	        if(scenario.isFailed()) {
	        try {
	        	 scenario.write("Current Page URL is " + driver.getCurrentUrl());
//	            byte[] screenshot = getScreenshotAs(OutputType.BYTES);
	            byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "image/png");
	        } catch (WebDriverException somePlatformsDontSupportScreenshots) {
	            System.err.println(somePlatformsDontSupportScreenshots.getMessage());
	        }
	        
	        }
	        
	        
	    }
	    
	
	

}