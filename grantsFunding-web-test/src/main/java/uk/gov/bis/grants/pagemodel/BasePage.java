/**
 * 
 */
package uk.gov.bis.grants.pagemodel;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.JavascriptExecutor;

import java.util.List;
import java.util.ListIterator;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import uk.gov.bis.grants.utils.AppProperties;

/**
 * @author NKhan
 *
 */
public class BasePage {
	
	private  WebDriver driver;
	private String envurl= AppProperties.get("envurl");
	private String appTitle = "Start Page";
	//private String appTitle = "Innovation Funding Service - Sign in";
	
	public BasePage(WebDriver driver)
	{
		this.driver=driver;
		
	}
	
 public void launch_app() throws InterruptedException{		
		 
		 driver.get(envurl);
		// driver.get("https://ifs:Fund1ng@auth.dev.innovateuk.org");
		 Thread.sleep(3000);
		assertTrue("Failed: Application Failed to launch",driver.getTitle().equals(appTitle));
//gotoOpportunityPage();	 
 }
	
	 public void gotoLogin()
	 {
		 driver.navigate().to(envurl+"ui-login/login");;
	 }
	 public void gotoOppInitiatePage()
	 {
		 driver.navigate().to(envurl+"ui-opportunity/template");
	 }
	 
	public void gotoOpportunityPage()
	{
		driver.navigate().to(envurl+"opportunity/1");
	}
	
	
	 
	 public WebElement find(By locator)
     {

         return driver.findElement(locator);
     }

	
	public void click(By locator)
    {
        find(locator).click();
    }

public void type(By locator,String arg1)
{
	find(locator).clear();
	find(locator).sendKeys(arg1);
}

public void emptytextbox(By locator)
{
	find(locator).clear();
}

public String getText(By locator)
{
	String text= find(locator).getText();
	return text;
}

public boolean isTextPresent(By locator,String exp)
{
	if (getText(locator).equals(exp))
	{
		
		return true;
	}
		else 
		{
			return false;
		}
}
	

public boolean validateListItems(By locator,List<String> list)
{
	Select contentsSelect = new Select(find(locator));
	boolean flag = false;
	List<String> expectedlist  = list;
	List<WebElement> options = contentsSelect.getOptions();
	System.out.println("Verifying all options in given list....");
	ListIterator itr =  expectedlist.listIterator();
	for(WebElement e:options)
	{
		for(String el : expectedlist)
		{
			
		if(e.getText().equalsIgnoreCase((el)))
		{
		System.out.println("Expected list  " + el + " match to actual list element  "+e.getText());
		flag=true;
		}
		
		}
		}
	
	return flag;
}

public boolean validateListItems1(By locator,List<String> list)
{
	boolean flag= false;
	
	Select contentsSelect = new Select(find(locator));
	
	List<String> expectedlist  = list;
	List<WebElement> options = contentsSelect.getOptions();
	System.out.println("Verifying all options in given list....");
	ListIterator itr =  expectedlist.listIterator();
	for(WebElement e:options)
	{
		while(itr.hasNext());
		{
		//	if(e.getText().equalsIgnoreCase()))
			{
				flag=true;
				
			}
		}
			
		
		}
	return flag;
}



public void SelectItem(By locator, String Item) 
{
	
	Select contentsSelect = new Select(find(locator));
	List<WebElement> options = contentsSelect.getOptions();
	for(WebElement e:options)
	{
		System.out.println(e.getText());
	}
	//contentsSelect.selectByValue(Item);
	contentsSelect.selectByVisibleText(Item);
	
	try {
		Thread.sleep(3000);
	} catch (InterruptedException e1) {
		// TODO Auto-generated catch block
		e1.printStackTrace();
	}
}

public void verifyPageTitle(String title)
{
	assertTrue("Failed: Expected Page" + title + " did not match to actual" + driver.getTitle()+"" ,driver.getTitle().equals(title));

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

public boolean IsElementDisplayed(By locator) throws InterruptedException{
	JavascriptExecutor js = (JavascriptExecutor) driver;
	
			
	  boolean flag;
	  
	  if (find(locator).isDisplayed())
	  {
		  
		  WebElement element = find(locator);
			 js.executeScript("arguments[0].style.border='3px solid red'",element);
			 Thread.sleep(2000);
		  flag= true;
	  }
	 else{
	 flag= false;
	 }
return flag;
}
public void highlightElements(By locator) throws InterruptedException
{
	JavascriptExecutor js = (JavascriptExecutor) driver;
	 WebElement element = find(locator);
	 js.executeScript("arguments[0].style.border='3px solid red'",element);
	 Thread.sleep(3000);
}


}
