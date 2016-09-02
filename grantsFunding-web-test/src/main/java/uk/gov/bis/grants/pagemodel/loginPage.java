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


public class loginPage extends BasePage {
	
	public loginPage(WebDriver driver) {
		super(driver);
	}


	private  WebDriver driver;
   
	
	
	 By username = By.cssSelector("#loginUser");
	 By pwd = By.cssSelector("#loginPwd");
	 By loginbutton = By.cssSelector(".button.button-start-now");
	 By InvalidLoginmsg = By.xpath(".//*[@id='content']/div/div/div/div[2]/strong");
	 By InlineErrormsg = By.xpath(".//*[@id='loginUser.errors']");
	 By InlineErrormsg1 = By.xpath(".//*[@id='loginPwd.errors']");
	 
	 
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
//	    WebElement startButton;
	 
	 
	
		

	public void login_app(String arg1, String arg2) throws InterruptedException{
		type(username,arg1);
		type(pwd,arg2);
		click(loginbutton);
		Thread.sleep(3000);
	}
	
	public void Invalidlogin_app(String condition){
    if(condition=="no email")
    {
		type(pwd,"123456");
		click(loginbutton);
    }
    else 
    {
    	type(username,"test@test.com");
    	click(loginbutton);
    }
	}
	
	
	
	public void validateErrormsg()
	{
		assertTrue("Failed:Error message not correct,",getText(InvalidLoginmsg).contains("nvalid User Email or password. Please enter valid email and password"));
	}

	public void validateErrormsgforEmptyemailLogin(String errmsg)
	{
		assertTrue("Failed:Error message not displayed,",getText(InlineErrormsg).contains(errmsg));
	}
	
	public void validateErrormsgforEmptypassLogin(String errmsg)
	{
		assertTrue("Failed:Error message not displayed,",getText(InlineErrormsg1).contains(errmsg));
	}
}

