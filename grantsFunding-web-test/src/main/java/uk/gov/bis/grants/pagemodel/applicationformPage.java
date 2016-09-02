package uk.gov.bis.grants.pagemodel;

import static org.junit.Assert.assertTrue;

import java.awt.Point;
import java.util.Iterator;

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


public class applicationformPage extends BasePage {
	
	public applicationformPage(WebDriver driver) {
		super(driver);
	}


	private  WebDriver driver;
	private String pageheaderTitle="Initiate your application";
   
	 By projectTitle = By.cssSelector("#appTitle");
	 By projectDesc = By.cssSelector("#appShortDescription");
	 By submit = By.cssSelector(".button.button-start-now");
	 
	 By pageHeader = By.xpath(".//*[@id='content']/header/div/h1");
	 
	
	
	 
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
//	    WebElement startButton;
	 
	 
	 public void fillinAppForm(String arg1, String arg2){
			type(projectTitle,arg1);
			type(projectDesc,arg2);
			
		}
		
		public void submitapplication()
		{
			click(submit);
		}

	
		public void validateLandingPage() throws InterruptedException
		{
			Thread.sleep(2000);
			
			assertTrue("Failed:User not on correct Page,actual header is:"+getText(pageHeader),getText(pageHeader).equals(pageheaderTitle));
		}
	
		public void validateLandingPage1()
		{
			//assertTrue("Failed:User not on correct Page",getText(pageHeader).equals(pageheaderTitle)));
		}
	
}

