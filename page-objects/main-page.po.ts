import { Locator, Page } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly signInBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInBtn = this.page.locator('.login');
    }

    async goto() {
        await this.page.goto('/');
    }
}