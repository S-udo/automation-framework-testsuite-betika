import BasePage from "./BasePage";
const routes = require('../config/routes');
import { ENDPOINT_PREFIX } from "../config/CONSTANTS";

class BettingSlipPage extends BasePage{

    get slipItems() { return cy.get('#slips'); }
    get placeBetBtn() { return cy.get(':nth-child(9) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(1)'); }
    
    open() {
        return super.open(ENDPOINT_PREFIX + routes.CART_ENDPOINT)
    }

    performPlaceBet() {
        this.placeBetBtn.click();
    }

    getItemsAddedToSlip() {
        let slipItems = [];

        this.slipItems.each(
            // eslint-disable-next-line no-unused-vars
            ($row, index, $rows) => {

            //within() scopes all subsequent cy commands to within this element. 
            cy.wrap($row).within( () => {

                // eslint-disable-next-line no-unused-vars
                cy.get('.betslip__details__container').each(($col, index, $cols) => {
                        cy.log($col.text())
                        slipItems.push($col.text())
                })
            })
           
        })

        return cy.wrap(slipItems);  //Wrap elements to continue executing commands slips .betslip-content
    }

}


export default new BettingSlipPage();

