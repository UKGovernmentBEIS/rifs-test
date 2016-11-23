package uk.gov.bis.grants.pagemodel;



import uk.gov.bis.grants.utils.AppProperties;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class ApplicationPreviewPage extends BasePage {

	public ApplicationPreviewPage(WebDriver driver) {
		super(driver);
	}


	private  WebDriver driver;

	//private String pageTitle = "Application Preview";

	//Opp Links:-
	By appTitle = By.xpath(".//*[@id='content']/div[2]/div[1]/h1/div");
	By instructionText = By.xpath(".//*[@id='content']/div[2]/div[1]/div/aside/div[1]/h2");

	By appsectionLink1 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[1]/li[1]/a");
	By appsectionLink2 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[1]/li[2]/a");
	By appsectionLink3 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[1]/li[3]/a");
	By appsectionLink4 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[1]/li[4]/a");
	By appsectionLink5 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[1]/li[5]/a");
	By appsectionLink6 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[1]/li[6]/a");

	By appsection1 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[1]/h2");
	By appsection2 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[2]/h2");
	By appsection3 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[3]/h2");
	By appsection4 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[4]/h2");
	By appsection5 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[5]/h2");
	By appsection6 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[6]/h2");

	By appsectionAnswer1 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[1]/div/p");
	By appsectionAnswer2 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[2]/div/p");
	By appsectionAnswer3 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[3]/div/p");
	By appsectionAnswer4 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[4]/div/p");
	By appsectionAnswer5 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[5]/div/p");
	By appsectionAnswer6 = By.xpath(".//*[@id='content']/div[2]/div[1]/article/div[6]/div/p");

	By printpreview = By.xpath(".//*[@id='print']");
	By closebutton = By.xpath(".//*[@id='content']/div[2]/div[1]/div/aside/div[2]/p/a");

	By previewapplicationlink = By.xpath(".//*[@id='content']/div[2]/div[1]/form/div/p/a");

	//By firstnextbutton = By.xpath(".//*[@id='content']/div/footer/div/a");
	By sectionHeading = By.xpath(".//*[@id='content']/div/div[1]/article/h2");
	By nextbutton = By.xpath(".//*[@id='content']/div/div[1]/footer/nav/ul/li[2]/a");
	By previousbutton = By.xpath(".//*[@id='content']/div/div[1]/footer/nav/ul/li[1]/a/span[1]");


	By makeanapplication = By.xpath("//a[contains(@class,'button')]");


	public void validateAppPageSections() throws InterruptedException
	{
		this.IsElementDisplayed(appTitle);
		this.IsElementDisplayed(appsectionLink1);
		this.IsElementDisplayed(appsectionLink2);
		this.IsElementDisplayed(appsectionLink3);
		this.IsElementDisplayed(appsectionLink4);
		this.IsElementDisplayed(appsectionLink5);
		this.IsElementDisplayed(appsectionLink6);
	}

	public void validateInstructionText() throws InterruptedException
	{
		this.IsElementDisplayed(instructionText);
	}

	public void openPreviewPage() {
		this.click(previewapplicationlink);
	}

	public void VerifynavigationOnDetailPage(String expectedHeader)
	{

		Assert.assertEquals(expectedHeader,getText(sectionHeading));

	}

	public void clickPreview()
	{
		click(previewapplicationlink);
	}

	public void clickPrevious()
	{
		click(previousbutton);
	}

	public void clickNext()
	{
		click(nextbutton);
	}
	public void makeApplication()
	{
		click(makeanapplication);
	}

}

