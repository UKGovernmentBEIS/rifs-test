package uk.gov.bis.grants.pagemodel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertTrue;

import java.util.Iterator;
import java.util.List;

public class OpportunityTemplateView extends BasePage {

	public OpportunityTemplateView(WebDriver driver) {
		super(driver);
	}

	private WebDriver driver;
	private String pageTitle = "CreateNewOpportunity";

	// tabs on the template page
	By oppTemplate = By.cssSelector(".rifs-heading-panel>p>a");
	By setupTab = By.id("tab-opportunity-setup");
	By questionsTab = By.id("tab-opportunity-questions");
	By optionsTab = By.id("tab-opportunity-options");

	By setupTitle = By.id("op-setup-link1");
	By setupDeadline = By.id("op-setup-link2");
	By setupValue = By.id("op-setup-link3");
	By setupAboutthisOpport = By.id("op-setup-link4");
	By setupWhatweaskyou = By.id("op-setup-link5");
	By setupAssessmentCriteria = By.id("op-setup-link6");

	// setup sections header
	By setupSectionHeader = By.xpath(".//*[@id='content']/div[2]/div/h1");
	By returnlink = By.xpath("//a[contains(@class,'return-link')]");

	By editTitle = By.id("title");
	By editSection = By.id("section");

	By duplicateOppor = By.xpath("//input[contains(@class,'button--start')]");

	By saveSection = By.xpath("//input[contains(@class,'button--start')]");

	By publishButton = By.name("_save_button");

	// word count

	By sectionWordcount = By.xpath(".//*[@id='section_hint_text']/span");

	// return to opportunity template page

	By returntotemplate = By.xpath(".//*[@id='global-header-status']/div[1]");

	By opplist = By.xpath(".//*[@id='content']/div[3]/section/table/tbody/tr/td[3]");

	public void ValidateAllsectionsonSetupTab() throws InterruptedException {
		assertTrue("Failed: SetupTab not displayed", this.IsElementDisplayed(setupTab));
		click(setupTab);
		assertTrue("Failed: Title section not displayed in setup tab ", this.IsElementDisplayed(setupTitle));
		assertTrue("Failed: Deadline link not displayed in setup tab", this.IsElementDisplayed(setupDeadline));
		assertTrue("Failed: Opportunity value link not displayed in setup tab", this.IsElementDisplayed(setupValue));
		assertTrue("Failed: Assessment criteria link not displayed", this.IsElementDisplayed(setupAssessmentCriteria));
		assertTrue("Failed:About this opportunity link not displayed", this.IsElementDisplayed(setupAboutthisOpport));
		assertTrue("Failed: what we ask you not displayed", this.IsElementDisplayed(setupWhatweaskyou));

	}

	public void OpenOpptemplate() {
		click(oppTemplate);
	}

	public void OpenQuestionsTab() {
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

	public void ValidateSectionHeader(String arg1) {
		assertTrue("Failed:" + arg1 + "Section page not loaded properly", getText(setupSectionHeader).contains(arg1));
		click(returnlink);
	}

	public void Entertext(String text, String section) {
		switch (section) {

		case "Setup-Titile":
			// click(setupTitle);
			type(editTitle, text);
			break;

		case "setupAssessmentCriteria":
			// click(setupAssessmentCriteria);
			type(editSection, text);

			break;

		case "setupAboutthisOpport":
			// click(setupAboutthisOpport);
			type(editSection, text);

			break;

		}
	}

	public void duplicateOpportunity() {
		click(duplicateOppor);
	}

	public void Savesection() {
		click(saveSection);
	}

	public void Validatewordcount_setup(String count, String section) {

		switch (section) {
		case "Setup-Titile":
			assertTrue("Failed word count is not as expected", getText(sectionWordcount).contains(count));

		case "setupAssessmentCriteria":
			assertTrue("Failed word count is not as expected", getText(sectionWordcount).contains(count));
			break;

		case "setupAboutthisOpport":
			assertTrue("Failed word count is not as expected", getText(sectionWordcount).contains(count));
			break;

		case "TopicsnSpeakers":
			assertTrue("Failed word count is not as expected", getText(sectionWordcount).contains(count));
			break;

		}

	}

	public void VerifyOpporutnityCreated() throws InterruptedException {
		// System.out.println("Publish button:"+ getText(publishButton));
		assertTrue("Failed: Opportunity not created", this.IsElementDisplayed(duplicateOppor));
		// assertTrue("Failed: Opportunity not
		// created",this.isTextPresent(duplicateOppor, "Publish"));
	}

	public void ReturntoTemplatePage() {
		click(returntotemplate);
	}

	public void chooseDraftOppfromlist() {
		List<WebElement> opplib = this.findelements(opplist);
		for (int i = 0; i < opplib.size(); i++) {

			if (opplib.get(i).getText().equals("Draft")) {
				i = i + 1;
				// System.out.println("Opp:"+opplib.get(i).getText());
				By selectOpp = By.xpath(".//*[@id='content']/div[3]/section/table/tbody/tr[" + i + "]/td[2]/a");
				click(selectOpp);
				break;

			}
		}

	}

}