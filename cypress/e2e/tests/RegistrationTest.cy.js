/* eslint-disable cypress/no-force */
///<reference types="cypress"/>
//import { Faker } from "@faker-js/faker";
//import BasePage from "./BasePage";
//const routes = require('../config/routes');
//import { ENDPOINT_PREFIX } from "../config/CONSTANTS";

describe("Registartion of new user", () => {
    //Unique credentials are required for registration, so we use faker library to generate test data
    
    it("should register the new user", ()=> {

  
      cy.visit("https://www.betika.com/en-ke/register?next=%2F");

        //cy.contains("Swag Labs").should("be.visible");
    

        //let password = faker.string.numeric({ length: { min: 4, max: 4 } });
        const phone = '0735' + Math.random().toString().substring(2,9)
        cy.fixture("regUserDet.json").then(function (data) {
        cy.get('.input[type="text"]').type(phone, {force: true} );
        cy.get('.session__form > :nth-child(3) > .input__container > .input').type(data.Password, {force: true} );
        cy.get(':nth-child(4) > .input__container > .input').type(data.ConfirmPass, {force: true} ); 
        cy.get('.checkmark').click({force: true} );
        cy.get('.session__form__button__container > .button').should('be.visible').should('be.enabled').click({force: true} );
})
})
})