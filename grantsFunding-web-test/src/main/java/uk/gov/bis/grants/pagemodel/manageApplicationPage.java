package uk.gov.bis.grants.pagemodel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import java.util.List;

import static org.junit.Assert.assertTrue;


public class manageApplicationPage extends BasePage {
    public manageApplicationPage(WebDriver driver) {
        super(driver);
    }
    private WebDriver driver;

    By pageHeader = By.xpath(".//*[@id='content']/header/div/h1");
    By listbox = By.xpath("");

    private List<String> expectedlistvalues;

    public void verifymanageapplicationpage()

    {
        assertTrue("Failed:this is not manage applicat page", IsElementPresent(pageHeader));
    }


    public void VerifyOppTemplatelist(List<String> list)
    {
        this.expectedlistvalues = list;
        assertTrue("Failed:Opptemplate list doesn't matched to expected list", validateListItems(listbox, expectedlistvalues));
    }

}

