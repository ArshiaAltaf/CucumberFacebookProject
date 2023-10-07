package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.utilities.Baseclass;

import io.cucumber.java.en.*;


public class ForgottenPasswordStepDefinition extends Baseclass {

	@Given("User should launch the browser and load the url of page")
	public void user_should_launch_the_chrome_browser_and_load_the_url_of_page() {
		//Code is mentioned in hooks class
	    
	}

	@When("User should click the forgotten password link")
	public void user_should_click_the_forgotten_password_link() throws InterruptedException {
		driver.findElement(By.xpath("//a[text()=\"Forgotten password?\"]")).click();
		sleep(2000);
		
	    
	}

	@When("User should enter invalid mobile number in the text box")
	public void user_should_enter_invalid_mobile_number_in_the_text_box() {
		driver.findElement(By.id("identify_email")).sendKeys("0123456789");
	    
	}

	@When("User should click the search button")
	public void user_should_click_the_search_button() {
		driver.findElement(By.id("did_submit")).click();
	    
	}

	@Then("User should navigate to temp blocked page")
	public void user_should_navigate_to_temp_blocked_page() {
	    String title = driver.getTitle();
	    Assert.assertTrue("Check the forgot password", title.contains("Forgotten"));
	}

	@When("User should print the title of the page")
	public void userShouldPrintTheTitleOfThePage() {
	    System.out.println(driver.getTitle());
	}
	

	
}
