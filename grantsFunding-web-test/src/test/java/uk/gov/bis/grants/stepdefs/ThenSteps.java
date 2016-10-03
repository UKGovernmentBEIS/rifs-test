package uk.gov.bis.grants.stepdefs;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Then;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.PageFactory;
import uk.gov.bis.grants.pagemodel.*;
import uk.gov.bis.grants.utils.AppProperties;

import java.util.List;

//import junit.framework.Assert;

public class ThenSteps {
	LandingPage mainPage;
	manageApplicationPage mngeApplication;
	applicationformPage appformpage;
	loginPage loginPage;
	createOpportunityPage oppPage;
	startPage startpage;
	private  WebDriver driver;
	String platform= AppProperties.get("platform");

	public ThenSteps(SharedWebDriver driver){
		
		this.driver=driver;
		mainPage = PageFactory.initElements(driver,
	            LandingPage.class);
			
		mngeApplication= PageFactory.initElements(driver, manageApplicationPage.class);
		appformpage = PageFactory.initElements(driver, applicationformPage.class);
		loginPage = PageFactory.initElements(driver,loginPage.class);
		oppPage = PageFactory.initElements(driver,createOpportunityPage.class);
		startpage = PageFactory.initElements(driver,startPage.class);
		
	}


	@Then("^I should see application form$")
	public void i_should_see_application_form() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions


	}

	@Then("^I should be able to enter \"(.*?)\" in project title$")
	public void i_should_be_able_to_enter_in_project_title(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions


	}

	@Then("^I should successfully save application$")
	public void i_should_successfully_save_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    mngeApplication.verifymanageapplicationpage();
	}

	
	@Then("^I should land on manage application page$")
	public void i_should_land_on_manage_application_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		mngeApplication.verifymanageapplicationpage();
	}
	
	
	@Then("^I should be able to login successfully$")
	public void i_should_be_able_to_login_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		appformpage.validateLandingPage();
	   
	}
	
	@Then("^I should land on to my dashboard$")
	public void i_should_land_on_to_my_dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}
	
	@Then("^I should not be able to login$")
	public void i_should_not_be_able_to_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//appformpage.validateLandingPage();
	}
	
	@Then("^I should see error message$")
	public void i_should_see_error_message() throws Throwable {
	    loginPage.validateErrormsg();
	   
	}

	

	@Then("^I should see error message as \"([^\"]*)\"$")
	public void i_should_see_error_message_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    loginPage.validateErrormsgforEmptyemailLogin(arg1);
	}
	@Then("^I should see inline error message under password field as \"([^\"]*)\"$")
	public void i_should_see_inline_error_message_under_password_field_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		loginPage.validateErrormsgforEmptypassLogin(arg1);
	}
	


	@Then("^I should see following <OpportunityTemplates> in template list$")
	public void i_should_see_following_OpportunityTemplates_in_template_list(List<String> arg1) throws Throwable {
	   
	  oppPage.VerifyOppTemplatelist(arg1);
	}
	
	@Then("^I should be able to initiate opportunity$")
	public void i_should_be_able_to_initiate_opportunity() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    oppPage.InitiateOpp();
	    
	}
	
	@Then("^I should be able to see dashboard\\.$")
	public void i_should_be_able_to_see_dashboard() throws Throwable {
	   mainPage.verifyPage();
	    //throw new PendingException();
	}
	
	
	@Then("^I should be able to see app landing page \"([^\"]*)\"$")
	public void i_should_be_able_to_see_app_landing_page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		mainPage.verifydPageTitle(arg1);
	}
	
	@Then("^I should be able to land on start page$")
	public void i_should_be_able_to_land_on_start_page() throws Throwable {
	    mainPage.verifydPageTitle("Start Page");
	}

	
	@Then("^I should see applicant start link$")
	public void i_should_see_applicant_start_link() throws Throwable {
		startpage.validateapplicantLink();
	    
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
	
