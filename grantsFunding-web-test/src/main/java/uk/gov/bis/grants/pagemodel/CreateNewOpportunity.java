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

public class CreateNewOpportunity extends BasePage {

    public CreateNewOpportunity(WebDriver driver) {
        super(driver);
    }

    private WebDriver driver;
    private String pageTitle = "CreateNewOpportunity";

    By Homepage = By.xpath(".//*[@id='global-header-status']/div[1]/a");
    By Reuseexistingoppor = By.id("opportunity-reuse");
    By CreateNewOpportunity = By.xpath(".//*[@id='content']/div[2]/div[1]/div/form/div[1]/fieldset/label[2]");
    By Continue = By.xpath("//input[contains(@value,'Continue')]");
    By Selectopportunity = By.xpath("//a[contains(@href,'/opportunity/1')]");
    By Cancel = By.xpath(".//*[@id='content']/div[2]/div[1]/div/form/div[2]/a");
    By PortfolioPeter = By.xpath(".//*[@id='global-header-status']/div[2]/span");
    By ReturntoOpplib = By.xpath("//a[contains(@class,'return-link')]");


    public void ReusingExistingopp() {
        click(Reuseexistingoppor);
        click(Continue);
    }

    public void selectOpportunity() {
        click(Selectopportunity);
    }


    public void returntoOpplist() {
        click(ReturntoOpplib);
    }

}