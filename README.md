# rifs-test

You can run the test ether through gradle task or through sbt.

## On Mac

Steps on Mac through SBT:

1. checkout test repo from https://github.com/UKGovernmentBEIS/rifs-test
2. cd to project root folder grantsFunding-web-test on command prompt
3. type command → `/.sbt`
4. type command → `clean`
5. type command → `test:compile`
6. type command → `testOnly uk.gov.bis.grants.acceptanceTest.AcceptanceTest`

Now you should see test running on your machine.

### Through gradle test

1. checkout test repo from https://github.com/UKGovernmentBEIS/rifs-test
2. cd to project root folder grantsFunding-web-test on command prompt
3. type command → `gradle clean test`
4. type command → `gradle test  -Dtest.single=AcceptanceTest`

## On Windows

1. Connect VPN Howto: Connect to the VPN
2. Open IntelliJ and Open File>Settings   
3. Check whether you have Cucumber for Java and Gherkin installed.
4. Open IntelliJ and Open File>Project Structure   
5. Select Project and Set Java 1.8
6. Clone the project   `git clone https://github.com/UKGovernmentBEIS/rifs-test`
7. Run Tests in command prompt   
8. `gradle clean test`   
9. `gradle test  -Dtest.single=AcceptanceTest`
10. Run tests in IntelliJ
11. In IntelliJ, navigate to `rifs-test\grantsFunding-web-test`  and click OK.
12. Right click on .feature file and click Run