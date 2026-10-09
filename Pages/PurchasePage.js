export class PurchasePage {
    constructor(page) {
        this.page=page
        this.phonemenu=page.getByRole("link",{name:"Phones"})
        this.monitormenu=page.getByRole("link",{name:"Monitors"})
        //this.buy_phone=page.getByRole("link",{name:"Sony xperia z5"})
        //this.buy_monitor=page.getByRole("link",{name:"Apple monitor 24"})
        this.addtocart=page.getByRole("link",{name:"Add to cart"})
        this.cart=page.locator("#cartur")
        this.placeorder=page.getByRole("button",{name:"Place Order"})
        this.orderName=page.locator("#name")
        this.country=page.locator("#country")
        this.city=page.locator("#city")
        this.creditcard=page.locator("#card")
        this.card_month=page.locator("#month")
        this.card_year=page.locator("#year")
        this.purchase=page.getByRole("button",{name:"Purchase"})
        
    }

    async PhonePurchase(phone_name)
    {
        await this.phonemenu.click()
        await this.page.waitForTimeout(3000)
        const buy_phone=this.page.getByRole('link',{name:phone_name})
        await this.page.waitForTimeout(5000)
        //await buy_phone.waitFor({state:"visible"})
        await buy_phone.click() 
    }

    async MonitorPurchase(monitor_name)
        {
        await this.monitormenu.click()
        await this.page.waitForTimeout(5000)
        const buy_monitor=this.page.getByRole('link',{name:monitor_name})
        await this.page.waitForTimeout(5000)
        //await buy_monitor.waitFor({state:"visible"})
        await buy_monitor.click()
        }

    async PurchaseDetails(name,country,city,creditcard,month,year)  //to change
        {
        await this.cart.click()
        await this.placeorder.click()
        await this.page.waitForTimeout(3000)
        //await this.orderName.waitFor({state:"visible"})
        await this.orderName.fill(name)
        await this.country.fill(country)
        await this.city.fill(city)
        await this.creditcard.fill(creditcard)
        await this.card_month.fill(month)
        await this.card_year.fill(year)
        await this.page.waitForTimeout(3000)
        await this.purchase.click()
        }
}