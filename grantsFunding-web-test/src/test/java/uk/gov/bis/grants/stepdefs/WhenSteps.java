package uk.gov.bis.grants.stepdefs;

import static org.junit.Assert.assertTrue;

import java.util.List;


import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.When;
import uk.gov.bis.grants.pagemodel.LandingPage;
import uk.gov.bis.grants.pagemodel.applicationformPage;
import uk.gov.bis.grants.pagemodel.createOpportunityPage;
import uk.gov.bis.grants.pagemodel.startPage;
import uk.gov.bis.grants.pagemodel.loginPage;
import uk.gov.bis.grants.utils.AppProperties;


public class WhenSteps {
	
	
	private  WebDriver driver;
	LandingPage mainPage;
	startPage  appStartPge;
	loginPage loginPage;
	applicationformPage appform;
	createOpportunityPage oppPage;

	
	String platform= AppProperties.get("platform");
	
	
	public WhenSteps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver,
	            LandingPage.class);
		
		appStartPge = PageFactory.initElements(driver,startPage.class);
		loginPage = PageFactory.initElements(driver,loginPage.class);
		appform = PageFactory.initElements(driver,applicationformPage.class);
		oppPage = PageFactory.initElements(driver,createOpportunityPage.class);
	}
	
	@When("^I click on start$")
	public void i_click_on_start() throws Throwable {
	   appStartPge.startApplication();
	}

	@When("^I click on apply button$")
	public void i_click_on_apply_button() throws Throwable {
		appStartPge.clickApply();
	    
	}
	
	
	@When("^I fill in application form$")
	public void i_fill_in_application_form() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		appform.validateLandingPage();
		appform.fillinAppForm("AutoTest-title2", "AutoTestDescription1");
	    
	}

	@When("^I submit$")
	public void i_submit() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    appform.submitapplication();
	}
	@When("^I login as applicant user$")
	public void i_login_as_applicant_user() throws Throwable {
		loginPage.login_app("newbie.nina@rc.co.uk", "password");
	}
	
	@When("^I login as an exiting Portfolio manager$")
	public void i_login_as_an_exiting_Portfolio_manager() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		loginPage.login_app("portfolio.peter@rc.co.uk", "password");
		
		
	}
	
	
	@When("^I login with incorrect user details$")
	public void i_login_with_incorrect_user_details() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
		loginPage.login_app("newbie.nina@rc.co.uk", "dsfsdf");
		
	}

	@When("^I login with empty email box$")
	public void i_login_with_empty_email_box() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    loginPage.Invalidlogin_app("no email");
		Thread.sleep(3000);
	}

	@When("^I login with no password$")
	public void i_login_with_no_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		loginPage.Invalidlogin_app("no password");
		Thread.sleep(3000);
	}

	@When("^I choose an Opptype \"([^\"]*)\" from list$")
	public void i_choose_an_Opptype_from_list(String arg1) throws Throwable {
	    oppPage.SelectOpptype(arg1);
	}

	@When("^I choose template \"([^\"]*)\"$")
	public void i_choose_template(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    oppPage.Selecttemplatefromlist(arg1);
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
