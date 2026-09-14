class CompletePage{

    constructor(page){
        this.page=page;
        this.BackHomeButton=page.getByRole("button",{name:'Back Home'});
        this.bmburger=page.locator(".bm-burger-button");
        this.logout=page.locator("#logout_sidebar_link");
    }

    async backhome(){
        await this.BackHomeButton.click();
        await this.bmburger.click();
        await this.logout.click();
    }
}
module.exports={CompletePage};