import BasePage from "./BasePage";
const routes = require('../config/routes');
import { ENDPOINT_PREFIX } from "../config/CONSTANTS";

class RegisterPage extends BasePage{

    get telephoneInput() { return cy.get('.input[type="text"]'); }
    get passwordInput() { return cy.get('.input[css="1"]'); }
    get passwordConfirmInput() { return cy.get('.input[xpath="1"]'); }
    get policyCheckbox() { return cy.get('.checkmark[xpath="1"]'); }
    get continueBtn() { return cy.get('.session__form__button__container > .button').should('be.visible').should('be.enabled'); }

    //get inputValidationErr() { return (inputField) => cy.wrap(inputField).next('.text-danger'); }

    get alertMsg() { return cy.get('#account-register .alert'); }

    open() {
        return super.open(ENDPOINT_PREFIX + routes.REGISTRATION_ENDPOINT)
    }


    // enterfirstName(username) {
    //     this.firstnameInput.type(username);
    //     return this;
    // }

    // enterlastName(lastname) {
    //     this.lastnameInput.type(lastname);
    //     return this;
    // }

    enterTelephone(telephone) {
        this.telephoneInput.type(telephone);
        return this;
    }

    enterPassword(password) {
        this.passwordInput.type(password);
        return this;
    }

    enterConfirmPassword(password) {
        this.passwordConfirmInput.type(password);
        return this;
    }

    // enterEmail(email) {
    //     this.emailInput.type(email);
    //     return this;
    // }

    confirmPolicy(value) {

        if(value) {
            this.policyCheckbox.check();
        } else {
            this.policyCheckbox.uncheck();
        }
        return this;
    }

    submitRegistraion() {
        this.continueBtn.click();
    }


}


export default new RegisterPage();

