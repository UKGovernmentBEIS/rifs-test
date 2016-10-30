package uk.gov.bis.grants.pagemodel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertTrue;


public class ApplicationEventObjEntry extends BasePage {

    public ApplicationEventObjEntry(WebDriver driver) {
        super(driver);
    }


    private WebDriver driver;
    private String pageTitle = "Overview";
    private String eventPagetitle = "Event objectives";

    By eventObjfield = By.xpath(".//*[@id='eventObjectives']");
    By eventobjDatetimestamp = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset");

    public void EnterObjectives(String text) throws InterruptedException {
        type(eventObjfield, text);
    }

    public void verifyEventTitleDatetimestamp() {
        assertTrue("Failed:timestamp not displayed", getText(eventobjDatetimestamp).contains("Completed"));
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


