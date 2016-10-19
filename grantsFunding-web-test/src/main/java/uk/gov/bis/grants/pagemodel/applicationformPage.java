package uk.gov.bis.grants.pagemodel;

import static org.junit.Assert.assertTrue;


import org.junit.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;



public class applicationformPage extends BasePage {
	
	public applicationformPage(WebDriver driver) {
		super(driver);
	}


	private  WebDriver driver;
	private String pageTitle="Overview";
	private String eventPagetitle="Event title";
   
	 By pageHeader = By.xpath(".//*[@id='content']/div[2]/h1");
	 String expectedHeader = "Application Overview";
	 By question1 = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[1]/td[1]");
	 By question2 = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[2]/td[1]");
	 By question3 = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[3]/td[1]");
	 By question4 = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[4]/td[1]");
	 
	 By question5 = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[5]/td[1]");
	 By question6 = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[6]/td[1]");
	 
	 By eventTitle = By.xpath(".//*[@id='content']/div[2]/form/fieldset/input");
	 By saveAndcontinue = By.xpath(".//*[@id='content']/div[2]/form/div/input[1]");
	 By eventSection = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[1]/td[1]/a");
	
	 
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
//	    WebElement startButton;
	 
	 
	 

	
		public void validateLandingPage() throws InterruptedException
		{
			Assert.assertEquals(expectedHeader,getText(pageHeader));
			
			
			//assertTrue("Failed:User not on correct Page,actual header is:"+getText(pageHeader),getText(pageHeader).equals(pageheaderTitle));
		}
	
		public void validateLandingPage1()
		{
			//assertTrue("Failed:User not on correct Page",getText(pageHeader).equals(pageheaderTitle)));
		}
	
		
		public void verifyQuestions()
		{

			Assert.assertEquals("1. Event title",getText(question1));
			Assert.assertEquals("2. Provisional date",getText(question2));
			Assert.assertEquals("3. Event objectives",getText(question3));
			Assert.assertEquals("4. Topics and speakers",getText(question4));
			Assert.assertEquals("5. Event audience",getText(question5));
			Assert.assertEquals("6. Costs",getText(question6));
			
		}	
		public void OpenTitilePage()
		{
			
			this.click(eventSection);
		}
		
		public void EnterTitle(String title)
		{
		verifyPageTitle(eventPagetitle);
	     type(eventTitle, title);
		}

		public void SaveAndContine()
		{
		click(saveAndcontinue);
		verifyPageTitle(pageTitle);
		
		}
	}

