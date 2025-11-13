import { $ } from '@wdio/globals'
import page from './page'

class LoginPage extends page {

    get userNameField() {
        return $('#userEmail');
    }
    get UserPassField() {
        return $('//input[@id="userPassword"]');

    }
    get submitButton() {
        return $('//input[@id="login"]');

    }

    get logoutUrl() {
        return $('//button[text()=" Sign Out "]');
    }

    siteUrl() {
        return super.siteUrl();
    }

    async siteLogin(uname, pass) {
        await this.userNameField.setValue(uname);
        await this.UserPassField.setValue(pass);
        await this.submitButton.click();

    }

    async siteLogout() {
        await this.logoutUrl.click();
    }

}


export default new LoginPage();