const{expect}=require('@playwright/test')
class ProductPage{

  constructor(page){
    this.page=page;
    this.addToProductCartButton=page.getByRole("button",{name:"Add to cart"});
    this.shopping_cart_badge=page.locator(".shopping_cart_badge");
    this.shopping_cart_link=page.locator(".shopping_cart_link");
    
  }

   async addToCart(){
    const total=await this.addToProductCartButton.count();
    for(let i=0; i<total; i++){
      await this.addToProductCartButton.first().click();
    }
    const badgeCount=await this.shopping_cart_badge.textContent();
    await expect(this.shopping_cart_badge).toHaveText(badgeCount);
    await this.shopping_cart_link.click();
   }

}
module.exports = { ProductPage };