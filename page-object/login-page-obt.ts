import { expect, Page } from "@playwright/test";
import { getClientEnv } from "../test.env";

import * as xpath from "../page/login-page.json";

export default class LoginPageObj {
  constructor(public page: Page) {}

  async login() {
    await this.page
      .locator(xpath.LoginPage.usernameInput)
      .fill(getClientEnv("username"));
    await this.page
      .locator(xpath.LoginPage.passwordInput)
      .fill(getClientEnv("password"));

    await this.page.locator(xpath.LoginPage.loginButton).click();
    await expect(this.page.locator(".header_label")).toHaveText("Swag Labs");
  }

  async invalidLogin(username: string, password: string) {
    await this.page.locator(xpath.LoginPage.usernameInput).fill(username);
    await this.page.locator(xpath.LoginPage.passwordInput).fill(password);

    await this.page.locator(xpath.LoginPage.loginButton).click();

    await expect(this.page.locator(xpath.LoginPage.errorMessage)).toHaveText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  }
}
