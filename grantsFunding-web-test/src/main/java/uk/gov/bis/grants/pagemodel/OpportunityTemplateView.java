package uk.gov.bis.grants.pagemodel;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.DataTable;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Iterator;

public class OpportunityTemplateView extends BasePage {

	public OpportunityTemplateView(WebDriver driver) {
		super(driver);
	}

	private WebDriver driver;
	private String pageTitle = "CreateNewOpportunity";

	//tabs on the template page
	By oppTemplate =By.xpath(".//*[@id='content']/div[2]/div[1]/div[1]/p/a");
	By setupTab = By.id("tab-opportunity-setup");
	By questionsTab = By.id("tab-opportunity-questions");
	By optionsTab = By.id("tab-opportunity-options");
	
	
	By setupTitle= By.id("op-setup-link1");
	By setupDeadline = By.id("op-setup-link2");
	By setupDescription = By.id("op-setup-link3");
	By setupValue = By.id("op-setup-link4");
	By setupAssessmentCriteria = By.xpath(".//*[@id='opportunity-setup-enhanced']/table/tbody/tr[5]/td/a");
	By setupAboutthisOpport = By.xpath(".//*[@id='opportunity-setup-enhanced']/table/tbody/tr[7]/td/a");
	By setupWhatweaskyou = By.xpath(".//*[@id='opportunity-setup-enhanced']/table/tbody/tr[6]/td/a");
	
	
	
	public void ValidateAllsectionsonSetupTab() throws InterruptedException
	{
		assertTrue("Failed: SetupTab not displayed",this.IsElementDisplayed(setupTab));
		click(setupTab);
		assertTrue("Failed: Title section not displayed in setup tab ",this.IsElementDisplayed(setupTitle));
		assertTrue("Failed: Deadline link not displayed in setup tab",this.IsElementDisplayed(setupDeadline));
		assertTrue("Failed: Description link not displayed in setup tab",this.IsElementDisplayed(setupDescription));
		assertTrue("Failed: Opportunity value link not displayed in setup tab",this.IsElementDisplayed(setupValue));
		assertTrue("Failed: Assessment criteria link not displayed",this.IsElementDisplayed(setupAssessmentCriteria));
		assertTrue("Failed:About this opportunity link not displayed",this.IsElementDisplayed(setupAboutthisOpport));
		assertTrue("Failed: what we ask you not displayed",this.IsElementDisplayed(setupWhatweaskyou));
		
	}
	
	public void OpenOpptemplate()
	{
		click(oppTemplate);
	}
	
	
	}