import { Locator, Page } from "@playwright/test";

export class TopMenuCmp {
    readonly page: Page;
    readonly womenMenuItem: Locator;
    readonly dressesMenuItem: Locator;
    readonly tShirtsMenuItem: Locator;
    readonly blogMenuItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tShirtsMenuItem = this.page.locator('#block_top_menu li:has-text("T-shirts")').first();
    }
}