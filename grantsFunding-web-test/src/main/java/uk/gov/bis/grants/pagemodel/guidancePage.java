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


public class guidancePage {
	private static final boolean Exception = false;
	private final WebDriver driver;
	
	private String appTitle="Opportunity for Research";
	
	 @FindBy(xpath = ".//*[@id='content']/header/table/tbody/tr/td[1]/ol/li[2]/a")
	    WebElement searcharea;
	 
	 
	 
	 public guidancePage(WebDriver driver){
		
		 this.driver=(WebDriver) driver;

		
		 
	 }
	 
	 
	 public void waitForElementPresent(String xpath,long sec){
		  (new WebDriverWait(driver, sec)).until(ExpectedConditions.presenceOfElementLocated(By.xpath(xpath)));
		}
	 
	 //----- Launches application with the given url --//
	 public void launch_app(){		
		 String envurl= AppProperties.get("envurl");
		 driver.get(envurl);
		assertTrue(driver.getTitle().equals(appTitle));
	 }
	 
	 

	
	
	
	 public boolean IsElementPresent(String xpath)
	 {
	 		 	
	  try
	  {
	   driver.findElement(By.xpath(xpath));

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
	 
	 public void islinkDisplayed()
	 {
		 assertTrue("Failed: link not displayed on landing page",searcharea.isDisplayed());
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

