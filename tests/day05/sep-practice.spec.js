import { test } from "@playwright/test";

test("SEP Practice @sep", async ({ page }) => {

    CommonUI.loginToSEP(page);
    await page.waitForTimeout(3000);
    CommonUI.completeStartApplicationStep(page, "Farrukh", "Zaripov", "farrukh.zaripov@sep.com", "4254444225");
    await page.waitForTimeout(3000);
    CommonUI.completePaymentPlanStep(page, "upfront");
    await page.waitForTimeout(3000);
    CommonUI.completePaymentReviewStep(page,"4242424242424242");
    await page.waitForTimeout(3000);


});

class CommonUI {

    static async loginToSEP(page){
        const ENCODED_CREDENTIALS = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

        await page.setExtraHTTPHeaders({Authorization: `Basic ${ENCODED_CREDENTIALS}`})

        await page.goto(`${process.env.SEP_QA_URL}`);
    }

    static async completeStartApplicationStep(page, firstName, lastName, email, phone){
        let firstNameInput = page.locator("//input[@formcontrolname='firstName']");
        await firstNameInput.fill(firstName);

        let lastNameInput = page.locator("//input[@formcontrolname='lastName']");
        await lastNameInput.fill(lastName);

        let emailInput = page.locator("//input[@formcontrolname='email']");
        await emailInput.fill(email);

        let phoneInput = page.locator("//input[@formcontrolname='phoneNumber']");
        await phoneInput.fill(phone);

        let howDidYouHearAboutUsDropDown = page.locator("//mat-label[text()='How did you hear about us?']");
        await howDidYouHearAboutUsDropDown.click();

        await page.click(`//span[text()='Email']`);

        let nextButton1 = page.locator("//button[@type='submit']");
        await nextButton1.click();
    }

    static async completePaymentPlanStep(page, paymentPlan ){

        paymentPlan = paymentPlan.toLowerCase();

        switch(paymentPlan){
            case "upfront":
                let upfrontPaymentPlanOption = page.locator("//mat-expansion-panel-header[@id='mat-expansion-panel-header-0']");
                await upfrontPaymentPlanOption.click();
                break;
           
            case "installment":
            case "installments":
                let installmentPaymentPlanOption = page.locator("///mat-expansion-panel-header[@id='mat-expansion-panel-header-1']");
                await installmentPaymentPlanOption.click();
                break;
        }

        let nextButton2 = page.locator("//button[@class='next-button' and text()='Next']");
        await nextButton2.click();


    }
    static async completePaymentReviewStep (page, cardNumber){ 

        let paymentFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");

        let cardNumberInput = paymentFrame.locator("//input[@id='Field-numberInput']");
        await cardNumberInput.fill(cardNumber);

        let expirationDateInput = paymentFrame.locator("//input[@id='Field-expiryInput']");
        await expirationDateInput.fill("12/34");

        let securityCode = paymentFrame.locator("//input[@id='Field-cvcInput']");
        await securityCode.fill("123");

        let zipCodeInput = paymentFrame.locator("//input[@id='Field-postalCodeInput']");
        await zipCodeInput.fill("08873");

        let termsAndConditionsCheckbox =  page.locator("//input[@id='defaultCheck2']");
        await termsAndConditionsCheckbox.check();

        let payButton = page.locator("//span[@class='mdc-button__label' and text()='Pay']");
        await payButton.click();

    

    }



}