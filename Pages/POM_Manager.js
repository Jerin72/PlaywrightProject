import { SignUpPage} from "./SignUpPage"
import { LoginPage } from "./LoginPage"
import { CartPage } from "./CartPage"
import { PurchasePage } from "./PurchasePage"
import { LogoutPage } from "./LogoutPage"

export class POM_Manager {

    
    constructor(page) {
        this.page=page
        this.signup=new SignUpPage(page)
        this.login=new LoginPage(page)
        this.cart=new CartPage(page)
        this.purchase=new PurchasePage(page)
        this.logout=new LogoutPage(page)
    
    }
    getSignUpPage()
    {
        return this.signup
    }

    getLoginPage()
    {
        return this.login
    }
    getCartPage()
    {
        return this.cart
    }
    getPurchasePage()
    {
        return this.purchase
    }
    getLogoutPage()
    {
       return this.logout
    }
}