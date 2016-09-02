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


public class LandingPage extends BasePage {
	private static final boolean Exception = false;
	 WebDriver driver;
	
	private String appTitle="Opportunity for Research";
	 By oppGuidance = By.xpath(".//*[@id='related']/div/nav/ul/li[2]/a");
	
	 
	 
	 public LandingPage(WebDriver driver){
		
		 super(driver);
		 
		 
	 }
	 
	 
	 public void waitForElementPresent(String xpath,long sec){
		  (new WebDriverWait(driver, sec)).until(ExpectedConditions.presenceOfElementLocated(By.xpath(xpath)));
		}


	
	 
	 //----- Launches application with the given url --//
	
	 public void launchLandingPage()
	 {
		 launch_app();
	 }
	 
	
	 public boolean IsElementPresent(By locator)
	 {
	 		 	
	  try
	  {
	   find(locator);

	    return true;
	  }
	  catch(Exception e)
	  {
	 	 
	 	 // System.out.println("Logo not found");
	 	// captureScreen(this.getClass().getSimpleName(), this.testName.getMethodName());
	 	 //System.out.println("Element not found on the page");
	 	 return false;
	  }
	 }
	 
	 public boolean IsElementDisplayed(String xpath){
		  boolean flag;
		  if (driver.findElement(By.xpath(xpath)).isDisplayed())
		flag= true;
		 
		 else{
		 flag= false;
		 }
	return flag;
	 }
	 
	 public void verifyLinkDisplayed()
	 {
		 assertTrue("Failed:Link not displayed",IsElementPresent(oppGuidance));
	 }

	public void PageRefresh(){
		driver.navigate().refresh();
	}
	 
	
	

// reading the text from the WebElement using Xpath
	public String getText(String xpathLocator) {

		return driver.findElement(By.xpath(xpathLocator)).getText();
		
	}
	
	
	// reading the Attribute value  from the WebElement using Xpath and the attribute name
	public String getAttribute(String xpathLocator,String Attribute) {

		return driver.findElement(By.xpath(xpathLocator)).getAttribute(Attribute);
		
	}
	 
	
	
	


}

