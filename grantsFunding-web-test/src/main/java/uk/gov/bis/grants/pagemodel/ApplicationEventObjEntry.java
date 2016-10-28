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

import cucumber.api.DataTable;


public class ApplicationEventObjEntry extends BasePage {
	
	
	 
	 
	 public ApplicationEventObjEntry(WebDriver driver){
		
		 super(driver);

		
		 
	 }
	 

		private  WebDriver driver;
		private String pageTitle="Overview";
		private String eventPagetitle="Event objectives";
		
	    By eventObjfield = By.xpath(".//*[@id='eventObjectives']");
	    By eventobjDatetimestamp = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset");
	   

	   
	
	
		 

			public void EnterObjectives(String text) throws InterruptedException
			{
				type(eventObjfield, text);
			}
			
			
			
			public void verifyEventTitleDatetimestamp(){
				
				
				assertTrue("Failed:timestamp not displayed",getText(eventobjDatetimestamp).contains("Completed"));
				
			}
			
			
//	public void Enterduration(String duration)
//	{
//		type(durationfield,duration);
//	}
//
//
//	public void clickMarkcomplete() throws InterruptedException
//	{
//		if(this.IsElementPresent(markasComplete))
//		{
//		click(markasComplete);
//		}
//		else {
//			click(saveandContinue);
//			click(openProvisionalDate);
//			click(markasComplete);
//		}
//		
//	}
//	
//	public void SaveAndContineValidationCheck()
//	{
//	click(saveandContinue);
//	
//	
//	}
//	
//	public void validateErrorMessage(String msg)
//	{
//		
//		assertTrue("Failed:Error message not displayed,",getText(errormsg).contains(msg));
//	}
//	
//	public void ValidatedurationfieldError(String msg)
//	{
//		assertTrue("Failed:Error message not displayed,",getText(durationfieldError).contains(msg));
//	}
	
}


