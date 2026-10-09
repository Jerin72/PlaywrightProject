import test, { expect } from "@playwright/test";

//TestCase7:Login with valid credentials-->Select a product-->Add to Cart-->Click Ok on the pop up
test.only("TC7: Add to Cart", async ({page})=>
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
    const product_name="Sony vaio i5"
    const buy_product=page.getByRole('link',{name:product_name})
    await buy_product.click()
    const addtocart=page.getByRole("link",{name:"Add to cart"})
    await addtocart.click()
    page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('Product added.')
            await dialog.accept()
        
        })
    await page.pause()
})
