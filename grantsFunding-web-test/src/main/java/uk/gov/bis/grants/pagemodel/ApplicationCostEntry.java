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

public class ApplicationCostEntry extends BasePage {

	public ApplicationCostEntry(WebDriver driver) {
		super(driver);
	}

	private WebDriver driver;
	private String pageTitle = "Costs";

	By deleteElements = By.xpath("//a[contains(@href,'delete')]");

	By ItemsAdded = By.xpath("//a[contains(@href,'edit')]");
	By itemfield = By.id("item.itemName");
	By costfield = By.id("item.cost");
	By justifyfield = By.id("item.justification");
	By itemSave = By.xpath("//input[contains(@name,'_save_item_button')]");
	By addItem = By.xpath("//a[contains(@href,'add-item')]");
	By EditthisPage = By.xpath("//input[contains(@value,'Edit this page')]");
	By openItem = By.xpath("//a[contains(@href,'edit')]");
	By previewPage = By.xpath("//input[contains(@name,'_preview_button')]");
	By costItems = By.xpath("//*[@id='content']/div[2]/div[1]/form/table/tbody/tr/td[position() mod 3 > 0]");

	// Error message elements

	By TotalexceedErr = By.xpath("//span[contains(@class,'error-message')]");

	public void AddCostItem(DataTable datatable) throws Exception {
		if (IsElementPresent(addItem)) {
			this.DeleteCostItems();
		} else if (IsElementPresent(EditthisPage)) {
			click(EditthisPage);
			this.DeleteCostItems();
		}

		List<List<String>> data = datatable.raw();
		type(itemfield, data.get(0).get(0));
		type(costfield, data.get(0).get(1));
		type(justifyfield, data.get(0).get(2));
		click(itemSave);
	}

	public void AddItem(DataTable datatable) {
		click(addItem);
		List<List<String>> data = datatable.raw();
		type(itemfield, data.get(0).get(0));
		type(costfield, data.get(0).get(1));
		type(justifyfield, data.get(0).get(2));
		click(itemSave);

	}

	public void openItem() {

		click(openItem);

	}

	public void UpdateCostInfo(DataTable datatable) {
		List<List<String>> data = datatable.raw();
		type(itemfield, data.get(0).get(0));
		type(costfield, data.get(0).get(1));
		type(justifyfield, data.get(0).get(2));
		click(itemSave);

	}

	public void AddMoreItem(int n, DataTable datatable) throws Exception {
		if (IsElementPresent(EditthisPage)) {
			click(EditthisPage);
			// this.DeleteCostItems();
		}

		for (int i = 0; i <= n; i++) {
			click(addItem);
			List<List<String>> data = datatable.raw();
			type(itemfield, data.get(0).get(0));
			type(costfield, data.get(0).get(1));
			type(justifyfield, data.get(0).get(2));
			click(itemSave);

		}

	}

	public void verifyRemainingItems(int count) {
		Assert.assertEquals(count, this.CountcostItems());
	}

	public void ValidateErrorMsg(String expected_errmsg) {
		Assert.assertEquals(expected_errmsg, getText(TotalexceedErr));
	}

	public void EditCostItem(String arg1) {

	}

	public void canSeePreviewPageLink() {
		assertTrue(IsElementPresent(previewPage));
	}

	public void previewThisPage() {
		click(previewPage);
	}

	public void checkCostItemsDisplayed(List<List<String>> rows) {

		List<WebElement> cItems = getSearchCtx().findElements(costItems);
		assertEquals(cItems.size(), 2 * rows.size());
		Iterator<WebElement> elIt = cItems.iterator();
		rows.stream().flatMap(List::stream).forEach(cell -> {
			WebElement element = elIt.next();
			assertEquals(cell, element.getText());
		});
	}
}
