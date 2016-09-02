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
	 
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
//	    WebElement startButton;
	 
	 
	
		

	public void startApplication()
	{
		click(startButton);
	}
	
	


}

