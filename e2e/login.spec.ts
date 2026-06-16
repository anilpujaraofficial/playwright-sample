import { test, expect } from "@playwright/test";
import { getClientEnv } from "../test.env";
import LoginPage from "../pages/login-page";

let loginPage: LoginPage;

test.describe("Login Module", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(getClientEnv("url"));
    loginPage = new LoginPage(page);
  });

  test("should login successfully", async () => {
    await loginPage.login();
  });

  test("should show error message on invalid credentials", async () => {
    await loginPage.invalidLogin("invalid_user", "invalid_pass");
  });
});
