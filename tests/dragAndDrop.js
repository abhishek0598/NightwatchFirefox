const dragAndDrop = require('html-dnd').codeForSelectors;
module.exports = {

    '@tags':['tagging'],
    "Test script for Drag and Drop functionality as it is not supported by selenium webdrivers": async function (browser) {
        browser
            .url("http://tutorials.actionqa.com/yt/nw/dndexample.htm")
            .pause(5000)

            .assert.visible('#drag1')
            .assert.visible('#div1')
            .assert.containsText('body > p','Drag the ActionQA logo into the rectangle:')
            .execute(dragAndDrop, ['#drag1', '#div1'])
            .saveScreenshot('tests_output/drag&drop.png')
            .pause(5000)

            .end()

    }
 }


