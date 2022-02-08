module.exports = {

    //url is string object
    url: "http://tutorials.actionqa.com/yt/nw/locator-01.html",


    //elements is object that contains selectors that are being used in test script
    elements: {
        CssSelector: "#text-input",
        XpathSelector: '//*[@id:"text-input"]',
        username: "input[name:txtUsername]",
        password: "input[type:password]",
        login: "input[type=submit]"
    },
    //it contains commands that are being used in script and make collection of commands as single command or query.
    commands: [{

        Css() {
            return this
                .pause(3000)
                .setValue('@CssSelector', "inputing via css")
                .pause(3 * 1000)
                .clearValue('@CssSelector')
                .pause(3 * 1000)
                .setValue('@CssSelector', "inputing via xpath")
                .pause(3 * 1000)
                .clearValue('@CssSelector')
        }

        // Xpath() {
        //     return this
                
        //         .clearValue('@XpathSelector')
        //         .pause(3 * 1000)
        //         .setValue('@XpathSelector', "inputing via xpath")
        //         .pause(3 * 1000)
        //         .clearValue('@XpathSelector')
        // }

    }]

};