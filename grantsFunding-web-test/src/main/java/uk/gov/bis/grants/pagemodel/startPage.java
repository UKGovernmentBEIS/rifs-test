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


public class startPage extends BasePage {
	
	public startPage(WebDriver driver) {
		super(driver);
	}


	private  WebDriver driver;
    private String appTitle="Opportunity for Research";
	
	
	 By startButton = By.cssSelector(".button.button-start-now");
	 
	By applyButton = By.xpath(".//*[@id='content']/div[3]/div[2]/a");
	By applicantLink = By.xpath(".//*[@id='content']/div/div/p[2]/a");
	By oppList = By.xpath(".//a[@href='/opportunity/1']");
	 
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
//	    WebElement startButton;
	 
	 
	
		

	public void startApplication()
	{
		click(startButton);
	}
	
	public void clickApply() throws InterruptedException
	{
		click(applyButton);
		Thread.sleep(3000);
		//WaitForElementPresent("")
				
	}
	
	public void asanApplicant() throws InterruptedException
	{
		click(applicantLink);
		Thread.sleep(2000);
	}
	
	public void validateapplicantLink() throws InterruptedException{
		this.IsElementDisplayed(applicantLink);
		
	}
public void oppList() throws InterruptedException{
	this.IsElementDisplayed(oppList);
}
public void selectOppor()
{
   click(oppList);
}

}

