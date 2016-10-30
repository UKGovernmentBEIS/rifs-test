package uk.gov.bis.grants.pagemodel;

import cucumber.api.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import java.util.List;

import static org.junit.Assert.assertTrue;


public class ApplicationDateEntry extends BasePage {


    public ApplicationDateEntry(WebDriver driver) {
        super(driver);
    }

    private WebDriver driver;
    private String pageTitle = "Overview";
    private String eventPagetitle = "Event title";


    By errormsg = By.xpath(".//fieldset/div[1]");
    By durationfieldError = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset/div[2]/span");
    By dayfield = By.id("provisionalDate.date.day");
    By monthfield = By.id("provisionalDate.date.month");
    By yearfield = By.id("provisionalDate.date.year");
    By durationfield = By.id("provisionalDate.days");
    By markasComplete = By.id("complete-checkbox");
    By saveandContinue = By.name("_save_button");
    By openProvisionalDate = By.xpath(".//a[@href ='/application/1/section/2']");
    // By errormsg = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset/div[1]/p");

    public void EnterDate(DataTable datatable) throws InterruptedException {
        List<List<String>> data = datatable.raw();
        type(dayfield, data.get(0).get(0));
        type(monthfield, data.get(0).get(1));
        type(yearfield, data.get(0).get(2));
        Thread.sleep(3000);
    }

    public void Enterduration(String duration) {
        type(durationfield, duration);
    }

    public void clickMarkcomplete() throws InterruptedException {
        if (this.IsElementPresent(markasComplete)) {
            click(markasComplete);
        } else {
            click(saveandContinue);
            click(openProvisionalDate);
            click(markasComplete);
        }

    }

    public void SaveAndContineValidationCheck() {
        click(saveandContinue);
    }

    public void validateErrorMessage(String msg) {
        assertTrue("Failed:Error message not displayed,", getText(errormsg).contains(msg));
    }

    public void ValidatedurationfieldError(String msg) {
        assertTrue("Failed:Error message not displayed,", getText(durationfieldError).contains(msg));
    }

}


