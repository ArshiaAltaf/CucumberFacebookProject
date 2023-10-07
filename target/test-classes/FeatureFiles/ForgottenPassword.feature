
Feature: Validate the forgotten password functionality
@Sanity
Scenario: Validate the forgotten password with invalid mobile number
Given User should launch the browser and load the url of page
When User should click the forgotten password link
And User should enter invalid mobile number in the text box
And User should print the title of the page
And User should click the search button
Then User should navigate to temp blocked page

