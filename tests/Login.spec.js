import test, { expect } from "@playwright/test"

//TestCase3:Verify login with valid credentials
test.only("TC3:User Login", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const login=page.locator("#login2")
    await login.click()
    const logInModal=page.locator("#logInModal")
    await logInModal.waitFor({ state: "visible" })
    const login_username=page.locator("#loginusername")
    await login_username.fill("Summer65")
    const login_password=page.locator("#loginpassword")
    await login_password.fill("Winter@123")
    const loginbtn=page.getByRole("button",{name:"Log in"})
    await loginbtn.click()
    const welcomeuser=page.locator("#nameofuser")
    expect(welcomeuser).toHaveText("Welcome Summer65")
    console.log(await welcomeuser.textContent())
    console.log("Valid user logged in")
    await page.waitForTimeout(5000)

})

//TestCase4:Verify login with invalid username and valid password

test("TC4:Invalid UserName and Valid Password Login", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const login=page.locator("#login2")
    await login.click()
    const logInModal =page.locator("#logInModal")
    await logInModal.waitFor({ state: "visible" })
    const login_username=page.locator("#loginusername")
    await login_username.fill("Summer66")
    const login_password=page.locator("#loginpassword")
    await login_password.fill("Winter@123")
    const loginbtn=page.getByRole("button",{name:"Log in"})
    page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('User does not exist.')
            await dialog.accept()
        
        })
        console.log("Invalid Username!!!!!!!!!")
    await loginbtn.click()
    await page.waitForTimeout(5000)
})


//TestCase5:Verify login with valid username and invalid password
test("TC5: Valid UserName and Invalid Password Login", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const login=page.locator("#login2")
    await login.click()
    const logInModal = page.locator("#logInModal")
    await logInModal.waitFor({ state: "visible" })
    const login_username=page.locator("#loginusername")
    await login_username.fill("Summer65")
    const login_password=page.locator("#loginpassword")
    await login_password.fill("Winter123")
    const loginbtn=page.getByRole("button",{name:"Log in"})
    page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('Wrong password.')
            await dialog.accept()
        
        })
        console.log("Invalid Password!!!!!!!!")
    await loginbtn.click()
    await page.waitForTimeout(5000)
})

//TestCase6:Verify login with invalid username and invalid password
test("TC6: Invalid UserName and Invalid Password Login", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const login=page.locator("#login2")
    await login.click()
    const logInModal = page.locator("#logInModal")
    await logInModal.waitFor({ state: "visible" })
    const login_username=page.locator("#loginusername")
    await login_username.fill("Summer66")
    const login_password=page.locator("#loginpassword")
    await login_password.fill("Winter@13")
    const loginbtn=page.getByRole("button",{name:"Log in"})
    page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('User does not exist.')
            await dialog.accept()
        
        })
        console.log("Invalid Username and Password!!!!!!!!!")
    await loginbtn.click()
    await page.waitForTimeout(5000)
})
