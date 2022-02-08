const dragAndDrop = require('html-dnd').codeForSelectors;
module.exports = {

    // '@tags': ['Test1'],
    // "1st test script for nightwatch": function (browser) {

    //     // using page object 
    //     const page = browser.page.test1();


    //     page
    //         .navigate("http://tutorials.actionqa.com/yt/nw/locator-01.html")
    //         .waitForElementVisible('body')
    //         //browser.pause(3 * 1000)

    //         //Using page objects

    //         // const CssSelector = "#text-input"
    //         // const XpathSelector = '//*[@id="text-input"]'

    //       //browser.useCss()
    //         .Css()
    //         // .useCss()
        
    //        // browser.page.useXpath()
    //         //.Xpath()
    //         // .setValue('@CssSelector', "inputing via css")
    //         // .pause(3 * 1000)

           
        
    //         // .useXpath()
    //         // .clearValue(XpathSelector)
    //         // .pause(3 * 1000)


    //         // .setValue(XpathSelector, "inputing via xpath")
    //         // .pause(3 * 1000)
    //         // .clearValue(XpathSelector)

           

    //         .end()
    //     // by default nightwatch uses CSS selector to 
    //     // browser.click("#menu-primary-menu > li.menu-highlight.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-2813.nav-item > a")
    //     // browser.pause(3 * 1000 )
    // },

    "2nd Test script for nightwatch": function (browser) {
        const username = "input[name=txtUsername]"
        const password = "input[type=password]"
        const login = "input[type=submit]"
        const url ="https://opensource-demo.orangehrmlive.com/"
        
        browser
         .url(url)
         .pause(3 * 1000)
         .assert.titleContains('OrangeHRM')

        // using page objects  
        // const username = "input[name=txtUsername]"
        // const password = "input[type=password]"
        // const login = "input[type=submit]"
        // const homepage = ""


        .useCss()
        .assert.visible(username)
        .pause(3 * 1000)
        .sendKeys(username, 'Admin')

        .assert.visible(password)
        .pause(3 * 1000)
        .sendKeys(password, 'admin123')

        .pause(3 * 1000)
        .click(login)

        .waitForElementVisible('body')
        .pause(3 * 1000)

        .assert.visible()

        .end()


        // browser.useCss()
        // browser.setValue(CssSelector, "inputing via css")
        // browser.pause(3 * 1000)


    }

    //     "#3rd Test script for nightwatch": function (browser) {

    //         browser
    //             .url('https://www.ecosia.org/')
    //             .waitForElementVisible('body')
    //             .assert.titleContains('Ecosia')
    //             .assert.visible('input[type=search]')
    //             .sendKeys('input[type=search]', 'nightwatch')

    //             .assert.visible('button[type=submit]')

    //             .click('button[type=submit]')
    //             .assert.containsText('.mainline-results', 'Nightwatch.js')
    //             .end();
    //     },


    //     "#4th Test script for Drag and Drop functionality as it is not supported by selenium webdrivers": function (browser) {
    //         browser
    //             .url("http://tutorials.actionqa.com/yt/nw/dndexample.htm")
    //             .pause(5000)

    //             .assert.visible('#drag1')
    //             .assert.visible('#div1')
    //             .assert.containsText('body > p', 'Drag the ActionQA logo into the rectangle:')
    //             .execute(dragAndDrop, ['#drag1', '#div1'])
    //             .pause(5000)

    //             .end()

    //     },
    //     "#5th test script for getting the element using async await": async function (browser) {
    //         browser
    //             .url("http://tutorials.actionqa.com/nwind/element.html")
    //             .waitForElementVisible('body')

    //         const ElementResult = await browser.element('css selector', '#some-button')
    //         browser.pause(5000)
    //         console.log(JSON.stringify(ElementResult, null, 4))
    //         browser.pause(5000)
    //         console.log("Id of the element selected is:" + ElementResult.value.ELEMENT)
    //         browser.end()
    //         browser.pause(5000)
    //         console.log("session of the element selected is:" + ElementResult.sessionId)
    //         browser.pause(5000)
    //         console.log("status of the element selected is:" + ElementResult.status)
    //         browser.pause(5000)
    //         console.log("value of the element selected is:" + ElementResult.value.ELEMENT)


    //     },
    //     "#6th test script for using elements() API for getting ": async function (browser) {
    //         browser
    //           .url("http://tutorials.actionqa.com/nwind/elements.html")

    //           .waitForElementVisible("body")

    //         const tableRows = await browser.elements("css selector", "tr");
    //         console.log(JSON.stringify(tableRows, null, 4));
    //         console.log("Number of rows in table:" + tableRows.value.length);
    //       }
}