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

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.Select;
import uk.gov.bis.grants.utils.AppProperties;

import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertTrue;

/**
 * @author NKhan
 */
public class BasePage {

    private WebDriver driver;
    private String envurl = AppProperties.get("envurl");
    private String appTitle = "Research and Innovation Funding Service - RIFS";
    // private deleteElements = "//a[contains(@href,'delete')]";
    // private String appTitle = "Innovation Funding Service - Sign in";

    protected SearchContext getSearchCtx() {
        return driver;
    }

    public BasePage(WebDriver driver) {
        this.driver = driver;
    }

    public void launch_app() throws InterruptedException {
        driver.get(envurl);
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        driver.manage().window().setSize(new Dimension(1400, 1000));
        assertTrue("Failed: Application Failed to launch", driver.getTitle().equals(appTitle));
        // gotoOpportunityPage();
    }

    public void gotoLogin() {
        driver.navigate().to(envurl + "ui-login/login");
    }

    public void gotoOppInitiatePage() {
        driver.navigate().to(envurl + "ui-opportunity/template");
    }

    public void gotoOpportunityPage() {
        driver.navigate().to(envurl + "opportunity/1");
    }

    public void gotoApplicationOverviewPage() {
        driver.navigate().to(envurl + "application/2");
    }

    public WebElement find(By locator) {
        return driver.findElement(locator);
    }

    public List<WebElement> findelements(By locator) {
        return driver.findElements(locator);
    }

    public void DeleteCostItems() throws Exception {
        List<WebElement> items = driver.findElements(By.xpath("//a[contains(@href,'delete')]"));
        do {
            Iterator<WebElement> iter = items.iterator();

            items = driver.findElements(By.xpath("//a[contains(@href,'delete')]"));
            ;
            // System.out.println(items.size());
            WebElement item = iter.next();
            item.click();
            items = driver.findElements(By.xpath("//a[contains(@href,'delete')]"));

        } while (items.size() >= 1);
    }

    public void DeleterequiredItem(int n) throws Exception {
        List<WebElement> items = driver.findElements(By.xpath("//a[contains(@href,'delete')]"));

        Iterator<WebElement> iter = items.iterator();
        items = driver.findElements(By.xpath("//a[contains(@href,'delete')]"));
        ;
        // System.out.println(items.size());
        WebElement item = iter.next();
        item.click();
        // items =
        // driver.findElements(By.xpath("//a[contains(@href,'delete')]"));
    }

    public int CountcostItems() {
        List<WebElement> items = driver.findElements(By.xpath("//a[contains(@href,'delete')]"));

        return items.size();
    }

    public void EditCostItems() throws Exception {

        List<WebElement> items = driver.findElements(By.xpath("//a[contains(@href,'edit')]"));
        Iterator<WebElement> iter = items.iterator();
        while (iter.hasNext()) {
            WebElement item = iter.next();
            item.click();
        }
    }

    public void click(By locator) {
        find(locator).click();
    }

    public void type(By locator, String arg1) {
        find(locator).clear();
        find(locator).sendKeys(arg1);
    }

    public void emptytextbox(By locator) {
        find(locator).clear();
    }

    public String getText(By locator) {
        return find(locator).getText();
    }

    public boolean isTextPresent(By locator, String exp) {
        if (getText(locator).equals(exp)) {

            return true;
        } else {
            return false;
        }
    }

    public boolean validateListItems(By locator, List<String> expectedlist) {
        Select contentsSelect = new Select(find(locator));
        boolean flag = false;
        List<WebElement> options = contentsSelect.getOptions();
        System.out.println("Verifying all options in given list....");
        ListIterator itr = expectedlist.listIterator();
        for (WebElement e : options) {
            for (String el : expectedlist) {

                if (e.getText().equalsIgnoreCase((el))) {
                    System.out.println("Expected list  " + el + " match to actual list element  " + e.getText());
                    flag = true;
                }

            }
        }

        return flag;
    }

    public boolean validateListItems1(By locator, List<String> expectedlist) {
        boolean flag = false;

        Select contentsSelect = new Select(find(locator));

        List<WebElement> options = contentsSelect.getOptions();
        System.out.println("Verifying all options in given list....");
        ListIterator itr = expectedlist.listIterator();
        for (WebElement e : options) {
            while (itr.hasNext())
                ;
            {
                // if(e.getText().equalsIgnoreCase()))
                {
                    flag = true;

                }
            }
        }
        return flag;
    }

    public void SelectItem(By locator, String Item) {

        Select contentsSelect = new Select(find(locator));
        List<WebElement> options = contentsSelect.getOptions();
        for (WebElement e : options) {
            System.out.println(e.getText());
        }
        // contentsSelect.selectByValue(Item);
        contentsSelect.selectByVisibleText(Item);

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }
    }

    public void verifyPageTitle(String title) {
        assertTrue("Failed: Expected Page" + title + " did not match to actual  " + driver.getTitle() + "",
                driver.getTitle().equals(title));

    }

    public boolean IsElementPresent(By locator) {
        return findelements(locator).size() > 0;
    }

    public boolean IsElementDisplayed(By locator) throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;

        boolean flag;

        if (find(locator).isDisplayed()) {

            WebElement element = find(locator);
            js.executeScript("arguments[0].style.border='3px solid red'", element);
            Thread.sleep(2000);
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }

    public void highlightElements(By locator) throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        WebElement element = find(locator);
        js.executeScript("arguments[0].style.border='3px solid red'", element);
        Thread.sleep(3000);
    }

}
