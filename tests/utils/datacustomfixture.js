const base1 = require('@playwright/test');



exports.custombase = base1.test.extend({
    datafixture: {
        username : "aj" ,
        password : "password"
    }
});

