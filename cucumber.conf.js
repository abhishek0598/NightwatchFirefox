// const { setDefaultTimeout, AfterAll, BeforeAll } = require('cucumber');
// const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');

// setDefaultTimeout(60000);

// BeforeAll(async () => {
//   await startWebDriver();
//   await createSession();
// });

// AfterAll(async () => {
//   await closeSession();
//   await stopWebDriver();
// });





// //1.For generating report in html format and taking screenshots

// const fs = require('fs');
// const path = require('path');
// const { setDefaultTimeout, After, AfterAll, BeforeAll } = require('cucumber');
// const { createSession, closeSession, startWebDriver, stopWebDriver,  } = require('nightwatch-api');
// const reporter = require('cucumber-html-reporter');

// const attachedScreenshots = getScreenshots();

// function getScreenshots() {
//   try {
//     const folder = path.resolve(__dirname, 'screenshots');

//     const screenshots = fs.readdirSync(folder).map(file => path.resolve(folder, file));
//     return screenshots;
//   } catch (err) {
//     return [];
//   }
// }

// setDefaultTimeout(60000);

// BeforeAll(async () => {
//   await startWebDriver();
//   await createSession();
// });

// AfterAll(async () => {
//   await closeSession();
//   await stopWebDriver();
//   setTimeout(() => {
//     reporter.generate({
//       theme: 'bootstrap',
//       jsonFile: 'report/cucumber_report.json',
//       output: 'report/cucumber_report.html',
//       reportSuiteAsScenarios: true,
//       launchReport: true,
//       metadata: {
//         'App Version': '0.3.2',
//         'Test Environment': 'POC'
//       }
//     });
//   }, 0);
// });

// After(function () {
//   return Promise.all(
//     getScreenshots()
//       .filter(file => !attachedScreenshots.includes(file))
//       .map(file => {
//         attachedScreenshots.push(file);
//         return this.attach(fs.readFileSync(file), 'image/png');
//       })
//   );
// });

//2nd method for generating htmlformat report and taking screenshots
const fs = require('fs');
const path = require('path');
const { setDefaultTimeout, AfterAll, BeforeAll ,After} = require('cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver, getNewScreenshots } = require('nightwatch-api');
const reporter = require('cucumber-html-reporter');
 
setDefaultTimeout(60000);
 
BeforeAll(async () => {
  await startWebDriver();
  await createSession();
});
 
AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'POC'
      }
    });
  }, 1000);
});
 
After(function() {
    getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
 });