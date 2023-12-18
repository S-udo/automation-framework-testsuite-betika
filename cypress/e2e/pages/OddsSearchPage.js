import BasePage from "./BasePage";
const routes = require('../config/routes');
import { ENDPOINT_PREFIX } from "../config/CONSTANTS";

class OddsSearchPage extends BasePage{

    get soccerBtn() { return cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .sports-list__item > .sports-list__item__label');}
    get filterBtn() { return cy.get('.match-filters > :nth-child(1) > .match-filter__button');}
    get filterTypeBtn() { return cy.get('.match-filter__group__actions > :nth-child(7)');}
    get filterType2Btn() { return cy.get(':nth-child(2) > .match-filter__group__actions > .active');}
    get applyFilterBtn() { return cy.get('.match-filter__apply');}
    get odd1Btn() { return cy.get(':nth-child(8) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(2)'); }
    get odd2Btn() { return cy.get(':nth-child(9) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(1)'); }
    get odd3Btn() { return cy.get(':nth-child(10) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(3)');}
    get boxingBtn() { return cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .sports-list__item');}
    get tOdd1Btn() { return cy.get(':nth-child(8) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(1)');}
    get tOdd2Btn() { return cy.get(':nth-child(9) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(2)');}
    get tOdd3Btn() { return cy.get(':nth-child(10) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(2)');}
    get footBallBtn() { return cy.get(':nth-child(3) > .sports-list__item');}
    get bOdd1Btn() { return cy.get(':nth-child(7) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(2)');}
    get bOdd2Btn() { return cy.get(':nth-child(8) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(1)');}
    get bOdd3Btn() { return cy.get(':nth-child(10) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(1)');}
    get shareSlipBtn() { return cy.get('.share-betslip__closed > .button');}
    get shareBtn() { return cy.get('.modal__container-links');}
    get placeBetBtn() { return cy.get('.betslip__details__button__place');}
    get placeBetSuccessBtn() { return cy.get('.success > .message');}
    

    open() {
        return super.open(ENDPOINT_PREFIX + routes)
    }

    openSoccerOdds() {
        
        this.soccerBtn.click({force: true})
    }

    addOddsToSlip() {
        
        this.filterBtn.click({force: true})
        this.filterTypeBtn.click({force: true})
        this.applyFilterBtn.click({force: true})

        this.odd1Btn.click({force: true})
        this.odd2Btn.click({force: true})
        this.odd3Btn.click({force: true})
        
        this.boxingBtn.click({force: true})
        this.filterBtn.click({force: true})
        this.filterType2Btn.click({force: true})
        this.applyFilterBtn.click({force: true})

        this.tOdd1Btn.click({force: true})
        this.tOdd2Btn.click({force: true})
        this.tOdd3Btn.click({force: true})
        
        this.footBallBtn.click({force: true})
        this.filterBtn.click({force: true})
        this.filterType2Btn.click({force: true})
        this.applyFilterBtn.click({force: true})

        this.bOdd1Btn.click({force: true})
        this.bOdd2Btn.click({force: true})
        this.bOdd3Btn.click({force: true})
    }
    openShareBetSlip() {
        
        this.shareSlipBtn.click({force: true})
    }
    shareBetSlip() {
        
        this.shareBtn()
        
    }

    placeBetSlip() {
        
        this.placeBetBtn.click({force: true})
        
    }

}


export default new OddsSearchPage();

