package org.utilities;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pojoclass extends Baseclass{
	
	public Pojoclass() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="email")
	private WebElement txtemail;
	
	@FindBy(name="pass")
	private WebElement txtpass;
	
	@FindBy(xpath="//button[@name='login']")
	private WebElement btnlog;
	
	public WebElement getTxtemail() {
		return txtemail;
	}

	public WebElement getTxtpass() {
		return txtpass;
	}

	public WebElement getBtnlog() {
		return btnlog;
	}

}
