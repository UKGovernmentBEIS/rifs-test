package uk.gov.bis.grants.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import uk.gov.bis.grants.utils.AppProperties;

import java.net.URL;

public class SharedWebDriver extends EventFiringWebDriver {
    //private static AndroidDriver driver1;
    private static WebDriver driver;
    //private static HtmlUnitDriver unitdriver;

    static {
        try {
            String browser = AppProperties.get("browser");
            String env = AppProperties.get("environment");
            String platform = AppProperties.get("platform");
            String envUrl = AppProperties.get("envurl");
            String saucelabaccountname = AppProperties.get("saucelabUser");
            String saucelabaccesskey = AppProperties.get("saucelabKey");

            if (platform.equalsIgnoreCase("browserstack")) {
                String USERNAME = AppProperties.get("bsUsername");
                String AUTOMATE_KEY = AppProperties.get("bsUserkey");

                String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub.browserstack.com/wd/hub";

                DesiredCapabilities caps = new DesiredCapabilities();
                caps.setCapability("browser", "Iphone");
                caps.setCapability("platform", "MAC");
                caps.setCapability("device", "iPhone 6S Plus");
                //caps.setCapability("os_version", "XP");
                caps.setCapability("browserstack.debug", "true");
                caps.setCapability("browserstack.local", "true");

                driver = new RemoteWebDriver(new URL(URL), caps);

            } else if (platform.equalsIgnoreCase("saucelabs")) {
                String URL = "http://" + saucelabaccountname + ":" + saucelabaccesskey + "@ondemand.saucelabs.com:80/wd/hub";
                DesiredCapabilities desiredCap = new DesiredCapabilities();
                desiredCap.setCapability("platform", "MAC");
                desiredCap.setCapability("browserName", "iPhone");
                desiredCap.setCapability("device", "iPhone 6 Plus");
                desiredCap.setCapability("browserVersion", "9.2");
                desiredCap.setCapability("username", saucelabaccountname);
                desiredCap.setCapability("accessKey", saucelabaccesskey);
                //desiredCap.SetCapability("browserstack.debug", "true");
                driver = new RemoteWebDriver(new URL(URL), desiredCap);
            } else if (platform.equalsIgnoreCase("headless")) {
                // driver = new HtmlUnitDriver();
                // driver.get("http://google.co.uk");
                //System.out.println("htmlUnitdriver");

                // Create instance of PhantomJS driver
                DesiredCapabilities caps = new DesiredCapabilities();
                caps.setJavascriptEnabled(true);
                caps.setCapability("cssSelectorsEnabled", false);
                caps.setCapability("applicationCacheEnabled", true);
                caps.setCapability("acceptSslCerts", true);
                String phantomjspath = System.getProperty("user.dir") + "/src/test/resources/phantomjs-2.1.1-linux-x86_64/bin/phantomjs";
                caps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, phantomjspath);
                driver = new PhantomJSDriver(caps);
            } else if (browser.equalsIgnoreCase("firefox")) {
                System.out.println("shared webdriver");
                FirefoxProfile prof = new FirefoxProfile();
                driver = new FirefoxDriver(prof);
                System.out.println("#####Started test run on  " + envUrl + "  on " + browser + " browser #####");
                driver.manage().window().maximize();
            } else if (browser.equalsIgnoreCase("chrome")) {
                System.setProperty("webdriver.chrome.driver",
                        System.getProperty("user.dir")
                                + "/src/test/resources/chromedriver.exe");
                driver = new ChromeDriver();
                driver.manage().window().maximize();
                System.out.println("#####Started test run on  " + envUrl + "  on " + browser + " browser #####");
            } else if (browser.equalsIgnoreCase("ie")) {
                System.setProperty("webdriver.ie.driver",
                        System.getProperty("user.dir")
                                + "/src/test/resources/IEDriverServer.exe");
                driver = new InternetExplorerDriver();
                System.out.println("#####Started test run on  " + envUrl + "  on " + browser + " browser #####");
                Thread.sleep(3000);
                driver.manage().window().maximize();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        Runtime.getRuntime().addShutdownHook(new Thread() {
            @Override
            public void run() {
                try {
                    driver.quit();
                } catch (Exception e) {
                    System.out.println(e);
                }
            }

        });

    }

    public SharedWebDriver() {
        super(driver);
    }
}
