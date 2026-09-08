//const base1 = require('@playwright/test');
import { test as base1 } from '@playwright/test';

interface CustomFixtures {
    datafixture: {
        username: string;
        password: string;
    };
}

export const custombase = base1.extend<CustomFixtures>({
    datafixture: {
        username : "aj" ,
        password : "password"
    }
});

