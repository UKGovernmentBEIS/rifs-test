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


public class manageApplicationPage extends BasePage {
	
	public manageApplicationPage(WebDriver driver) {
		super(driver);
	}


	private  WebDriver driver;
   
	
	
	By pageHeader = By.xpath(".//*[@id='content']/header/div/h1");
	By listbox = By.xpath("");
	private List<String> expectedlistvalues;
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
//	    WebElement startButton;
	 
	 
	
		
public void verifymanageapplicationpage()

{
	assertTrue("Failed:this is not manage applicat page",IsElementPresent(pageHeader));
	
}


public void VerifyOppTemplatelist(List<String> list)

{
	this.expectedlistvalues=list;
	assertTrue("Failed:Opptemplate list doesn't matched to expected list",validateListItems(listbox,expectedlistvalues));
}

}

