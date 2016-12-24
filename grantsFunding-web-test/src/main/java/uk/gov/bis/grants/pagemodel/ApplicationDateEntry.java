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

import cucumber.api.DataTable;
import org.junit.Assert;
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
    private String DateSectionPagetitle = "Provisional date - RIFS";

    By errormsg = By.xpath("//span[contains(@class,'error-message')]");
    By costcurrencyErrmsg = By.xpath("//*[text()='Must be a valid currency value']");
    By costjustifyerrmsg = By.xpath("");
    By durationfieldError = By.xpath("//span[contains(@class,'error-message')]");
    By dayfield = By.id("provisionalDate.date.day");
    By monthfield = By.id("provisionalDate.date.month");
    By yearfield = By.id("provisionalDate.date.year");
    By durationfield = By.id("provisionalDate.days");
    By markasComplete = By.id("complete-checkbox");
    By saveandContinue = By.name("_save_button");
    By openProvisionalDate = By.id("section-2-link");
    By p_endDate = By.xpath(".//*[@id='content']/div[2]/div/div[1]/div[3]/dl/dd");
    By p_startDate = By.xpath(".//*[@id='content']/div[2]/div/div[1]/div[1]/dl/dd");
    By p_duration = By.xpath(".//*[@id='content']/div[2]/div/div[1]/div[2]/dl/dd");
    By p_close = By.xpath(".//*[@id='content']/div[2]/div/div[2]/a");
    By p_editPage = By.xpath(".//*[@id='content']/div/div/div[3]/a[2]");
    By EditthisPage = By.xpath("//input[contains(@class,'button--link-style')]");

    public void EnterDate(DataTable datatable) throws InterruptedException {
        List<List<String>> data = datatable.raw();
        if (IsElementPresent(dayfield)) {
            type(dayfield, data.get(0).get(0));
            type(monthfield, data.get(0).get(1));
            type(yearfield, data.get(0).get(2));
            Thread.sleep(2000);

        } else {
            click(EditthisPage);
            type(dayfield, data.get(0).get(0));
            type(monthfield, data.get(0).get(1));
            type(yearfield, data.get(0).get(2));
            Thread.sleep(2000);
        }
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
        // need to re-visit the section later.

        // List<WebElement> errmsg = findelements(errormsg);
        // if(errmsg.size()>1)
        // {
        // System.out.println(errmsg.size());
        //
        //
        // for (WebElement myElement : errmsg)
        //
        // if(myElement.getText().equals(msg))
        // {
        //
        // System.out.println(myElement.getText());
        // //assertTrue("Failed:Error message not displayed,",
        // getText(errormsg).contains(msg));
        // Assert.assertEquals(msg, getText(errormsg));
        // }
        //
        //
        //
        // }
        // else{
        assertTrue("Failed:Error message not displayed,", getText(errormsg).contains(msg));
    }

    public void ValidatedurationfieldError(String msg) {
        assertTrue("Failed:Error message not displayed,", getText(durationfieldError).contains(msg));
    }

    public void ValidateEndDateonPreviewpage(String date) {
        Assert.assertEquals(date, getText(p_endDate));
    }

    public void ValidateStartDateonPreviewpage(String date) {
        Assert.assertEquals(date, getText(p_startDate));
    }

    public void ValidateDurationPreviewpage(String duration) {
        Assert.assertEquals(duration, getText(p_duration));
    }

    public void Closepreview() {
        click(p_close);
    }

    public void EditPage() {
        click(EditthisPage);
    }

    public void ValidatePagetitle() {
        verifyPageTitle(DateSectionPagetitle);
    }

}
