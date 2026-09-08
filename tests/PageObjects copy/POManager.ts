import {Page, Locator} from '@playwright/test';
import { Facebooklogin } from './Facebooklogin';


export class POManager  {

    page: Page;
    facebooklogin: Facebooklogin;

    
    constructor(page : Page){
        this.page = page;
        this.facebooklogin = new Facebooklogin(this.page);
    }

     
    getFacebooklogin(){
        return this.facebooklogin;
    }
}

module.exports = {POManager};
