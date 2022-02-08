module.exports = {
    "#5th test script for getting the element using async await": async function (browser) {
        browser
            .url("http://tutorials.actionqa.com/nwind/element.html")
            .waitForElementVisible('body')

        const ElementResult = await browser.element('css selector', '#some-button')
        browser.pause(5000)
        console.log(JSON.stringify(ElementResult, null, 4))
        browser.pause(5000)
        console.log("Id of the element selected is:" + ElementResult.value.ELEMENT)
        browser.end()
        // browser.pause(5000)
        // console.log("session of the element selected is:" + ElementResult.sessionId)
        // browser.pause(5000)
        // console.log("status of the element selected is:" + ElementResult.status)
        // browser.pause(5000)
        // console.log("value of the element selected is:" + ElementResult.value)


    }
}