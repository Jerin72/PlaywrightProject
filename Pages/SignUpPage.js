export class SignUpPage {
    constructor(page) {
        this.page = page
        this.signup = page.locator("#signin2")
        this.signup_username = page.locator("#sign-username")
        this.signup_password = page.locator("#sign-password")
        this.signupbtn = page.getByRole("button", { name: "Sign up" })
        this.signInModal = this.page.locator("#signInModal")
        this.closebtn = page.getByRole("button", { name: "Close" }).nth(1)

    }

    async launchPage()
    {
        await this.page.goto("https://www.demoblaze.com/") 
    }

    async SignUpSuccess(newusername,newpassword)
    {
        
        await this.signup.click()
        await this.signInModal.waitFor({ state: "visible" })
        await this.signup_username.fill(newusername)
        await this.signup_password.fill(newpassword)
        await this.signupbtn.click()
        this.page.on("dialog",async dialog =>{
            console.log(dialog.message())
            expect(dialog.message()).toBe('Sign up successful.')
            await dialog.accept()
    
        })
        console.log("Successfully Signed In")
    }

    async SignUpClose(newusername,newpassword)
    {
        await this.signup.click()
        await this.signInModal.waitFor({ state: "visible" })
        await this.signup_username.fill(newusername)
        await this.signup_password.fill(newpassword)
        await this.closebtn.click()
       

    }
}
