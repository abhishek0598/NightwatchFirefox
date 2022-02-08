@OrangeHRMS
Feature: Signing in into OrangeHRMS account


    using login credentials getting signed in into OrangeHRMS account

    Scenario Outline: Sign in functionality of Orange HRMS
        Given open website from this url <Url>
        Then title of Home page should be "OrangeHRM"
        When username is <Username>
        And password is <Password>
        And click on Login button
        Then signed in successfully and <Dashboard> appears
        When profile button is visible
        Then click on profile button
        And Logout button is visible
        Then click on logout button
        Then Redirecting to Home page should be "OrangeHRM"




        Examples:
            | Url                                          | Username | Password   | Dashboard                   |
            | "https://opensource-demo.orangehrmlive.com/" | 'Admin'  | 'admin123' | "#menu_dashboard_index > b" |


            | "https://opensource-demo.orangehrmlive.com/" | 'Behrupiya' | 'HitandTrial' | "#menu_dashboard_index > b" |

