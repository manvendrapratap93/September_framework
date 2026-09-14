const{expect}=require('@playwright/test')
const{test:setup}=require('../Fixture/PageObjectFixture')
const{Logintestdata}=require('../Data/Logintestdata')

setup(`auth setup`,async({page,lp})=>{
  await lp.doLogin(Logintestdata.users.usernames[0])
  await expect(page).toHaveURL("/inventory.html")
  await page.context().storageState({path:'auth.user.json'})
})