describe('Login page test cases', () =>{
    it('should login with valid credentials',async()=>{

        await browser.url('https://rahulshettyacademy.com/client');
        await $ ('#userEmail').setValue('arivo1989@gmail.com');
        await $ ('//input[@id="userPassword"]').setValue('Welcome1@')
        await $ ('//input[@id="login"]').click();
        await expect(browser).toHaveUrl("https://rahulshettyacademy.com/client/#/dashboard/dash");
        await browser.pause(3000);
        await $ ('//button[text()=" Sign Out "]').click();
       // await browser.saveScreenshot('./reports/html-reports/screenshots/error.png');


    })





})