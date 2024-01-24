import { test, expect } from "@playwright/test";
import { MainPage } from '../page-objects/main-page.po';
import { SignInPage } from "../page-objects/sign-in-page.po";
import { UserData, getRandomUserData } from "../support/user-data.model";
import { CreateAccountPage } from "../page-objects/create-account-page.po";

let mainPage: MainPage;
let signInPage: SignInPage;
let createAccountPage: CreateAccountPage;
let userData: UserData;

test.describe("Example automationpractice.pl tests", () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    signInPage = new SignInPage(page);
    createAccountPage = new CreateAccountPage(page);

    await mainPage.goto();
  });

  test("should be able to register", async ({ page }) => {
    userData = getRandomUserData();
    await signInPage.goto();
    await signInPage.emailCreateInp.fill(userData.email);
    await page.keyboard.press('Tab'); // press tab to invoke email check
    expect(page.locator('.form_content>.form-ok')).toBeVisible();

    await signInPage.createAccountBtn.click();

    await createAccountPage.chooseGenderRadioBtn(userData.isFemale);
    await createAccountPage.firstNameInp.fill(userData.firstName);
    await createAccountPage.lastNameInp.fill(userData.lastName);
    expect(createAccountPage.emailInp).toHaveValue(userData.email); // check if email typed on previous subpage is correct
    await createAccountPage.passwordInp.fill(userData.password);
    await createAccountPage.daySelect.selectOption(userData.dateOfBirth.getDate().toString());
    await createAccountPage.monthSelect.selectOption(userData.dateOfBirth.getMonth().toString());
    await createAccountPage.yearSelect.selectOption(userData.dateOfBirth.getFullYear().toString());
    await createAccountPage.selectNewsletterNotifications(userData.newsletter);
    await createAccountPage.registerBtn.click();

    expect(page.locator('.alert-success')).toBeVisible();
    expect(page.locator('.logout')).toBeVisible();
  });
});
// TODO rest of test cases