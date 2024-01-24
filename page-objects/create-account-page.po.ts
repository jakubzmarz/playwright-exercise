import { Locator, Page } from "@playwright/test";

export class CreateAccountPage {
  readonly page: Page;
  readonly mrRadioBtn: Locator;
  readonly mrsRadioBtn: Locator;
  readonly firstNameInp: Locator;
  readonly lastNameInp: Locator;
  readonly emailInp: Locator;
  readonly passwordInp: Locator;
  readonly daySelect: Locator;
  readonly monthSelect: Locator;
  readonly yearSelect: Locator;
  readonly newsletterCheckbox: Locator;
  readonly registerBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mrRadioBtn = this.page.locator("#uniform-id_gender1");
    this.mrsRadioBtn = this.page.locator("#uniform-id_gender2");
    this.firstNameInp = this.page.locator("#customer_firstname");
    this.lastNameInp = this.page.locator("#customer_lastname");
    this.emailInp = this.page.locator("#email");
    this.passwordInp = this.page.locator("#passwd");
    this.daySelect = this.page.locator("#days");
    this.monthSelect = this.page.locator("#months");
    this.yearSelect = this.page.locator("#years");
    this.newsletterCheckbox = this.page.locator("#newsletter");
    this.registerBtn = this.page.locator('#submitAccount');
  }

  async chooseGenderRadioBtn(isFemale: boolean) {
    if (isFemale) {
      await this.mrsRadioBtn.check();
    } else {
      await this.mrRadioBtn.check();
    }
  }

  async selectNewsletterNotifications(wantsNewsletter: boolean | undefined) {
    if (wantsNewsletter) {
        await this.newsletterCheckbox.check();
    }
  }
}
