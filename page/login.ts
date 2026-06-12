import { expect, Page } from "@playwright/test";
import { getClientEnv } from "../test.env";

export default class LoginPage {
  constructor(public page: Page) {}

  async login() {
    await this.page
      .locator("input[data-test='username']")
      .fill(getClientEnv("username"));
    await this.page
      .locator("input[data-test='password']")
      .fill(getClientEnv("password"));

    await this.page.locator("input[data-test='login-button']").click();
    await expect(this.page.locator(".header_label")).toHaveText("Swag Labs");
  }

  async invalidLogin(username: string, password: string) {
    await this.page.locator("input[data-test='username']").fill(username);
    await this.page.locator("input[data-test='password']").fill(password);

    await this.page.locator("input[data-test='login-button']").click();

    await expect(this.page.locator("h3[data-test='error']")).toHaveText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  }
}
