import { Page, expect } from "@playwright/test";
import { SignInPage } from "../page-objects/sign-in-page.po";

let signInPage: SignInPage;


export async function logUserIn(page: Page, email: string, password: string): Promise<void> {
    signInPage = new SignInPage(page);
    await signInPage.goto();
    await signInPage.emailLoginInp.fill(email);
    await signInPage.passwordLoginInp.fill(password);
    await signInPage.confirmSignInBtn.click();
    expect(page.locator('.logout')).toBeVisible();
}