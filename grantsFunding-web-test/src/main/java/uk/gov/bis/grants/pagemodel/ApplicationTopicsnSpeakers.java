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

import static org.junit.Assert.assertTrue;

public class ApplicationTopicsnSpeakers extends BasePage {

    public ApplicationTopicsnSpeakers(WebDriver driver) {
        super(driver);
    }

    private WebDriver driver;
    private String pageTitle = "Overview";
    private String eventPagetitle = "Event objectives";

    By TopicnSpeakerfield = By.id("topicAndSpeaker");
    By topicnSpeakerDatetimestamp = By.xpath(".//*[@id='content']/div[2]/div[1]/form/fieldset");
    By wordcount = By.id("topicAndSpeaker_hint_text");

    public void EnterObjectives(String text) throws InterruptedException {
        type(TopicnSpeakerfield, text);
    }

    public void verifyEventTitleDatetimestamp() {
        assertTrue("Failed:timestamp not displayed", getText(topicnSpeakerDatetimestamp).contains("Completed"));
    }

    public void Validatewordcount(String count) {
        assertTrue("Failed word count is not as expected", getText(wordcount).contains(count));
    }
}
