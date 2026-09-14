const{test: base}=require('@playwright/test');
const{LoginPage}=require('../Page/LoginPage');
const{ProductPage}=require('../Page/ProductPage');
const{CartPage}=require('../Page/CartPage');
const{CheckoutPage}=require('../Page/CheckoutPage');
const{CheckoutOverviewPage}=require('../Page/CheckoutOverviewPage');
const{CompletePage}=require('../Page/CompletePage');

const test = base.extend({

  lp:async({page},use)=>{
     await use(new LoginPage(page));
  },
  prp:async({page},use)=>{
    await use(new ProductPage(page));
  },
 cart:async({page},use)=>{
    await use(new CartPage(page));
 },
 co:async({page},use)=>{
    await use(new CheckoutPage(page));
 },

 cop:async({page},use)=>{
    await use(new CheckoutOverviewPage(page));
 },
 cp:async({page},use)=>{
    await use(new CompletePage(page));
 }
});
module.exports={test};
