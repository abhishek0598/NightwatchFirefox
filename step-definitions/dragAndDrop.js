const {client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const dragAndDrop = require('html-dnd').codeForSelectors;

Given(/^open website from "([^"]*)"$/, url => {
  return client.url(url)
  .waitForElementVisible('body', 1000);
  
});

When(/^dragging element is "([^"]*)"$/, element1 => {
  return client.assert.visible(element1);
});

When(/^dropping element is "([^"]*)"$/, element2 => {
  return client.assert.visible(element2);
});

Then(/^drag and drop functionality is successfully working$/ ,() => {
  return client.execute(dragAndDrop, ['#drag1', '#div1'])
});

