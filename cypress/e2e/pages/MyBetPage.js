import BasePage from "./BasePage";
const routes = require('../config/routes');
import { ENDPOINT_PREFIX } from "../config/CONSTANTS";

class MyBetPage extends BasePage{

    get myBetBtn() { return cy.get('.topnav__session__links__item[href="/en-ke/mybets"]'); }
    get betBtn() { return cy.get(':nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div:nth-child(1)'); }
    get betIDBtn() { return cy.get('.betdetails__header__title').should('contain', 'BetID: MG2C6A'); }

    get cashOutBtn() { return cy.get('.betdetail-actions__cashout[css="1"]').should('contain', 'Request Cashout'); }
    get rebetBtn() { return cy.get('.button.account__payments__submit.betdetails__summary__actions__item.button.no-bg.icon.rebet').should('contain', 'rebet'); }
    //get productDescription() { return cy.get('#content .intro'); }

    open() {
        return super.open(ENDPOINT_PREFIX + routes.PRODUCT_DETAILS_ENDPOINT)
    }

    viewBetOptions() {
        this.myBetBtn.click({force: true});
        this.betBtn.click({force: true});
        this.betIDBtn.click({force: true});
    }

    checkCashOut() {
        this.cashOutBtn.click({force: true});
    }

    checkRebet() {
        this.rebetBtn.click({force: true});
    }

}


export default new MyBetPage();

