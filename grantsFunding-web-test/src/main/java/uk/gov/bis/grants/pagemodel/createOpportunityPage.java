package uk.gov.bis.grants.pagemodel;

import static org.junit.Assert.assertTrue;

import java.awt.Point;
import java.util.Iterator;
import java.util.List;

import junit.framework.Assert;
import uk.gov.bis.grants.utils.AppProperties;


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

public class createOpportunityPage extends BasePage {
	
	public createOpportunityPage(WebDriver driver) {
		super(driver);
	}


	private  WebDriver driver;
   
	By opptype = By.xpath(".//*[@id='type']");
	By template = By.xpath(".//*[@id='template']");
	By Initiate = By.xpath(".//*[@id='submit']");
	By createOpp=  By.xpath(".//*[@id='content']/div/div/div/div/a");
	private List<String> expectedlistvalues;
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
//	    WebElement startButton;
	 


	
	
public void VerifyOppTemplatelist(List<String> list)

{
	this.expectedlistvalues=list;
	assertTrue("Failed:Opptemplate list doesn't matched to expected list",validateListItems(template,expectedlistvalues));
}

public void Selecttemplatefromlist(String Item)
{
	SelectItem(template,Item);
	
}
public void SelectOpptype(String Item)
{
	SelectItem(opptype,Item);
}
public void click_createOpplink(){
	click(createOpp);
}

public void InitiateOpp() throws InterruptedException
{
	click(Initiate);
	Thread.sleep(2000);
}


}

