const {test, expect, request} = require("@playwright/test");
const {customtest} = require("../tests/utils/customFixture");

customtest('First custom fixture', async({ loginfixture }) => {
    await loginfixture.goto("https://www.rahulshettyacademy.com/client");
    console.log("test executed");



})

