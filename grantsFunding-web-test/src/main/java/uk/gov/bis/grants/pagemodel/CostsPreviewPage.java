package uk.gov.bis.grants.pagemodel;

import static org.junit.Assert.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.math.BigDecimal;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

public class CostsPreviewPage extends BasePage {

	private By heading = By.xpath("//*[@id='content']/div[2]/div/h1");
	private By costsTable = By.xpath("//*[@id='content']/div[2]/div/table[contains(@class,'rifs-costs-table')]");
	private By costRows = By.xpath("tbody/*[self::tr and not(@class='line')]");
	private By totalsRowInCostTbl = By.xpath("tfoot/tr");
	private By grandTotal = By.xpath("th[contains(@class,'currency')]");
	private By returnToOverview = By.xpath("//*[@id=\"global-header-status\"]/div[1]/a[@class='return-link']");
	private By closeButton = By.xpath("//*[@id=\"content\"]/div[2]/div/div/a[@class='button secondary']");

	public CostsPreviewPage(WebDriver driver) {
		super(driver);
	}

	public void onDisplay() {

		assertTrue(getText(heading).contains("Costs"));

	}

	private WebElement getCostsTable() {
		return getSearchCtx().findElement(costsTable);
	}

	public void checkItemsDisplayed(List<List<String>> rows) {
		List<WebElement> rowsEl = getCostsTable().findElements(costRows);
		assertEquals(rows.size(), rowsEl.size());
		Iterator<WebElement> elIt = rowsEl.iterator();
		rows.forEach(row -> {
			WebElement element = elIt.next();
			List<WebElement> bits = element.findElements(By.tagName("td"));
			List<String> bs = bits.stream().map(WebElement::getText).collect(Collectors.toList());
			assertEquals(row, bs);
		});
	}

	public void checkTotalDisplayed(BigDecimal total) {

		WebElement totEl = getCostsTable().findElement(totalsRowInCostTbl);
		WebElement grTotEl = totEl.findElement(grandTotal);

		BigDecimal t = new BigDecimal(grTotEl.getText());

		assertEquals(total.compareTo(t), 0);
	}

	public void checkReturnToOverviewDisplayed(String contents) {
		WebElement ret = getSearchCtx().findElement(returnToOverview);
		assertEquals(contents, ret.getText());
	}

	public void clickReturnToOverview() {
		WebElement ret = getSearchCtx().findElement(returnToOverview);
		ret.click();
	}

	public void checkCloseButtonDisplayed(String arg1) {
		WebElement ret = getSearchCtx().findElement(closeButton);
		assertEquals(arg1, ret.getText());
	}

	public void clickCloseButton() {
		getSearchCtx().findElement(closeButton).click();
	}
}
