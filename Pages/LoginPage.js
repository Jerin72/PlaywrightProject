import { expect } from "@playwright/test"

export class LoginPage {
    constructor(page) {
        this.page=page
        this.login=page.locator("#login2")
        this.login_username=page.locator("#loginusername")
        this.login_password=page.locator("#loginpassword")
        this.logInModal = this.page.locator("#logInModal")
        this.loginbtn=page.getByRole("button",{name:"Log in"})
        
    }
    async validUser(login_user,login_password)
    {
        await this.login.click()
        await this.logInModal.waitFor({ state: "visible" })
        await this.login_username.fill(login_user)
        await this.login_password.fill(login_password)
        await this.loginbtn.click()
        console.log("Valid user logged in")

    }
    async invalidUsername(login_invaliduser,login_password)
    {
        await this.login.click()
        await this.logInModal.waitFor({ state: "visible" })
        await this.login_username.fill(login_invaliduser)
        await this.login_password.fill(login_password)
        await this.loginbtn.click()
        this.page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('User does not exist.')
            await dialog.accept()
        
        })
        console.log("Invalid Username!!!!!!!!!")
    }

    async invalidPassword(login_user,login_invalidpwd)
    {
        await this.login.click()
        await this.logInModal.waitFor({ state: "visible" })
        await this.login_username.fill(login_user)
        await this.login_password.fill(login_invalidpwd)
        await this.loginbtn.click()
        this.page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('Wrong password.')
            await dialog.accept()
        
        })
        console.log("Invalid Password!!!!!!!!")
    }

    async invalidUser(login_invaliduser,login_invalidpwd)
    {
        await this.login.click()
        await this.logInModal.waitFor({ state: "visible" })
        await this.login_username.fill(login_invaliduser)
        await this.login_password.fill(login_invalidpwd)
        await this.loginbtn.click()
        this.page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('User does not exist.')
            await dialog.accept()
        
        })
        console.log("Invalid Username and Password!!!!!!!!!")
    }
}