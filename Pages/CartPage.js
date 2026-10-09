import { expect } from "@playwright/test"

export class CartPage {
    constructor(page) {

        this.page=page
        this.addtocartbtn=page.getByRole("link",{name:"Add to cart"})
    }

    async selectProduct(phone_name)
    {
        const buy_product=this.page.getByRole('link',{name:phone_name})
        await buy_product.click()
    }

    
    async addtocart()
    {
        await this.addtocartbtn.click()
        console.log("Product Added to Cart")
        this.page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('Product added.')
            await dialog.accept()
        
        })
   
    }
}
