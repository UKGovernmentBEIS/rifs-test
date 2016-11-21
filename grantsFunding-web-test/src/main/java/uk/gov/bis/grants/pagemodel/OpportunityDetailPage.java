package uk.gov.bis.grants.pagemodel;



//import junit.framework.Assert;
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


// Page class

public class OpportunityDetailPage extends BasePage {
	
	public OpportunityDetailPage(WebDriver driver) {
		super(driver);
	}


	private  WebDriver driver;
   
	By oppTitle = By.xpath(".//*[@id='content']/div[2]/h1");
	private String pageTitle = "Opportunity: Exploring innovation seminars - RIFS";
	
    By section2 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[1]/li[2]/a");
    By section1 = By.xpath(".//*[@id='content']/div/header/table/tbody/tr[1]/td[1]");
    By section3 = By.xpath(".//*[@id='title-3']/a");
    By section4 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[2]/li[1]/a");
    By section5 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[2]/li[2]/a");
    By section6 = By.xpath(".//*[@id='content']/div/div[1]/aside/nav/ol[2]/li[3]/a");
    //By firstnextbutton = By.xpath(".//*[@id='content']/div/footer/div/a");
    By sectionHeading = By.xpath(".//*[@id='content']/div/div[1]/article/h2");
    By nextbutton = By.xpath(".//*[@id='content']/div/div[1]/footer/nav/ul/li[2]/a");
    By previousbutton = By.xpath(".//*[@id='content']/div/div[1]/footer/nav/ul/li[1]/a/span[1]");
    
    By makeanapplication = By.xpath("//a[contains(@class,'button')]");
    
    
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
//	    WebElement startButton;
	 

	
	public void VerifyPageTitle()
	{
		this.verifyPageTitle(pageTitle);
	}
	
public void validateAllSections() throws InterruptedException
{
	
	
	this.IsElementDisplayed(section2);
	this.IsElementDisplayed(section3);
	this.IsElementDisplayed(section4);
	//this.IsElementDisplayed(section5);
	//this.IsElementDisplayed(section6);
	
	
	
}
	
public void validateOppPageSections()
{
	Assert.assertEquals("What we will ask you",getText(section2));
	Assert.assertEquals("Assessment criteria",getText(section3));
	
}	

public void VerifynavigationOnDetailPage(String expectedHeader)
{

Assert.assertEquals(expectedHeader,getText(sectionHeading));
	
}

public void clickfirstNext()
{
	click(nextbutton);
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

