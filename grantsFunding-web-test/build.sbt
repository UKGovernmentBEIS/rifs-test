

libraryDependencies ++= Seq(
  "org.seleniumhq.selenium" % "selenium-java" % "2.53.1",
  "junit" % "junit" % "4.11",
  "info.cukes" % "cucumber-java" % "1.2.4",
  "com.codeborne" % "phantomjsdriver" % "1.2.1",
  "org.apache.commons" % "commons-lang3" % "3.5"
)

libraryDependencies ++= Seq(
  "info.cukes" % "cucumber-junit" % "1.2.4" % Test,
  "info.cukes" % "cucumber-picocontainer" % "1.2.4" % Test,
  "org.picocontainer" % "picocontainer" % "2.14.3" % Test,
  "com.novocode" % "junit-interface" % "0.11" % Test
)