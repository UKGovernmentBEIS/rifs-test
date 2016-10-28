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


public class ApplicationDateEntry extends BasePage {
	
	
	 
	 
	 public ApplicationDateEntry(WebDriver driver){
		
		 super(driver);

		
		 
	 }
	 

		private  WebDriver driver;
		private String pageTitle="Overview";
		private String eventPagetitle="Event title";
		
	 
	    By errormsg = By.xpath(".//fieldset/div[1]");
	    By durationfieldError = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset/div[3]/p");
	    By dayfield = By.xpath(".//input[@title='date__day']");
	                           
	    By monthfield = By.xpath(".//input[@title='date__month']");
	    By yearfield = By.xpath(".//input[@title='date__year']");
	    By durationfield = By.xpath(".//*[@id='days']");
	    By markasComplete = By.xpath(".//input[@name='_complete_checkbox']");
	    By saveandContinue = By.xpath(".//input[@name='_save_button']");
	    By openProvisionalDate = By.xpath(".//a[@href ='/application/1/section/2']");
	   // By errormsg = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset/div[1]/p");
	   
	
	
		 

			public void EnterDate(DataTable datatable) throws InterruptedException
			{
				List<List<String>> data = datatable.raw();
				type(dayfield,data.get(0).get(0));
				type(monthfield,data.get(0).get(1));
				type(yearfield,data.get(0).get(2));
			     Thread.sleep(3000);
			}
			
	public void Enterduration(String duration)
	{
		type(durationfield,duration);
	}


	public void clickMarkcomplete() throws InterruptedException
	{
		if(this.IsElementPresent(markasComplete))
		{
		click(markasComplete);
		}
		else {
			click(saveandContinue);
			click(openProvisionalDate);
			click(markasComplete);
		}
		
	}
	
	public void SaveAndContineValidationCheck()
	{
	click(saveandContinue);
	
	
	}
	
	public void validateErrorMessage(String msg)
	{
		
		assertTrue("Failed:Error message not displayed,",getText(errormsg).contains(msg));
	}
	
	public void ValidatedurationfieldError(String msg)
	{
		assertTrue("Failed:Error message not displayed,",getText(durationfieldError).contains(msg));
	}
	
}


