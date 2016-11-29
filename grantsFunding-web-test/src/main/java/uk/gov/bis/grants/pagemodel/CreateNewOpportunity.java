package uk.gov.bis.grants.pagemodel;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.DataTable;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Iterator;

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
	By Selectopportunity = By.xpath(".//*[@id='content']/div[2]/table/tbody/tr/td[2]/a");
	By Cancel = By.xpath (".//*[@id='content']/div[2]/div[1]/div/form/div[2]/a");
	By PortfolioPeter = By.xpath (".//*[@id='global-header-status']/div[2]/span");
	By ReturntoOpplib = By.xpath("//a[contains(@class,'return-link')]");
	
	
	
	public void ReusingExistingopp()
	{
	click(Reuseexistingoppor);	
	click(Continue);
	}
	
	public void selectOpportunity()
	{
		
		click(Selectopportunity);
	}
	
	
	public void returntoOpplist()
	{
		click(ReturntoOpplib);
	}
	
	}