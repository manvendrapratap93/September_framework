class CheckoutPage{

constructor(page){
    this.page=page;
    this.firstName=page.getByPlaceholder("First Name");
    this.lastName=page.getByPlaceholder("Last Name");
    this.postelCode=page.getByPlaceholder("Zip/Postal Code");
    this.continueButton=page.getByRole('button', { name: 'Continue' });
}

   async doCheckOut(firstName,lastName,postal){
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postelCode.fill(postal);
    await this.continueButton.click();
   }
}
module.exports = {CheckoutPage};