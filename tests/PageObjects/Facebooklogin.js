class Facebooklogin{

    constructor(page){
        this.page= page;
        this.username = page.locator('input[name="email"]');
        this.password = page.locator('input[name="pass"]');
        this.login = page.getByRole('button', { name: 'Log in' });
    }

    async loginToFacebook(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();
        await this.page.waitForLoadState('networkidle');
        const actualTitle = await this.page.title();
        console.log(actualTitle)
        
    }

    async gotoURL(url){
        await this.page.goto(url);
    }

}
module.exports = {Facebooklogin};