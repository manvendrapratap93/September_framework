class CartPage{

constructor(page){
    this.page=page;
    this.checkout=page.locator("#checkout");
    this.inventory_item_name=page.locator(".cart_item .inventory_item_name");
}

async verifyCart(){
    const productName=await this.inventory_item_name.allInnerTexts();
    return productName;
}
async clickOnCheckout(){
    await this.checkout.click();
}


}
module.exports = {CartPage};