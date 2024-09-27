require("dotenv").config();
import { LoginPage } from "@pages/login/login";
import { expect, test } from "@playwright/test";
let loginP = new LoginPage();

test("Login", async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await page.locator(loginP.form().username).fill(process.env.USER_NAME);
  await page.locator(loginP.form().password).fill(process.env.PASSWORD);
  await page.locator(loginP.button().login).click();
  await expect(page).toHaveURL(process.env.BASE_URL + "/dashboard");
});

test("Alert", async ({ page }) => {
  page.on("dialog", async (alert) => {

  });

  page.on("close",async()=>{
    
  })
});
