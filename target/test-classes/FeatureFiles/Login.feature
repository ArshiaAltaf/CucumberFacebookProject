@Check
Feature: Validate the login functionality of facebook
Background:
Given User should launch the browser and load the url

@Smoke
Scenario Outline: Validate the login functionality with invalid username and valid password
When User should enter invaid username "<UserName>", and valid password "<Password>"
And User should click the login button
And User should print the title of your page
Then User should navigate to incorrect credential page

Examples:

         |UserName|Password|
         |Anil    |Anil@123|
         
@Smoke @Sanity          
Scenario: Validate the login functionality with valid username and invalid password
When User should enter vaid usernamE and invalid password
          #2D MAP
          |Fruits|Veg    |FstFood|Starters|
          |Orange|Carrot |Maggi  |Soup    |
          |Apple |LFinger|Samosa |Maggi   |
          |Pine  |Ash    |Bajji  |Masala  |
And User should click the login button
Then User should navigate to incorrect credential page



