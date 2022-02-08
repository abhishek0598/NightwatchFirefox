
const { client } = require('nightwatch-api');
const { Given, Then, When  } = require('cucumber');

Given(/^I open Hacker News Home page$/, () => {
  return client.url('http://news.ycombinator.com/')
  .waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
  return client.assert.title(title);
});

When(/^the Hacker News search form exists$/, () => {
  return client.assert.visible('input[name="q"]');
});