import { test, expect } from "@playwright/test";
import { getClientEnv } from "../test.env";
import LoginPage from "../page/login";

let loginP: LoginPage;

test.describe("Login Module", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(getClientEnv("url"));
    loginP = new LoginPage(page);
  });

  test("should login successfully", async () => {
    await loginP.login();
  });

  test("should show error message on invalid credentials", async () => {
    await loginP.invalidLogin("invalid_user", "invalid_pass");
  });
});
