import { expect, Page } from "@playwright/test";

class FormPage {
  private page: Page;

  async inputField(xpath: string, value: string) {
    const input = this.page.locator(xpath);
    await input.fill("");
    await input.fill(value);
    await expect(input).toHaveValue(value);
    await this.page.waitForTimeout(500);
  }

  async getData(xpath: string): Promise<string> {
    const input = this.page.locator(xpath);
    await input.click();
    const value = await input.inputValue();
    return value;
  }

  async getDropdown(xpath: string, value: string) {
    const dropdown = this.page.locator(xpath);
    await dropdown.fill("");
    await dropdown.fill(value);
    await expect(dropdown).toHaveValue(value);
    await this.page.waitForTimeout(500);
    await this.page.locator(`div[title='${value}']`).click();
  }

  async getDropdownWithValue(xpath: string, value: string) {
    const dropdown = this.page.locator(xpath);
    await dropdown.click();
    await dropdown.fill(value);
    await this.page.keyboard.press("Enter");
  }
}

export default FormPage;
