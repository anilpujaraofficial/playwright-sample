import { test, expect } from "@playwright/test";
import { getClientEnv } from "../test.env";
import LoginPageObj from "../page-object/login-page-obt";

let loginPage: LoginPageObj;

test.describe("Login Module", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(getClientEnv("url"));
    loginPage = new LoginPageObj(page);
  });

  test("should login successfully", async () => {
    await loginPage.login();
  });

  test("should show error message on invalid credentials", async () => {
    await loginPage.invalidLogin("invalid_user", "invalid_pass");
  });
});
