import test, { expect } from "@playwright/test";

//TestCase1:Sign Up->Enter Data->Click SignUp
test("TC1: User SignUp", async ({page}) =>{
    await page.goto("https://www.demoblaze.com/")
    const signup=page.locator("#signin2")
    const signInModal = this.page.locator("#signInModal")
    await signInModal.waitFor({ state: "visible" })
    await signup.click()
    const signup_username=page.locator("#sign-username")
    await signup_username.fill("Summer67")
    const signup_password=page.locator("#sign-password")
    await signup_password.fill("Winter@128")
    const signupbtn=page.getByRole("button",{name:"Sign up"})
    
    await signupbtn.click()

    page.on("dialog",async dialog =>{
            console.log(dialog.message())
            expect(dialog.message()).toBe('Sign up successful.')
            await dialog.accept()
    
    })
})
//TestCase2:Sign Up->Enter Data->Click Close

test("TC2:Sign Up Close", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const signup=page.locator("#signin2")
    const signInModal = this.page.locator("#signInModal")
    await signInModal.waitFor({ state: "visible" })
    await signup.click()
    const signup_username=page.locator("#sign-username")
    await signup_username.fill("Summer65")
    const signup_password=page.locator("#sign-password")
    await signup_password.fill("Winter@123")
    const closebtn=page.getByRole("button",{name:"Close"}).nth(1)
    await closebtn.click()
    await page.waitForTimeout(5000)
})
