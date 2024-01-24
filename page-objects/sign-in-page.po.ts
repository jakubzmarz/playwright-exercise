import { Locator, Page } from "@playwright/test";

const path = '?controller=authentication&back=my-account';

export class SignInPage {
    readonly page: Page;
    readonly emailCreateInp: Locator;
    readonly createAccountBtn: Locator;
    readonly emailLoginInp: Locator;
    readonly passwordLoginInp: Locator;
    readonly confirmSignInBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailCreateInp = this.page.locator('#email_create');
        this.createAccountBtn = this.page.locator('#SubmitCreate');
        this.emailLoginInp = this.page.locator('#email');
        this.passwordLoginInp = this.page.locator('#passwd');
        this.confirmSignInBtn = this.page.locator('#SubmitLogin');
    }

    async goto() {
        await this.page.goto(path);
    }
}