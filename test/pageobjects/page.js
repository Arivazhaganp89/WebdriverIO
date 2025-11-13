import {browser} from '@wdio/globals';



export default class page{

    siteUrl(){
      return browser.url("https://rahulshettyacademy.com/client");
    }


}