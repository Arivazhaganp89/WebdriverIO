import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page';

describe('Login page test cases', () => {
    it('should login with valid credentials', async () => {

        await loginPage.siteUrl();
        await loginPage.siteLogin('arivo1989@gmail.com', 'Welcome1@');
        await expect(browser).toHaveUrl("https://rahulshettyacademy.com/client/#/dashboard/dash");
        await browser.pause(3000);
        await loginPage.siteLogout();

    })
})