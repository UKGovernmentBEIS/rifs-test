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

    By heading = By.xpath("//*[@id='content']/div[2]/div/h1");
    By costsTable = By.xpath("//*[@id='content']/div[2]/div/table[contains(@class,'rifs-costs-table')]");
    By costRows = By.xpath("tbody/*[self::tr and not(@class='line')]");
    By totalsRowInCostTbl = By.xpath("tfoot/tr");
    By grandTotal = By.xpath("th[contains(@class,'currency')]");

    public CostsPreviewPage(WebDriver driver) {
        super(driver);

        //totalsRow = costsTable.findElement(getSearchCtx().findElement(  ));
        //total = totalsRow.findElement(  );
    }

    public void onDisplay() {

        WebElement headingEl = getSearchCtx().findElement(heading);
        assertTrue(headingEl.getText().contains("Costs"));
    }

    protected WebElement getCostsTable() {
        WebElement costsTblEl = getSearchCtx().findElement(costsTable);
        return costsTblEl;
    }

    public void checkItemsDisplayed(List<List<String>> rows) {
        List<WebElement> rowsEl = getCostsTable().findElements(costRows);
        assertEquals(rows.size(), rowsEl.size());
        Iterator<WebElement> elIt = rowsEl.iterator();
        rows.forEach(row->{
            WebElement element = elIt.next();
            List<WebElement> bits = element.findElements(By.tagName("td"));
            List<String> bs= bits.stream().map(WebElement::getText).collect(Collectors.toList());
            assertEquals(row, bs);
        });
    }

    public void checkTotalDisplayed(BigDecimal total) {

        WebElement totEl = getCostsTable().findElement(totalsRowInCostTbl);
        WebElement grTotEl = totEl.findElement(grandTotal);

        BigDecimal t = new BigDecimal(grTotEl.getText());

        assertEquals(total.compareTo(t), 0);
    }
}
