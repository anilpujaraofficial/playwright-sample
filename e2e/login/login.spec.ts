import { LoginPageObj } from "@pageObject/loginObj/loginObj";
import { expect, test } from "@playwright/test";

let loginPageObj = new LoginPageObj();

test("Login", async ({ page }) => {
  await page.goto("https://frontend.midashealthservices.com.np/");
  await page.getByRole("heading", { name: "Welcome back" });
  await page.locator("#username").fill("superadmin");
  await page.locator("#password").fill("1KNWPVnOJxyO3at");
  await page.locator("button[type='submit']").click();
  await page.locator("div[data-cy='User Management']").click();
  await page.url().includes("/user");
});
