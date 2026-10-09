export class LogoutPage {
    constructor(page) {
        this.page=page
        this.logoutlink=page.getByRole("link",{name:"Log out"})
        
    }

    async logout()
    {
    await this.logoutlink.click()
    }
    
}