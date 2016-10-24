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
	
   
	 By pageHeader = By.xpath(".//*[@id='content']/div[2]/div[1]/div[1]/h1");
	 String expectedHeader = "Application overview";
	 By question1 = By.xpath(".//*[@id='content']/div[2]/div[1]/div[2]/table/tbody/tr[1]/td[1]/a");
	 By question2 = By.xpath(".//*[@id='content']/div[2]/div[1]/div[2]/table/tbody/tr[2]/td[1]/a");
	 By question3 = By.xpath(".//*[@id='content']/div[2]/div[1]/div[2]/table/tbody/tr[3]/td[1]/a");
	 By question4 = By.xpath(".//*[@id='content']/div[2]/div[1]/div[2]/table/tbody/tr[4]/td[1]/a");
	 
	 By question5 = By.xpath(".//*[@id='content']/div[2]/div[1]/div[2]/table/tbody/tr[5]/td[1]/a");
	 By question6 = By.xpath(".//*[@id='content']/div[2]/div[1]/div[2]/table/tbody/tr[6]/td[1]/a");
	 
	 By eventTitle = By.xpath(".//*[@id='title']");
	 By saveAndcontinue = By.xpath(".//*[@id='content']/div/form/div/input[1]");
	 By eventSection = By.xpath(".//*[@id='content']/div[2]/div[1]/div[2]/table/tbody/tr[1]/td[1]/a");
	 By provisionalDate = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[2]/td[1]/a");
	 By evenObjectives = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[3]/td[1]/a");
	 By topicsnspeakers = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[4]/td[1]/a");
	 By evenAudience = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[5]/td[1]/a");
	 By costs = By.xpath(".//*[@id='content']/div[3]/table/tbody/tr[6]/td[1]/a");
	 By wordcount = By.xpath(".//*[@id='title_help_text']");
	 By markAsComplete = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset/input");
	 By dateTimestamp = By.xpath(".//*[@id='content']/div/div[1]/form/fieldset");
	 
	
//	 @FindBy(xpath = ".//*[@id='content']/div/div/div/a"
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

			Assert.assertEquals("Event title",getText(question1));
			Assert.assertEquals("Provisional date",getText(question2));
			Assert.assertEquals("Event objectives",getText(question3));
			Assert.assertEquals("Topics and speakers",getText(question4));
			Assert.assertEquals("Event audience",getText(question5));
			Assert.assertEquals("Costs",getText(question6));
			
		}	
		public void OpenTitilePage()
		{
			
			this.click(eventSection);
		}
		
		public void OpenSection(String section){
			switch(section)
			{
			case "provisionalDate" :
				click(provisionalDate);
				break;
				
			case "EventObjs" :
			 click(evenObjectives);
			 break;
			 
			case "TopicsnSpeakers" :
				click(topicsnspeakers);
				break;
				
			case "EventAudience" :
				click(evenAudience);
				break;
				
			case "costs" :
				click(costs);
				break;
				
			}		
			
		}
		
		public void markAsComplete(){
			click(markAsComplete);
		}
		
		public void verifyDatetimestamp(){
			
			click(eventSection);
			assertTrue("Failed:timestamp not displayed",getText(dateTimestamp).contains("Completed"));
			
		}

		
		
		public void verifyEventPageTitle(){
			verifyPageTitle(eventPagetitle);
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
		public void Validatewordcount(String count)
		
		{
			assertTrue("Failed word count is not as expected",getText(wordcount).contains(count));
			
		}

}

