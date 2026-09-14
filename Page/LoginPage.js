 const{Logintestdata}=require('../Data/Logintestdata')
 class LoginPage{

        
    constructor(page){
        this.page=page;
        this.username=page.getByPlaceholder("Username");
        this.password=page.getByPlaceholder("Password");
        this.loginButton=page.getByRole("button",{name:"Login"});
    }

    async doLogin(username=Logintestdata.users.usernames[0]){
      await this.page.goto("/");
       await this.username.fill(username);
       await this.password.fill(Logintestdata.users.password);
       await this.loginButton.click();
       
    }

 }
 module.exports={LoginPage};