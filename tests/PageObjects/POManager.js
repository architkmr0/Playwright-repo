const { Facebooklogin } = require("./Facebooklogin");

class POManager  {

    constructor(page){
        this.page = page;
        this.facebooklogin = new Facebooklogin(this.page);
    }

     
    getFacebooklogin(){
        return this.facebooklogin;
    }
}

module.exports = {POManager};
