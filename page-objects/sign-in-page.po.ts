import { Locator, Page } from "@playwright/test";

const path = '?controller=authentication&back=my-account';

export class SignInPage {
    readonly page: Page;
    readonly emailCreateInp: Locator;
    readonly createAccountBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailCreateInp = this.page.locator('#email_create');
        this.createAccountBtn = this.page.locator('#SubmitCreate');
    }

    async goto() {
        await this.page.goto(path);
    }
}