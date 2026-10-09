import test from "@playwright/test"

//TestCase10:Login with valid credentials -->logout
test("TC10: Logout", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const login=page.locator("#login2")
    await login.click()
    const login_username=page.locator("#loginusername")
    await login_username.fill("Summer65")
    const login_password=page.locator("#loginpassword")
    await login_password.fill("Winter@123")
    const loginbtn=page.getByRole("button",{name:"Log in"})
    await loginbtn.click()
    const logout=page.getByRole("link",{name:"Log out"})
    await logout.click()
    await page.pause()
})