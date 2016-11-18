package uk.gov.bis.grants.stepdefs;

import org.apache.commons.lang3.SystemUtils;
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
import org.apache.commons.lang3.SystemUtils;

import java.net.URL;

public class SharedWebDriver extends EventFiringWebDriver {
    //private static AndroidDriver driver1;
    private static WebDriver driver;
    //private static HtmlUnitDriver unitdriver;

    static {
        final String _OS_LINUX = "linux";
        final String _OS_WINDOWS = "Windows";
        final String _OS_MAC = "MAC";

        try {
            String browser = AppProperties.get("browser");
            String env = AppProperties.get("environment");
            String platform = AppProperties.get("platform");
            String envUrl = AppProperties.get("envurl");
            String saucelabaccountname = AppProperties.get("saucelabUser");
            String saucelabaccesskey = AppProperties.get("saucelabKey");
            String OS = AppProperties.get("OS").toLowerCase();
            if (OS.length() == 0 || "detect".equals(OS.toLowerCase())) {
                if (SystemUtils.IS_OS_WINDOWS) OS = _OS_WINDOWS;
                else if (SystemUtils.IS_OS_MAC) OS = _OS_MAC;
                else if (SystemUtils.IS_OS_LINUX) OS = _OS_LINUX;
            }

            if (platform.equalsIgnoreCase("Remote")) {
				if (browser.equalsIgnoreCase("firefox")) {
					DesiredCapabilities cap = DesiredCapabilities.firefox();
					cap.setBrowserName("firefox");
					cap.setPlatform(org.openqa.selenium.Platform.ANY);
					// driver = new RemoteWebDriver(new
					// URL("http://osvm944.ordsvy.gov.uk:4444/wd/hub"), cap);
					driver = new RemoteWebDriver(new URL(
							"http://10.0.2.15:4444/wd/hub"), cap);
				}
            }
				else if (platform.equalsIgnoreCase("browserstack")) {
                String USERNAME = AppProperties.get("bsUsername");
                String AUTOMATE_KEY = AppProperties.get("bsUserkey");
                

                String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub.browserstack.com/wd/hub";

                DesiredCapabilities caps = new DesiredCapabilities();
                caps.setCapability("browser", "Firefox");
                caps.setCapability("browser_version", "45.0");
                caps.setCapability("os", _OS_WINDOWS);
                caps.setCapability("os_version", "7");
                caps.setCapability("resolution", "1024x768");
//                caps.setCapability("browser", "Iphone");
//                caps.setCapability("platform", "MAC");
//                caps.setCapability("device", "iPhone 6S Plus");
//                //caps.setCapability("os_version", "XP");
                caps.setCapability("browserstack.debug", "true");
                caps.setCapability("browserstack.local", "true");

                driver = new RemoteWebDriver(new URL(URL), caps);

            } else if (platform.equalsIgnoreCase("saucelabs")) {
                String URL = "http://" + saucelabaccountname + ":" + saucelabaccesskey + "@ondemand.saucelabs.com:80/wd/hub";
                DesiredCapabilities desiredCap = new DesiredCapabilities();
                desiredCap.setCapability("platform", _OS_MAC);
                desiredCap.setCapability("browserName", "iPhone");
                desiredCap.setCapability("device", "iPhone 6 Plus");
                desiredCap.setCapability("browserVersion", "9.2");
                desiredCap.setCapability("username", saucelabaccountname);
                desiredCap.setCapability("accessKey", saucelabaccesskey);
                //desiredCap.SetCapability("browserstack.debug", "true");
                driver = new RemoteWebDriver(new URL(URL), desiredCap);
            } else if (platform.equalsIgnoreCase("headless")) {
            	 DesiredCapabilities caps = new DesiredCapabilities();
            	
            	if (_OS_MAC.compareToIgnoreCase(OS) == 0) {
                    caps.setJavascriptEnabled(true);
                    caps.setCapability("cssSelectorsEnabled", false);
                    caps.setCapability("applicationCacheEnabled", true);
                    caps.setCapability("acceptSslCerts", true);
                    String Macphantomjspath = System.getProperty("user.dir" ) + "/src/test/resources/phantomjs-2.1.1-macosx/bin/phantomjs";
                    caps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, Macphantomjspath);
                } else
            	if (_OS_LINUX.compareToIgnoreCase(OS) == 0) {
                    caps.setJavascriptEnabled(true);
                    caps.setCapability("cssSelectorsEnabled", false);
                    caps.setCapability("applicationCacheEnabled", true);
                    caps.setCapability("acceptSslCerts", true);
                    String Linuxphantomjspath = System.getProperty("user.dir" ) + "/src/test/resources/phantomjs-2.1.1-linux-x86_64/bin/phantomjs";
                    caps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, Linuxphantomjspath);
                } else
            	if (_OS_WINDOWS.compareToIgnoreCase(OS) == 0) {
            		
            		caps.setJavascriptEnabled(true);
                    caps.setCapability("cssSelectorsEnabled", false);
                    caps.setCapability("applicationCacheEnabled", true);
                    caps.setCapability("acceptSslCerts", true);
                    String windowsphantomjspath = System.getProperty("user.dir") + "/src/test/resources/phantomjs-2.1.1-windows/bin/phantomjs.exe";
                    caps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, windowsphantomjspath);
            	} else {
                    String err = "Failed to match OS!!!";
                    System.err.println(err);
                    throw new RuntimeException(err);
                }
                // driver = new HtmlUnitDriver();
                // driver.get("http://google.co.uk");
                //System.out.println("htmlUnitdriver");

                // Create instance of PhantomJS driver
               
                ;
               
                driver = new PhantomJSDriver(caps);
                System.out.println("#####Started test run on  " + envUrl + "  on " + platform + " browser #####");
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
