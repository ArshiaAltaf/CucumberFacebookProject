package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.utilities.Baseclass;
import org.utilities.Pojoclass;

import io.cucumber.java.en.*;

public class LoginStepDefinition extends Baseclass {
	
	@Given("User should launch the browser and load the url")
	public void user_should_launch_the_browser_and_load_the_url() {
//		openchrome();
//		launcherurl("https://www.facebook.com");
//		maxwindow();
	}

	@When("User should enter invaid username and valid password")
	public void user_should_enter_invaid_username_and_valid_password() {
		Pojoclass P = new Pojoclass();
		WebElement txtemail = P.getTxtemail();
		filltextbox(txtemail, "arshia");
		WebElement txtpass = P.getTxtpass();
		filltextbox(txtpass, "arshia@123");

	}
	
	@When("User should click the login button")
	public void user_should_click_the_login_button() throws InterruptedException {
		Pojoclass P = new Pojoclass();
		WebElement btnlog = P.getBtnlog();
		toclick(btnlog);
		sleep(3000);
	}

	
	@Then("User should navigate to incorrect credential page")
	public void user_should_navigate_to_incorrect_credential_page() {
		String currentUrl = driver.getCurrentUrl();
		Assert.assertTrue("verify credential", currentUrl.contains("recover"));
		System.out.println("Test Case Passed");
	}
	
	@When("User should print the title of your page")
	public void user_should_print_the_title_of_your_page() {
	    System.out.println(driver.getTitle());
	}
	
	@When("User should enter vaid username and invalid password")
	public void user_should_enter_vaid_username_and_invalid_password() {
		Pojoclass P = new Pojoclass();
		WebElement txtemail = P.getTxtemail();
		filltextbox(txtemail, "altaf");
		WebElement txtpass = P.getTxtpass();
		filltextbox(txtpass, "altaf@123");
	}
	
	@When("User should enter invaid username {string}, and valid password {string}")
	public void userShouldEnterInvaidUsernameAndValidPassword(String s1, String s2) {
		Pojoclass P = new Pojoclass();
		WebElement txtemail = P.getTxtemail();
		filltextbox(txtemail, s1);
		WebElement txtpass = P.getTxtpass();
		filltextbox(txtpass, s2);
	}
	
//	@When("User should enter vaid usernamE and invalid password")
//	public void userShouldEnterVaidUsernamEAndInvalidPassword(io.cucumber.datatable.DataTable d) {
//		Pojoclass P = new Pojoclass();
//		WebElement txtemail = P.getTxtemail();
//		//1D List
//		String s1 = d.asList().get(4);
//		filltextbox(txtemail, s1); //Poppye
//		WebElement txtpass = P.getTxtpass();
//		filltextbox(txtpass, d.asList().get(7)); //Olive@123
	   
//	}

//  @When("User should enter vaid usernamE and invalid password")
//  public void userShouldEnterVaidUsernamEAndInvalidPassword(io.cucumber.datatable.DataTable d) {
//	    Pojoclass P = new Pojoclass();
//	    WebElement txtemail = P.getTxtemail();
//	    //2D List
//	    List<List<String>> li = d.asLists();
//	    String s1 = li.get(1).get(2);
//	    filltextbox(txtemail, s1); //Olive
//	    WebElement txtpass = P.getTxtpass();
//	    filltextbox(txtpass, li.get(0).get(3)); //Bravo@123
   
//  }

//	@When("User should enter vaid usernamE and invalid password")
//	public void userShouldEnterVaidUsernamEAndInvalidPassword(io.cucumber.datatable.DataTable d) {
//		Pojoclass P = new Pojoclass();
//		WebElement txtemail = P.getTxtemail();
//		//1D MAP
//		Map<String, String> mp = d.asMap(String.class, String.class);
//		String s1 = mp.get("Location");
//		filltextbox(txtemail, s1); //Chennai
//		WebElement txtpass = P.getTxtpass();
//		filltextbox(txtpass,mp.get("Gender")); //Male@123
	   
//    }

	@When("User should enter vaid usernamE and invalid password")
	public void userShouldEnterVaidUsernamEAndInvalidPassword(io.cucumber.datatable.DataTable d) {
		Pojoclass P = new Pojoclass();
		WebElement txtemail = P.getTxtemail();
		//2D MAP
		List<Map<String, String>> mp = d.asMaps();
		String s1 = mp.get(1).get("Starters");
		filltextbox(txtemail, s1); //Maggi
		WebElement txtpass = P.getTxtpass();
		filltextbox(txtpass,mp.get(2).get("Veg")); //Ash
	   
    }
	
	
	
	
	
	
	
	
	
		
}
