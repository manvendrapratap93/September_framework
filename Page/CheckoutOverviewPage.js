class CheckoutOverviewPage{
    constructor(page){
        this.page=page;
        this.finishButton=page.getByRole('button', { name: 'Finish' });
        this.pricesummary=page.locator(".summary_info");


    }

    async finishOrder(){
        const summaryinformation=await this.pricesummary.allInnerTexts();
        return summaryinformation;
        
    }

    async finishOrderButton(){
       await this.finishButton.click();
    }
}
module.exports = {CheckoutOverviewPage};