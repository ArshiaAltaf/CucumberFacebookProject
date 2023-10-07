$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/ForgottenPassword.feature");
formatter.feature({
  "name": "Validate the forgotten password functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the forgotten password with invalid mobile number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the browser and load the url of page",
  "keyword": "Given "
});
formatter.match({
  "location": "ForgottenPasswordStepDefinition.user_should_launch_the_chrome_browser_and_load_the_url_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the forgotten password link",
  "keyword": "When "
});
formatter.match({
  "location": "ForgottenPasswordStepDefinition.user_should_click_the_forgotten_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter invalid mobile number in the text box",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPasswordStepDefinition.user_should_enter_invalid_mobile_number_in_the_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPasswordStepDefinition.userShouldPrintTheTitleOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPasswordStepDefinition.user_should_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to temp blocked page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgottenPasswordStepDefinition.user_should_navigate_to_temp_blocked_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Login.feature");
formatter.feature({
  "name": "Validate the login functionality of facebook",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Check"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate the login functionality with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should enter invaid username \"\u003cUserName\u003e\", and valid password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the title of your page",
  "keyword": "And "
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "Anil",
        "Anil@123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_launch_the_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login functionality with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Check"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should enter invaid username \"Anil\", and valid password \"Anil@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldEnterInvaidUsernameAndValidPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of your page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_your_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: verify credential\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.stepdefinition.LoginStepDefinition.user_should_navigate_to_incorrect_credential_page(LoginStepDefinition.java:44)\r\n\tat ✽.User should navigate to incorrect credential page(file:src/test/resources/FeatureFiles/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_launch_the_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login functionality with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Check"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should enter vaid usernamE and invalid password",
  "rows": [
    {
      "cells": [
        "Fruits",
        "Veg",
        "FstFood",
        "Starters"
      ]
    },
    {
      "cells": [
        "Orange",
        "Carrot",
        "Maggi",
        "Soup"
      ]
    },
    {
      "cells": [
        "Apple",
        "LFinger",
        "Samosa",
        "Maggi"
      ]
    },
    {
      "cells": [
        "Pine",
        "Ash",
        "Bajji",
        "Masala"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldEnterVaidUsernamEAndInvalidPassword(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to shutdown.\nBuild info: version: \u00274.12.1\u0027, revision: \u00278e34639b11\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_371\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2a18a743a4bc47f7f32fc8ea8d70c05b, quit {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 117.0.5938.150, chrome: {chromedriverVersion: 117.0.5938.149 (e3344ddefa1..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50777}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50777/devtoo..., se:cdpVersion: 117.0.5938.150, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2a18a743a4bc47f7f32fc8ea8d70c05b\r\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:295)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:675)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:679)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:437)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.quit(ChromiumDriver.java:351)\r\n\tat org.utilities.Baseclass.closebrowser(Baseclass.java:354)\r\n\tat org.stepdefinition.HooksClass.afterScenario(HooksClass.java:48)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for http://localhost:14915/shutdown to become unavailable after 3002 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilUnavailable(UrlChecker.java:140)\r\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:291)\r\n\t... 46 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilUnavailable(UrlChecker.java:137)\r\n\t... 47 more\r\n",
  "status": "failed"
});
});