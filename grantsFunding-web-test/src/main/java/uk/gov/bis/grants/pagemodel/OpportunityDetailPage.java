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

public class OpportunityDetailPage extends BasePage {
	
	public OpportunityDetailPage(WebDriver driver) {
		super(driver);
	}


	private  WebDriver driver;
   
	By oppTitle = By.xpath(".//*[@id='content']/div[2]/h1");
	private String pageTitle = "Opportunity 1";
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
//	    WebElement startButton;
	 

	
	public void VerifyPageTitle()
	{
		this.verifyPageTitle(pageTitle);
	}
	
	

}

