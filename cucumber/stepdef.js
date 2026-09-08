import { Before, Given, Then, setDefaultTimeout, After } from '@cucumber/cucumber';
import { chromium, expect } from 'playwright';

//setDefaultTimeout(30 * 1000); //milliseconds
let browser, page, context;

Before(async function(){
  browser = await chromium.launch({headless: false});
  context = await brwoser.newContext();
  page = await content.newPage();
});

Given('I am on the Facebook login page', async function (url) {
  await page.goto(url);
});

Given('I am on the Facebook login page', async function (url) {
  await page.goto(url);
});

Then('the title should be {string}', async function (title) {
  const pageTitle = await page.title();
  expect(pageTitle).toHaveText(title);
});

// After(async function(){
//   await context.close();
//   await browser.close();
// });