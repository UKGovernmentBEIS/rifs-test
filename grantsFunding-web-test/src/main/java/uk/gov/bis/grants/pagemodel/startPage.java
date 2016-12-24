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

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class startPage extends BasePage {

    public startPage(WebDriver driver) {
        super(driver);
    }

    private WebDriver driver;
    private String appTitle = "Opportunity for Research";

    By startButton = By.cssSelector(".button.button-start-now");

    By applyButton = By.xpath(".//*[@id='content']/div[3]/div[2]/a");
    By applicantLink = By.xpath(".//*[@id='content']/div/div/p[2]/a");
    By oppList = By.xpath(".//a[@href='/opportunity/1']");
    By portfoliomanagerlink = By.xpath(".//*[@id='content']/div[2]/div/p[3]/a");

    // @FindBy(xpath = ".//*[@id='content']/div/div/div/a")
    // WebElement startButton;

    public void startApplication() {
        click(startButton);
    }

    public void clickApply() throws InterruptedException {
        click(applyButton);
        Thread.sleep(3000);
        // WaitForElementPresent("")
    }

    public void asanApplicant() throws InterruptedException {
        click(applicantLink);
        Thread.sleep(2000);
    }

    public void asaPortfolioManager() {
        click(portfoliomanagerlink);

    }

    public void validateapplicantLink() throws InterruptedException {
        this.IsElementDisplayed(applicantLink);
    }

    public void oppList() throws InterruptedException {
        this.IsElementDisplayed(oppList);
    }

    public void selectOppor() {
        click(oppList);
    }

}
