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

    By eventObjfield = By.id("eventObjectives");
    By eventobjDatetimestamp = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset");
    By wordcount = By.id("eventObjectives_hint_text");

    public void EnterObjectives(String text) throws InterruptedException {
        type(eventObjfield, text);
    }

    public void verifyEventTitleDatetimestamp() {
        assertTrue("Failed:timestamp not displayed", getText(eventobjDatetimestamp).contains("Completed"));
    }

    public void Validatewordcount(String count) {
        assertTrue("Failed word count is not as expected", getText(wordcount).contains(count));
    }
}


