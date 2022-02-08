//This step definition has been implemented using page objects

const {client} = require('nightwatch-api');
const {Given, Then, When} = require('cucumber');
const abhi = client.page.orangeHrms()

Given(/^open website from this url "([^"]*)"$/, url => {

    
    return abhi
    .navigate(url)
    .waitForElementVisible('body')

    // return clients
    // .url(url)
    // .waitForElementVisible('body');

});

Then(/^title of Home page should be "([^"]*)"$/, title => {
    // return client
    // .assert.title(title);

    return abhi
    .assert.title(title)
    .pause(3000);
});

When(/^username is '([^"]*)'$/, username => {
    // return client
    // .sendKeys('#txtUsername', username)
    // .pause(3000);

    return abhi
    .sendKeys('@username', username)
});

When(/^password is '([^"]*)'$/, password => {
    // return client
    //.sendKeys('#txtPassword', password)
    // .pause(3000);

    return abhi
    .sendKeys('@password', password)
    .pause(3000);
});

When(/^click on Login button$/, () => {
    // return client
    // .click('#btnLogin')
    // .pause(3000);

    return abhi
    .click('@loginButton')
    .pause(3000);
});

Then(/^signed in successfully and "([^"]*)" appears$/, dashboard => {
    // return client
    //.assert.visible(dashboard)
    // .waitForElementVisible('body');

    return abhi
    .assert.visible(dashboard)
    .waitForElementVisible('body')
    .pause(3000);

});

When(/^profile button is visible$/, () => {
    // return client
    // .assert.visible('#welcome');
    
    return abhi
    .assert.visible('@profileButton');
});

Then(/^click on profile button$/, () => {
    // return client
    //.click('#welcome')
    // .pause(3000);

    return abhi
    .click('@profileButton')
    .pause(3000);
    
});

When(/^Logout button is visible$/, () => {
    // return client
    // .assert.visible('#welcome-menu > ul > li:nth-child(3) > a')
    // .pause(3000);
    
    return abhi
    .assert.visible('@logOutButton')
    .pause(3000);

});

Then(/^click on logout button$/, () => {
    // return client
    // .click('#welcome-menu > ul > li:nth-child(3) > a')
    // .click('#welcome')
    // .waitForElementVisible('body');

    return abhi
    .click('@logOutButton')
    .waitForElementVisible('body');
});

Then(/^Redirecting to Home page should be "([^"]*)"$/, title => {
    // return client.assert.title(title)
    // .waitForElementVisible('body');

    return abhi
    .assert.title(title)
    .waitForElementVisible('body');
});