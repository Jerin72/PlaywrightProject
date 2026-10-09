import test from "@playwright/test";

//TestCase8:Login with valid credentials -->Select a product under Phones-->Add to Cart --> Click ok on the pop up --> Add Details-->Purchase

test("TC8: Phone Purchase", async ({page})=>
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
    const phonemenu=page.getByRole("link",{name:"Phones"})
    await phonemenu.click()
    const product_name="Sony xperia z5"
    const buy_phone=page.getByRole('link',{name:product_name})
    await buy_phone.waitFor({state:"visible"})
    await buy_phone.click()
    const addtocart=page.getByRole("link",{name:"Add to cart"})
    await addtocart.click()
    page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('Product added.')
            await dialog.accept()
        
        })
    const cart=page.locator("#cartur")
    await cart.click()
    const order=page.getByRole("button",{name:"Place Order"})
    await order.click()
    const orderName=page.locator("#name")
    await orderName.fill("Summer")
    const country=page.locator("#country")
    await country.fill("Ammerica")
    const city=page.locator("#city")
    await city.fill("New York")
    const creditcard=page.locator("#card")
    await creditcard.fill("123456676554")
    const card_month=page.locator("#month")
    await card_month.fill("May")
    const card_year=page.locator("#year")
    await card_year.fill("Year")
    const purchase=page.getByRole("button",{name:"Purchase"})
    await this.page.waitForTimeout(3000)
    await purchase.click()
    await page.pause()
})

//TestCase9:Login with valid credentials -->Select a product under Monitors-->Add to Cart --> Click ok on the pop up --> Add Details-->Purchase

test("TC9: Monitor Purchase", async ({page})=>
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
    const monitormenu=page.getByRole("link",{name:"Monitors"})
    await monitormenu.click()
    const product_name="Apple monitor 24"
    const buy_monitor=page.getByRole('link',{name:product_name})
    await buy_monitor.waitFor({state:"visible"})
    await buy_monitor.click()
    const addtocart=page.getByRole("link",{name:"Add to cart"})
    await addtocart.click()
    page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('Product added.')
            await dialog.accept()
        
        })
    const cart=page.locator("#cartur")
    await cart.click()
    const order=page.getByRole("button",{name:"Place Order"})
    await order.click()
    const orderName=page.locator("#name")
    await orderName.fill("Summer")
    const country=page.locator("#country")
    await country.fill("Ammerica")
    const city=page.locator("#city")
    await city.fill("New York")
    const creditcard=page.locator("#card")
    await creditcard.fill("123456676554")
    const card_month=page.locator("#month")
    await card_month.fill("May")
    const card_year=page.locator("#year")
    await card_year.fill("Year")
    const purchase=page.getByRole("button",{name:"Purchase"})
    await page.waitForTimeout(3000)
    await purchase.click()
    await page.pause()
})