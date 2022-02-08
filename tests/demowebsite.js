module.exports = {

    '@tags': ['DemoWebsite'],


    "automating demo website": function (browser) {



        const demo = browser.page.demowebsite()


        demo
            .navigate()
            .waitForElementVisible("body")
            .assert.titleContains("GreenKart")

            .search()

            .addingQuantity()

        demo
            .waitForElementVisible("@price")
            .pause(3000)
            .click("@CheckOutPopup")
            .pause(3000)
            .click("@checkOutbutton")
            .pause(3000)



    }


}