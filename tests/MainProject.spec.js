import test, { expect } from "@playwright/test";

//TestCase1:Sign Up->Enter Data->Click SignUp
test("TC1: User SignUp", async ({page}) =>{
    await page.goto("https://www.demoblaze.com/")
    const signup=page.locator("#signin2")
    await signup.click()
    const signup_username=page.locator("#sign-username")
    await signup_username.fill("Summer67")
    const signup_password=page.locator("#sign-password")
    await signup_password.fill("Winter@128")
    const signupbtn=page.getByRole("button",{name:"Sign up"})
    await signupbtn.click()

    page.on("dialog",async dialog =>{
            console.log(dialog.message())
            expect(dialog.message()).toBe('Sign up successful.')
            await dialog.accept()
    
    })
})
//TestCase2:Sign Up->Enter Data->Click Close

test("TC2:Sign Up Close", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const signup=page.locator("#signin2")
    await signup.click()
    const signup_username=page.locator("#sign-username")
    await signup_username.fill("Summer65")
    const signup_password=page.locator("#sign-password")
    await signup_password.fill("Winter@123")
    const closebtn=page.getByRole("button",{name:"Close"}).nth(1)
    await closebtn.click()
    await page.waitForTimeout(5000)
})

//TestCase3:Verify login with valid credentials
test("TC3:User Login", async ({page})=>
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
    console.log("Valid user logged in")
    await page.waitForTimeout(5000)

})

//TestCase4:Verify login with invalid username and valid password

test("TC4:Invalid UserName and Valid Password Login", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const login=page.locator("#login2")
    await login.click()
    const login_username=page.locator("#loginusername")
    await login_username.fill("Summer66")
    const login_password=page.locator("#loginpassword")
    await login_password.fill("Winter@123")
    const loginbtn=page.getByRole("button",{name:"Log in"})
    await loginbtn.click()
    page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('User does not exist.')
            await dialog.accept()
        
        })
        console.log("Invalid Username!!!!!!!!!")
    await page.waitForTimeout(5000)
})


//TestCase5:Verify login with valid username and invalid password
test("TC5: Valid UserName and Invalid Password Login", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const login=page.locator("#login2")
    await login.click()
    const login_username=page.locator("#loginusername")
    await login_username.fill("Summer65")
    const login_password=page.locator("#loginpassword")
    await login_password.fill("Winter123")
    const loginbtn=page.getByRole("button",{name:"Log in"})
    await loginbtn.click()
    page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('Wrong password.')
            await dialog.accept()
        
        })
        console.log("Invalid Password!!!!!!!!")
    await page.waitForTimeout(5000)
})

//TestCase6:Verify login with invalid username and invalid password
test("TC6: Invalid UserName and Invalid Password Login", async ({page})=>
{
    await page.goto("https://www.demoblaze.com/")
    const login=page.locator("#login2")
    await login.click()
    const login_username=page.locator("#loginusername")
    await login_username.fill("Summer66")
    const login_password=page.locator("#loginpassword")
    await login_password.fill("Winter@13")
    const loginbtn=page.getByRole("button",{name:"Log in"})
    await loginbtn.click()
    page.on("dialog",async dialog =>
        {
            expect(dialog.message()).toBe('User does not exist.')
            await dialog.accept()
        
        })
        console.log("Invalid Username and Password!!!!!!!!!")
    await page.waitForTimeout(5000)
})

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
    await purchase.click()
    await page.pause()
})
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