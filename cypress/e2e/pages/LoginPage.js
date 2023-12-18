import BasePage from "./BasePage";
const routes = require('../config/routes');
import { ENDPOINT_PREFIX } from "../config/CONSTANTS";

class LoginPage extends BasePage{

    //get continueBtn() { return cy.get('a').contains('Continue'); }
    get loginInput() { return cy.get('.input[type="text"]'); }
    get passwordInput() { return cy.get('.input[type="password"]'); }
    get loginBtn() { return cy.get('.session__form__button__container>.login'); }
    get alertMsg() { return cy.get('.message'); }

    open() {
        //cy.visit('?route=account/login');   //Prefixes the baseUrl
        //cy.visit(Cypress.env('URL'));   //loads the URL from env object in cypress.config.js
        return super.open(ENDPOINT_PREFIX + routes.LOGIN_ENDPOINT)
    }

    openRegistrationPage() {
        this.open();
        this.continueBtn.click({force:true}); //openBasePage //openRegistrationPage
    }

    loginWithUI(email, password) {
        this.open();
        this.loginInput.type(email, {force:true})
        this.passwordInput.type(password, {force:true})
        this.loginBtn.click({force:true})
        
    }

}


export default new LoginPage();

