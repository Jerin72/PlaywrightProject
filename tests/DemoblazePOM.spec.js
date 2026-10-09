import test, { expect } from "@playwright/test";
import { POM_Manager } from "../Pages/POM_Manager.js";
import dataobj from "..//Utils/TestData.json" with {type:"JSON"}


let pom_manager
let signup
let login
let cart
let purchase
let logout

test.beforeEach("Objects Creation",async ({page})=>
{
    pom_manager=new POM_Manager(page)
    signup=pom_manager.getSignUpPage()
    login=pom_manager.getLoginPage()
    cart=pom_manager.getCartPage()
    purchase=pom_manager.getPurchasePage()
    logout=pom_manager.getLogoutPage()

    await signup.launchPage()

})
test.describe("SignUp Tests",()=>{
//TestCase1:Sign Up->Enter Data->Click SignUp
test("TC1: User SignUp", async ({page}) =>{

    
    //await signup.launchPage()
    await signup.SignUpSuccess(dataobj.signupdata.newusername,dataobj.signupdata.newpassword)
    
    })
//TestCase2:Sign Up->Enter Data->Click Close

test("TC2:Sign Up Close", async ({page})=>
{
    //await signup.launchPage()
    await signup.SignUpClose(dataobj.signupdata.newusername,dataobj.signupdata.newpassword)
})
})

test.describe("Login Tests",()=>{

//TestCase3:Verify login with valid credentials
test("TC3:User Login", async ({page})=>
{
    
    //await signup.launchPage()
    await login.validUser(dataobj.logindata.login_user,dataobj.logindata.login_password)
    console.log("Valid user logged in")
    await page.waitForTimeout(5000)
    

})

//TestCase4:Verify login with invalid username and valid password

test("TC4:Invalid UserName and Valid Password Login", async ({page})=>
{

    //await signup.launchPage()
    await login.invalidUsername(dataobj.logindata.login_invaliduser,dataobj.logindata.login_password)
    await page.waitForTimeout(5000)
})


//TestCase5:Verify login with valid username and invalid password
test("TC5: Valid UserName and Invalid Password Login", async ({page})=>
{

    //await signup.launchPage()
    await login.invalidPassword(dataobj.logindata.login_user,dataobj.logindata.login_invalidpwd)
    await page.waitForTimeout(5000)
})
//TestCase6:Verify login with invalid username and invalid password
test("TC6: Invalid UserName and Invalid Password Login", async ({page})=>
{

    //await signup.launchPage()
    await login.invalidUser(dataobj.logindata.login_invaliduser,dataobj.logindata.login_invalidpwd)
    await page.waitForTimeout(5000)
})
})

test.describe("Purchase Tests",async ()=>{

test.beforeEach("Application Login",async ({page})=>{
await login.validUser(dataobj.logindata.login_user,dataobj.logindata.login_password)   
})
//TestCase7:Login with valid credentials-->Select a product-->Add to Cart-->Click Ok on the pop up
test("TC7: Add to Cart", async ({page})=>
{
    
    //await signup.launchPage()
    //await login.validUser(dataobj.login_user,dataobj.login_password)
    await cart.selectProduct(dataobj.cartdata.phone_name)
    await cart.addtocart()
    await page.waitForTimeout(5000)
})

//TestCase8:Login with valid credentials -->Select a product under Phones-->Add to Cart --> Click ok on the pop up --> Add Details-->Purchase
test("TC8: Phone Purchase @phonepurchase", async ({page})=>
{

    //await signup.launchPage()
    //await login.validUser(dataobj.login_user,dataobj.login_password)
    await purchase.PhonePurchase(dataobj.cartdata.phone_name)
    await cart.addtocart()
    await purchase.PurchaseDetails(dataobj.purchasedata.name,dataobj.purchasedata.country,dataobj.purchasedata.city,dataobj.purchasedata.creditcard,dataobj.purchasedata.month,dataobj.purchasedata.year)
    await page.pause()

})

//TestCase9:Login with valid credentials -->Select a product under Monitors-->Add to Cart --> Click ok on the pop up --> Add Details-->Purchase

test("TC9: Monitor Purchase @monitorpurchase", async ({page})=>
{
    //await signup.launchPage()
    //await login.validUser(dataobj.login_user,dataobj.login_password)
    await purchase.MonitorPurchase(dataobj.cartdata.monitor_name)
    await cart.addtocart()
    await purchase.PurchaseDetails(dataobj.purchasedata.name,dataobj.purchasedata.country,dataobj.purchasedata.city,dataobj.purchasedata.creditcard,dataobj.purchasedata.month,dataobj.purchasedata.year)
    await page.pause()

})

})
test.describe("Logout Tests",()=>{
//TestCase10:Login with valid credentials -->logout
test("TC10: Logout", async ({page})=>
{
    
    //await signup.launchPage()
    await login.validUser(dataobj.logindata.login_user,dataobj.logindata.login_password)
    await logout.logout()
    await page.pause()
})
})
