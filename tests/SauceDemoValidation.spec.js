const{expect}=require('@playwright/test')
const{test}=require('../Fixture/PageObjectFixture')
const{Logintestdata}=require('../Data/Logintestdata')

for(const username of Logintestdata.users.usernames){
  test(`sauce demo test - ${username}`,async({page,lp})=>{
    await lp.doLogin(username)
    await expect(page).toHaveURL("/inventory.html")
  })
}
for(const username of Logintestdata.users.usernames){
test.only(`validate add to cart sauce demo test-${username}`,async({page,lp,prp,cart,co,cop,cp})=>{
     await lp.doLogin(username)
     await expect(page).toHaveURL("/inventory.html")
     await prp.addToCart();
     await expect(page).toHaveURL("/cart.html")
     const productNames=await cart.verifyCart();
     console.log(productNames);
     expect(productNames[0]).toEqual("Sauce Labs Backpack");
     await cart.clickOnCheckout();
     await co.doCheckOut("Nitin","Singh","110034");
     const alldetailsprice=await cop.finishOrder();
     console.log(alldetailsprice);
     await cop.finishOrderButton();
     
     await cp.backhome();
     await page.waitForTimeout(3000);
})}