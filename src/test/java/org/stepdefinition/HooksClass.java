package org.stepdefinition;

import java.io.IOException;

import org.utilities.Baseclass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends Baseclass{
	
	@Before(order=1)
	public void beforeScenario() {
     
		openchrome();
		launcherurl("https://www.facebook.com");
	}
	
	@Before(order=2)
	public void beforesce() {
		maxwindow();
	}
	
	@Before(order=3)
	public void befores() {
		System.out.println("Last Before Executed");
	}
	
	@After(order=3)
	public void afterS() {
		System.out.println("third after order");
	}
	
	@After(order=2)
	public void afterSce() {
		System.out.println("second after order");
	}
	
	@After(order=1)
	public void afterScenario(Scenario s) throws IOException {
		
		if (s.isFailed()) {
			String name = s.getName();
			String filename = name.replace(" ", "_");
			screenshot(filename);
		}
		closebrowser();
	}
	
}
