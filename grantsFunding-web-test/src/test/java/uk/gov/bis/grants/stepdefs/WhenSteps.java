package uk.gov.bis.grants.stepdefs;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.When;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.PageFactory;
import uk.gov.bis.grants.pagemodel.*;
import uk.gov.bis.grants.utils.AppProperties;


public class WhenSteps {


    private WebDriver driver;
    LandingPage mainPage;
    startPage appStartPge;
    loginPage loginPage;
    applicationformPage appform;
    createOpportunityPage oppPage;
    OpportunityDetailPage oppdetailPage;


    String platform = AppProperties.get("platform");


    public WhenSteps(SharedWebDriver driver) {
        this.driver = driver;
        mainPage = PageFactory.initElements(driver,
                LandingPage.class);

        appStartPge = PageFactory.initElements(driver, startPage.class);
        loginPage = PageFactory.initElements(driver, loginPage.class);
        appform = PageFactory.initElements(driver, applicationformPage.class);
        oppPage = PageFactory.initElements(driver, createOpportunityPage.class);
        oppdetailPage = PageFactory.initElements(driver,OpportunityDetailPage.class);
    }

    @When("^I click on start$")
    public void i_click_on_start() throws Throwable {
        appStartPge.startApplication();
    }

    @When("^I click on apply button$")
    public void i_click_on_apply_button() throws Throwable {
        appStartPge.clickApply();

    }
    @When("^I click firstnext button$")
    public void i_click_firstnext_button() throws Throwable {
        oppdetailPage.clickfirstNext();
    }
    
    @When("^I click on next button again$")
    public void i_click_on_next_button_again() throws Throwable {
        oppdetailPage.clickNext();
    }
    
    @When("^I click on previous button$")
    public void i_click_on_previous_button() throws Throwable {
        oppdetailPage.clickPrevious();
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


    @When("^I login with user as$")
    public void i_login_with_user_as(DataTable arg1) throws Throwable {

        loginPage.login(arg1);


    }
    
    @When("^I click on applicant link$")
    public void i_click_on_applicant_link() throws Throwable {
        appStartPge.asanApplicant();
    }

    @When("^I click on Make an application$")
    public void i_click_on_Make_an_application() throws Throwable {
        
    	oppdetailPage.makeApplication();
    	
    	
    }
    
    
    @When("^I select an Opportunity from list$")
    public void i_select_an_Opportunity_from_list() throws Throwable {
    	appStartPge.selectOppor();
        
    }
    
    @When("^I click on event title link on application overview page$")
    public void i_click_on_event_title_link_on_application_overview_page() throws Throwable {
        appform.OpenTitilePage();
    }
    
    @When("^I enter title \"([^\"]*)\"$")
    public void i_enter_title(String arg1) throws Throwable {
        appform.EnterTitle(arg1);
    }
    
    @When("^I enter title \"([^\"]*)\" within required word size limit$")
    public void i_enter_title_within_required_word_size_limit(String arg1) throws Throwable {
        appform.EnterTitle(arg1);
    }
    @When("^I enter title \"([^\"]*)\" outside required word size limit$")
    public void i_enter_title_outside_required_word_size_limit(String arg1) throws Throwable {
       appform.EnterTitle(arg1);
    }
    
    @When("^I save and continue$")
    public void i_save_and_continue() throws Throwable {
        appform.SaveAndContine();    }
    
    @When("^I open event title page again$")
    public void i_open_event_title_page_again() throws Throwable {
        appform.OpenTitilePage();
    }
    
    @When("^I click on \"([^\"]*)\"$")
    public void i_click_on(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        appform.OpenSection(arg1);
    }
    



    

    @When("^I should be able click mark as complete link$")
    public void i_should_be_able_click_mark_as_complete_link() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        appform.markAsComplete();
    }

    
    
    
    @After()
    /**
     * Embed a screenshot in test report if test is marked as failed
     */
    public void embedScreenshot(Scenario scenario) {

        if (scenario.isFailed()) {
            try {
                scenario.write("Current Page URL is " + driver.getCurrentUrl());
//	            byte[] screenshot = getScreenshotAs(OutputType.BYTES);
                byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (WebDriverException somePlatformsDontSupportScreenshots) {
                System.err.println(somePlatformsDontSupportScreenshots.getMessage());
            }

        }


    }


}
