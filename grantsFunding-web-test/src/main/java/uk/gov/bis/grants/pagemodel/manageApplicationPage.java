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

    public void verifymanageapplicationpage() {
        assertTrue("Failed:this is not manage applicat page", IsElementPresent(pageHeader));
    }

    public void VerifyOppTemplatelist(List<String> list) {
        this.expectedlistvalues = list;
        assertTrue("Failed:Opptemplate list doesn't matched to expected list", validateListItems(listbox, expectedlistvalues));
    }

}

