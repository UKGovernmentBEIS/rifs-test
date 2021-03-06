/*
 * Copyright (C) 2016  Department for Business, Energy and Industrial Strategy
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package uk.gov.bis.grants.pagemodel;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertTrue;

public class AppFormPage extends BasePage {

    public AppFormPage(WebDriver driver) {
        super(driver);
    }

    private WebDriver driver;
    private String pageTitle = "Overview";
    private String eventPagetitle = "Event title";

    By pageHeader = By.xpath(".//*[@id='content']/div[2]/div[1]/div[2]/h1");
    String expectedHeader = "Application overview";
    String ApplicationSubmittedTitle = "Application submitted - RIFS";

    By eventTitle = By.xpath(".//*[@id='title']");
    By saveAndcontinue = By.xpath("//input[contains(@class,'button button--start')]");
    By eventSection = By.id("section-1-link");
    By provisionalDate = By.id("section-2-link");
    By evenObjectives = By.id("section-3-link");
    By topicsnspeakers = By.id("section-4-link");
    By evenAudience = By.id("section-5-link");
    By costs = By.id("section-6-link");
    By wordcount_title = By.xpath(".//*[@id='title_hint_text']");
    By wordcount_eventObj = By.id("");
    By wordcount_topicsnspeakers = By.id("topicAndSpeaker_hint_text");
    By wordcount_eventaudience = By.id("eventAudience_hint_text");
    By markAsComplete = By.id("complete-checkbox");
    By dateTimestamp = By.xpath(".//*[@id='content']/div[2]/div");
    By previewPage = By.name("_preview_button");
    By previewContent = By.xpath(".//*[@id='content']/div[2]/div/div[1]/p");
    By errormsg = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset/div[1]/p");
    By topicsnspeakerfield = By.id("topicAndSpeaker");
    By eventtitlefield = By.id("title");
    By eventobjfield = By.id("eventObjectives");
    By eventAudience = By.id("eventAudience");
    By EditthisPage = By.xpath("//input[contains(@class,'button--link-style')]");

    // Application overview Status objects

    By EventTitleStatus = By.xpath("//form/div/table/tbody/tr[1]/td[2]/span");
    By provisionalDateStatus = By.xpath("//form/div/table/tbody/tr[2]/td[2]/span");
    By EventObjStatus = By.xpath("//form/div/table/tbody/tr[3]/td[2]/span");
    By TopicsnSpeakersStatus = By.xpath("//form/div/table/tbody/tr[4]/td[2]/span");
    By EventAudStatus = By.xpath("//form/div/table/tbody/tr[5]/td[2]/span");
    By CostStatus = By.xpath("//form/div/table/tbody/tr[6]/td[2]/span");

    // Application submit button
    By SubmitApplication = By.xpath(".//*[@id='content']/div[2]/div[1]/form/div/p/input");
    By ApplicationSubmitsucess = By.xpath(".//*[@id='content']/div[2]/div[1]/h1");

    // Application submit error message
    By Applicationsubmiterror = By.xpath("//*[text()='All questions must be answered']");
    By Applicationsectionerror = By.xpath(".//*/li");

    By Applicationref = By.xpath(".//*[@id='application-ref']");
    // @FindBy(xpath = ".//*[@id='content']/div/div/div/a"
    // WebElement startButton;

    public void validateLandingPage() throws InterruptedException {
        // Assert.assertEquals(expectedHeader,getText(pageHeader)); title header
        // has two lines so commenting out this section.
        assertTrue("Failed:Overview Page not displayed", getText(pageHeader).contains("expectedHeader"));

        // assertTrue("Failed:User not on correct Page,actual header
        // is:"+getText(pageHeader),getText(pageHeader).equals(pageheaderTitle));
    }

    public void validateLandingPage1() {
        // assertTrue("Failed:User not on correct
        // Page",getText(pageHeader).equals(pageheaderTitle)));
    }

    public void verifyQuestions() {
        Assert.assertEquals("Event title", getText(eventSection));
        Assert.assertEquals("Provisional date", getText(provisionalDate));
        Assert.assertEquals("Event objectives", getText(evenObjectives));
        Assert.assertEquals("Topics and speakers", getText(topicsnspeakers));
        Assert.assertEquals("Event audience", getText(evenAudience));
        Assert.assertEquals("Costs", getText(costs));
    }

    public void OpenTitilePage() {
        this.click(eventSection);
    }

    public void OpenSection(String section) {
        switch (section) {
            case "EventTitle":
                click(eventSection);
                break;

            case "provisionalDate":
                click(provisionalDate);
                break;

            case "EventObjs":
                click(evenObjectives);
                break;

            case "TopicsnSpeakers":
                click(topicsnspeakers);
                break;

            case "EventAudience":
                click(evenAudience);
                break;

            case "Costs":
                click(costs);
                break;
        }
    }

    public void Entertext(String text, String section) {
        switch (section) {
            case "EventTitle":
                if (IsElementPresent(eventtitlefield)) {
                    type(eventtitlefield, text);
                } else
                    click(EditthisPage);
                type(eventtitlefield, text);

                break;

            case "EventObjs":
                if (IsElementPresent(eventobjfield)) {
                    type(eventobjfield, text);
                } else
                    click(EditthisPage);
                type(eventobjfield, text);

                break;

            case "TopicsnSpeakers":

                if (IsElementPresent(topicsnspeakerfield)) {
                    type(topicsnspeakerfield, text);
                } else {
                    click(EditthisPage);
                    type(topicsnspeakerfield, text);
                }
                break;

            case "EventAudience":
                if (IsElementPresent(eventAudience))
                    type(eventAudience, text);
                else {
                    click(EditthisPage);
                    type(eventAudience, text);
                }

                break;
        }
    }

    public void clickMarkcomplete(String section) throws InterruptedException {
        if (this.IsElementPresent(markAsComplete)) {
            click(markAsComplete);
        } else {
            click(EditthisPage);
            // OpenSection(section);
            click(markAsComplete);
        }
    }


    public void EnterApplicationref() throws InterruptedException {
        if (IsElementPresent(Applicationref)) {
            this.type(Applicationref, "application-AutoTest");
            click(saveAndcontinue);
        }
    }

    public void verifyDatetimestamp(String section) {
        OpenSection(section);
        assertTrue("Failed:timestamp not displayed", getText(dateTimestamp).contains("Completed"));
    }

    public void preview() {
        click(previewPage);
    }

    public void validateErrormsg() {
        assertTrue("Failed:Error message not displayed,", getText(errormsg).contains("Field cannot be empty"));
    }

    public void verifyonPreviewPage(String enteredString) {
        Assert.assertEquals(enteredString, getText(previewContent));
    }

    public void verifyEventPageTitle() {
        verifyPageTitle(eventPagetitle);
    }

    public void EnterTitle(String title) {
        // verifyPageTitle(eventPagetitle);
        if (IsElementPresent(eventTitle)) {
            type(eventTitle, title);
        } else {
            click(EditthisPage);
            type(eventTitle, title);
        }

    }

    public void verifyStatus(String question, String exp) {
        switch (question) {
            case "EventTitle":
                Assert.assertEquals(exp, getText(EventTitleStatus));
                break;

            case "provisionalDate":
                Assert.assertEquals(exp, getText(provisionalDateStatus));

                break;

            case "EventAudience":
                Assert.assertEquals(exp, getText(EventAudStatus));

                break;

            case "Costs":
                Assert.assertEquals(exp, getText(CostStatus));

                break;
        }
    }

    public void Cleartextfield() {
        emptytextbox(eventTitle);
    }

    public void SaveAndContine() {
        click(saveAndcontinue);
        // verifyPageTitle(pageTitle);
    }

    public void Validatewordcount(String count, String section) {
        switch (section) {
            case "EventTitle":
                assertTrue("Failed word count is not as expected", getText(wordcount_title).contains(count));

            case "provisionalDate":
                assertTrue("Failed word count is not as expected", getText(wordcount_title).contains(count));
                break;

            case "EventObjs":
                assertTrue("Failed word count is not as expected", getText(wordcount_title).contains(count));
                break;

            case "TopicsnSpeakers":
                assertTrue("Failed word count is not as expected", getText(wordcount_topicsnspeakers).contains(count));
                break;

            case "EventAudience":
                assertTrue("Failed word count is not as expected", getText(wordcount_eventaudience).contains(count));
                break;

            case "costs":
                assertTrue("Failed word count is not as expected", getText(wordcount_title).contains(count));
                break;
        }
    }

    public void submitApplication() {
        click(SubmitApplication);
    }

    public void verifyApplicationSubmit() {
        assertTrue("Failed:Application not submitted,check manually",
                getText(ApplicationSubmitsucess).contains("Application submitted"));
        this.verifyPageTitle(ApplicationSubmittedTitle);
    }

    public void verifyApplicationSubmiterror(String exp_error) {
        Assert.assertEquals(exp_error, getText(Applicationsectionerror));
    }

    public void verifyApplicationSubmitpageerror(String exp_error) {
        Assert.assertEquals(exp_error, getText(Applicationsubmiterror));
    }

}
