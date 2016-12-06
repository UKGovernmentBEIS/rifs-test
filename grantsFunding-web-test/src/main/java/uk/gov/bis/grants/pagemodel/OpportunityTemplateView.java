package uk.gov.bis.grants.pagemodel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertTrue;

public class OpportunityTemplateView extends BasePage {

	public OpportunityTemplateView(WebDriver driver) {
		super(driver);
	}

	private WebDriver driver;
	private String pageTitle = "CreateNewOpportunity";

	//tabs on the template page
	By oppTemplate =By.cssSelector(".rifs-heading-panel>p>a");
	By setupTab = By.id("tab-opportunity-setup");
	By questionsTab = By.id("tab-opportunity-questions");
	By optionsTab = By.id("tab-opportunity-options");
	
	
	By setupTitle= By.id("op-setup-link1");
	By setupDeadline = By.id("op-setup-link2");
	By setupValue = By.id("op-setup-link3");
	By setupAboutthisOpport = By.id("op-setup-link4");
	By setupWhatweaskyou = By.id("op-setup-link5");
	By setupAssessmentCriteria = By.id("op-setup-link6");

// setup sections header
	By setupSectionHeader = By.xpath(".//*[@id='content']/div[2]/div/h1");
	By returnlink = By.xpath("//a[contains(@class,'return-link')]");
	
	
	public void ValidateAllsectionsonSetupTab() throws InterruptedException
	{
		assertTrue("Failed: SetupTab not displayed",this.IsElementDisplayed(setupTab));
		click(setupTab);
		assertTrue("Failed: Title section not displayed in setup tab ",this.IsElementDisplayed(setupTitle));
		assertTrue("Failed: Deadline link not displayed in setup tab",this.IsElementDisplayed(setupDeadline));
		assertTrue("Failed: Opportunity value link not displayed in setup tab",this.IsElementDisplayed(setupValue));
		assertTrue("Failed: Assessment criteria link not displayed",this.IsElementDisplayed(setupAssessmentCriteria));
		assertTrue("Failed:About this opportunity link not displayed",this.IsElementDisplayed(setupAboutthisOpport));
		assertTrue("Failed: what we ask you not displayed",this.IsElementDisplayed(setupWhatweaskyou));
		
	}
	
	public void OpenOpptemplate()
	{
		click(oppTemplate);
	}
	
	
	public void OpenQuestionsTab()
	{
		click(questionsTab);
	}
	
	public void OpenSetupsection(String section) {
		
		click(setupTab);
		switch (section) {

		case "Setup-Titile":
			click(setupTitle);
			break;

		case "setupDeadline":
			click(setupDeadline);
			break;

		case "setupValue":
			click(setupValue);
			break;

		case "setupAssessmentCriteria":
			click(setupAssessmentCriteria);
			break;

		case "setupAboutthisOpport":
			click(setupAboutthisOpport);
			break;
		
		case "setupWhatweaskyou":
			click(setupWhatweaskyou);
			
			break;
			
		}
	
		}

public void ValidateSectionHeader(String arg1){
	assertTrue("Failed:" + arg1 + "Section page not loaded properly",getText(setupSectionHeader).contains(arg1));
click(returnlink);
}
}