import { test } from "@playwright/test";
import { getClientEnv } from "../../../test.env";
import LoginPageObj from "../../../pages/login-page";
import Salutation from "../../../pages/User Management/setup/salutation";

let loginPage: LoginPageObj;
let salutationPage: Salutation;

test.describe("User Management > Setup > Salutation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(getClientEnv("url"));
    loginPage = new LoginPageObj(page);
    salutationPage = new Salutation(page);
  });
  test("Create", async () => {
    salutationPage.create();
  });
  //   test("Read", async () => {});
  //   test("Update", async () => {});
  //   test("Delete", async () => {});
});
