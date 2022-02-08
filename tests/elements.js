module.exports = {
  "#6th test script for using elements() API for getting ": async function (browser) {
    browser
      .url("http://tutorials.actionqa.com/nwind/elements.html")

      .waitForElementVisible("body")
      .pause(5000);

    const tableRows = await browser.elements("css selector", "tr");
    console.log(JSON.stringify(tableRows, null, 4));
    console.log("Number of rows in table:" + tableRows.value.length);
  },
};
